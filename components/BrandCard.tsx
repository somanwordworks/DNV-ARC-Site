type Brand = {
  key: string;
  title: string;
  tagline: string;
  href: string;
  logo: string;
  description: string;
  category: string;
  accentBg: string;
  accentText: string;
  accentCat: string;
  accentCatText: string;
  accentLink: string;
  wide: boolean;
};

export default function BrandCard({ brand }: { brand: Brand }) {
  return (
    <a
      href={brand.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block card hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
    >
      {/* Top — colored header */}
      <div
        className="p-7 relative overflow-hidden"
        style={{ background: brand.accentBg, minHeight: "160px" }}
      >
        {/* Category pill */}
        <span
          className="absolute top-5 right-5 text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
          style={{ background: brand.accentCat, color: brand.accentCatText }}
        >
          {brand.category}
        </span>

        {/* Logo */}
        <img
          src={brand.logo}
          alt={brand.title}
          className="h-10 w-auto object-contain mb-4 opacity-90"
        />

        {/* Name + tagline */}
        <h3
          className="font-display font-bold text-2xl tracking-wide leading-none mb-1"
          style={{ color: brand.accentText }}
        >
          {brand.title}
        </h3>
        <p className="text-sm font-light" style={{ color: brand.accentText, opacity: 0.6 }}>
          {brand.tagline}
        </p>

        {/* Logo bar motif (parallelogram, subtle) */}
        <div className="absolute bottom-0 right-0 flex gap-1 opacity-10 pb-4 pr-4">
          <div className="w-8 h-1.5 rounded" style={{ background: brand.accentText, clipPath: "polygon(10% 0%,100% 0%,90% 100%,0% 100%)" }} />
          <div className="w-12 h-1.5 rounded" style={{ background: brand.accentText, clipPath: "polygon(10% 0%,100% 0%,90% 100%,0% 100%)" }} />
        </div>
      </div>

      {/* Body */}
      <div className="p-6 border-t border-[rgba(11,30,79,0.07)]">
        <p className="text-sm leading-relaxed text-ink-muted font-light mb-5">
          {brand.description}
        </p>
        <span
          className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-3 transition-all duration-150"
          style={{ color: brand.accentLink }}
        >
          Visit {brand.title}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
      </div>
    </a>
  );
}
