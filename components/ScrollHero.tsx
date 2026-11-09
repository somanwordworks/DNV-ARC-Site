'use client';

import { useEffect, useRef, useState } from 'react';
import { BRANDS } from '@/data/brands';

const VIDEO = '/hero/arc-scrub.mp4';
const POSTER = '/hero/arc-poster.jpg';
const END_FRAME = '/hero/arc-end.jpg';

// Starting-point ranges in scroll progress, validated by flick-scrolling.
const BANDS = [
  { a: 0.0, b: 0.17, text: 'Data is noise.', align: 'left' as const },
  { a: 0.2, b: 0.4, text: 'Until it has a direction.', align: 'left' as const },
  { a: 0.44, b: 0.65, text: 'Every product we make follows one.', align: 'left' as const },
  { a: 0.68, b: 0.87, text: 'Here are the five.', align: 'left' as const },
];
const FINAL_START = 0.89;
const RAMP = 0.03;

const clamp = (n: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, n));

type Mode = 'static' | 'scrub';

export default function ScrollHero() {
  const [mode, setMode] = useState<Mode>('static');
  const [ready, setReady] = useState(false);
  const outerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const bandRefs = useRef<(HTMLDivElement | null)[]>([]);
  const finalRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  // Static hero gate: narrow screens, reduced motion, data saver. Kept live with change listeners.
  useEffect(() => {
    const narrow = window.matchMedia('(max-width: 767px)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const decide = () => {
      const conn = (navigator as unknown as { connection?: { saveData?: boolean } }).connection;
      const saveData = !!conn?.saveData;
      setMode(narrow.matches || reduce.matches || saveData ? 'static' : 'scrub');
    };
    decide();
    narrow.addEventListener('change', decide);
    reduce.addEventListener('change', decide);
    return () => {
      narrow.removeEventListener('change', decide);
      reduce.removeEventListener('change', decide);
    };
  }, []);

  // Scrub engine
  useEffect(() => {
    if (mode !== 'scrub') return;
    const video = videoRef.current;
    const outer = outerRef.current;
    if (!video || !outer) return;

    let blobUrl: string | null = null;
    let cancelled = false;
    let raf = 0;
    let running = false;
    let seeking = false;
    let duration = 0;
    let target = 0;
    let current = 0;
    let lastT = 0;
    const lastOpacity: number[] = [];
    let lastFinal = -1;
    let lastBar = -1;
    let lastHint = -1;

    const onSeeked = () => { seeking = false; };
    video.addEventListener('seeked', onSeeked);

    const progress = () => {
      const rect = outer.getBoundingClientRect();
      const span = rect.height - window.innerHeight;
      return span > 0 ? clamp(-rect.top / span) : 0;
    };

    const paint = (p: number) => {
      BANDS.forEach((band, i) => {
        const el = bandRefs.current[i];
        if (!el) return;
        // The first line is already on screen at the top, so only the later bands fade in.
        const fadeIn = i === 0 ? 1 : clamp((p - band.a) / RAMP);
        const o = fadeIn * clamp((band.b - p) / RAMP);
        const q = Math.round(o * 100) / 100;
        if (lastOpacity[i] !== q) {
          lastOpacity[i] = q;
          el.style.opacity = String(q);
          el.style.transform = `translateY(${(1 - q) * 18}px)`;
        }
      });
      const f = Math.round(clamp((p - FINAL_START) / 0.05) * 100) / 100;
      if (finalRef.current && f !== lastFinal) {
        lastFinal = f;
        finalRef.current.style.opacity = String(f);
        finalRef.current.style.transform = `translateY(${(1 - f) * 18}px)`;
        finalRef.current.style.pointerEvents = f > 0.6 ? 'auto' : 'none';
      }
      const h = p < 0.03 ? 1 : 0;
      if (hintRef.current && h !== lastHint) {
        lastHint = h;
        hintRef.current.style.opacity = String(h);
      }
      const b = Math.round(p * 1000) / 1000;
      if (barRef.current && b !== lastBar) {
        lastBar = b;
        barRef.current.style.transform = `scaleX(${b})`;
      }
    };

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - lastT) / 1000 || 0.016);
      lastT = now;
      const p = progress();
      paint(p);
      target = p * duration;
      // dt-normalised lerp so the feel is the same at any frame rate
      current += (target - current) * (1 - Math.exp(-dt * 9));
      if (duration && !seeking && Math.abs(video.currentTime - current) > 0.01) {
        seeking = true;
        video.currentTime = current;
      }
      if (Math.abs(target - current) < 0.002 && !seeking) {
        running = false; // rest when settled
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    const kick = () => {
      if (running) return;
      running = true;
      lastT = performance.now();
      raf = requestAnimationFrame(tick);
    };

    const onScroll = () => kick();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    // Fetch as a Blob so scrubbing never waits on the network.
    (async () => {
      try {
        const res = await fetch(VIDEO);
        if (!res.ok) throw new Error('no video');
        const blob = await res.blob();
        if (cancelled) return;
        blobUrl = URL.createObjectURL(blob);
        video.src = blobUrl;
        video.addEventListener(
          'loadedmetadata',
          () => {
            duration = video.duration || 0;
            video.currentTime = 0;
            current = progress() * duration;
            setReady(true);
            paint(progress());
            kick();
          },
          { once: true },
        );
        video.load();
      } catch {
        if (!cancelled) setMode('static'); // complete without the video
      }
    })();

    paint(progress());

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      video.removeEventListener('seeked', onSeeked);
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    };
  }, [mode]);

  const scrub = mode === 'scrub';

  return (
    <div id="top" ref={outerRef} className={scrub ? 'hero-scrub' : 'hero-static'}>
      <div className="hero-stage">
        {/* Poster always sits underneath, so the page is complete without the video. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={scrub && !ready ? POSTER : scrub ? POSTER : END_FRAME}
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = POSTER; }}
          alt=""
          className="hero-media"
          aria-hidden
        />
        {scrub && (
          <video
            ref={videoRef}
            className="hero-media"
            muted
            playsInline
            preload="auto"
            style={{ opacity: ready ? 1 : 0, transition: 'opacity .6s ease' }}
            aria-hidden
          />
        )}
        <div className="hero-scrim-bottom" />

        {scrub && !ready && (
          <div className="absolute inset-0 flex items-center justify-center" aria-live="polite">
            <div className="mono-label" style={{ color: 'var(--muted)' }}>Loading the arc</div>
          </div>
        )}

        {/* Scroll bands */}
        {scrub &&
          BANDS.map((band, i) => (
            <div
              key={band.text}
              ref={(el) => { bandRefs.current[i] = el; }}
              className="hero-band"
              style={{ top: '50%', marginTop: '-1.2em' }}
            >
              <div className="wrap" style={{ position: 'relative' }}>
                <div className="band-scrim" />
                <div className="mono-label mb-4">0{i + 1} / 04</div>
                <h2
                  className="display hero-text"
                  style={{ fontSize: 'clamp(28px, 4.6vw, 64px)', maxWidth: '14ch' }}
                >
                  {band.text}
                </h2>
              </div>
            </div>
          ))}

        {/* Final settle (scrub) or the whole static hero */}
        <div
          ref={finalRef}
          className="absolute left-0 right-0 bottom-0 px-0"
          style={scrub ? { opacity: 0, paddingBottom: '9vh' } : { paddingBottom: '10vh', top: 0, display: 'flex', alignItems: 'flex-end' }}
        >
          <div className="wrap w-full" style={{ position: 'relative' }}>
            <div className="band-scrim" />
            <div className="mono-label mb-5">Data · Neural · Vision</div>
            <h1
              className="display hero-text"
              style={{ fontSize: 'clamp(34px, 6.4vw, 92px)', maxWidth: '13ch' }}
            >
              {scrub ? 'DNV ARC' : 'Five products. One arc.'}
            </h1>
            <p
              className="hero-text mt-5"
              style={{ color: 'var(--text)', maxWidth: 520, fontSize: 'clamp(15px, 1.4vw, 18px)', lineHeight: 1.65, opacity: 0.88 }}
            >
              A product company. Five products for cinema, cloud, money, learning and privacy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#products" className="btn-primary">Meet the products →</a>
              <a href="#contact" className="btn-ghost">Partner with us</a>
            </div>

            {/* The five points of the arc, one per product */}
            <nav aria-label="Products" className="relative mt-10 hidden sm:block" style={{ maxWidth: 640 }}>
              <div className="absolute left-0 right-0 top-[5px] h-px" style={{ background: 'linear-gradient(90deg, rgba(10,34,89,0), var(--accent), rgba(51,149,232,0.2))' }} />
              <ul className="relative flex justify-between list-none p-0 m-0">
                {BRANDS.map((b) => (
                  <li key={b.key}>
                    <a href={`#p-${b.key}`} className="flex flex-col items-start gap-3 no-underline group">
                      <span className="block w-[11px] h-[11px] rounded-full transition-transform group-hover:scale-150" style={{ background: b.accent, boxShadow: `0 0 14px ${b.accent}` }} />
                      <span className="mono-label hero-text" style={{ color: 'var(--text)', fontSize: 10 }}>{b.short}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {scrub && (
          <>
            <div
              ref={hintRef}
              className="absolute left-0 right-0 flex flex-col items-center gap-2 mono-label"
              style={{ bottom: 28, transition: 'opacity .4s ease', color: 'var(--muted)' }}
            >
              Scroll
              <span style={{ width: 1, height: 36, background: 'linear-gradient(var(--accent), transparent)' }} />
            </div>
            <div className="absolute left-0 right-0 bottom-0 h-[2px]" style={{ background: 'rgba(143,163,200,.12)' }}>
              <div ref={barRef} style={{ height: '100%', background: 'var(--accent)', transformOrigin: 'left', transform: 'scaleX(0)' }} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
