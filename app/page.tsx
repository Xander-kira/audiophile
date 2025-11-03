// app/page.tsx
import Hero from "@/components/home/Hero";
import CategoryRow from "@/components/home/CategoryRow";
import Promos from "@/components/home/Promos";
import About from "@/components/home/About";
import AboutTeaser from "@/components/ui/AboutTeaser";

export default function Home() {
  return (
    <>
      <Hero />

      {/* White content after hero */}
      <div className="bg-white">
        <div className="mt-20">
          <CategoryRow />
        </div>

        <div className="mt-12 md:mt-16">
          <Promos />
        </div>
         

        <div className="mt-20 md:mt-24">
          <About />
        </div>
      </div>
    </>
  );
}

