// components/ui/Footer.tsx
import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/", label: "HOME" },
  { href: "/headphones", label: "HEADPHONES" },
  { href: "/speakers", label: "SPEAKERS" },
  { href: "/earphones", label: "EARPHONES" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-[#101010] text-white">
      <div className="mx-auto w-full max-w-[1110px] px-6 py-12">
        {/* top: logo + nav */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
          {/* logo */}
          <Link href="/" className="flex items-center">
            {/* Put your logo at public/assets/logo.svg or change src */}
            <Image src="/logos/audiophile.png" alt="audiophile" width={140} height={24} />
          </Link>

          {/* nav */}
          <nav className="flex flex-col items-center gap-4 text-[13px] uppercase tracking-[0.12em] md:flex-row md:gap-8">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="hover:text-[#D87D4A] transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* blurb */}
        <p className="mt-8 max-w-3xl text-center text-white/70 md:text-left">
          Audiophile is an all-in-one stop to fulfill your audio needs. We’re a small team  <br /> of music
          lovers and sound specialists who are devoted to helping you get the <br /> most out of personal audio. Come and visit our demo facility- we’re open 7 <br /> days a week.
        </p>

        {/* bottom: copyright + socials */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-white/60 text-sm">Copyright {year}. All Rights Reserved</p>

          <div className="flex items-center  gap-4">
            {/* Social media links */}
            <Link 
              aria-label="Facebook" 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <svg width="24" height="24" fill="currentColor" className="text-white">
                <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.19 8.44 9.98v-7.06H7.9v-2.92h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.92h-2.32v7.06C18.34 21.25 22 17.08 22 12.06z" />
              </svg>
            </Link>
            <Link 
              aria-label="Twitter / X" 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-white" fill="currentColor">
                <path d="M18.244 2H21l-6.51 7.44L22.5 22h-5.78l-4.52-6.01L6.02 22H3.26l7.05-8.06L1.5 2h5.86l4.09 5.5L18.24 2Zm-2.02 18h1.57L7.85 4H6.21l10.01 16Z"/>
              </svg>
            </Link>
            <Link 
              aria-label="Instagram" 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-white" fill="currentColor">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5ZM18 6.75a.75.75 0 1 1-.75.75.75.75 0 0 1 .75-.75Z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
