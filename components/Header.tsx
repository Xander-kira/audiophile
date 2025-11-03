// // components/ui/Header.tsx
// "use client";

// import Link from "next/link";
// import Image from "next/image";

// export default function Header() {
//   return (
//     <header className="bg-[#101010] text-white">
//       <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 md:px-6">
//         {/* Left: logo */}
//         <Link href="/" className="flex items-center gap-2">
//           <Image
//             src="/logos/audiophile.png"
//             alt="audiophile"
//             width={140}
//             height={24}
//             priority
//           />
//         </Link>

//         {/* Middle: links */}
//         <ul className="hidden items-center gap-8 uppercase tracking-widest md:flex text-sm">
//           <li><Link href="/" className="hover:text-[#D87D4A]">Home</Link></li>
//           <li><Link href="/headphones" className="hover:text-[#D87D4A]">Headphones</Link></li>
//           <li><Link href="/speakers" className="hover:text-[#D87D4A]">Speakers</Link></li>
//           <li><Link href="/earphones" className="hover:text-[#D87D4A]">Earphones</Link></li>
//         </ul>

//         {/* Right: cart icon (placeholder for now) */}
//         <button
//           aria-label="Open cart"
//           className="relative inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/5"
//         >
//           {/* Simple cart icon; replace with your SVG if you want */}
//           <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//             <path d="M6 6h15l-2 9H8L6 3H3" stroke="white" strokeWidth="1.5" />
//             <circle cx="10" cy="20" r="1.5" fill="white" />
//             <circle cx="18" cy="20" r="1.5" fill="white" />
//           </svg>
//         </button>
//       </nav>

//       {/* thin divider like in Figma */}
//       <div className="mx-auto h-px w-full max-w-6xl bg-white/10" />
//     </header>
//   );
// }

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MiniCart from "@/components/cart/MiniCart";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#101010] text-white">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logos/audiophile.png" alt="audiophile" width={140} height={24} priority />
        </Link>

        <ul className="hidden items-center gap-8 uppercase tracking-widest md:flex text-sm">
          <li><Link href="/" className="hover:text-[#D87D4A]">Home</Link></li>
          <li><Link href="/headphones" className="hover:text-[#D87D4A]">Headphones</Link></li>
          <li><Link href="/speakers" className="hover:text-[#D87D4A]">Speakers</Link></li>
          <li><Link href="/earphones" className="hover:text-[#D87D4A]">Earphones</Link></li>
        </ul>

        <button
          aria-label="Open cart"
          onClick={() => setOpen(true)}
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/5"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6 6h15l-2 9H8L6 3H3" stroke="white" strokeWidth="1.5" />
            <circle cx="10" cy="20" r="1.5" fill="white" />
            <circle cx="18" cy="20" r="1.5" fill="white" />
          </svg>
        </button>
      </nav>

      <div className="mx-auto h-px w-full max-w-6xl bg-white/10" />

      {/* MiniCart overlay */}
      <MiniCart open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
