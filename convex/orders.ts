// convex/orders.ts
import { mutation, query, action } from "./_generated/server";
import { v } from "convex/values";
import { Resend } from "resend";
import { api } from "./_generated/api";
import { renderOrderEmail } from "./_utils/email";

const Item = v.object({
  slug: v.string(),
  name: v.string(),
  price: v.number(),
  qty: v.number(),
});

const Customer = v.object({
  name: v.string(),
  email: v.string(),
  phone: v.string(),
  address: v.string(),
  city: v.string(),
  country: v.string(),
});

export const createOrder = mutation({
  args: {
    customer: Customer,
    items: v.array(Item),
    subtotal: v.number(),
    shipping: v.number(),
    tax: v.number(),
    grandTotal: v.number(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("orders", {
      createdAt: Date.now(),
      
      email: args.customer.email,
      name: args.customer.name,
      phone: args.customer.phone,
      address: args.customer.address,
      city: args.customer.city,
      country: args.customer.country,

      items: args.items.map(i => ({
        slug: i.slug,
        name: i.name,
        price: i.price,
        qty: i.qty,
      })),

      subtotal: args.subtotal,
      tax: args.tax,
      shipping: args.shipping,
      grandTotal: args.grandTotal,

      status: "placed",
    });
    return id;
  },
});

export const getOrder = query({
  args: { id: v.id("orders") },
  handler: async (ctx, { id }) => {
    return ctx.db.get(id);
  },
});

export const listByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, { email }) => {
    return await ctx.db
      .query("orders")
      .withIndex("by_email", q => q.eq("email", email))
      .order("desc")
      .collect();
  },
});

export const getById = query({
  args: { orderId: v.id("orders") },
  handler: async (ctx, { orderId }) => {
    const order = await ctx.db.get(orderId);
    return order; // can be null if not found
  },
});

export const getOrderById = query({
  args: { id: v.id("orders") },
  handler: async (ctx, args) => {
    const order = await ctx.db.get(args.id);
    return order;
  },
});

export const placeOrder = action({
  args: {
    customer: Customer,
    items: v.array(Item),
  },
  handler: async (ctx, { customer, items }): Promise<{ orderId: string; grandTotal: number }> => {
    // Simple totals (adjust to your rules)
    const subtotal = items.reduce((s: number, i) => s + i.price * i.qty, 0);
    const shipping = subtotal > 0 ? 5000 : 0; // flat example
    const tax = Math.round(subtotal * 0.075); // 7.5% example
    const grandTotal = subtotal + shipping + tax;

    // 1) Save order
    const orderId = await ctx.runMutation(api.orders.createOrder, {
      customer,
      items,
      subtotal,
      shipping,
      tax,
      grandTotal,
    });

    // 2) Email
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not set in environment variables");
    }
    
    const resend = new Resend(apiKey);
    const from = process.env.RESEND_FROM || "Audiophile <onboarding@resend.dev>";
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    
    const html = renderOrderEmail({
      orderId: String(orderId),
      customer,
      items,
      shipping,
      tax,
      grandTotal,
      siteUrl,
    });

    await resend.emails.send({
      from,
      to: customer.email,
      subject: `Your Audiophile order ${String(orderId)} is confirmed`,
      html,
    });

    return { orderId: String(orderId), grandTotal };
  },
});
