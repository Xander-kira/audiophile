"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/cart/CartContext";

export default function MiniCart({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, total, remove, setQty, clear } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white p-6 overflow-y-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-wide uppercase text-black">Cart ({items.length})</h2>
          {items.length > 0 && (
            <button className="text-sm text-black/60 hover:text-black" onClick={clear}>
              Remove all
            </button>
          )}
        </div>

        {/* lines */}
        <div className="mt-6 space-y-4">
          {items.length === 0 ? (
            <p className="text-black/60">Your cart is empty.</p>
          ) : (
            items.map((it) => (
              <div key={it.slug} className="flex items-center gap-3">
                <div className="relative h-14 w-14 overflow-hidden rounded bg-[#f1f1f1]">
                  <Image src={it.thumb || "/assets/shared/placeholder.jpg"} alt={it.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold leading-tight text-black">{it.name}</p>
                  <p className="text-xs text-black/60">₦{(it.price).toLocaleString()}</p>
                </div>
                <div className="flex items-center bg-[#f1f1f1]">
                  <button className="px-2 py-1 text-black" onClick={() => setQty(it.slug, Math.max(1, it.qty - 1))}>-</button>
                  <span className="w-8 text-center text-sm text-black">{it.qty}</span>
                  <button className="px-2 py-1 text-black" onClick={() => setQty(it.slug, it.qty + 1)}>+</button>
                </div>
                <button className="ml-2 text-xs text-black/50 hover:text-black" onClick={() => remove(it.slug)}>
                  remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* totals + actions */}
        <div className="mt-6 border-t pt-6">
          <div className="flex items-center justify-between">
            <span className="text-sm uppercase text-black/60 tracking-widest">Total</span>
            <span className="font-bold text-black">₦{total.toLocaleString()}</span>
          </div>

          <div className="mt-6 space-y-3">
            <Link
              href="/cart"
              onClick={onClose}
              className="block w-full text-center bg-black text-white py-3 uppercase tracking-widest hover:bg-[#4C4C4C]"
            >
              View cart
            </Link>
            <Link
              href="/checkout"
              onClick={onClose}
              className="block w-full text-center bg-[#D87D4A] text-white py-3 uppercase tracking-widest hover:bg-[#FBAF85]"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
