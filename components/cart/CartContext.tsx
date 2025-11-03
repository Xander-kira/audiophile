"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/lib/data/products";

export type CartItem = { slug: string; name: string; price: number; qty: number; thumb?: string };

type CartCtx = {
  items: CartItem[];
  add: (p: Product, qty: number) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  total: number;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const raw = localStorage.getItem("cart");
      return raw ? JSON.parse(raw) : [];
    }
    return [];
  });

  // save localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("cart", JSON.stringify(items));
    }
  }, [items]);

  const api: CartCtx = useMemo(() => ({
    items,
    add: (p, qty) => {
      setItems(prev => {
        const found = prev.find(i => i.slug === p.slug);
        if (found) return prev.map(i => i.slug === p.slug ? { ...i, qty: Math.min(10, i.qty + qty) } : i);
        return [...prev, { slug: p.slug, name: p.name, price: p.price, qty: Math.min(10, qty), thumb: p.images.mobile || p.images.desktop }];
      });
    },
    remove: slug => setItems(prev => prev.filter(i => i.slug !== slug)),
    setQty: (slug, qty) => setItems(prev => prev.map(i => i.slug === slug ? { ...i, qty: Math.min(10, Math.max(1, qty)) } : i)),
    clear: () => setItems([]),
    total: items.reduce((sum, i) => sum + i.price * i.qty, 0),
  }), [items]);

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
