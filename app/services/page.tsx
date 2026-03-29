import HeaderMinimal from "@/components/HeaderMinimal";
import Footer from "@/components/Footer";
import Link from "next/link";

const SERVICES = [
  {
    title: "AI, Data & Cloud Engineering",
    subtitle: "Architecture · Pipelines · LLMs · MLOps",
    desc: "End-to-end data & AI systems built for production. Lakehouses, ETL/ELT pipelines, Databricks/Spark, LLM/RAG solutions, model fine-tuning, inference scaling, and governance — from architecture to deployment.",
    points: ["Data lakehouse & warehouse design", "ETL/ELT pipeline engineering", "LLM & RAG implementations", "MLOps & model governance", "Cloud cost optimisation"],
    icon: "cloud",
    color: "#E8F4FD",
    stroke: "#2E9EE8",
    tag: "Data & AI",
  },
  {
    title: "Website & Product Development",
    subtitle: "Next.js · React · Tailwind · Vercel",
    desc: "Modern, performant websites and full-stack digital products. We build exactly the kind of products we ship ourselves — fast, responsive, and production-grade from day one.",
    points: ["Next.js App Router websites", "Full-stack SaaS products", "API design & integration", "Vercel / cloud deployment", "Performance & SEO tuning"],
    icon: "code",
    color: "#E0F7F4",
    stroke: "#0D9488",
    tag: "Engineering",
  },
  {
    title: "Product Development (MVPs)",
    subtitle: "Idea → Live product · Fast & focused",
    desc: "From concept to a live, testable product in weeks — not months. We handle architecture, hosting, integrations, and CI/CD so you can focus on validating your idea with real users.",
    points: ["MVP scoping & architecture", "Rapid full-stack build", "CI/CD & DevOps setup", "Third-party integrations", "Post-launch iteration support"],
    icon: "rocket",
    color: "#EDE9FE",
    stroke: "#5B21B6",
    tag: "MVP",
  },
];

function ServiceIcon({ name, stroke }: { name: string; stroke: string }) {
  const p = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke, strokeWidth: 1.6, strokeLinecap: "round" as const };
  switch (name) {
    case "cloud":  return <svg {...p}><path d="M20 17.5A4.5 4.5 0 0 0 15.5 13H15a4 4 0 0 0-7.9.7A3.5 3.5 0 0 0 4 17.5C4 19.43 5.57 21 7.5 21h13C22 21 22 18 20 17.5z"/></svg>;
    case "code":   return <svg {...p}><path d="M16 18l6-6-6-6"/><path d="M8 6L2 12l6 6"/></svg>;
    default:       return <svg {...p}><path d="M12 2s3 1 5 3 3 5 3 5-2 1-4 1-4-1-4-1"/><path d="M9 11l-7 7v2h2l7-7"/></svg>;
  }
}

export default function ServicesPage() {
  return (
    <>
      <HeaderMinimal />
      <main className="min-h-screen bg-white">

        {/* ── HERO ── */}
        <section className="hero-gradient relative overflow-hidden py-24 md:py-32">
          {/* Decorative bars */}
          <div className="absolute right-0 top-0 bottom-0 flex items-center pr-16 pointer-events-none opacity-10">
            <div className="flex flex-col gap-3">
              {[100, 160, 120, 180, 90].map((w, i) => (
                <div key={i} className="h-3 rounded bg-dnv-sky"
                  style={{ width: w, clipPath: "polygon(6% 0%,100% 0%,94% 100%,0% 100%)" }} />
              ))}
            </div>
          </div>

          <div className="container-custom relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{ background: "rgba(46,158,232,0.15)", color: "#7EC8F5" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-dnv-sky" />
              Services
            </div>

            <h1 className="font-display font-bold text-white mb-5"
              style={{ fontSize: "clamp(36px,5vw,64px)", letterSpacing: "-0.01em", lineHeight: 1.05 }}>
              We build our own<br />
              products.<br />
              <span className="text-dnv-sky">We can build yours.</span>
            </h1>

            {/* Logo bar motif */}
            <div className="flex gap-1.5 mb-6 opacity-50">
              <div className="h-1 w-10 rounded bg-white" style={{ clipPath: "polygon(8% 0%,100% 0%,92% 100%,0% 100%)" }} />
              <div className="h-1 w-16 rounded bg-dnv-sky" style={{ clipPath: "polygon(8% 0%,100% 0%,92% 100%,0% 100%)" }} />
            </div>

            <p className="text-white/65 font-light text-lg max-w-xl leading-relaxed mb-10">
              CINEQ, Dunly, Data Rhino — we ship real products on the same stack we offer clients.
              No theory. Just proven engineering, delivered fast.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#services" className="btn btn-primary">See what we offer</a>
              <Link href="/pricing" className="btn btn-ghost-white">View pricing</Link>
            </div>
          </div>
        </section>

        {/* ── PROOF STRIP ── */}
        <div className="bg-dnv-navy py-6">
          <div className="container-custom">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
              {[
                { num: "5+", label: "Products in production" },
                { num: "3",  label: "Industry verticals" },
                { num: "₹9K", label: "Starting price" },
                { num: "24hr", label: "Response time" },
              ].map((s, i) => (
                <div key={i} className="text-center px-4">
                  <p className="font-display font-bold text-2xl text-white tracking-wide">
                    {s.num}
                  </p>
                  <p className="text-xs text-white/40 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── SERVICES ── */}
        <section id="services" className="py-20 md:py-28 bg-surface-off">
          <div className="container-custom">

            <div className="text-center max-w-xl mx-auto mb-16">
              <div className="section-tag justify-center">What we offer</div>
              <h2 className="section-title text-4xl md:text-5xl">Three things.<br />Done exceptionally.</h2>
            </div>

            <div className="flex flex-col gap-6">
              {SERVICES.map((s, i) => (
                <div key={s.title}
                  className="bg-white rounded-card border border-[rgba(11,30,79,0.08)] overflow-hidden hover:shadow-lg transition-all duration-200 group">
                  <div className="grid md:grid-cols-2 gap-0">

                    {/* Left — info */}
                    <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-[rgba(11,30,79,0.07)]">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: s.color }}>
                          <ServiceIcon name={s.icon} stroke={s.stroke} />
                        </div>
                        <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                          style={{ background: s.color, color: s.stroke }}>
                          {s.tag}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-2xl text-dnv-navy tracking-wide mb-1">
                        {s.title}
                      </h3>
                      <p className="text-xs text-ink-faint font-medium tracking-wide mb-4">{s.subtitle}</p>
                      <p className="text-sm text-ink-muted font-light leading-relaxed">{s.desc}</p>

                      <a href="#contact"
                        className="inline-flex items-center gap-2 mt-6 text-sm font-semibold group-hover:gap-3 transition-all duration-150"
                        style={{ color: s.stroke }}>
                        Get in touch
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </a>
                    </div>

                    {/* Right — bullet points */}
                    <div className="p-8 md:p-10 bg-surface-off flex flex-col justify-center">
                      <p className="text-xs font-bold tracking-widest uppercase text-ink-faint mb-5">
                        What's included
                      </p>
                      <ul className="flex flex-col gap-3.5">
                        {s.points.map(pt => (
                          <li key={pt} className="flex items-start gap-3">
                            {/* DNV bar motif as bullet */}
                            <div className="flex gap-0.5 mt-1.5 flex-shrink-0">
                              <div className="w-2 h-1.5 rounded-sm bg-dnv-navy opacity-40"
                                style={{ clipPath: "polygon(10% 0%,100% 0%,90% 100%,0% 100%)" }} />
                              <div className="w-3 h-1.5 rounded-sm bg-dnv-sky"
                                style={{ clipPath: "polygon(10% 0%,100% 0%,90% 100%,0% 100%)" }} />
                            </div>
                            <span className="text-sm text-ink-muted font-light leading-snug">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY DNV ARC ── */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="section-tag">Why us</div>
                <h2 className="section-title text-4xl mb-5">
                  Our products are<br />our portfolio.
                </h2>
                <p className="text-ink-muted font-light leading-relaxed mb-4">
                  We don't just consult on data and product engineering — we live it every day building CINEQ, Dunly, and Data Rhino. Every service we offer is something we already do for ourselves.
                </p>
                <p className="text-ink-muted font-light leading-relaxed mb-8">
                  That means you get practitioners, not theorists. Engineers who care about what ships, not just what sounds good in a deck.
                </p>
                <Link href="/pricing" className="btn btn-navy">
                  See pricing
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Production-ready", sub: "Built to scale and maintain from day one", dot: "#2E9EE8" },
                  { label: "Fast delivery", sub: "MVPs in weeks, not quarters", dot: "#0D9488" },
                  { label: "Cost-conscious", sub: "Right-sized architecture, no bloat", dot: "#D97706" },
                  { label: "Proven stack", sub: "Next.js, Vercel, cloud-native — what we use ourselves", dot: "#5B21B6" },
                ].map(p => (
                  <div key={p.label} className="rounded-xl p-5 bg-surface-off border border-[rgba(11,30,79,0.07)]">
                    {/* Bar motif */}
                    <div className="flex gap-1 mb-3">
                      <div className="h-0.5 w-4 rounded bg-dnv-navy opacity-40"
                        style={{ clipPath: "polygon(8% 0%,100% 0%,92% 100%,0% 100%)" }} />
                      <div className="h-0.5 w-7 rounded"
                        style={{ background: p.dot, clipPath: "polygon(8% 0%,100% 0%,92% 100%,0% 100%)" }} />
                    </div>
                    <p className="font-display font-bold text-sm text-dnv-navy tracking-wide mb-1">{p.label}</p>
                    <p className="text-xs text-ink-faint font-light leading-relaxed">{p.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="contact" className="py-20 bg-dnv-navy">
          <div className="container-custom text-center max-w-xl mx-auto">
            <div className="flex justify-center gap-1.5 mb-8 opacity-40">
              <div className="h-1 w-8 rounded bg-white" style={{ clipPath: "polygon(8% 0%,100% 0%,92% 100%,0% 100%)" }} />
              <div className="h-1 w-14 rounded bg-dnv-sky" style={{ clipPath: "polygon(8% 0%,100% 0%,92% 100%,0% 100%)" }} />
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 tracking-wide">
              Ready to build?
            </h2>
            <p className="text-white/50 font-light mb-8 leading-relaxed">
              Tell us about your project. We'll come back with a clear scope, timeline, and price — no fluff.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="mailto:contact@dnvarc.com" className="btn btn-primary">
                Email us directly
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
              <a href="https://wa.me/919642226262" target="_blank" className="btn btn-ghost-white">
                WhatsApp us
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
