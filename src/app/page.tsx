import { HomePage } from "@/components/home/home-page";
import { getProjects } from "@/lib/data";
import { getLocale } from "@/lib/locale";
import { site } from "@/content/site";

export default async function Page() {
  const [locale, projects] = await Promise.all([getLocale(), getProjects(3)]);
  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
    sameAs: [site.facebook],
    areaServed: ["Bangladesh", "Worldwide"],
    knowsAbout: ["Web Development", "Ecommerce", "Next.js", "SEO"]
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} /><HomePage locale={locale} projects={projects} /></>;
}
