// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  orders: defineTable({
    // core identity / timestamps
    createdAt: v.float64(),

    // customer info
    email: v.string(),
    name: v.string(),
    phone: v.string(),
    address: v.string(),
    city: v.string(),
    country: v.string(),

    // items in the order
    items: v.array(
      v.object({
        slug: v.string(),
        name: v.string(),
        price: v.float64(),
        qty: v.float64(),
      })
    ),

    // money fields
    subtotal: v.float64(),
    tax: v.float64(),
    shipping: v.float64(),
    grandTotal: v.float64(),

    // legacy/compat (so old code or old docs with `total` won’t crash)
    total: v.optional(v.float64()),

    // order status
    status: v.string(), // e.g. "placed" | "paid" | "shipped"
  })
    .index("by_email", ["email"])
    .index("by_createdAt", ["createdAt"]),
});
