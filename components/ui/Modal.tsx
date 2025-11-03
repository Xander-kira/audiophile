"use client";
import { ReactNode } from "react";

export default function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        {children}
        <button
          onClick={onClose}
          className="mt-6 w-full rounded bg-black px-4 py-2 text-white"
        >
          Back to home
        </button>
      </div>
    </div>
  );
}
