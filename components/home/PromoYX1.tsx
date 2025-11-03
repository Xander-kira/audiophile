import Image from "next/image";
import Button from "@/components/ui/Button";

export default function PromoYX1() {
  return (
    <section className="mx-auto max-w-6xl px-6 mt-6 grid gap-6 md:grid-cols-2">
      <div className="relative h-[300px] rounded-lg overflow-hidden">
        <Image src="/category/closeearbuds.png" alt="YX1 Earphones" fill className="object-cover" />
      </div>
      <div className="rounded-lg bg-neutral-gray2 p-12 flex flex-col justify-center">
        <h3 className="text-h5 font-bold tracking-[1px]">YX1 EARPHONES</h3>
        <div className="mt-6">
          <Button as="link" href="/yx1" variant="ghost">SEE PRODUCT</Button>
        </div>
      </div>
    </section>
  );
}
