import HeaderMinimal from "@/components/HeaderMinimal";
import Footer from "@/components/Footer";
import Link from "next/link";

const INDIA = [
  {
    name: "Starter",
    price: "₹9,999",
    desc: "Perfect for a clean, fast one-page presence.",
    featured: false,
    features: ["One-page website", "Up to 5 sections", "Responsive design", "Contact form", "Basic SEO setup"],
  },
  {
    name: "Business",
    price: "₹24,999",
    desc: "Multi-page site with integrations and SEO.",
    featured: true,
    features: ["Up to 5 pages", "WhatsApp integration", "Social media links", "Basic SEO", "2 revisions", "GA4 analytics"],
  },
  {
    name: "Professional",
    price: "₹44,999",
    desc: "Full-featured website with advanced optimization.",
    featured: false,
    features: ["Up to 10 pages", "Custom UI design", "Blog / CMS setup", "Advanced SEO", "3 revisions", "Performance audit"],
  },
];

const INTL = [
  {
    name: "Starter",
    price: "$249",
    featured: false,
    features: ["One-page website", "Responsive design", "Contact form", "Basic SEO"],
  },
  {
    name: "Business",
    price: "$599",
    featured: true,
    features: ["Up to 5 pages", "WhatsApp integration", "SEO setup", "GA4 analytics", "2 revisions"],
  },
  {
    name: "Professional",
    price: "$1,099",
    featured: false,
    features: ["Up to 10 pages", "Blog + gallery", "Advanced SEO", "Performance optimization", "3 revisions"],
  },
];

function PricingCard({ plan, currency }: { plan: any; currency: "in" | "intl" }) {
  return (
    <div className={`relative rounded-card overflow-hidden ${
      plan.featured
        ? "border-2 border-dnv-sky shadow-sky"
        : "border border-[rgba(11,30,79,0.10)] shadow-soft"
    } bg-white`}>
      {plan.featured && (
        <div className="bg-dnv-sky text-white text-center py-2 text-xs font-semibold tracking-widest uppercase">
          Most popular
        </div>
      )}
      {/* Top bar motif */}
      <div className="h-0.5 w-full flex gap-1" style={{ background: plan.featured ? "#2E9EE8" : "transparent" }}>
        {!plan.featured && (
          <>
            <div className="h-full flex-none w-8" style={{ background: "#0B1E4F", opacity: 0.2, clipPath: "polygon(8% 0%,100% 0%,92% 100%,0% 100%)" }} />
            <div className="h-full flex-none w-12" style={{ background: "#2E9EE8", opacity: 0.4, clipPath: "polygon(8% 0%,100% 0%,92% 100%,0% 100%)" }} />
          </>
        )}
      </div>

      <div className="p-7">
        <h3 className="font-display font-bold text-lg tracking-wide text-dnv-navy mb-1">{plan.name}</h3>
        {plan.desc && <p className="text-xs text-ink-faint mb-4 font-light">{plan.desc}</p>}
        <div className="font-display font-bold text-4xl text-dnv-navy tracking-tight mb-6">
          {plan.price}
        </div>
        <ul className="space-y-2.5 mb-8">
          {plan.features.map((f: string) => (
            <li key={f} className="flex items-center gap-2.5 text-sm text-ink-muted font-light">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2E9EE8" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              {f}
            </li>
          ))}
        </ul>
        <a href="/#contact"
          className={`btn w-full text-sm font-semibold justify-center ${plan.featured ? "btn-primary" : "btn-ghost"}`}>
          Get started
        </a>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <HeaderMinimal />
      <main className="min-h-screen bg-white">

        {/* Hero */}
        <section className="hero-gradient relative overflow-hidden py-20">
          <div className="absolute right-0 top-0 bottom-0 flex items-center pr-16 pointer-events-none opacity-10">
            <div className="flex flex-col gap-3">
              {[100, 160, 120, 180, 90].map((w, i) => (
                <div key={i} className="h-3 rounded bg-dnv-sky"
                  style={{ width: w, clipPath: "polygon(6% 0%,100% 0%,94% 100%,0% 100%)" }} />
              ))}
            </div>
          </div>
          <div className="container-custom relative z-10 text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{ background: "rgba(46,158,232,0.15)", color: "#7EC8F5" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-dnv-sky" />
              Transparent pricing
            </div>
            <h1 className="font-display font-bold text-white mb-4"
              style={{ fontSize: "clamp(36px,5vw,56px)", letterSpacing: "-0.01em" }}>
              Website Development<br />
              <span className="text-dnv-sky">Pricing</span>
            </h1>
            <p className="text-white/60 font-light text-lg max-w-xl mx-auto">
              Transparent pricing tailored for Indian and international clients. No hidden fees.
            </p>
          </div>
        </section>

        {/* India pricing */}
        <section className="py-16 md:py-24 bg-surface-off">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-10">
              <span className="text-2xl">🇮🇳</span>
              <div>
                <div className="section-tag">India pricing</div>
                <h2 className="section-title text-3xl">Plans for Indian clients</h2>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {INDIA.map(p => <PricingCard key={p.name} plan={p} currency="in" />)}
            </div>
          </div>
        </section>

        {/* International pricing */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-10">
              <span className="text-2xl">🌎</span>
              <div>
                <div className="section-tag">International pricing</div>
                <h2 className="section-title text-3xl">Plans for global clients</h2>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {INTL.map(p => <PricingCard key={p.name} plan={p} currency="intl" />)}
            </div>
          </div>
        </section>

        {/* Notes + CTA */}
        <section className="py-16 bg-dnv-navy">
          <div className="container-custom text-center max-w-2xl mx-auto">
            {/* Logo bar motif */}
            <div className="flex justify-center gap-1.5 mb-8 opacity-40">
              <div className="h-1 w-8 rounded bg-white" style={{ clipPath: "polygon(8% 0%,100% 0%,92% 100%,0% 100%)" }} />
              <div className="h-1 w-14 rounded bg-dnv-sky" style={{ clipPath: "polygon(8% 0%,100% 0%,92% 100%,0% 100%)" }} />
            </div>
            <h2 className="font-display font-bold text-3xl text-white mb-4 tracking-wide">Need something custom?</h2>
            <p className="text-white/50 font-light text-sm leading-relaxed mb-8">
              Pricing includes design and development only. Content and images must be provided by the client unless content writing is selected. Hosting and maintenance are billed separately. Custom features are quoted on request.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/#contact" className="btn btn-primary">Get a custom quote</a>
              <Link href="/services" className="btn btn-ghost-white">View all services</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
