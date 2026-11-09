import RevealWrapper from './RevealWrapper';
import { BRANDS } from '@/data/brands';

const PRINCIPLES = [
  { n: '01', title: 'One job, done well.', body: 'Every product solves a single problem for a single kind of person. No bloat, no feature sprawl.' },
  { n: '02', title: 'Private by default.', body: 'No ads. No selling data. Our products earn their place by being useful, not by watching you.' },
  { n: '03', title: 'Easy to start.', body: 'Free to try or simple to begin, with nothing to learn before you get value.' },
];

export default function Company() {
  return (
    <section id="company" className="section section-alt">
      <div className="wrap relative">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <RevealWrapper className="md:col-span-5">
            <div className="mono-label mb-5">The company</div>
            <h2 className="display" style={{ fontSize: 'clamp(26px, 3.8vw, 48px)', maxWidth: '12ch' }}>
              Data Neural Vision.
            </h2>
            <p className="mt-7" style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: 17 }}>
              DNV ARC is a product company. We make focused software, run it ourselves, and keep improving it.
            </p>
            <p className="mt-5" style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: 17 }}>
              The name is the idea: data goes in, and a clear direction comes out. The logo is that idea drawn as two bars with one gap, and every product on this page follows the same path.
            </p>
          </RevealWrapper>

          <div className="md:col-span-7 flex flex-col gap-5">
            {PRINCIPLES.map((p, i) => (
              <RevealWrapper key={p.n} delay={i * 110}>
                <div className="card p-7 md:p-8 flex gap-6 items-start">
                  <span className="mono-label mt-1">{p.n}</span>
                  <div>
                    <h3 className="display" style={{ fontSize: 18 }}>{p.title}</h3>
                    <p className="mt-3" style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: 15 }}>{p.body}</p>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>

        {/* Product line */}
        <RevealWrapper className="mt-20">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4" style={{ borderTop: '1px solid var(--line)', paddingTop: 28 }}>
            <span className="mono-label" style={{ color: 'var(--muted)' }}>Operated by DNV ARC</span>
            {BRANDS.map((b) => (
              <a key={b.key} href={`#p-${b.key}`} className="no-underline flex items-center gap-2.5" style={{ color: 'var(--text)', fontSize: 15, fontWeight: 600 }}>
                <span className="w-2 h-2 rounded-full" style={{ background: b.accent }} />
                {b.title}
              </a>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
