// components/ui/Section.tsx
export default function Section({
  children,
  className = "",
  containerClass = "",
}: {
  children: React.ReactNode;
  className?: string;
  containerClass?: string;
}) {
  return (
    <section className={className}>
      <div className={`mx-auto w-full max-w-[1110px] px-6 ${containerClass}`}>
        {children}
      </div>
    </section>
  );
}
