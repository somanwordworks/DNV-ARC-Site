import RevealWrapper from './RevealWrapper';
import { BRANDS, type Brand } from '@/data/brands';

// A small, hand-drawn motif per product so each panel says something about what it does.
function Motif({ k, c }: { k: Brand['key']; c: string }) {
  const p = { fill: 'none', stroke: c, strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  return (
    <svg viewBox="0 0 400 260" className="w-full h-full" aria-hidden>
      {k === 'cineq' && (
        <g>
          {[40, 90, 60, 130, 100, 170, 140].map((h, i) => (
            <rect key={i} x={40 + i * 48} y={220 - h} width="28" height={h} rx="4" fill={c} opacity={0.12 + i * 0.1} />
          ))}
          <path {...p} d="M40 180 L100 140 L150 160 L220 90 L270 110 L340 40" className="draw" style={{ ['--len' as string]: 420 }} />
          <circle cx="340" cy="40" r="6" fill={c} />
        </g>
      )}
      {k === 'datarhino' && (
        <g>
          <path {...p} opacity=".35" d="M20 200 C90 200 90 140 160 140 S240 190 300 120 S360 90 390 70" />
          <path {...p} d="M20 220 C100 220 110 170 180 160 S260 200 320 140 S370 120 390 110" className="draw" style={{ ['--len' as string]: 520 }} />
          <path {...p} opacity=".5" d="M20 240 C110 240 130 200 200 195 S290 215 390 170" />
          {[[160, 140], [300, 120], [180, 160], [320, 140]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="5" fill={c} />)}
        </g>
      )}
      {k === 'dunly' && (
        <g transform="translate(200 130)">
          <circle r="86" {...p} opacity=".18" strokeWidth="22" />
          <circle r="86" {...p} strokeWidth="22" strokeDasharray="330 540" transform="rotate(-90)" className="draw" style={{ ['--len' as string]: 540 }} />
          <circle r="86" {...p} strokeWidth="22" opacity=".5" strokeDasharray="120 540" strokeDashoffset="-340" transform="rotate(-90)" />
          <circle r="4" fill={c} />
        </g>
      )}
      {k === 'noteek' && (
        <g>
          <path {...p} opacity=".35" d="M50 200 H350" />
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect x={50 + i * 90} y={150 - i * 28} width="64" height="44" rx="10" fill={c} opacity={i === 2 ? 0.9 : 0.16 + i * 0.05} stroke={c} />
              {i < 3 && <path {...p} opacity=".5" d={`M${114 + i * 90} ${172 - i * 28} L${140 + i * 90} ${144 - i * 28}`} />}
            </g>
          ))}
        </g>
      )}
      {k === 'conteak' && (
        <g>
          {[[200, 130], [90, 60], [310, 70], [70, 190], [330, 190], [200, 220]].map(([x, y], i) => (
            <g key={i}>
              {i > 0 && <path {...p} opacity=".4" d={`M200 130 L${x} ${y}`} className="draw" style={{ ['--len' as string]: 200 }} />}
              <circle cx={x} cy={y} r={i === 0 ? 16 : 9} fill={c} opacity={i === 0 ? 1 : 0.55} />
            </g>
          ))}
          <path {...p} opacity=".25" d="M90 60 L310 70 L330 190 L200 220 L70 190 Z" />
        </g>
      )}
    </svg>
  );
}

export default function Products() {
  return (
    <section id="products" className="section ambient">
      <div className="wrap relative">
        <RevealWrapper>
          <div className="mono-label mb-5">The products</div>
          <h2 className="display" style={{ fontSize: 'clamp(26px, 4vw, 52px)', maxWidth: '16ch' }}>
            Five products. Each does one job well.
          </h2>
          <p className="mt-6" style={{ color: 'var(--muted)', maxWidth: 580, lineHeight: 1.75, fontSize: 17 }}>
            Cinema, cloud, money, learning and privacy. Every one is built, run and improved by DNV ARC.
          </p>
        </RevealWrapper>

        {/* Index */}
        <RevealWrapper delay={80} className="mt-12">
          <nav aria-label="Products" className="flex flex-wrap gap-3">
            {BRANDS.map((b, i) => (
              <a key={b.key} href={`#p-${b.key}`} className="btn-ghost" style={{ padding: '12px 18px', fontSize: 11 }}>
                <span style={{ color: b.accentDark }}>0{i + 1}</span> {b.title}
              </a>
            ))}
          </nav>
        </RevealWrapper>

        <div className="mt-20 flex flex-col gap-24 md:gap-32">
          {BRANDS.map((b, i) => {
            const flip = i % 2 === 1;
            return (
              <article key={b.key} id={`p-${b.key}`} className="scroll-mt-28 grid md:grid-cols-12 gap-10 md:gap-14 items-center">
                {/* Visual */}
                <RevealWrapper className={`md:col-span-6 ${flip ? 'md:order-2' : ''}`}>
                  <div
                    className="relative rounded-[28px] overflow-hidden"
                    style={{
                      aspectRatio: '4 / 3',
                      border: '1px solid var(--line)',
                      background: `radial-gradient(70% 60% at 80% 10%, rgba(255,255,255,0.7), transparent 70%), linear-gradient(160deg, ${b.accentBg} 0%, ${b.accent}2e 100%)`,
                    }}
                  >
                    <div className="absolute inset-0 p-8 md:p-12 opacity-90">
                      <Motif k={b.key} c={b.accentDark} />
                    </div>
                    <div className="absolute left-6 top-6 rounded-xl px-4 py-2.5" style={{ background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(10,34,89,0.08)' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={b.logo} alt={`${b.title} logo`} className="h-7 w-auto max-w-[150px] object-contain" />
                    </div>
                    <div className="absolute right-6 bottom-5 display" style={{ fontSize: 'clamp(48px, 8vw, 96px)', color: b.accentDark, opacity: 0.14, lineHeight: 1 }}>
                      0{i + 1}
                    </div>
                  </div>
                </RevealWrapper>

                {/* Copy */}
                <RevealWrapper delay={120} className="md:col-span-6">
                  <div className="mono-label mb-4" style={{ color: b.accentDark }}>{b.category}</div>
                  <h3 className="display" style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}>{b.title}</h3>
                  <p className="mt-3" style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.4 }}>{b.tagline}</p>
                  <p className="mt-5" style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: 16, maxWidth: 520 }}>{b.description}</p>
                  <ul className="mt-7 flex flex-col gap-3 list-none p-0">
                    {b.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3" style={{ fontSize: 15 }}>
                        <span className="mt-[9px] flex-shrink-0" style={{ width: 14, height: 2, background: b.accent }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                    <a href={b.href} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: b.accentDark, boxShadow: `0 10px 28px ${b.accentDark}44` }}>
                      Visit {b.title} →
                    </a>
                    <span className="mono-label" style={{ color: 'var(--muted)', letterSpacing: '0.12em' }}>For {b.audience.toLowerCase()}</span>
                  </div>
                </RevealWrapper>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
