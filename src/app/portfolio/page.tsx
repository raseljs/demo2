import { PageHero } from "@/components/ui/page-hero";
import { ProjectCard } from "@/components/ui/project-card";
import { getProjects } from "@/lib/data";
import { getLocale } from "@/lib/locale";

export const metadata = { title: "Projects" };

export default async function PortfolioPage() {
  const [locale, projects] = await Promise.all([getLocale(), getProjects()]);
  return <main><PageHero eyebrow="PROJECTS" title={locale === "bn" ? "সমস্যা বুঝে তৈরি করা কাজের কিছু নমুনা" : "A selection of work built around real needs"} description={locale === "bn" ? "এখানে থাকা projectগুলো admin panel থেকে পরে নিজস্ব live project, image ও link দিয়ে update করা যাবে।" : "The projects here can later be updated with your own live work, imagery and links from the admin panel."} /><section className="section-space container-shell">{projects.length ? <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.map((project) => <ProjectCard key={project.slug} project={project} locale={locale} />)}</div> : <p className="text-white/60">{locale === "bn" ? "এখনও কোনো প্রজেক্ট যোগ করা হয়নি।" : "No projects have been added yet."}</p>}</section></main>;
}
