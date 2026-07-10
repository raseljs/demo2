import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Sparkles } from "lucide-react";
import type { Post } from "@/types";
import type { Locale } from "@/content/site";
import { formatDate } from "@/lib/utils";

export function PostCard({ post, locale }: { post: Post; locale: Locale }) {
  const detailLabel = locale === "bn" ? "বিস্তারিত দেখুন" : "Read full article";
  return (
    <article className="brand-card group flex h-full flex-col overflow-hidden rounded-[1.7rem] transition duration-300 hover:-translate-y-1">
      <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#1a1c24] via-[#111218] to-[#221509]" aria-label={`${detailLabel}: ${post.title}`}>
        {post.coverImage ? <Image src={post.coverImage} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" /> : <ArticlePreview category={post.category} />}
        <span className="absolute left-4 top-4 rounded-full border border-white/12 bg-[#111218]/80 px-3 py-1.5 text-[.68rem] font-bold uppercase tracking-[.11em] text-white shadow-sm backdrop-blur">{post.category}</span>
      </Link>
      <div className="flex h-full flex-col p-6">
        <div className="flex items-center justify-between text-xs font-semibold text-white/52"><span>{formatDate(post.publishedAt, locale)}</span><span className="inline-flex items-center gap-1.5"><Clock3 className="size-3.5" />{post.readingTime || "5 min"}</span></div>
        <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-.045em] text-white"><Link href={`/blog/${post.slug}`} className="transition hover:text-[#ff9a3f]">{post.title}</Link></h3>
        <p className="mt-4 text-sm leading-6 text-white/65">{post.excerpt}</p>
        <div className="mt-auto pt-7"><Link href={`/blog/${post.slug}`} className="gradient-button inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5">{detailLabel}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link></div>
      </div>
    </article>
  );
}

function ArticlePreview({ category }: { category: string }) {
  return (
    <div className="relative h-full overflow-hidden p-5">
      <div className="absolute -right-8 -top-8 size-40 rounded-full bg-[#ff8a1d]/28 blur-2xl" />
      <div className="absolute -bottom-12 -left-6 size-36 rounded-full border-[18px] border-[#1d7fff]/35" />
      <div className="relative flex h-full flex-col justify-between rounded-[1.25rem] border border-white/10 bg-[#0f1117]/75 p-4 shadow-sm backdrop-blur">
        <span className="grid size-10 place-items-center rounded-xl bg-[#ff8a1d]/12 text-[#ff9a3f]"><Sparkles className="size-4" /></span>
        <div><p className="text-[.64rem] font-extrabold uppercase tracking-[.12em] text-white/45">DreamSpace Notes</p><p className="mt-2 font-display text-xl font-semibold leading-tight tracking-[-.04em] text-white">{category}</p><div className="mt-3 h-2.5 w-4/5 rounded-full bg-white/12" /><div className="mt-2 h-2.5 w-3/5 rounded-full bg-white/8" /></div>
      </div>
    </div>
  );
}
