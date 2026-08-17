'use client';

import { useEffect, useRef } from 'react';
import RevealWrapper from './RevealWrapper';

const values = [
  { icon: '📊', title: 'Continuous learning & growth',    desc: 'Every product we build teaches us something that feeds back into everything else.' },
  { icon: '🔬', title: 'Data-informed decisions',         desc: 'We build analytics-first — the best products help you understand what\'s working.' },
  { icon: '🛡',  title: 'Innovation with integrity',       desc: 'Privacy-first, ad-free, honest pricing. We monetise value, not your data.' },
  { icon: '🌐', title: 'Accessible & multilingual',       desc: 'Affordable and designed for small teams — not just enterprise budgets.' },
];

function MiniNeural() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const pts = Array.from({ length: 28 }, () => ({
      x: Math.random(), y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0004,
      vy: (Math.random() - 0.5) * 0.0004,
    }));

    let rafId: number;
    const draw = () => {
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        pts[i].x += pts[i].vx;
        pts[i].y += pts[i].vy;
        if (pts[i].x < 0 || pts[i].x > 1) pts[i].vx *= -1;
        if (pts[i].y < 0 || pts[i].y > 1) pts[i].vy *= -1;

        for (let j = i + 1; j < pts.length; j++) {
          const dx = (pts[i].x - pts[j].x) * w;
          const dy = (pts[i].y - pts[j].y) * h;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            const a = (1 - d / 120) * 0.4;
            ctx.strokeStyle = `rgba(42,174,224,${a})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(pts[i].x * w, pts[i].y * h);
            ctx.lineTo(pts[j].x * w, pts[j].y * h);
            ctx.stroke();
          }
        }

        const grd = ctx.createRadialGradient(pts[i].x * w, pts[i].y * h, 0, pts[i].x * w, pts[i].y * h, 4);
        grd.addColorStop(0, 'rgba(42,174,224,0.9)');
        grd.addColorStop(1, 'rgba(42,174,224,0)');
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(pts[i].x * w, pts[i].y * h, 3, 0, Math.PI * 2);
        ctx.fill();
      }
      rafId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

export default function About() {
  return (
    <section id="about" className="py-28" style={{ background: 'var(--bg)', position: 'relative', zIndex: 1 }}>
      <div className="max-w-[1200px] mx-auto px-12">
        <div className="grid grid-cols-2 gap-20 items-center">

          {/* Left: text + values */}
          <RevealWrapper>
            <div className="section-label">About DNV ARC</div>
            <h2 className="font-heading font-extrabold text-[clamp(36px,4.5vw,58px)] tracking-[0.04em] uppercase max-w-xl leading-[1.05] mb-4">
              Built on data.<br />Driven by purpose.
            </h2>
            <p className="font-body text-[16px] leading-[1.75] max-w-lg mb-10" style={{ color: 'var(--muted)' }}>
              We build experiences that blend creativity with data-driven intelligence. Lightweight, affordable, and accessible — including regional language support.
            </p>

            <ul className="flex flex-col gap-4 list-none">
              {values.map(v => (
                <li
                  key={v.title}
                  className="flex gap-4 p-5 rounded-xl transition-all duration-200 cursor-default"
                  style={{ border: '1px solid var(--border)', background: 'var(--card)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border2)';
                    (e.currentTarget as HTMLElement).style.background = 'var(--bg3)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                    (e.currentTarget as HTMLElement).style.background = 'var(--card)';
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: 'rgba(22,32,80,0.6)', border: '1px solid rgba(42,174,224,0.2)' }}
                  >
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[16px] tracking-[0.06em] uppercase mb-1" style={{ color: 'var(--text)' }}>
                      {v.title}
                    </h4>
                    <p className="font-body text-[13px] leading-[1.6]" style={{ color: 'var(--muted)' }}>
                      {v.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </RevealWrapper>

          {/* Right: mini neural canvas */}
          <RevealWrapper delay={150}>
            <div
              className="relative h-[420px] rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--border)', background: 'var(--bg2)' }}
            >
              <MiniNeural />

              {/* Overlay cards */}
              <div className="absolute bottom-5 left-5 right-5 flex gap-3 flex-wrap" style={{ zIndex: 2 }}>
                {[
                  { label: 'Products Live', val: '5+' },
                  { label: 'Philosophy',    val: 'Web-first' },
                ].map(({ label, val }) => (
                  <div
                    key={label}
                    className="rounded-xl px-4 py-3"
                    style={{
                      background: 'rgba(6,12,26,0.9)',
                      border: '1px solid rgba(42,174,224,0.15)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    <div className="font-heading font-semibold text-[10px] tracking-[0.14em] uppercase mb-1" style={{ color: 'var(--muted)' }}>
                      {label}
                    </div>
                    <div className="font-heading font-extrabold text-[22px] tracking-[0.04em] uppercase" style={{ color: 'var(--blue)' }}>
                      {val}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>

        </div>
      </div>
    </section>
  );
}
