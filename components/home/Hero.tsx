// components/home/Hero.tsx
"use client";

import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-[#101010] text-white">
      <Section containerClass="grid items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        {/* Left copy */}
        <div className="max-w-[370px]">
          <p className="uppercase tracking-[0.5em] text-white/50">
            New Product
          </p>
          <h1 className="mt-4 text-5xl font-bold uppercase leading-tight">
            XX99 Mark II Headphones
          </h1>
          <p className="mt-6 text-white/75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <div className="mt-8">
            <Button as="link" href="/xx99-mark-two" variant="primary">
              See Product
            </Button>
          </div>
        </div>

        {/* Right image */}
        <div className="relative h-80 w-full md:h-[440px] md:w-[600px]">
          <Image
            src="/Home/headset.png"
            alt="XX99 Mark II Headphones"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Section>
    </section>
  );
}
