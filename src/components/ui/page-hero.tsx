import { Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="page-hero-surface relative overflow-hidden border-b border-white/8 py-18 sm:py-24">
      <div className="tech-grid pointer-events-none absolute inset-y-0 right-0 w-[48%] opacity-65" />
      <div className="pointer-events-none absolute -left-24 bottom-0 size-72 rounded-full border-[38px] border-[#1679ff]/10" />
      <div className="pointer-events-none absolute -right-20 -top-24 size-80 rounded-full border-[42px] border-[#ff8a1d]/20" />
      <div className="pointer-events-none absolute right-[18%] top-8 grid size-11 place-items-center rounded-2xl border border-[#ff8a1d]/35 bg-[#ff8a1d]/10 text-[#ff9a3f] shadow-lg backdrop-blur sm:right-[27%]">
        <Sparkles className="size-5" />
      </div>
      <div className="container-shell relative">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      </div>
    </section>
  );
}
