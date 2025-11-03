// components/cards/CategoryCard.tsx
import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({
  title,
  image,
  href,
}: {
  title: string;
  image: string; // /assets/category/headphones.png
  href: string;
}) {
  return (
    <div className="relative rounded-lg bg-[#F1F1F1] pt-16 pb-6 text-center text-black">
      <Image
        src={image}
        alt={title}
        width={160}
        height={160}
        className="mx-auto -mt-24 h-40 w-40 object-contain"
        priority
      />
      <h3 className="mt-6 text-[15px] uppercase tracking-[0.1em] font-bold text-black">
        {title}
      </h3>
      <Link
        href={href}
        className="mt-3 inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.1em] text-black/50 hover:text-[#D87D4A]"
      >
        Shop <span>›</span>
      </Link>
    </div>
  );
}
