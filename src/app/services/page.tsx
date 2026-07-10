import Link from "next/link";
import { ArrowRight, Boxes, ChartNoAxesCombined, LayoutPanelTop, Layers3, PenTool, ShoppingBag, Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { copy, serviceItems } from "@/content/site";
import { getLocale } from "@/lib/locale";

const icons = { LayoutPanelTop, ShoppingBag, PanelsTopLeft: Layers3, Boxes, PenTool, ChartNoAxesCombined };

export const metadata = { title: "Services" };

export default async function ServicesPage() {
  const locale = await getLocale();
  const t = copy[locale];
  const bulletItems = locale === "bn" ? ["মোবাইল-ফার্স্ট ডিজাইন", "দ্রুত ও SEO-ready build", "স্কেলেবল structure"] : ["Mobile-first design", "Fast, SEO-ready build", "Scalable structure"];
  return (
    <main>
      <PageHero eyebrow="SERVICES" title={locale === "bn" ? "যে digital foundation আপনার business-কে এগিয়ে নিতে পারে" : "Digital foundations that help your business move forward"} description={locale === "bn" ? "প্রতিটি service আপনার business goal, audience এবং operational need বুঝে customise করা হয়।" : "Every service is tailored around your business goal, audience and operational needs."} />
      <section className="section-space container-shell">
        <div className="mb-8 flex flex-col gap-4 rounded-[1.6rem] border border-white/10 bg-white/[.03] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-start gap-3"><span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white/[.05] text-[#ff9a3f] shadow-sm"><Sparkles className="size-5" /></span><div><p className="font-display text-xl font-semibold tracking-[-.035em] text-white">{locale === "bn" ? "প্রতিটি সার্ভিসে থাকবে clear strategy ও modern UI" : "Every service combines clear strategy with modern UI"}</p><p className="mt-1 text-sm leading-6 text-white/62">{locale === "bn" ? "নিচের যেকোনো সার্ভিসের বিস্তারিত দেখতে বাটনে ক্লিক করুন।" : "Open any service below to see deliverables, process and full service details."}</p></div></div>
          <Link href="/contact" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#ff9a3f]">{t.common.contactUs}<ArrowRight className="size-4" /></Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons] || Boxes;
            return (
              <article key={service.slug} className="brand-card group flex min-h-[380px] flex-col rounded-[1.8rem] p-7 transition duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between"><span className="grid size-12 place-items-center rounded-2xl bg-white/[.06] text-[#ff9a3f] shadow-sm"><Icon className="size-5" /></span><span className="font-display text-3xl font-semibold text-white/15">0{index + 1}</span></div>
                <h2 className="mt-7 font-display text-2xl font-semibold tracking-[-.045em] text-white">{service[locale].title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/62">{service[locale].description}</p>
                <ul className="mt-6 space-y-2.5 text-sm text-white/72">{bulletItems.map((item) => <li key={item} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-[#ff8a1d]" />{item}</li>)}</ul>
                <Link href={`/services/${service.slug}`} className="gradient-button mt-auto inline-flex w-fit items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5">{t.common.learnMore}<ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
