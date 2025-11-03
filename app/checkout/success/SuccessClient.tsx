"use client";

import { useEffect, useMemo } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

export default function SuccessClient() {
  const router = useRouter();
  const params = useSearchParams();
  const orderParam = params.get("order");

  // guard: if no id, kick them home
  useEffect(() => {
    if (!orderParam) router.replace("/");
  }, [orderParam, router]);

  // Convert to Convex document id shape
  const orderId = useMemo(() => orderParam as Id<"orders">, [orderParam]);

  const order = useQuery(api.orders.getById, orderId ? { orderId } : "skip");

  // clear cart one time after landing here
  useEffect(() => {
    if (order && typeof window !== "undefined") {
      // clear cart from localStorage
      localStorage.removeItem("cart");
    }
  }, [order]);

  if (!orderParam) return null;

  if (order === undefined) {
    return (
      <div className="min-h-[60vh] grid place-items-center">
        <p className="text-sm text-black/60">Loading your order…</p>
      </div>
    );
  }

  if (order === null) {
    return (
      <div className="min-h-[60vh] grid place-items-center">
        <div className="text-center">
          <h1 className="text-xl font-semibold text-black">Order not found</h1>
          <p className="text-sm text-black/60 mt-2">
            The order id you followed doesn&apos;t exist anymore.
          </p>
          <Link href="/" className="inline-block mt-6 border border-black px-4 py-2 text-black hover:bg-black hover:text-white">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  // order shape assumed from earlier: name, email, items[], subtotal, tax, shipping, grandTotal
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="rounded-lg border border-black/10 p-6 bg-white">
        <h1 className="text-2xl font-semibold text-black">Thank you for your order!</h1>
        <p className="text-sm text-black/60 mt-1">
          A confirmation email has been sent to <span className="font-medium text-black">{order.email}</span>.
        </p>

        <div className="mt-6">
          <h2 className="text-lg font-medium text-black">Order Summary</h2>
          <ul className="mt-3 space-y-2">
            {order.items?.map((it: { slug: string; name: string; price: number; qty: number }) => (
              <li
                key={`${it.slug}-${it.price}-${it.qty}`}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-black/70">
                  {it.name} <span className="text-black/40">x{it.qty}</span>
                </span>
                <span className="text-black font-medium">
                  ₦{(it.price * it.qty).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-black/60">Subtotal</span>
              <span className="font-medium text-black">₦{order.subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-black/60">Tax (VAT)</span>
              <span className="font-medium text-black">₦{order.tax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-black/60">Shipping</span>
              <span className="font-medium text-black">₦{order.shipping.toLocaleString()}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-black/10 mt-2">
              <span className="font-semibold text-black">Grand Total</span>
              <span className="font-semibold text-black">
                ₦{order.grandTotal.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <Link href="/" className="border border-black px-4 py-2 text-black hover:bg-black hover:text-white uppercase tracking-widest text-sm">
            Back to Home
          </Link>
          <Link href="/headphones" className="bg-[#D87D4A] text-white px-4 py-2 hover:bg-[#FBAF85] uppercase tracking-widest text-sm">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
