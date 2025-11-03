import Image from "next/image";
import type { Product } from "@/lib/data/products";

export default function ProductGallery({ product }: { product: Product }) {
  return (
    <section className="grid gap-5 md:grid-cols-[1fr_1.43fr] md:gap-8 max-w-[1110px] mx-auto">
      {/* Left column - 2 stacked images */}
      <div className="grid gap-5 md:gap-8">
        <div className="relative w-full aspect-[445/280] rounded-lg overflow-hidden bg-[#f1f1f1]">
          <Image 
            src={product.gallery.first} 
            alt="Product gallery image 1" 
            fill 
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 445px"
            priority
          />
        </div>
        <div className="relative w-full aspect-[445/280] rounded-lg overflow-hidden bg-[#f1f1f1]">
          <Image 
            src={product.gallery.second} 
            alt="Product gallery image 2" 
            fill 
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 445px"
          />
        </div>
      </div>
      
      {/* Right column - 1 large image */}
      <div className="relative w-full aspect-[635/592] rounded-lg overflow-hidden bg-[#f1f1f1]">
        <Image 
          src={product.gallery.third} 
          alt="Product gallery image 3" 
          fill 
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 635px"
          priority
        />
      </div>
    </section>
  );
}
