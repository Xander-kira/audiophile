import Image from "next/image";
import Button from "@/components/ui/Button";

export default function PromoZX7() {
  return (
    <section className="mx-auto max-w-6xl px-6 mt-6">
      <div className="relative rounded-[8px] bg-neutral-gray h-[320px] flex items-center overflow-hidden">
        <div className="px-10">
          <h3 className="text-h5 font-bold tracking-[1px]">ZX7 SPEAKER</h3>
          <div className="mt-6">
            <Button as="link" href="/zx7" variant="ghost">SEE PRODUCT</Button>
          </div>
        </div>

        {/* Right image */}
        <div className="absolute right-0 top-0 hidden md:block h-full w-[420px]">
          <Image src="" alt="ZX7 Speaker" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
