import { PageHero } from "@/components/ui/page-hero";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return <main><PageHero eyebrow="LEGAL" title="Privacy Policy" description="How DreamSpace IT handles information submitted through this website." /><article className="prose-like container-shell max-w-3xl py-16 text-[1rem] leading-8"><h2>Information we collect</h2><p>When you contact DreamSpace IT, we may collect the information you submit, such as your name, email address, phone number, service interest and message. This information is used only to respond to your request and to manage a potential project conversation.</p><h2>How information is used</h2><p>We do not sell personal information. We use submitted information to communicate about services, prepare a quotation when requested and improve how the website works.</p><h2>Data retention and security</h2><p>Information is retained only as long as reasonably necessary for communication, project delivery or legal obligations. Reasonable technical safeguards are used, but no online system can guarantee absolute security.</p><h2>Contact</h2><p>For privacy questions, contact dreamspaceit.official@gmail.com.</p></article></main>;
}
