import Image from "next/image";

export default function AboutTeaser() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1110px] px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* IMAGE (right on desktop) */}
          <div className="relative order-first md:order-last h-[300px] md:h-[480px] rounded-lg overflow-hidden">
            <Image
              src="/Home/homeimage.png"  // <- put your image here
              alt="Person listening with headphones"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* COPY (left) */}
          <div className="text-center md:text-left">
            <h2 className="uppercase font-bold leading-tight text-3xl md:text-4xl">
              Bringing you the <span className="text-[#D87D4A]">best</span> audio gear
            </h2>
            <p className="mt-6 text-black/70">
              Located at the heart of New York City, Audiophile is the premier store for high-end
              headphones, earphones, speakers, and audio accessories. We have a large showroom and
              luxury demonstration rooms for you to browse and experience a wide range of our products.
              Stop by our store to meet some of the fantastic people who make Audiophile the best place
              to buy your portable audio equipment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
