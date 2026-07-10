import Link from "next/link";

export default function NotFound() {
  return <main className="container-shell grid min-h-[55vh] place-items-center py-16 text-center"><div><p className="eyebrow">404</p><h1 className="mt-4 font-display text-5xl font-black tracking-[-.07em] text-white">Page not found</h1><p className="mt-4 text-white/60">The page you are looking for does not exist or may have moved.</p><Link href="/" className="gradient-button mt-8 inline-flex rounded-full px-5 py-3 text-sm font-bold text-white">Back to home</Link></div></main>;
}
