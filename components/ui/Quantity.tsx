"use client";
import { useState } from "react";

export default function Quantity({
  onChange,
  initial = 1,
}: { onChange?: (v: number) => void; initial?: number }) {
  const [v, setV] = useState(initial);
  const set = (n: number) => {
    const next = Math.max(1, n);
    setV(next);
    onChange?.(next);
  };
  return (
    <div className="inline-flex items-center bg-[#f1f1f1]">
      <button className="px-3 py-2 text-black" onClick={() => set(v - 1)} aria-label="Decrease">-</button>
      <span className="w-10 text-center select-none text-black">{v}</span>
      <button className="px-3 py-2 text-black" onClick={() => set(v + 1)} aria-label="Increase">+</button>
    </div>
  );
}
