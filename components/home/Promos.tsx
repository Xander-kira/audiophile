// components/home/Promos.tsx
import Section from "@/components/ui/Section";
import PromoCard from "@/components/cards/PromoCard";

export default function Promos() {
  return (
    <Section className="bg-white" containerClass="space-y-6 md:space-y-8">
      <PromoCard
        variant="zx9"
        title="ZX9 Speaker"
        copy="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
        image="/Home/fullspeaker.png"
        href="/zx9"
      />
      <PromoCard
        variant="zx7"
        title="ZX7 Speaker"
        image="/Home/halfspeaker.png"
        href="/zx7"
      />
      <PromoCard
        variant="yx1"
        title="YX1 Earphones"
        image="/Home/openearbuds.png"
        href="/yx1"
      />
    </Section>
  );
}
