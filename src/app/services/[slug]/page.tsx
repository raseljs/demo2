import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MessageCircle, Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { copy, serviceItems, site } from "@/content/site";
import { serviceArticles } from "@/content/service-articles";
import { getLocale } from "@/lib/locale";

export async function generateStaticParams() {
  return serviceItems.map((item) => ({ slug: item.slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceItems.find((item) => item.slug === slug);
  if (!service) notFound();

  const locale = await getLocale();
  const t = copy[locale];
  const article = serviceArticles[slug]?.[locale];
  if (!article) notFound();

  const message = encodeURIComponent(`Hello DreamSpace IT, I would like to discuss ${service[locale].title}.`);
  const labels = locale === "bn"
    ? { ideal: "কার জন্য উপযোগী", included: "যা যা থাকবে", process: "কীভাবে কাজ এগোবে", result: "আপনি কী পাবেন", details: "সার্ভিসের বিস্তারিত" }
    : { ideal: "Who this is for", included: "What is included", process: "How the work moves forward", result: "What you receive", details: "Service details" };

  return (
    <main>
      <PageHero eyebrow="SERVICE" title={service[locale].title} description={service[locale].description} />

      <section className="section-space container-shell grid gap-10 lg:grid-cols-[1.12fr_.88fr] lg:items-start">
        <div>
          <p className="max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">{article.lead}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <article className="neo-card rounded-[1.5rem] p-6">
              <p className="eyebrow">{labels.ideal}</p>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/75">
                {article.idealFor.map((item) => <li key={item} className="flex gap-2.5"><Check className="mt-0.5 size-4 shrink-0 text-[#ff9a3f]" />{item}</li>)}
              </ul>
            </article>
            <article className="neo-card rounded-[1.5rem] p-6">
              <p className="eyebrow">{labels.included}</p>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/75">
                {article.deliverables.slice(0, 4).map((item) => <li key={item} className="flex gap-2.5"><Check className="mt-0.5 size-4 shrink-0 text-[#ff9a3f]" />{item}</li>)}
              </ul>
            </article>
          </div>
        </div>

        <aside className="dark-panel relative overflow-hidden rounded-[1.8rem] p-7 lg:sticky lg:top-24">
          <div className="tech-grid pointer-events-none absolute inset-y-0 right-0 w-2/3 opacity-40" />
          <div className="relative">
            <p className="eyebrow">PROCESS</p>
            <h2 className="mt-4 font-display text-3xl font-black tracking-[-.055em] text-white">{labels.process}</h2>
            <ol className="mt-8 space-y-5">
              {article.process.map((item, index) => (
                <li key={item} className="flex gap-3">
                  <span className="font-display text-xl font-black text-[#ff9a3f]">0{index + 1}</span>
                  <span className="pt-1 text-sm leading-6 text-white/72">{item}</span>
                </li>
              ))}
            </ol>
            <a href={`https://wa.me/${site.whatsapp}?text=${message}`} target="_blank" rel="noreferrer" className="gradient-button mt-9 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white">
              <MessageCircle className="size-4" />{t.common.contactUs}<ArrowRight className="size-4" />
            </a>
          </div>
        </aside>
      </section>

      <section className="border-y border-white/[.08] bg-black/15 py-16 sm:py-22">
        <div className="container-shell max-w-4xl">
          <div className="mb-10 flex items-center gap-3"><span className="grid size-10 place-items-center rounded-2xl border border-[#ff8a1d]/35 bg-[#ff8a1d]/10 text-[#ff9a3f]"><Sparkles className="size-5" /></span><div><p className="eyebrow">ARTICLE</p><h2 className="mt-2 font-display text-3xl font-black tracking-[-.055em] text-white sm:text-4xl">{labels.details}</h2></div></div>
          <div className="space-y-5">
            {article.sections.map((section, index) => (
              <article key={section.title} className="brand-card rounded-[1.6rem] p-6 sm:p-8">
                <div className="flex items-start gap-4"><span className="mt-1 font-display text-3xl font-black leading-none text-[#ff8a1d]">0{index + 1}</span><div className="min-w-0 flex-1"><h3 className="font-display text-2xl font-black tracking-[-.045em] text-white">{section.title}</h3><div className="mt-4 space-y-4 text-[1rem] leading-8 text-white/72">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>{section.bullets ? <ul className="mt-6 grid gap-3 sm:grid-cols-2">{section.bullets.map((bullet) => <li key={bullet} className="flex items-start gap-2 text-sm leading-6 text-white/78"><Check className="mt-0.5 size-4 shrink-0 text-[#ff9a3f]" />{bullet}</li>)}</ul> : null}</div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space container-shell">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#ff8a1d]/25 bg-gradient-to-r from-[#131015] via-[#1b120c] to-[#101217] p-7 sm:p-10">
          <div className="tech-grid pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-50" />
          <div className="relative max-w-3xl"><p className="eyebrow">{labels.result}</p><p className="mt-5 font-display text-2xl font-black leading-tight tracking-[-.045em] text-white sm:text-3xl">{article.outcome}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={`https://wa.me/${site.whatsapp}?text=${message}`} target="_blank" rel="noreferrer" className="gradient-button inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white"><MessageCircle className="size-4" />{locale === "bn" ? "WhatsApp-এ কথা বলুন" : "Discuss on WhatsApp"}</a><Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[.04] px-5 py-3 text-sm font-bold text-white transition hover:border-[#ff8a1d]/45">{t.nav.contact}<ArrowRight className="size-4" /></Link></div></div>
        </div>
      </section>
    </main>
  );
}
