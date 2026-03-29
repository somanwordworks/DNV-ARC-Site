export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-[rgba(11,30,79,0.08)]">
      <div className="container-custom py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand col */}
          <div className="md:col-span-2">
            <img src="/logos/dnv-arc.png" alt="DNV ARC" className="h-16 w-auto object-contain mb-3" style={{ maxWidth: 200 }} />
            {/* Logo bar motif */}
            <div className="flex gap-1.5 mb-4">
              <div className="h-1 w-8 rounded bg-dnv-navy opacity-60" style={{ clipPath: "polygon(8% 0%,100% 0%,92% 100%,0% 100%)" }} />
              <div className="h-1 w-12 rounded bg-dnv-sky" style={{ clipPath: "polygon(8% 0%,100% 0%,92% 100%,0% 100%)" }} />
            </div>
            <p className="text-sm text-ink-muted font-light leading-relaxed max-w-xs">
              A group company connecting purpose-built SaaS products across analytics, media, education, and finance.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="mailto:contact@dnvarc.com"
                className="text-sm text-ink-muted hover:text-dnv-navy transition-colors flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                contact@dnvarc.com
              </a>
            </div>
          </div>

          {/* Brands col */}
          <div>
            <h5 className="font-display font-bold text-sm tracking-widest uppercase text-dnv-navy mb-4">
              Brands
            </h5>
            <ul className="space-y-2.5">
              {[
                { label: "CINEQ", href: "https://cineq.in/", color: "#2E9EE8" },
                { label: "Data Rhino", href: "https://datarhino.in/", color: "#1565C0" },
                { label: "Noteek", href: "https://noteek.com/", color: "#D97706" },
                { label: "Conteak", href: "https://conteak.com/", color: "#5B21B6" },
                { label: "Dunly", href: "https://dunly.in/", color: "#0D9488" },
              ].map(b => (
                <li key={b.label}>
                  <a href={b.href} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-ink-muted hover:text-dnv-navy transition-colors font-light flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: b.color }} />
                    {b.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company col */}
          <div>
            <h5 className="font-display font-bold text-sm tracking-widest uppercase text-dnv-navy mb-4">
              Company
            </h5>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "/#about" },
                { label: "Ecosystem", href: "/#ecosystem" },
                { label: "Services", href: "/services" },
                { label: "Pricing", href: "/pricing" },
                { label: "WhatsApp", href: "https://wa.me/919642226262" },
              ].map(l => (
                <li key={l.label}>
                  <a href={l.href}
                    className="text-sm text-ink-muted hover:text-dnv-navy transition-colors font-light">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[rgba(11,30,79,0.08)] flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} DNV ARC — Data Neural Vision. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-ink-faint">
            <span className="w-1.5 h-1.5 rounded-full bg-dnv-sky" />
            5 products actively maintained
          </div>
        </div>
      </div>
    </footer>
  );
}
