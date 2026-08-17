'use client';

import { useState } from 'react';
import Image from 'next/image';
import RevealWrapper from './RevealWrapper';

const brands = [
  {
    tag: 'Analytics · Entertainment',
    logo: 'https://www.dnvarc.com/logos/cineq.png',
    name: 'CINEQ',
    tagline: 'Cinema intelligence, redefined. Box-office tracking, OTT performance dashboards, and audience analytics for the Indian film industry. Real data, actionable insights.',
    href: 'https://www.cineq.in/',
    large: true,
  },
  {
    tag: 'AI · Cloud',
    logo: 'https://www.dnvarc.com/logos/data-rhino.png',
    name: 'Data Rhino',
    tagline: 'AI & cloud intelligence for modern data teams who want to stay ahead.',
    href: 'https://www.datarhino.in/',
    large: false,
  },
  {
    tag: 'Education',
    logo: 'https://www.dnvarc.com/logos/noteek.png',
    name: 'Noteek',
    tagline: 'Data-driven skill development. Professional courses, hands-on labs, and structured learning paths.',
    href: 'https://www.noteek.com/',
    large: false,
  },
  {
    tag: 'Finance · Privacy',
    logo: 'https://www.dnvarc.com/logos/dunly.png',
    name: 'Dunly',
    tagline: 'Privacy-first household finance. No ads, no data selling. Built for families.',
    href: 'https://www.dunly.in/',
    large: false,
  },
  {
    tag: 'Privacy · Contacts',
    logo: 'https://www.dnvarc.com/logos/conteak.png',
    name: 'Conteak',
    tagline: 'Your contacts deserve discretion. Secure, organised, and completely off the grid.',
    href: 'https://www.conteak.com/',
    large: false,
  },
];

function ArrowRight() {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Neural node/line overlay — fades in on hover */
function NeuralOverlay({ active }: { active: boolean }) {
  const nodes = [
    { x: 12, y: 18 }, { x: 38, y: 8 }, { x: 62, y: 22 }, { x: 88, y: 12 },
    { x: 22, y: 46 }, { x: 52, y: 40 }, { x: 78, y: 52 },
    { x: 10, y: 78 }, { x: 40, y: 84 }, { x: 68, y: 76 }, { x: 92, y: 88 },
  ];
  const edges = [
    [0, 1], [1, 2], [2, 3], [0, 4], [1, 5], [2, 5], [3, 6],
    [4, 5], [5, 6], [4, 7], [5, 8], [6, 9], [7, 8], [8, 9], [9, 10],
  ];
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        opacity: active ? 0.55 : 0,
        transition: 'opacity 0.45s ease',
      }}
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke="var(--blue)"
          strokeWidth="0.3"
          opacity="0.5"
        />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="1" fill="var(--blue)" />
      ))}
    </svg>
  );
}

function BrandCard({ brand }: { brand: typeof brands[0] }) {
  const [active, setActive] = useState(false);

  return (
    <a
      href={brand.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col overflow-hidden rounded-2xl p-9 no-underline transition-all duration-300 ${brand.large ? 'col-span-2' : ''}`}
      style={{
        background: active
          ? 'linear-gradient(160deg, rgba(42,174,224,0.14), rgba(10,18,40,0.9))'
          : 'var(--card)',
        border: active ? '1px solid var(--blue)' : '1px solid var(--border)',
        backdropFilter: 'blur(10px)',
        color: 'inherit',
        transform: active ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: active
          ? '0 0 0 1px var(--border2), 0 20px 60px rgba(42,174,224,0.28)'
          : 'none',
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <NeuralOverlay active={active} />

      {/* Tag */}
      <span
        className="relative inline-flex mb-6 px-3 py-1 rounded-full font-heading font-semibold text-[11px] tracking-[0.16em] uppercase w-fit transition-colors duration-300"
        style={{
          border: active ? '1px solid var(--blue)' : '1px solid var(--border2)',
          color: 'var(--blue)',
          background: active ? 'rgba(42,174,224,0.1)' : 'transparent',
        }}
      >
        {brand.tag}
      </span>

      {/* Logo */}
      <div
        className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-5 overflow-hidden transition-colors duration-300"
        style={{
          background: active ? 'rgba(42,174,224,0.16)' : 'var(--bg3)',
          border: active ? '1px solid var(--blue)' : '1px solid var(--border)',
        }}
      >
        <Image src={brand.logo} alt={brand.name} width={40} height={40} className="object-contain" />
      </div>

      {/* Name */}
      <h3
        className="relative font-heading font-extrabold text-[26px] tracking-[0.06em] uppercase mb-2 transition-colors duration-300"
        style={{ color: active ? '#ffffff' : 'var(--text)' }}
      >
        {brand.name}
      </h3>

      {/* Tagline */}
      <p
        className="relative font-body text-[14px] leading-[1.65] flex-1 mb-4 transition-colors duration-300"
        style={{ color: active ? '#b9c6e0' : 'var(--muted)' }}
      >
        {brand.tagline}
      </p>

      {/* Link */}
      <span
        className="relative inline-flex items-center gap-1.5 font-heading font-bold text-[13px] tracking-[0.1em] uppercase mt-auto transition-transform duration-200"
        style={{ color: 'var(--blue)' }}
      >
        Visit {brand.name}
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          <ArrowRight />
        </span>
      </span>
    </a>
  );
}

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-28" style={{ background: 'var(--bg)', position: 'relative', zIndex: 1 }}>
      <div className="max-w-[1200px] mx-auto px-12">
        <RevealWrapper>
          <div className="section-label">Ecosystem</div>
          <h2 className="font-heading font-extrabold text-[clamp(36px,4.5vw,58px)] tracking-[0.04em] uppercase max-w-xl leading-[1.05] mb-4">
            Five brands.<br />One vision.
          </h2>
          <p className="font-body text-[16px] leading-[1.75] max-w-lg mb-16" style={{ color: 'var(--muted)', textTransform: 'none', letterSpacing: 0 }}>
            Each product is independently purposeful, yet connected under the same philosophy — practical, data-driven, and built to last.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={100}>
          <div className="grid grid-cols-3 gap-5">
            {brands.map(brand => (
              <BrandCard key={brand.name} brand={brand} />
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
