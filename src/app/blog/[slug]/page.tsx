import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock3, MessageCircle } from "lucide-react";
import { getPostBySlug } from "@/lib/data";
import { getLocale } from "@/lib/locale";
import { formatDate } from "@/lib/utils";
import { site } from "@/content/site";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale = await getLocale();
  const post = await getPostBySlug(slug, locale);
  if (!post) notFound();
  const message = encodeURIComponent(locale === "bn" ? `Hello DreamSpace IT, আমি “${post.title}” লেখাটি পড়েছি। একটি প্রজেক্ট নিয়ে কথা বলতে চাই।` : `Hello DreamSpace IT, I read “${post.title}” and would like to discuss a project.`);
  return (
    <main>
      <article>
        <header className="page-hero-surface relative overflow-hidden border-b border-white/[.08] py-14 sm:py-20"><div className="tech-grid pointer-events-none absolute inset-y-0 right-0 w-[48%] opacity-50" /><div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full border-[42px] border-[#ff8a1d]/20" /><div className="container-shell relative max-w-4xl"><Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-[#ff9a3f]"><ArrowLeft className="size-4" />{locale === "bn" ? "সব লেখা" : "All articles"}</Link><div className="mt-10"><span className="rounded-full border border-[#ff8a1d]/35 bg-[#ff8a1d]/10 px-3 py-1.5 text-xs font-bold text-[#ffb356]">{post.category}</span><h1 className="mt-5 text-balance font-display text-4xl font-black leading-[1.02] tracking-[-.065em] text-white sm:text-6xl">{post.title}</h1><div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-white/58"><span>{formatDate(post.publishedAt, locale)}</span><span className="inline-flex items-center gap-1.5"><Clock3 className="size-4" />{post.readingTime || "5 min"}</span></div><p className="mt-8 max-w-3xl border-l-2 border-[#ff8a1d] pl-5 text-lg leading-8 text-white/75">{post.excerpt}</p></div></div></header>
        <div className="container-shell max-w-4xl py-14 sm:py-20">{post.coverImage ? <div className="relative mb-12 aspect-[16/8] overflow-hidden rounded-[2rem] border border-white/[.10] bg-[#111217]"><Image src={post.coverImage} alt={post.title} fill sizes="(max-width: 768px) 100vw, 896px" className="object-cover" /></div> : null}<div className="article-body whitespace-pre-line text-[1.04rem] leading-8">{post.content || post.excerpt}</div><div className="relative mt-14 overflow-hidden rounded-[1.7rem] border border-[#ff8a1d]/30 bg-gradient-to-r from-[#181116] via-[#24150a] to-[#111218] p-7 text-white sm:p-9"><div className="tech-grid pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-50" /><div className="relative"><p className="text-sm font-bold text-[#ffb356]">{locale === "bn" ? "আপনার প্রজেক্টের জন্য সাহায্য লাগবে?" : "Need help with your project?"}</p><p className="mt-3 max-w-xl font-display text-2xl font-black tracking-[-.045em]">{locale === "bn" ? "আপনার প্রয়োজন বলুন—আমরা একটি practical next step সাজেস্ট করব।" : "Tell us what you need and we will suggest a practical next step."}</p><a href={`https://wa.me/${site.whatsapp}?text=${message}`} target="_blank" rel="noreferrer" className="gradient-button mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"><MessageCircle className="size-4" />{locale === "bn" ? "WhatsApp-এ কথা বলুন" : "Chat on WhatsApp"}</a></div></div></div>
      </article>
    </main>
  );
}
