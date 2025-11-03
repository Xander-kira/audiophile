"use client";
import { useState } from "react";
import { useCart } from "@/components/cart/CartContext";
import { useRouter } from "next/navigation";
import { useAction, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Modal from "@/components/ui/Modal";
import { Id } from "@/convex/_generated/dataModel";
import { z } from "zod";

const CheckoutSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone"),
  address: z.string().min(5, "Enter a valid address"),
  city: z.string().min(2, "Enter a valid city"),
  country: z.string().min(2, "Enter a valid country"),
});

type Form = {
  name: string; email: string; phone: string;
  address: string; city: string; country: string;
};

type OrderResult = {
  orderId: string;
  grandTotal: number;
};

export default function CheckoutPage() {
  const router = useRouter();
  const { items, total, clear } = useCart();
  const [f, setF] = useState<Form>({ name:"", email:"", phone:"", address:"", city:"", country:"" });
  const [err, setErr] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<Id<"orders"> | null>(null);
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);

  const placeOrder = useAction(api.orders.placeOrder);
  
  // Fetch order when we have an id
  const order = useQuery(
    api.orders.getOrderById,
    orderId ? { id: orderId } : "skip"
  );

  const update = (k: keyof Form, v: string) => setF(s => ({ ...s, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (busy) return; // prevent duplicate click
    
    const parsed = CheckoutSchema.safeParse(f);
    if (!parsed.success) {
      setErr(parsed.error.issues[0].message);
      return;
    }
    
    if (items.length === 0) {
      setErr("Your cart is empty.");
      return;
    }

    setErr(null);
    setBusy(true);
    try {
      const res = await placeOrder({
        customer: f,
        items: items.map(i => ({ slug: i.slug, name: i.name, price: i.price, qty: i.qty })),
      }) as OrderResult;
      
      setOrderId(res.orderId as Id<"orders">);
      setOpen(true);
    } catch (e: unknown) {
      setErr(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
  };

  const handleCloseModal = () => {
    clear(); // Clear cart on modal close
    setOpen(false);
    router.push("/");
  };

  return (
    <main className="mx-auto max-w-[900px] px-6 py-10">
      <h1 className="text-2xl font-bold uppercase text-black">Checkout</h1>

      <form onSubmit={submit} className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="md:col-span-2">{err && <p className="rounded bg-red-50 p-3 text-sm text-red-700">{err}</p>}</div>

        <Field label="Name"    value={f.name}    onChange={v => update("name", v)} />
        <Field label="Email"   type="email" value={f.email}   onChange={v => update("email", v)} />
        <Field label="Phone"   value={f.phone}   onChange={v => update("phone", v)} />
        <Field label="Address" value={f.address} onChange={v => update("address", v)} className="md:col-span-2" />
        <Field label="City"    value={f.city}    onChange={v => update("city", v)} />
        <Field label="Country" value={f.country} onChange={v => update("country", v)} />

        <div className="md:col-span-2">
          <button 
            disabled={busy} 
            className={`w-full bg-[#D87D4A] text-white py-3 uppercase tracking-widest hover:bg-[#FBAF85] ${busy ? "opacity-60 cursor-not-allowed" : ""}`}
          >
            {busy ? "Placing order..." : "Place Order"}
          </button>
        </div>
      </form>

      <aside className="mt-10 rounded-lg bg-[#f8f8f8] p-6">
        <h2 className="font-bold uppercase tracking-widest text-black">Summary</h2>
        <ul className="mt-4 space-y-2">
          {items.map(i => (
            <li key={i.slug} className="flex items-center justify-between text-sm text-black">
              <span>{i.name} × {i.qty}</span>
              <span>₦{(i.price * i.qty).toLocaleString()}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-between font-semibold text-black">
          <span>Total</span>
          <span>₦{total.toLocaleString()}</span>
        </div>
      </aside>

      <Modal open={open} onClose={handleCloseModal}>
        <h3 className="text-xl font-bold text-black">Thank you for your order!</h3>
        <p className="mt-2 text-sm text-neutral-600">
          A confirmation email has been sent. Below is your summary.
        </p>

        {!order ? (
          <p className="mt-4 text-black">Loading order…</p>
        ) : (
          <div className="mt-4 space-y-3">
            <div className="rounded bg-neutral-100 p-3">
              {order.items?.slice(0, 1).map((it) => (
                <div key={it.slug} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-black">{it.name}</p>
                    <p className="text-sm text-neutral-500">x{it.qty}</p>
                  </div>
                  <p className="font-semibold text-black">₦{(it.price * it.qty).toLocaleString()}</p>
                </div>
              ))}
              {order.items && order.items.length > 1 && (
                <p className="mt-2 text-xs text-neutral-500">
                  and {order.items.length - 1} other item(s)
                </p>
              )}
            </div>

            <div className="rounded bg-black p-3 text-white">
              <p className="text-xs uppercase text-white/70">Grand total</p>
              <p className="text-lg font-bold">
                ₦{Number(order.grandTotal).toLocaleString()}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </main>
  );
}

function Field({
  label, value, onChange, type = "text", className = "",
}: { label: string; value: string; onChange: (v: string) => void; type?: string; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs uppercase tracking-widest text-black/70">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded border border-black/10 bg-white px-3 py-2 outline-none focus:border-[#D87D4A]"
        required
      />
    </label>
  );
}
