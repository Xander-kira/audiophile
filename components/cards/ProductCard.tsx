import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/data/products";

type ProductWithImages = Product & { images?: { desktop?: string } };

export default function ProductCard({ product }: { product: Product }) {
  const img =
    (product as ProductWithImages).images?.desktop ||
    product.image || // your legacy field
    "/assets/shared/placeholder.jpg";

  return (
    <article className="grid items-center gap-8 md:grid-cols-2">
      {/* Image side */}
      <div className="relative h-[320px] w-full overflow-hidden rounded-lg bg-[#f1f1f1]">
        <Image
          src={img}
          alt={product.name}
          fill
          className="object-contain"
          sizes="(min-width: 768px) 50vw, 100vw"
          priority={false}
        />
      </div>

      {/* Copy side */}
      <div className="text-center md:text-left">
        {product.isNew && (
          <p className="mb-3 text-sm uppercase tracking-[0.5em] text-[#D87D4A]">New Product</p>
        )}
        <h2 className="text-2xl font-bold uppercase leading-tight md:text-3xl">
          {product.name}
        </h2>
        <p className="mt-4 text-black/70">{product.description}</p>

        <Link
          href={`/${product.slug}`} // we’re using root-level slug routes
          className="mt-8 inline-block bg-[#D87D4A] px-8 py-3 text-sm uppercase tracking-widest text-white hover:bg-[#FBAF85]"
        >
          See Product
        </Link>
      </div>
    </article>
  );
}
