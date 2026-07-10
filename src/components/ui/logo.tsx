import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  light = false,
  className,
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label="DreamSpace IT home"
    >
      <span className="relative grid size-11 shrink-0 overflow-hidden rounded-full border border-white/15 bg-white shadow-[0_8px_24px_rgba(0,0,0,.32)] transition-transform duration-300 group-hover:-rotate-6">
        <Image
          src="/images/dreamspace-logo.jpg"
          alt="DreamSpace IT logo"
          fill
          sizes="44px"
          className="scale-[1.38] object-cover"
          priority
        />
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block text-[.94rem] font-black tracking-[.02em]",
            light ? "text-white" : "text-white",
          )}
        >
          DREAMSPACE <span className="text-[#ff8a1d]">IT</span>
        </span>
        <span
          className={cn(
            "mt-1 block text-[.48rem] font-bold tracking-[.26em]",
            light ? "text-white/50" : "text-white/45",
          )}
        >
          BUILDING DIGITAL FUTURES
        </span>
      </span>
    </Link>
  );
}
