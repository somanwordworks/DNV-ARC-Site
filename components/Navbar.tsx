'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const LINKS: [string, string][] = [
  ['/#products', 'Products'],
  ['/#company', 'Company'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled || open ? 'rgba(7,14,36,0.82)' : 'transparent',
        backdropFilter: scrolled || open ? 'blur(18px)' : 'none',
        borderBottom: `1px solid ${scrolled || open ? 'var(--line)' : 'transparent'}`,
      }}
    >
      <div className="wrap flex items-center justify-between h-[72px]">
        <Link href="/" className="flex items-center no-underline" aria-label="DNV ARC home">
          <span className="rounded-lg px-3 py-1.5" style={{ background: '#f4f7fc' }}>
            <Image src="/dnv-arc-logo.png" alt="DNV ARC, Data Neural Vision" width={140} height={44} className="h-8 w-auto object-contain" priority />
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9" aria-label="Main">
          {LINKS.map(([href, label]) => (
            <Link key={href} href={href} className="mono-label no-underline transition-colors hover:!text-white" style={{ color: 'var(--muted)' }}>
              {label}
            </Link>
          ))}
          <a href="/#contact" className="btn-primary" style={{ padding: '11px 20px', fontSize: 11 }}>Contact</a>
        </nav>

        <button
          className="md:hidden p-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{ color: 'var(--text)', background: 'none', border: 0 }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden wrap pb-6 flex flex-col gap-5" aria-label="Mobile">
          {LINKS.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="mono-label no-underline" style={{ color: 'var(--text)', fontSize: 13 }}>
              {label}
            </Link>
          ))}
          <a href="/#contact" onClick={() => setOpen(false)} className="btn-primary self-start">Contact</a>
        </nav>
      )}
    </header>
  );
}
