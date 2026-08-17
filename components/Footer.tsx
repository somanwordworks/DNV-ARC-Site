'use client';

export default function Footer() {
  const brands = [
    { label: 'CINEQ',      href: 'https://cineq.in/' },
    { label: 'Data Rhino', href: 'https://datarhino.in/' },
    { label: 'Noteek',     href: 'https://noteek.com/' },
    { label: 'Conteak',    href: 'https://conteak.com/' },
    { label: 'Dunly',      href: 'https://dunly.in/' },
  ];
  const company = [
    { label: 'About',      href: '#about' },
    { label: 'Ecosystem',  href: '#ecosystem' },
    { label: 'Services',   href: '#services' },
    { label: 'Email us',   href: 'mailto:info@dnvarc.com' },
    { label: 'WhatsApp',   href: 'https://wa.me/919642226262' },
  ];

  return (
    <footer
      className="pt-16 pb-8"
      style={{ background: 'var(--navy)', borderTop: '1px solid rgba(42,174,224,0.15)', position: 'relative', zIndex: 1 }}
    >
      <div className="max-w-[1200px] mx-auto px-12">
        <div className="grid grid-cols-[2fr_1fr_1fr] gap-16 mb-12">

          {/* Brand */}
          <div>
            <div className="font-heading font-extrabold text-[24px] tracking-[0.12em] uppercase mb-1 text-white">
              DNV-ARC
            </div>
            <div className="font-heading font-normal text-[11px] tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--blue)' }}>
              Data · Neural · Vision
            </div>
            <p className="font-body text-[14px] leading-[1.7] max-w-[280px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
              A group company connecting purpose-built SaaS products across analytics, media, education, and finance.
            </p>
          </div>

          {/* Brands */}
          <div>
            <div className="font-heading font-bold text-[12px] tracking-[0.16em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Brands
            </div>
            <ul className="flex flex-col gap-3 list-none">
              {brands.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-[14px] no-underline transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="font-heading font-bold text-[12px] tracking-[0.16em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Company
            </div>
            <ul className="flex flex-col gap-3 list-none">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="font-body text-[14px] no-underline transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex justify-between items-center pt-8 font-body text-[13px]"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.3)' }}
        >
          <span>© 2026 DNV ARC — Data Neural Vision. All rights reserved.</span>
          <div className="flex items-center gap-2">
            <span className="status-dot" />
            <span>5 products actively maintained</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
