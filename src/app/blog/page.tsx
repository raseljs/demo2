import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { PostCard } from "@/components/ui/post-card";
import { getPosts } from "@/lib/data";
import { getLocale } from "@/lib/locale";

export const metadata = { title: "Blog" };

export default async function BlogPage() {
  const locale = await getLocale();
  const posts = await getPosts(locale);
  return (
    <main>
      <PageHero eyebrow="INSIGHTS" title={locale === "bn" ? "ওয়েবসাইট, গ্রোথ এবং ভালো digital experience নিয়ে কথা" : "Thoughts on websites, growth and better digital experiences"} description={locale === "bn" ? "এখানে নিয়মিত practical tips, project preparation এবং web performance নিয়ে লেখা প্রকাশ করা যাবে।" : "Publish practical tips, project preparation notes and web performance insights here regularly."} />
      <section className="section-space container-shell">
        <div className="brand-card mb-8 flex flex-col gap-4 rounded-[1.6rem] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"><div><p className="font-display text-xl font-black tracking-[-.035em] text-white">{locale === "bn" ? "প্রতিটি লেখার পূর্ণাঙ্গ detail page আছে" : "Every article opens into a complete detail page"}</p><p className="mt-1 text-sm leading-6 text-white/62">{locale === "bn" ? "‘বিস্তারিত দেখুন’ ক্লিক করলে পুরো লেখা, step এবং practical guidance দেখতে পাবেন।" : "Use ‘Read full article’ to view the complete post, steps and practical guidance."}</p></div><span className="inline-flex items-center gap-2 text-sm font-bold text-[#ff9a3f]">{locale === "bn" ? "লেখা পড়ুন" : "Explore insights"}<ArrowRight className="size-4" /></span></div>
        {posts.length ? <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{posts.map((post) => <PostCard key={post.slug} post={post} locale={locale} />)}</div> : <p className="rounded-2xl border border-dashed border-white/15 p-6 text-white/60">{locale === "bn" ? "এখনও কোনো ব্লগ পোস্ট যোগ করা হয়নি।" : "No blog posts have been added yet."}</p>}
      </section>
    </main>
  );
}
