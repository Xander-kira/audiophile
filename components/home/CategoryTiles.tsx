import Link from "next/link";
import Image from "next/image";

const cats = [
  { slug: "headphones", label: "HEADPHONES", img: "/images/goldheadset.png" },
  { slug: "speakers",   label: "SPEAKERS",   img: "/images/fullspeaker2.png" },
  { slug: "earphones",  label: "EARPHONES",  img: "/images/closeearbuds.png" },
];

export default function CategoryTiles() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 ">
      <div className="grid gap-6 md:grid-cols-3">
        {cats.map(c => (
          <article key={c.slug} className="rounded-[8px] bg-neutral-gray2 py-10 text-center">
            <div className="mx-auto mb-6 size-36 rounded-full bg-neutral-gray/40 flex items-center justify-center overflow-hidden">
              <Image src={c.img} alt={c.label} width={96} height={96} className="object-contain" />
            </div>
            <h3 className="font-bold tracking-[1px]">{c.label}</h3>
            <Link href={`/${c.slug}`} className="mt-2 inline-flex items-center gap-3 text-subtitle text-black/60 hover:text-brand-main">
              SHOP <span aria-hidden>›</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
