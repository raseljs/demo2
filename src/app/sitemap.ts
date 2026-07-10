import type { MetadataRoute } from "next";
import { site, serviceItems } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/services", "/portfolio", "/pricing", "/blog", "/contact", "/privacy", "/terms"];
  return [...pages.map((path) => ({ url: `${site.url}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : .7 })), ...serviceItems.map((item) => ({ url: `${site.url}/services/${item.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .6 }))];
}
