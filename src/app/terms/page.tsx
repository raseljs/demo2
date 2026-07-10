import { PageHero } from "@/components/ui/page-hero";

export const metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return <main><PageHero eyebrow="LEGAL" title="Terms of Service" description="General terms for using this website and engaging DreamSpace IT services." /><article className="prose-like container-shell max-w-3xl py-16 text-[1rem] leading-8"><h2>Website use</h2><p>This website is provided for general information about DreamSpace IT and its services. You may not use it in a way that harms, disrupts or attempts to gain unauthorized access to the site or its systems.</p><h2>Project scope and quotation</h2><p>Project scope, timeline, price, payment milestones, revisions and support terms are confirmed in a separate written proposal or agreement. A website inquiry does not create a contract.</p><h2>Third-party services</h2><p>Projects may use third-party services such as hosting, analytics, payment gateways or messaging platforms. Their availability and policies are outside DreamSpace IT’s control.</p><h2>Changes</h2><p>These terms may be updated as the website and services evolve. Continued use of the website indicates acceptance of the current version.</p></article></main>;
}
