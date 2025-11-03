// components/home/About.tsx
import Image from "next/image";
import Section from "@/components/ui/Section";

export default function About() {
  return (
    <Section className="bg-white text-black">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold uppercase leading-tight text-black">
            Bringing you the <span className="text-[#D87D4A]">best</span> audio gear
          </h2>
          <p className="mt-6 text-black/70 leading-relaxed">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our products.
            Stop by our store to meet some of the fantastic people who make Audiophile
            the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden md:order-2">
          <Image
            src="/category/person.png"
            alt="Person listening to audio equipment"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </Section>
  );
}
