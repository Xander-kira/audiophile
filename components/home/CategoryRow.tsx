// components/home/CategoryRow.tsx
import Section from "@/components/ui/Section";
import CategoryCard from "@/components/cards/CategoryCard";

export default function CategoryRow() {
  return (
    <Section className="bg-white">
      <div className="grid gap-6 md:grid-cols-3">
        <CategoryCard
          title="Headphones"
          image="/category/goldheadset.png"
          href="/headphones"
        />
        <CategoryCard
          title="Speakers"
          image="/Home/fullspeaker.png"
          href="/speakers"
        />
        <CategoryCard
          title="Earphones"
          image="/Home/closeearbuds.png"
          href="/earphones"
        />
      </div>
    </Section>
  );
}
