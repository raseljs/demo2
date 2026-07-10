import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import type { Locale } from "@/content/site";

export function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  return (
    <article className="group overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#111218] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,.35)]">
      <Link href={project.liveUrl || "/portfolio"} target={project.liveUrl ? "_blank" : undefined} rel={project.liveUrl ? "noreferrer" : undefined} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-[#12141b] p-4">
          {project.imageUrl ? <Image src={project.imageUrl} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" /> : <ProjectPreview project={project} />}
          <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#09090c]/82 px-3 py-1.5 text-[.68rem] font-bold uppercase tracking-[.12em] text-white backdrop-blur">{project.category}</span>
          <span className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-[#ff8a1d] text-white opacity-0 transition duration-300 group-hover:opacity-100"><ArrowUpRight className="size-4" /></span>
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3"><h3 className="font-display text-xl font-semibold tracking-[-.04em] text-white">{project.title}</h3><span className="text-xs font-semibold text-white/45">{project.year || ""}</span></div>
          <p className="mt-3 text-sm leading-6 text-white/65">{project.excerpt}</p>
          <div className="mt-5 flex flex-wrap gap-2">{project.tags.slice(0, 3).map((tag) => <span key={tag} className="rounded-full bg-white/[.05] px-2.5 py-1 text-[.68rem] font-semibold text-white/70">{tag}</span>)}</div>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#ff9a3f]">{locale === "bn" ? "প্রজেক্ট দেখুন" : "View project"}<ArrowUpRight className="size-4" /></span>
        </div>
      </Link>
    </article>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  const seed = project.title.charCodeAt(0) % 3;
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/8 bg-[#0d0e13] shadow-[0_15px_32px_rgba(0,0,0,.28)]">
      <div className="flex h-8 items-center gap-1.5 border-b border-white/[.08] px-3"><i className="size-1.5 rounded-full bg-[#ff8a1d]/80" /><i className="size-1.5 rounded-full bg-[#1d7fff]/80" /><i className="size-1.5 rounded-full bg-[#37d67a]/70" /><span className="ml-auto h-2 w-12 rounded bg-white/[.09]" /></div>
      <div className="p-4">
        <div className="h-2.5 w-20 rounded bg-white/12" />
        <div className="mt-3 h-6 w-3/4 rounded bg-white/70" />
        <div className="mt-2 h-2.5 w-full rounded bg-white/[.12]" />
        <div className="mt-1.5 h-2.5 w-2/3 rounded bg-white/[.12]" />
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className={seed === 0 ? "h-20 rounded-xl bg-[#ff8a1d]/45" : "h-20 rounded-xl bg-[#1d7fff]/25"} />
          <div className={seed === 1 ? "h-20 rounded-xl bg-[#ff8a1d]/45" : "h-20 rounded-xl bg-white/[.08]"} />
        </div>
        <div className="mt-3 h-8 w-full rounded-lg bg-[#ff8a1d]/85" />
      </div>
    </div>
  );
}
