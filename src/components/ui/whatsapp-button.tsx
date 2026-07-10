import { MessageCircle } from "lucide-react";
import { site } from "@/content/site";

export function WhatsAppButton({ label = "WhatsApp" }: { label?: string }) {
  const message = encodeURIComponent("Hello DreamSpace IT, I would like to discuss a website project.");
  return (
    <a href={`https://wa.me/${site.whatsapp}?text=${message}`} target="_blank" rel="noreferrer" className="gradient-button inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-coral/20">
      <MessageCircle className="size-4" />
      {label}
    </a>
  );
}

export function FloatingWhatsApp() {
  const message = encodeURIComponent("Hello DreamSpace IT, I would like to discuss a website project.");
  return (
    <a href={`https://wa.me/${site.whatsapp}?text=${message}`} target="_blank" rel="noreferrer" aria-label="Chat with DreamSpace IT on WhatsApp" className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_16px_34px_rgba(37,211,102,.32)] transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/30">
      <MessageCircle className="size-6" />
    </a>
  );
}
