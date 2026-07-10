import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/ui/whatsapp-button";
import { LanguageProvider } from "@/components/ui/language-provider";
import { LocaleBoot } from "@/components/ui/locale-boot";
import { getLocale, languageTag } from "@/lib/locale";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "DreamSpace IT | Fast websites & custom web applications", template: "%s | DreamSpace IT" },
  description: "DreamSpace IT builds fast, responsive, SEO-ready websites, ecommerce experiences and custom web applications from Dhaka, Bangladesh.",
  keywords: ["web development Bangladesh", "Next.js developer", "ecommerce website", "DreamSpace IT", "website design Dhaka"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", siteName: "DreamSpace IT", title: "DreamSpace IT", description: "Fast websites & custom web applications for growing businesses." },
  twitter: { card: "summary_large_image", title: "DreamSpace IT", description: "Fast websites & custom web applications for growing businesses." },
  robots: { index: true, follow: true }
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  return (
    <html lang={languageTag(locale)} suppressHydrationWarning>
      <body>
        <LanguageProvider locale={locale}>
          <LocaleBoot />
          <Header />
          {children}
          <Footer />
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
