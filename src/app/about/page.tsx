import Link from "next/link";
import { ArrowRight, Code2, HeartHandshake, Lightbulb, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { copy, site } from "@/content/site";
import { getLocale } from "@/lib/locale";

export const metadata = { title: "About" };

export default async function AboutPage() {
  const locale = await getLocale();
  const t = copy[locale];
  const values = [
    [Lightbulb, locale === "bn" ? "স্পষ্ট চিন্তা" : "Clear thinking", locale === "bn" ? "Feature যোগ করার আগে তার উদ্দেশ্য, user impact এবং business value বুঝে সিদ্ধান্ত নেওয়া।" : "Understanding the purpose, user impact and business value before adding a feature."],
    [Code2, locale === "bn" ? "সৎ ইঞ্জিনিয়ারিং" : "Honest engineering", locale === "bn" ? "পরিষ্কার, maintainable এবং দায়িত্বশীল code structure-কে অগ্রাধিকার দেওয়া।" : "Prioritising clean, maintainable and responsible code structure."],
    [HeartHandshake, locale === "bn" ? "মানবিক যোগাযোগ" : "Human communication", locale === "bn" ? "জটিল technical বিষয়ও সহজভাবে বোঝানো এবং project owner-কে process-এর মধ্যে রাখা।" : "Explaining technical decisions simply and keeping project owners involved."],
    [ShieldCheck, locale === "bn" ? "দীর্ঘমেয়াদি দৃষ্টি" : "Long-term view", locale === "bn" ? "শুধু আজকের launch নয়—আগামী update, content ও growth-এর পথ পরিকল্পনায় রাখা।" : "Planning beyond today’s launch for future updates, content and growth."]
  ];

  return (
    <main>
      <PageHero eyebrow="ABOUT DREAMSPACE IT" title={locale === "bn" ? "আমরা শুধু ওয়েবসাইট তৈরি করি না—আপনার digital presence-এর ভিত্তি তৈরি করি" : "We do not just build websites—we build the foundation of your digital presence"} description={locale === "bn" ? "DreamSpace IT একটি Dhaka-based development studio, যা দ্রুত, পরিষ্কার এবং purpose-driven web experience তৈরি করতে কাজ করে।" : "DreamSpace IT is a Dhaka-based development studio focused on fast, clear and purpose-driven web experiences."} />
      <section className="section-space container-shell grid gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
        <div>
          <p className="eyebrow">OUR APPROACH</p>
          <h2 className="mt-4 text-balance font-display text-4xl font-black tracking-[-.055em] text-white sm:text-5xl">{locale === "bn" ? "আপনার business বুঝে, কাজের জন্য সঠিক technology বেছে নেওয়া" : "Understanding your business, then choosing technology that serves the work"}</h2>
          <p className="mt-6 text-lg leading-8 text-white/70">{locale === "bn" ? "প্রতিটি business-এর সমস্যার সমাধান একই রকম হয় না। তাই DreamSpace IT-এ design, development, performance এবং content structure-কে একসাথে দেখা হয়। লক্ষ্য হলো এমন একটি system তৈরি করা যা আপনার audience-এর জন্য সহজ এবং আপনার team-এর জন্য ব্যবহারযোগ্য।" : "Every business does not need the same solution. At DreamSpace IT, design, development, performance and content structure are considered together. The aim is a system that feels easy for your audience and useful for your team."}</p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#ff9a3f]">{t.nav.contact}<ArrowRight className="size-4" /></Link>
        </div>
        <div className="dark-panel relative overflow-hidden rounded-[2rem] p-7 sm:p-9">
          <div className="tech-grid pointer-events-none absolute inset-y-0 right-0 w-2/3 opacity-55" />
          <div className="relative"><span className="font-display text-7xl font-black tracking-[-.10em] text-white">DS<span className="text-[#ff7a18]">.</span></span><p className="mt-10 font-display text-2xl font-black leading-tight tracking-[-.04em] text-white">{locale === "bn" ? "সুন্দর দেখানো যথেষ্ট নয়। একটি ডিজিটাল product-কে কাজও করতে হয়।" : "Looking polished is not enough. A digital product also needs to work."}</p><p className="mt-8 text-sm leading-7 text-white/62">{site.founder}<br />{t.ceo.role}</p></div>
        </div>
      </section>
      <section className="border-y border-white/[.08] bg-black/15 py-16 sm:py-24"><div className="container-shell"><p className="eyebrow">VALUES</p><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{values.map(([Icon, title, description]) => <article key={String(title)} className="brand-card rounded-[1.5rem] p-6"><span className="grid size-10 place-items-center rounded-xl border border-[#ff8a1d]/30 bg-[#ff8a1d]/10 text-[#ff9a3f]"><Icon className="size-5" /></span><h3 className="mt-5 font-display text-xl font-black tracking-[-.04em] text-white">{String(title)}</h3><p className="mt-3 text-sm leading-6 text-white/65">{String(description)}</p></article>)}</div></div></section>
    </main>
  );
}
