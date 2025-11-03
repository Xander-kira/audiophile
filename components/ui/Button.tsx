// components/ui/Button.tsx
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

export default function Button({
  as = "button",
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: {
  as?: "button" | "link";
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const base =
    "inline-flex items-center justify-center uppercase tracking-[0.1em] text-[13px] h-12 px-6 transition";
  const styles: Record<Variant, string> = {
    primary: "bg-[#D87D4A] text-white hover:bg-[#FBAF85]",
    secondary: "bg-black text-white hover:bg-[#4C4C4C]",
    ghost: "border border-black text-black hover:bg-black hover:text-white",
  };
  const cls = `${base} ${styles[variant]} ${className}`;

  if (as === "link" && href) {
    return (
      <Link className={cls} href={href}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
