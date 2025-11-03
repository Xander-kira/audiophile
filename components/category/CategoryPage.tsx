// components/category/CategoryPage.tsx
import { PRODUCTS } from "@/lib/data/products";
import ProductListCard from "@/components/cards/ProductListCard";
import CategoryRow from "@/components/home/CategoryRow";
import AboutTeaser from "@/components/ui/AboutTeaser";

export default function CategoryPage({ category, title }: { category: "headphones" | "speakers" | "earphones"; title: string; }) {
  const items = PRODUCTS.filter(p => p.category === category);

  return (
    <div className="bg-white text-black">
      {/* Top banner */}
      <section className="bg-[#101010]">
        <div className="mx-auto max-w-[1110px] px-6 py-16 md:py-20">
          <h1 className="text-white text-3xl md:text-4xl font-bold uppercase text-center tracking-wider">{title}</h1>
        </div>
      </section>

      {/* List */}
      <section className="mx-auto max-w-[1110px] px-6 py-16 md:py-20 space-y-16 md:space-y-24">
        {items.map((p, i) => (
          <ProductListCard
            key={p.slug}
            slug={p.slug}
            name={p.name}
            description={p.description}
            isNew={p.isNew}
            image={p.image}
            flip={i % 2 === 1}
          />
        ))}
      </section>

      {/* Reuse the category tiles block at bottom, like Figma */}
      <div className="mt-10">
        <CategoryRow />
        <AboutTeaser />
      </div>
    </div>
  );
}
