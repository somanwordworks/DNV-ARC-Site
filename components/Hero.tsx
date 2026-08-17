'use client';

import NeuralNetwork from './NeuralNetwork';

export default function Hero() {
  return (
    <>
      <NeuralNetwork />
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 pt-[120px] pb-20"
        style={{ zIndex: 1 }}
      >
        {/* Eyebrow */}
        <p className="anim-fadeup-0 font-heading font-normal text-[13px] tracking-[0.35em] uppercase mb-3"
           style={{ color: 'var(--blue)' }}>
          Group Company · 5 Brands · 3 Verticals
        </p>

        {/* Logo bar shape */}
        <div className="anim-fadeup-0 flex items-center mb-8">
          <div
            className="w-20 h-2.5 rounded-l-full"
            style={{
              background: 'var(--navy)',
              clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)',
            }}
          />
          <div
            className="w-20 h-2.5 rounded-r-full"
            style={{
              background: 'var(--blue)',
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)',
            }}
          />
        </div>

        {/* Badge */}
        <div
          className="anim-fadeup-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 font-heading font-semibold text-[12px] tracking-[0.18em] uppercase"
          style={{ border: '1px solid var(--border2)', background: 'rgba(42,174,224,0.06)', color: 'var(--blue)' }}
        >
          <span className="pulse-dot w-1.5 h-1.5 rounded-full" style={{ background: 'var(--blue)', boxShadow: '0 0 10px var(--blue)' }} />
          Data · Neural · Vision
        </div>

        {/* H1 */}
        <h1
          className="anim-fadeup-1 font-heading font-extrabold uppercase tracking-[0.04em] max-w-[960px]"
          style={{ fontSize: 'clamp(52px, 8vw, 100px)', lineHeight: 1.0 }}
        >
          Building the{' '}
          <span style={{ color: 'var(--blue)' }}>Arc</span>{' '}
          of<br />Modern Innovation
        </h1>

        {/* Subheading */}
        <p
          className="anim-fadeup-2 mt-6 max-w-[560px] text-[17px] leading-[1.7] font-body"
          style={{ color: 'var(--muted)' }}
        >
          DNV ARC connects purpose-built SaaS products across cinema analytics,
          personal finance, and professional education — lightweight, affordable,
          and impactful.
        </p>

        {/* CTAs */}
        <div className="anim-fadeup-3 flex flex-wrap gap-4 mt-12 justify-center">
          <a
            href="#ecosystem"
            className="inline-flex items-center gap-2 px-9 py-3.5 rounded-md font-heading font-bold text-[15px] tracking-[0.12em] uppercase text-white transition-all duration-200 no-underline"
            style={{ background: 'var(--blue)', boxShadow: '0 0 40px rgba(42,174,224,0.3)' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 60px rgba(42,174,224,0.45)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)';    e.currentTarget.style.boxShadow = '0 0 40px rgba(42,174,224,0.3)'; }}
          >
            Explore our ecosystem →
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-9 py-3.5 rounded-md font-heading font-semibold text-[15px] tracking-[0.12em] uppercase transition-all duration-200 no-underline"
            style={{ border: '1px solid var(--border2)', color: 'var(--text)', background: 'transparent' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--blue)'; e.currentTarget.style.color = 'var(--blue)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--text)'; }}
          >
            Our story
          </a>
        </div>

        {/* Stats */}
        <div className="anim-fadeup-4 flex flex-wrap gap-0 mt-[72px] justify-center">
          {[
            { val: '5+',   label: 'Products' },
            { val: '3',    label: 'Verticals' },
            { val: '₹9K',  label: 'Starting Price' },
            { val: '100%', label: 'Web-first' },
          ].map(({ val, label }, i) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1.5 px-10"
              style={{ borderLeft: i === 0 ? 'none' : '1px solid var(--border)' }}
            >
              <span className="font-heading font-extrabold text-[36px] tracking-[0.04em] leading-none" style={{ color: 'var(--blue)' }}>
                {val}
              </span>
              <span className="font-heading font-medium text-[12px] tracking-[0.14em] uppercase" style={{ color: 'var(--muted)' }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="anim-fadein-5 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div
            className="scroll-line-anim w-px h-12"
            style={{ background: 'linear-gradient(to bottom, var(--blue), transparent)' }}
          />
        </div>
      </section>
    </>
  );
}
