"use client";
import { useState } from "react";
import Quantity from "@/components/ui/Quantity";
import Button from "@/components/ui/Button";
import { useCart } from "@/components/cart/CartContext";
import type { Product } from "@/lib/data/products";

export default function AddToCart({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const { add } = useCart();

  return (
    <div className="flex items-center gap-4">
      <Quantity initial={1} onChange={setQty} />
      <Button variant="primary" onClick={() => add(product, qty)}>Add to cart</Button>
    </div>
  );
}
