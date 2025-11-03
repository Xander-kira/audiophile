import { PRODUCTS } from "@/lib/data/products";
import { notFound } from "next/navigation";
import ProductHero from "@/components/products/ProductHero";
import FeaturesBox from "@/components/products/FeaturesBox";
import ProductGallery from "@/components/products/ProductGallery";
import Related from "@/components/products/Related";
import CategoryRow from "@/components/home/CategoryRow";
import About from "@/components/home/About";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PRODUCTS.find(p => p.slug === slug);
  if (!product) return notFound();

  return (
    <div className="bg-white">
      <main className="mx-auto max-w-[1110px] px-6 py-12 md:py-20 space-y-20 md:space-y-24">
        <ProductHero product={product} />
        <FeaturesBox product={product} />
        <ProductGallery product={product} />
        <Related slugs={product.related} />
      </main>
      
      <div className="mt-20 md:mt-24">
        <CategoryRow />
      </div>
      
      <div className="mt-20 md:mt-24">
        <About />
      </div>
    </div>
  );
}
