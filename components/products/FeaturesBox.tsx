import type { Product } from "@/lib/data/products";

export default function FeaturesBox({ product }: { product: Product }) {
  return (
    <section className="grid gap-12 md:grid-cols-[2fr_1fr] md:gap-16">
      <div>
        <h2 className="uppercase text-2xl font-bold text-black">Features</h2>
        <p className="mt-6 whitespace-pre-line text-black/70">{product.features}</p>
      </div>

      <div>
        <h2 className="uppercase text-2xl font-bold text-black">In the Box</h2>
        <ul className="mt-6 space-y-2">
          {product.includes.map((inc) => (
            <li key={inc.item} className="text-black/70">
              <span className="text-[#D87D4A] font-bold mr-4">{inc.qty}x</span>
              {inc.item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
