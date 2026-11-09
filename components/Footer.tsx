import Link from 'next/link';
import Image from 'next/image';

const BRANDS = [
  { label: 'CINEQ', href: 'https://cineq.in/' },
  { label: 'Data Rhino', href: 'https://datarhino.in/' },
  { label: 'Dunly', href: 'https://dunly.in/' },
  { label: 'Noteek', href: 'https://noteek.com/' },
  { label: 'Conteak', href: 'https://conteak.com/' },
];

const COMPANY = [
  { label: 'Products', href: '/#products' },
  { label: 'Company', href: '/#company' },
  { label: 'Contact', href: '/#contact' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--canvas)', borderTop: '1px solid var(--line)', position: 'relative' }}>
      <div className="wrap py-16">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
          <div>
            <span className="inline-block rounded-lg px-3 py-2" style={{ background: '#f4f7fc' }}>
              <Image src="/dnv-arc-logo.png" alt="DNV ARC, Data Neural Vision" width={160} height={50} className="h-9 w-auto object-contain" />
            </span>
            <p className="mt-6" style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: 14, maxWidth: 320 }}>
              A product company. Five focused products, one arc.
            </p>
          </div>

          <div>
            <div className="mono-label mb-5" style={{ color: 'var(--muted)' }}>Products</div>
            <ul className="flex flex-col gap-3 list-none p-0">
              {BRANDS.map((b) => (
                <li key={b.label}>
                  <a href={b.href} target="_blank" rel="noopener noreferrer" className="no-underline hover:text-white transition-colors" style={{ color: 'var(--text)', fontSize: 14 }}>
                    {b.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mono-label mb-5" style={{ color: 'var(--muted)' }}>Company</div>
            <ul className="flex flex-col gap-3 list-none p-0">
              {COMPANY.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className="no-underline hover:text-white transition-colors" style={{ color: 'var(--text)', fontSize: 14 }}>
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mono-label mb-5" style={{ color: 'var(--muted)' }}>Talk to us</div>
            <ul className="flex flex-col gap-3 list-none p-0">
              <li><a href="mailto:info@dnvarc.com" className="no-underline" style={{ color: 'var(--text)', fontSize: 14 }}>info@dnvarc.com</a></li>
              <li><a href="https://wa.me/919642226262" target="_blank" rel="noopener noreferrer" className="no-underline" style={{ color: 'var(--text)', fontSize: 14 }}>WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 flex flex-wrap justify-between gap-3" style={{ borderTop: '1px solid var(--line)', color: 'var(--muted)', fontSize: 13 }}>
          <span>© {new Date().getFullYear()} DNV ARC. All rights reserved.</span>
          <span className="mono-label" style={{ color: 'var(--muted)' }}>Data · Neural · Vision</span>
        </div>
      </div>
    </footer>
  );
}
