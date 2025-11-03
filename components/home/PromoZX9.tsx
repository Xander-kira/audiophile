import Image from "next/image";
import Button from "@/components/ui/Button";

export default function PromoZX9() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="relative overflow-visible rounded-lg bg-[#D87D4A] text-white">
        {/* Background rings - positioned on left side */}
        <svg
          className="pointer-events-none absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2"
          width="900"
          height="900"
          viewBox="0 0 900 900"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="450" cy="450" r="280" stroke="white" strokeWidth="2" strokeOpacity="0.3" fill="none" />
          <circle cx="450" cy="450" r="380" stroke="white" strokeWidth="2" strokeOpacity="0.2" fill="none" />
          <circle cx="450" cy="450" r="480" stroke="white" strokeWidth="2" strokeOpacity="0.15" fill="none" />
        </svg>

        {/* Content */}
        <div className="relative z-10 grid items-center gap-8 px-8 py-16 md:grid-cols-2 md:px-16">
          {/* Product image */}
          <div className="relative mx-auto h-[280px] w-[220px] md:mx-0 md:h-[360px] md:w-[280px]">
            <Image
              src="/Home/fullspeaker.png"
              alt="ZX9 Speaker"
              fill
              className="object-contain"
              priority
              sizes="(min-width: 768px) 280px, 220px"
            />
          </div>

          {/* Copy */}
          <div>
            <h2 className="text-h2 font-bold uppercase">ZX9 SPEAKER</h2>
            <p className="mt-4 max-w-md text-white/90">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <div className="mt-8">
              {/* If your product route is /product/zx9, update href accordingly */}
              <Button as="link" href="/product/zx9" variant="secondary">
                SEE PRODUCT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
