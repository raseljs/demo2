"use client";

import Link from "next/link";
import { BarChart3, FileText, FolderKanban, LogOut, Mail, Settings2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Logo } from "@/components/ui/logo";

const links = [
  ["/admin", "Dashboard", BarChart3],
  ["/admin/projects", "Projects", FolderKanban],
  ["/admin/posts", "Blog posts", FileText],
  ["/admin/inquiries", "Inquiries", Mail]
] as const;

export function AdminShell({ children, email }: { children: React.ReactNode; email: string }) {
  const pathname = usePathname();
  const router = useRouter();
  async function signOut() { await fetch("/api/auth/logout", { method: "POST" }); router.push("/admin/login"); router.refresh(); }
  return <div className="container-shell py-8 sm:py-12"><div className="overflow-hidden rounded-[2rem] border border-white/[.10] bg-[#12131a] shadow-[0_20px_60px_rgba(23,32,51,.09)] lg:grid lg:grid-cols-[245px_1fr]"><aside className="border-b border-white/[.10] bg-[#0c0d12] p-5 lg:min-h-[680px] lg:border-b-0 lg:border-r"><Logo /><div className="mt-10 space-y-1.5">{links.map(([href, label, Icon]) => <Link key={href} href={href} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${pathname === href ? "bg-ink text-white" : "text-white/70 hover:bg-white/[.06]"}`}><Icon className="size-4" />{label}</Link>)}</div><div className="mt-10 border-t border-white/[.10] pt-5"><p className="truncate text-xs font-semibold text-white/60">{email}</p><button onClick={signOut} className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-coral"><LogOut className="size-4" />Sign out</button></div></aside><div className="min-w-0 p-5 sm:p-8">{children}</div></div></div>;
}

export function AdminPageTitle({ title, description, action }: { title: string; description: string; action?: React.ReactNode }) {
  return <div className="flex flex-col justify-between gap-4 border-b border-white/[.10] pb-6 sm:flex-row sm:items-end"><div><p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[.13em] text-coral"><Settings2 className="size-3.5" />Admin</p><h1 className="mt-2 font-display text-3xl font-semibold tracking-[-.055em] text-white">{title}</h1><p className="mt-2 text-sm leading-6 text-white/55">{description}</p></div>{action}</div>;
}
