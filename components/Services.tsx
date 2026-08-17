'use client';

import RevealWrapper from './RevealWrapper';

const services = [
  {
    icon: '⚡',
    title: 'AI, Data & Cloud Engineering',
    desc: 'Lakehouses, ETL/ELT, LLM/RAG, MLOps — end-to-end data systems built for production.',
    tags: ['Lakehouse', 'ETL/ELT', 'LLM/RAG', 'MLOps'],
  },
  {
    icon: '🛠',
    title: 'Website & Product Development',
    desc: 'Modern Next.js websites and full-stack digital products, from MVPs to production-grade deployments.',
    tags: ['Next.js', 'Full-stack', 'MVP', '₹9K+'],
  },
  {
    icon: '🚀',
    title: 'MVP Development',
    desc: 'Fast MVP architecture, CI/CD, integrations — from idea to a live, testable product in weeks.',
    tags: ['CI/CD', 'Architecture', 'Rapid'],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-28"
      style={{
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-12">
        <RevealWrapper>
          <div className="section-label">Services</div>
          <h2 className="font-heading font-extrabold text-[clamp(36px,4.5vw,58px)] tracking-[0.04em] uppercase max-w-xl leading-[1.05] mb-4">
            We build.<br />We write. We teach.
          </h2>
          <p className="font-body text-[16px] leading-[1.75] max-w-lg mb-16" style={{ color: 'var(--muted)' }}>
            Beyond our own products, DNV ARC delivers engineering, content, and education services for teams building in data, AI, and cloud.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={100}>
          <div
            className="grid grid-cols-3 rounded-2xl overflow-hidden"
            style={{ gap: '1px', background: 'var(--border)', border: '1px solid var(--border)' }}
          >
            {services.map(svc => (
              <div
                key={svc.title}
                className="service-card-top relative p-12 transition-colors duration-300 overflow-hidden"
                style={{ background: 'var(--bg2)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg3)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg2)')}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 transition-transform duration-300"
                  style={{ background: 'linear-gradient(90deg, var(--navy), var(--blue))' }}
                />

                <div
                  className="w-13 h-13 rounded-xl flex items-center justify-center mb-7 text-[22px]"
                  style={{ background: 'var(--bg3)', border: '1px solid var(--border)', width: 52, height: 52 }}
                >
                  {svc.icon}
                </div>

                <h3 className="font-heading font-bold text-[22px] tracking-[0.04em] uppercase mb-3" style={{ color: 'var(--text)' }}>
                  {svc.title}
                </h3>

                <p className="font-body text-[14px] leading-[1.7]" style={{ color: 'var(--muted)' }}>
                  {svc.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {svc.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-heading font-semibold text-[11px] tracking-[0.1em] uppercase px-2.5 py-1 rounded"
                      style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--muted)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
