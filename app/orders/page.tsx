"use client";

import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Link from "next/link";

export default function OrdersListPage() {
  const [email, setEmail] = useState("");
  const data = useQuery(
    api.orders.listByEmail,
    email ? { email } : "skip"
  );

  return (
    <main className="mx-auto max-w-[900px] px-6 py-16">
      <h1 className="text-2xl font-bold uppercase text-black">My Orders</h1>

      <label className="block mt-6">
        <span className="text-xs uppercase tracking-widest text-black/60">Email</span>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="name@example.com"
          className="mt-2 w-full rounded border border-black/10 bg-white px-3 py-2 outline-none focus:border-[#D87D4A] text-black"
        />
      </label>

      {!email ? (
        <p className="mt-6 text-sm text-black/60">Enter your email to see orders.</p>
      ) : data === undefined ? (
        <p className="mt-6 text-sm text-black/60">Loading…</p>
      ) : data.length === 0 ? (
        <p className="mt-6 text-sm text-black/60">No orders found for {email}.</p>
      ) : (
        <ul className="mt-6 divide-y divide-black/10">
          {data.map((o: { _id: string; createdAt: number; grandTotal: number }) => (
            <li key={o._id} className="py-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-black">Order {String(o._id)}</p>
                <p className="text-sm text-black/60">
                  {new Date(o.createdAt).toLocaleString()} — ₦{o.grandTotal.toLocaleString()}
                </p>
              </div>
              <Link href={`/orders/${o._id}`} className="text-sm text-[#D87D4A] hover:text-[#FBAF85] underline">
                View
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
