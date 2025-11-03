import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { PRODUCTS } from "@/lib/data/products";

export default function Related({ slugs }: { slugs: string[] }) {
  const items = slugs
    .map(s => PRODUCTS.find(p => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  return (
    <section className="mt-24">
      <h2 className="text-center uppercase text-2xl font-bold text-black">You may also like</h2>
      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {items.map((p) => (
          <article key={p.slug} className="text-center">
            <div className="relative h-40 rounded-lg overflow-hidden bg-[#f1f1f1]">
              <Image src={p.images.desktop} alt={p.name} fill className="object-contain" />
            </div>
            <h3 className="mt-6 uppercase font-bold text-lg text-black">{p.name}</h3>
            <div className="mt-6">
              <Button as="link" href={`/${p.slug}`} variant="primary">See Product</Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
