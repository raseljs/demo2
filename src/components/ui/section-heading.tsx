import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, description, align = "left", className }: { eyebrow: string; title: string; description?: string; align?: "left" | "center"; className?: string }) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-[-.055em] text-white sm:text-4xl lg:text-[3.25rem] lg:leading-[1.04]">{title}</h2>
      {description ? <p className="mt-5 text-pretty text-[1.02rem] leading-8 text-white/68 sm:text-lg">{description}</p> : null}
    </div>
  );
}
