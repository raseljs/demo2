"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/content/site";
import { useLocale } from "@/components/ui/language-provider";

export function FaqList() {
  const locale = useLocale();
  const [open, setOpen] = useState(0);
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-white/[.09] bg-[#111218] px-5 sm:px-7">
      {faqs.map((item, index) => {
        const isOpen = open === index;
        return <div key={item.en.q} className="border-b border-white/[.08] last:border-b-0">
          <button type="button" onClick={() => setOpen(isOpen ? -1 : index)} className="flex w-full items-center justify-between gap-6 py-5 text-left"><span className="font-display text-lg font-semibold tracking-[-.03em] text-white sm:text-xl">{item[locale].q}</span><ChevronDown className={`size-5 shrink-0 text-[#ff9a3f] transition ${isOpen ? "rotate-180" : ""}`} /></button>
          {isOpen ? <p className="max-w-3xl pb-6 text-[.98rem] leading-7 text-white/65">{item[locale].a}</p> : null}
        </div>;
      })}
    </div>
  );
}
