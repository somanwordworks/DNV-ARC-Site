'use client';

export default function Ticker() {
  const items = [
    { val: '5+',   label: 'Products in production' },
    { val: '3',    label: 'Industry verticals' },
    { val: '₹9K',  label: 'Starting web dev price' },
    { val: '100%', label: 'Web-first by design' },
    { val: '24h',  label: 'Response guarantee' },
    { val: '5',    label: 'Brands under one roof' },
  ];
  const doubled = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden py-3"
      style={{
        background: 'var(--navy)',
        borderTop: '1px solid rgba(42,174,224,0.2)',
        borderBottom: '1px solid rgba(42,174,224,0.2)',
        zIndex: 1,
      }}
    >
      <div className="ticker-animate flex gap-16 whitespace-nowrap w-max">
        {doubled.map(({ val, label }, i) => (
          <span key={i} className="inline-flex items-center gap-2.5">
            <span className="font-heading font-bold text-[13px] tracking-[0.14em] uppercase" style={{ color: 'var(--blue)' }}>
              {val}
            </span>
            <span className="font-heading font-medium text-[13px] tracking-[0.14em] uppercase" style={{ color: 'rgba(255,255,255,0.45)' }}>
              {label}
            </span>
            <span className="inline-block w-1 h-1 rounded-full mx-4" style={{ background: 'rgba(42,174,224,0.3)' }} />
          </span>
        ))}
      </div>
    </div>
  );
}
