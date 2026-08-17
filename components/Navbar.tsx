'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 h-[72px] border-b transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(248,249,252,0.97)' : 'rgba(248,249,252,0.85)',
        borderColor: 'rgba(22,32,80,0.1)',
        backdropFilter: 'blur(20px)',
      }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center no-underline">
        <Image
          src="/dnv-arc-logo.png"
          alt="DNV ARC — Data Neural Vision"
          width={160}
          height={52}
          className="h-11 w-auto object-contain"
          priority
        />
      </Link>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {[
          ['#ecosystem', 'Ecosystem'],
          ['#about',     'About'],
          ['#contact',   'Contact'],
        ].map(([href, label]) => (
          <li key={href}>
            <a
              href={href}
              className="no-underline transition-colors duration-200"
              style={{
                fontFamily: 'var(--font-barlow-condensed), sans-serif',
                fontWeight: 600,
                fontSize: '15px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase' as const,
                color: '#5a6a8a',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#2aaee0')}
              onMouseLeave={e => (e.currentTarget.style.color = '#5a6a8a')}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-md no-underline transition-all duration-200"
        style={{
          background: '#162050',
          color: '#fff',
          fontFamily: 'var(--font-barlow-condensed), sans-serif',
          fontWeight: 700,
          fontSize: '14px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase' as const,
          boxShadow: '0 2px 16px rgba(22,32,80,0.18)',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.background = '#2aaee0';
          (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.background = '#162050';
          (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        }}
      >
        Get in touch →
      </a>
    </nav>
  );
}
