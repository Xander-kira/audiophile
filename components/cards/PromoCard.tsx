// components/cards/PromoCard.tsx
import Image from "next/image";
import Button from "@/components/ui/Button";

type Variant = "zx9" | "zx7" | "yx1";

export default function PromoCard({
  variant,
  title,
  copy,
  image,
  href,
}: {
  variant: Variant;
  title: string;
  copy?: string;
  image: string; // path in /public/assets/home/...
  href: string;
}) {
  if (variant === "zx9") {
    // Big orange card
    return (
      <div className="relative overflow-visible rounded-lg bg-[#D87D4A] text-white">
        {/* SVG Circle Pattern */}
        <svg
          className="pointer-events-none absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2 z-0"
          width="900"
          height="900"
          viewBox="0 0 900 900"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="450" cy="450" r="280" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
          <circle cx="450" cy="450" r="380" stroke="white" strokeWidth="2" fill="none" opacity="0.2" />
          <circle cx="450" cy="450" r="480" stroke="white" strokeWidth="2" fill="none" opacity="0.15" />
        </svg>

        <div className="relative z-10 mx-auto grid max-w-[1110px] grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2">
          <div className="relative h-[300px] md:h-[380px]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold uppercase leading-tight">
              {title}
            </h2>
            {copy && <p className="mt-6 max-w-[350px] opacity-90">{copy}</p>}
            <div className="mt-8">
              <Button as="link" href={href} variant="secondary">
                See Product
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "zx7") {
    // Wide card with background image
    return (
      <div className="relative h-[320px] overflow-hidden rounded-lg">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover" 
        />
        <div className="relative z-10 flex h-full items-center px-12 md:px-24">
          <div>
            <h3 className="text-3xl font-bold uppercase text-black">{title}</h3>
            <div className="mt-8">
              <Button as="link" href={href} variant="ghost">
                See Product
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // yx1 split card
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="relative h-[200px] overflow-hidden rounded-lg md:h-[320px]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col justify-center rounded-lg bg-[#F1F1F1] px-8 py-12 text-black">
        <h3 className="text-3xl font-bold uppercase text-black">{title}</h3>
        <div className="mt-8">
          <Button as="link" href={href} variant="ghost">
            See Product
          </Button>
        </div>
      </div>
    </div>
  );
}
