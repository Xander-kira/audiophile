import Image from "next/image";
import AddToCart from "./AddToCart";
import type { Product } from "@/lib/data/products";

export default function ProductHero({ product }: { product: Product }) {
  return (
    <section className="grid gap-8 md:grid-cols-2 md:items-center">
      <div className="relative h-[280px] md:h-[360px] rounded-lg overflow-hidden bg-[#f1f1f1]">
        <Image src={product.images.desktop} alt={product.name} fill className="object-contain" />
      </div>

      <div>
        {product.isNew && (
          <p className="tracking-[10px] uppercase text-[#D87D4A] mb-4">New product</p>
        )}
        <h1 className="uppercase font-bold text-3xl md:text-4xl leading-tight text-black">{product.name}</h1>
        <p className="mt-6 text-black/70">{product.description}</p>
        <p className="mt-6 font-bold tracking-wider text-black">₦{product.price.toLocaleString()}</p>
        <div className="mt-6">
          <AddToCart product={product} />
        </div>
      </div>
    </section>
  );
}
