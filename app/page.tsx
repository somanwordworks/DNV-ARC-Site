import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandCard from "@/components/BrandCard";
import ClienteleMarquee from "@/components/ClienteleMarquee";
import ContactForm from "@/components/ContactForm";
import { BRANDS } from "@/data/brands";

const SERVICES = [
  {
    title: "AI, Data & Cloud Engineering",
    desc: "Lakehouses, ETL/ELT, LLM/RAG, MLOps — end-to-end data systems built for production.",
    icon: "cloud",
    color: "#E8F4FD",
    stroke: "#2E9EE8",
  },
  {
    title: "Website & Product Development",
    desc: "Modern Next.js websites and full-stack digital products, from MVPs to production-grade deployments.",
    icon: "code",
    color: "#E0F7F4",
    stroke: "#0D9488",
  },
  {
    title: "Product Development (MVPs)",
    desc: "Fast MVP architecture, CI/CD, integrations — from idea to a live, testable product in weeks.",
    icon: "rocket",
    color: "#EDE9FE",
    stroke: "#5B21B6",
  },
];

function ServiceIcon({ name, stroke }: { name: string; stroke: string }) {
  const props = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke, strokeWidth: 1.7, strokeLinecap: "round" as const };
  switch (name) {
    case "cloud":   return <svg {...props}><path d="M20 17.5A4.5 4.5 0 0 0 15.5 13H15a4 4 0 0 0-7.9.7A3.5 3.5 0 0 0 4 17.5C4 19.43 5.57 21 7.5 21h13C22 21 22 18 20 17.5z"/></svg>;
    case "code":    return <svg {...props}><path d="M16 18l6-6-6-6"/><path d="M8 6L2 12l6 6"/></svg>;
    case "book":    return <svg {...props}><path d="M3 5.5A2.5 2.5 0 0 1 5.5 3H19"/><path d="M3 21V6.5A2.5 2.5 0 0 1 5.5 4H19V21H5.5A2.5 2.5 0 0 1 3 18.5"/></svg>;
    case "cap":     return <svg {...props}><path d="M12 2l7 4v6c0 5-7 8-7 8s-7-3-7-8V6l7-4z"/></svg>;
    case "rocket":  return <svg {...props}><path d="M12 2s3 1 5 3 3 5 3 5-2 1-4 1-4-1-4-1"/><path d="M9 11l-7 7v2h2l7-7"/></svg>;
    default:        return <svg {...props}><path d="M3 21l3-1 11-11 1-3-3 1L4 20z"/></svg>;
  }
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* ── HERO ── */}
      <section className="hero-gradient hero-noise relative overflow-hidden">
        {/* Decorative arc bars (logo motif, large) */}
        <div className="absolute right-0 top-0 bottom-0 flex items-end pb-0 pointer-events-none opacity-10 pr-12">
          <div className="flex flex-col gap-3">
            {[120, 180, 140, 200, 100].map((w, i) => (
              <div key={i} className="h-3 rounded bg-dnv-sky"
                style={{ width: w, clipPath: "polygon(6% 0%,100% 0%,94% 100%,0% 100%)" }} />
            ))}
          </div>
        </div>

        <div className="container-custom py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left */}
          <div className="reveal reveal-hero">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{ background: "rgba(46,158,232,0.15)", color: "#7EC8F5" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-dnv-sky" />
              Group Company · 5 Brands · 3 Verticals
            </div>

            <h1 className="font-display font-bold text-white leading-tight mb-6"
              style={{ fontSize: "clamp(40px, 5vw, 68px)", letterSpacing: "-0.01em" }}>
              Building the Arc<br />
              of Modern<br />
              <span className="text-dnv-sky">Innovation</span>
            </h1>

            {/* Logo bar motif */}
            <div className="flex gap-1.5 mb-6">
              <div className="h-1 w-10 rounded opacity-60"
                style={{ background: "white", clipPath: "polygon(8% 0%,100% 0%,92% 100%,0% 100%)" }} />
              <div className="h-1 w-16 rounded"
                style={{ background: "#2E9EE8", clipPath: "polygon(8% 0%,100% 0%,92% 100%,0% 100%)" }} />
            </div>

            <p className="text-white/70 text-lg font-light leading-relaxed mb-10 max-w-md">
              DNV ARC connects purpose-built SaaS products across cinema analytics,
              personal finance, and professional education — lightweight, affordable, and impactful.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#ecosystem" className="btn btn-primary">
                Explore our brands
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#about" className="btn btn-ghost-white">
                Our story
              </a>
            </div>
          </div>

          {/* Right — brand card */}
          <div className="reveal reveal-hero" style={{ transitionDelay: "0.15s" }}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-white/10">
              {/* Top bar */}
              <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #0B1E4F, #2E9EE8)" }} />
              <div className="p-6">
                <p className="text-xs font-semibold tracking-[0.12em] uppercase text-ink-faint mb-4">
                  DNV ARC Ecosystem
                </p>

                <div className="grid grid-cols-2 gap-2.5 mb-4">
                  {[
                    { name: "CINEQ", cat: "Cinema Analytics", bg: "#0B1621", fg: "white", dot: "#2E9EE8" },
                    { name: "Data Rhino", cat: "AI & Cloud", bg: "#E8F0FF", fg: "#1565C0", dot: "#1565C0" },
                    { name: "Noteek", cat: "Education", bg: "#FEF3C7", fg: "#7C4A00", dot: "#D97706" },
                    { name: "Dunly", cat: "Finance", bg: "#E0F7F4", fg: "#065244", dot: "#0D9488" },
                  ].map(b => (
                    <div key={b.name} className="rounded-xl px-4 py-3 flex items-center gap-2.5"
                      style={{ background: b.bg }}>
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: b.dot }} />
                      <div>
                        <p className="text-sm font-display font-bold tracking-wide" style={{ color: b.fg }}>{b.name}</p>
                        <p className="text-[11px] font-light" style={{ color: b.fg, opacity: 0.6 }}>{b.cat}</p>
                      </div>
                    </div>
                  ))}
                  <div className="col-span-2 rounded-xl px-4 py-3 flex items-center gap-2.5"
                    style={{ background: "#EDE9FE" }}>
                    <span className="w-2 h-2 rounded-full bg-brand-conteak flex-shrink-0" />
                    <div>
                      <p className="text-sm font-display font-bold tracking-wide text-brand-conteak">Conteak</p>
                      <p className="text-[11px] font-light text-brand-conteak opacity-60">Private Contacts</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-0 border-t border-[rgba(11,30,79,0.07)] pt-4">
                  {[["5+", "Products"], ["3", "Verticals"], ["Web-first", "Approach"]].map(([n, l]) => (
                    <div key={l} className="flex-1 text-center px-2">
                      <p className="font-display font-bold text-xl text-dnv-navy tracking-wide">{n}</p>
                      <p className="text-[11px] text-ink-faint">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="stats-bar">
        <div className="container-custom py-9 grid grid-cols-2 md:grid-cols-4 gap-0">
          {([
            { num: "5", sfx: "+",  label: "Products in production" },
            { num: "3", sfx: "",   label: "Industry verticals" },
            { num: "₹9", sfx: "K", label: "Starting web dev price" },
            { num: "100", sfx: "%", label: "Web-first by design" },
          ] as const).map((s, i) => (
            <div key={i} className={`text-center px-6 py-4 ${i < 3 ? "border-r border-white/10" : ""}`}>
              <p className="font-display font-bold text-4xl text-white tracking-wide mb-1">
                {s.num}<span style={{ color: "#2E9EE8" }}>{s.sfx}</span>
              </p>
              <p className="text-xs text-white/40 font-light tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CLIENTELE ── */}
      <ClienteleMarquee />

      {/* ── ECOSYSTEM ── */}
      <section id="ecosystem" className="py-20 md:py-28 bg-surface-off">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal">
            <div>
              <div className="section-tag">Ecosystem</div>
              <h2 className="section-title text-4xl md:text-5xl">Five brands.<br />One vision.</h2>
            </div>
            <p className="text-ink-muted font-light text-base max-w-sm leading-relaxed">
              Each product is independently purposeful, yet connected under the same philosophy — practical, data-driven, and built to last.
            </p>
          </div>

          {/* Row 1: CINEQ + Data Rhino + Dunly */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {BRANDS.filter(b => ["cineq","datarhino","dunly"].includes(b.key)).map(b => (
              <BrandCard key={b.key} brand={b as any} />
            ))}
          </div>
          {/* Row 2: Noteek + Conteak — centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:w-2/3 mx-auto">
            {BRANDS.filter(b => ["noteek","conteak"].includes(b.key)).map(b => (
              <BrandCard key={b.key} brand={b as any} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES TEASER ── */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-end mb-14 reveal">
            <div>
              <div className="section-tag">Services</div>
              <h2 className="section-title text-4xl md:text-5xl">We build.<br />We write.<br />We teach.</h2>
            </div>
            <div>
              <p className="text-ink-muted font-light text-base leading-relaxed mb-6">
                Beyond our own products, DNV ARC delivers engineering, content, and education services for teams building in data, AI, and cloud.
              </p>
              <a href="/services" className="btn btn-navy">
                See all services
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 reveal">
            {SERVICES.map(s => (
              <div key={s.title} className="bg-white p-7 hover:bg-surface-off transition-colors duration-150">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: s.color }}>
                  <ServiceIcon name={s.icon} stroke={s.stroke} />
                </div>
                <h3 className="font-display font-bold text-lg tracking-wide text-dnv-navy mb-2">{s.title}</h3>
                <p className="text-sm text-ink-muted font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / VISION ── */}
      <section id="about" className="py-20 md:py-28 bg-dnv-navy">
        <div className="container-custom grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="section-tag" style={{ color: "#7EC8F5" }}>
              <span className="w-5 h-0.5 bg-dnv-sky mr-2 inline-block rounded" />
              About DNV ARC
            </div>
            <h2 className="section-title text-4xl md:text-5xl text-white mb-5">
              Built on data.<br />Driven by purpose.
            </h2>
            {/* Logo bar motif */}
            <div className="flex gap-1.5 mb-6 opacity-60">
              <div className="h-1 w-8 rounded bg-white" style={{ clipPath: "polygon(8% 0%,100% 0%,92% 100%,0% 100%)" }} />
              <div className="h-1 w-14 rounded bg-dnv-sky" style={{ clipPath: "polygon(8% 0%,100% 0%,92% 100%,0% 100%)" }} />
            </div>
            <p className="text-white/60 font-light leading-relaxed mb-4">
              We build experiences that blend creativity with data-driven intelligence. Our products are lightweight, affordable, and accessible — including support for regional languages — so small teams can do big things.
            </p>
            <p className="text-white/60 font-light leading-relaxed">
              DNV ARC follows a web-first philosophy — reducing unnecessary screen time while maximising impact through focused, intentional digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 reveal" style={{ transitionDelay: "0.15s" }}>
            {[
              { title: "Continuous learning & growth", desc: "Every product we build teaches us something that feeds back into everything else.", dot: "#2E9EE8" },
              { title: "Data-informed decisions everywhere", desc: "We build analytics-first — the best products help you understand what's working.", dot: "#0D9488" },
              { title: "Innovation with integrity", desc: "Privacy-first, ad-free, honest pricing. We monetise value, not your data.", dot: "#D97706" },
              { title: "Accessible & multilingual", desc: "Affordable and designed for small teams — not just enterprise budgets.", dot: "#5B21B6" },
            ].map(p => (
              <div key={p.title}
                className="flex gap-4 p-5 rounded-xl border border-white/8 hover:bg-white/5 transition-colors"
                style={{ background: "rgba(255,255,255,0.04)" }}>
                <span className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ background: p.dot }} />
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{p.title}</p>
                  <p className="text-white/45 text-sm font-light leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0B1E4F 0%, #0d2460 60%, #1a3a7a 100%)" }}>
        {/* Sky accent glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle, #2E9EE8, transparent 70%)" }} />

        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-12 reveal">
            <div className="section-tag justify-center" style={{ color: "#7EC8F5" }}>
              <span className="w-5 h-0.5 bg-dnv-sky mr-2 inline-block rounded" />
              Contact
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4" style={{ letterSpacing: "-0.01em" }}>
              Let's build something<br />together.
            </h2>
            <p className="text-white/60 font-light">
              Got a project in mind? Tell us about it and we'll get back within 24 hours.
            </p>
          </div>

          <ContactForm />

          <p className="text-center text-white/35 text-xs mt-8">
            Or reach us directly:{" "}
            <a href="mailto:contact@dnvarc.com" className="text-white/60 hover:text-white transition-colors underline">contact@dnvarc.com</a>
            {" · "}
            <a href="https://wa.me/919642226262" className="text-white/60 hover:text-white transition-colors underline">WhatsApp</a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
