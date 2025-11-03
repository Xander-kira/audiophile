import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { fetchQuery } from "convex/nextjs";
import Link from "next/link";

export default async function OrderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  const order = await fetchQuery(api.orders.getOrderById, {
    id: id as Id<"orders">,
  });

  if (!order) {
    return (
      <main className="mx-auto max-w-3xl p-6">
        <div className="p-8 text-center">
          <h1 className="text-2xl font-bold text-black">Order not found</h1>
          <Link
            href="/"
            className="mt-6 inline-block rounded bg-black px-4 py-2 text-white hover:bg-black/80"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold text-black">Thank you for your order!</h1>
      <p className="mt-2 text-neutral-600">Order ID: {id}</p>

      <div className="mt-6 space-y-3 rounded-lg border border-neutral-200 p-4">
        <h2 className="font-bold uppercase tracking-widest text-black">Order Items</h2>
        {order.items?.map((it) => (
          <div
            key={it.slug}
            className="flex items-center justify-between border-b border-neutral-100 pb-3 last:border-0"
          >
            <div>
              <p className="font-medium text-black">{it.name}</p>
              <p className="text-sm text-neutral-500">x{it.qty}</p>
            </div>
            <p className="font-semibold text-black">
              ₦{(it.price * it.qty).toLocaleString()}
            </p>
          </div>
        ))}

        <div className="mt-4 space-y-2 border-t border-neutral-200 pt-4">
          <div className="flex items-center justify-between text-sm text-black">
            <span>Subtotal</span>
            <span>₦{Number(order.subtotal).toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-black">
            <span>Shipping</span>
            <span>₦{Number(order.shipping).toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-black">
            <span>Tax</span>
            <span>₦{Number(order.tax).toLocaleString()}</span>
          </div>
          <div className="mt-2 flex items-center justify-between border-t border-neutral-200 pt-2 text-lg font-bold text-black">
            <span>Grand Total</span>
            <span>₦{Number(order.grandTotal).toLocaleString()}</span>
          </div>
        </div>

        <div className="mt-6 rounded bg-neutral-50 p-4">
          <h3 className="font-bold uppercase tracking-widest text-black text-sm">
            Shipping Address
          </h3>
          <div className="mt-2 text-sm text-neutral-700">
            <p className="font-medium">{order.name}</p>
            <p>{order.address}</p>
            <p>
              {order.city}, {order.country}
            </p>
            <p className="mt-1">Phone: {order.phone}</p>
            <p>Email: {order.email}</p>
          </div>
        </div>
      </div>

      <Link
        href="/"
        className="mt-6 inline-block rounded bg-[#D87D4A] px-6 py-3 text-white hover:bg-[#FBAF85] uppercase tracking-widest"
      >
        Back to Home
      </Link>
    </main>
  );
}
