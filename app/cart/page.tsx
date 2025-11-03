"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/cart/CartContext";

export default function CartPage() {
  const { items, total, remove, setQty, clear } = useCart();

  return (
    <main className="mx-auto max-w-[1110px] px-6 py-10">
      <h1 className="text-2xl font-bold uppercase text-black">Your Cart</h1>

      {items.length === 0 ? (
        <p className="mt-6 text-black/60">Your cart is empty.</p>
      ) : (
        <>
          <div className="mt-6 space-y-4">
            {items.map((it) => (
              <div key={it.slug} className="flex items-center gap-3">
                <div className="relative h-16 w-16 overflow-hidden rounded bg-[#f1f1f1]">
                  <Image src={it.thumb || "/assets/shared/placeholder.jpg"} alt={it.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <p className="font-medium leading-tight text-black">{it.name}</p>
                  <p className="text-sm text-black/60">₦{it.price.toLocaleString()}</p>
                </div>
                <div className="flex items-center bg-[#f1f1f1]">
                  <button className="px-2 py-1 text-black" onClick={() => setQty(it.slug, Math.max(1, it.qty - 1))}>-</button>
                  <span className="w-10 text-center text-black">{it.qty}</span>
                  <button className="px-2 py-1 text-black" onClick={() => setQty(it.slug, it.qty + 1)}>+</button>
                </div>
                <button className="ml-2 text-xs text-black/50 hover:text-black" onClick={() => remove(it.slug)}>
                  remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <button className="text-sm text-black/60 hover:text-black" onClick={clear}>
              Remove all
            </button>
            <div className="text-right">
              <p className="text-sm text-black/60 uppercase tracking-widest">Total</p>
              <p className="text-xl font-bold text-black">₦{total.toLocaleString()}</p>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/checkout" className="inline-block bg-[#D87D4A] text-white px-6 py-3 uppercase tracking-widest hover:bg-[#FBAF85]">
              Go to Checkout
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
