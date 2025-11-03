// app/speakers/page.tsx
import { PRODUCTS } from "@/lib/data/products";
import ProductCard from "@/components/cards/ProductCard";

export default function SpeakersPage() {
  const items = PRODUCTS.filter((p) => p.category === "speakers");

  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <h1 className="mb-16 text-center text-3xl font-bold uppercase text-black">Speakers</h1>
      <div className="space-y-28">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </main>
  );
}
