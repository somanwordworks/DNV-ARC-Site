"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-[rgba(11,30,79,0.10)] shadow-sm">
        <div className="container-custom flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/logos/dnv-arc.png"
              alt="DNV ARC"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 flex-shrink-0">
            <a href="/#about"
              className="text-sm font-medium text-ink-muted hover:text-dnv-navy transition-colors">
              About
            </a>
            <a href="/#ecosystem"
              className="text-sm font-medium text-ink-muted hover:text-dnv-navy transition-colors">
              Ecosystem
            </a>
            <Link href="/services"
              className="text-sm font-medium text-ink-muted hover:text-dnv-navy transition-colors">
              Services
            </Link>
            <Link href="/pricing"
              className="text-sm font-medium text-ink-muted hover:text-dnv-navy transition-colors">
              Pricing
            </Link>
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="/#contact"
              className="hidden md:inline-flex btn btn-primary text-sm px-5 py-2.5"
            >
              Get in touch
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-surface-off transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-dnv-navy rounded transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-dnv-navy rounded transition-all duration-200 ${open ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-dnv-navy rounded transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
          {/* Panel */}
          <nav className="absolute top-0 right-0 h-full w-72 bg-white shadow-lg flex flex-col p-8 gap-6">
            <div className="flex justify-between items-center mb-4">
              <img src="/logos/dnv-arc.png" alt="DNV ARC" className="h-9 w-auto" />
              <button onClick={() => setOpen(false)} className="p-1 rounded hover:bg-surface-off">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>

            {[
              { label: "About", href: "/#about" },
              { label: "Ecosystem", href: "/#ecosystem" },
              { label: "Services", href: "/services" },
              { label: "Pricing", href: "/pricing" },
            ].map(link => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg font-display font-semibold tracking-wide text-dnv-navy hover:text-dnv-sky transition-colors py-1 border-b border-[rgba(11,30,79,0.06)]"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-auto flex flex-col gap-3">
              <a href="/#contact" onClick={() => setOpen(false)} className="btn btn-primary text-center">
                Get in touch
              </a>
              <a href="https://wa.me/919642226262" target="_blank" className="btn btn-ghost text-center text-sm">
                WhatsApp us
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
