// components/cards/ProductListCard.tsx
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function ProductListCard({
  slug,
  name,
  description,
  isNew,
  image,
  flip = false, // when true: image right, text left
}: {
  slug: string;
  name: string;
  description: string;
  isNew?: boolean;
  image: string;
  flip?: boolean;
}) {
  return (
    <article className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
      {/* IMAGE */}
      <div className={`relative h-[320px] md:h-[400px] rounded-lg overflow-hidden bg-[#F1F1F1] ${flip ? "md:order-2" : ""}`}>
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-contain p-8 md:p-12" 
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* COPY */}
      <div className={`${flip ? "md:order-1" : ""} text-center md:text-left text-black`}>
        {isNew && (
          <p className="uppercase tracking-[0.5em] text-[#D87D4A] text-sm mb-4">
            New Product
          </p>
        )}
        <h2 className="text-3xl md:text-4xl font-bold uppercase leading-tight text-black">{name}</h2>
        <p className="mt-6 text-black/70 max-w-[520px] mx-auto md:mx-0">{description}</p>
        <div className="mt-8">
          <Button as="link" href={`/${slug}`} variant="primary">
            See Product
          </Button>
        </div>
      </div>
    </article>
  );
}
