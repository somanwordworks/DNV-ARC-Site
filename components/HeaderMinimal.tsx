import Link from "next/link";

export default function HeaderMinimal() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[rgba(11,30,79,0.10)] shadow-sm">
      <div className="container-custom flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logos/dnv-arc.png" alt="DNV ARC" className="h-10 w-auto object-contain" />
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/services" className="text-sm font-medium text-ink-muted hover:text-dnv-navy transition-colors hidden md:block">Services</Link>
          <Link href="/pricing" className="text-sm font-medium text-ink-muted hover:text-dnv-navy transition-colors hidden md:block">Pricing</Link>
          <a href="/#contact" className="btn btn-primary text-sm px-5 py-2.5">Get in touch</a>
        </div>
      </div>
    </header>
  );
}
