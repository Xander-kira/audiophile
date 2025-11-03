import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { fetchQuery } from "convex/nextjs";

export default async function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const order = await fetchQuery(api.orders.getById, { orderId: id as Id<"orders"> });

  if (!order) {
    return (
      <main className="mx-auto max-w-[900px] px-6 py-16">
        <h1 className="text-xl font-semibold text-black">Order not found</h1>
        <p className="text-sm text-black/60 mt-2">
          The order you requested doesn&apos;t exist.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-[900px] px-6 py-16">
      <h1 className="text-2xl font-bold uppercase text-black">Order {String(id)}</h1>
      <p className="text-sm text-black/60 mt-2">
        {order.name} — {order.address}, {order.city}, {order.country}
      </p>

      <section className="mt-8">
        <h2 className="font-semibold text-black">Items</h2>
        <ul className="mt-3 divide-y divide-black/10">
          {order.items.map((i: { slug: string; name: string; price: number; qty: number }) => (
            <li key={`${i.slug}-${i.qty}-${i.price}`} className="py-3 flex items-center justify-between text-sm">
              <span className="text-black/70">
                {i.name} <span className="text-black/40">x{i.qty}</span>
              </span>
              <span className="font-medium text-black">₦{(i.price * i.qty).toLocaleString()}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 space-y-1 text-sm">
          <div className="flex justify-between">
            <span className="text-black/60">Subtotal</span>
            <span className="text-black">₦{order.subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black/60">Tax</span>
            <span className="text-black">₦{order.tax.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black/60">Shipping</span>
            <span className="text-black">₦{order.shipping.toLocaleString()}</span>
          </div>
          <div className="flex justify-between font-semibold pt-2 border-t border-black/10 mt-2">
            <span className="text-black">Total</span>
            <span className="text-black">₦{order.grandTotal.toLocaleString()}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
