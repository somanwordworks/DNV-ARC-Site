'use client';

import { useState } from 'react';
import RevealWrapper from './RevealWrapper';

const INTERESTS = ['CINEQ', 'Data Rhino', 'Noteek', 'Dunly', 'Conteak', 'Partnership / Investment', 'Something else'];

type State = 'idle' | 'sending' | 'sent' | 'fallback' | 'error';

export default function Contact() {
  const [state, setState] = useState<State>('idle');
  const [form, setForm] = useState({ name: '', email: '', interest: '', message: '', company: '' });

  const mailto = () =>
    `mailto:info@dnvarc.com?subject=${encodeURIComponent(`Enquiry from ${form.name}`)}&body=${encodeURIComponent(
      `${form.message}\n\nInterested in: ${form.interest || 'n/a'}\nFrom: ${form.name} (${form.email})`,
    )}`;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) setState('sent');
      else if (res.status === 503) setState('fallback'); // server not configured: tell the truth, offer email
      else setState('error');
    } catch {
      setState('error');
    }
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id="contact" className="section section-alt">
      <div className="wrap relative grid md:grid-cols-2 gap-14 md:gap-20 items-start">
        <RevealWrapper>
          <div className="mono-label mb-5">Contact</div>
          <h2 className="display" style={{ fontSize: 'clamp(26px, 4vw, 52px)', maxWidth: '14ch' }}>
            Talk to the team behind the products.
          </h2>
          <p className="mt-6" style={{ color: 'var(--muted)', lineHeight: 1.75, fontSize: 17, maxWidth: 440 }}>
            Partnerships, investment, press, or a question about one of our products. We reply within 24 hours.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            {[
              { label: 'info@dnvarc.com', href: 'mailto:info@dnvarc.com', icon: '✉' },
              { label: 'WhatsApp us', href: 'https://wa.me/919642226262', icon: '💬' },
            ].map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 no-underline"
                style={{ color: 'var(--text)', fontSize: 16 }}
              >
                <span className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: 'var(--panel)', border: '1px solid var(--line)' }}>
                  {icon}
                </span>
                {label}
              </a>
            ))}
          </div>

          <div className="mt-10 card p-6 inline-block">
            <div className="mono-label mb-2">Response time</div>
            <div className="display" style={{ fontSize: 22 }}>Within 24 hours</div>
            <div className="mt-1" style={{ color: 'var(--muted)', fontSize: 13 }}>Mon to Sat, India Standard Time</div>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={120}>
          {state === 'sent' ? (
            <div className="card p-10 text-center" role="status">
              <div className="display" style={{ fontSize: 24 }}>Got it.</div>
              <p className="mt-3" style={{ color: 'var(--muted)' }}>We reply within 24 hours.</p>
            </div>
          ) : state === 'fallback' ? (
            <div className="card p-10" role="status">
              <div className="display" style={{ fontSize: 20 }}>One more click.</div>
              <p className="mt-3 mb-6" style={{ color: 'var(--muted)', lineHeight: 1.7 }}>
                Our form could not send this message just now. Your email app will open with it ready to send.
              </p>
              <a href={mailto()} className="btn-primary">Open email →</a>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-5" noValidate={false}>
              {/* Honeypot, hidden from people */}
              <input type="text" tabIndex={-1} autoComplete="off" aria-hidden value={form.company} onChange={set('company')} style={{ position: 'absolute', left: '-9999px', opacity: 0 }} />

              <div>
                <label htmlFor="c-name" className="mono-label block mb-2" style={{ color: 'var(--muted)' }}>Your name</label>
                <input id="c-name" className="form-input" type="text" required placeholder="Jane Doe" value={form.name} onChange={set('name')} />
              </div>
              <div>
                <label htmlFor="c-email" className="mono-label block mb-2" style={{ color: 'var(--muted)' }}>Email address</label>
                <input id="c-email" className="form-input" type="email" required placeholder="jane@company.com" value={form.email} onChange={set('email')} />
              </div>
              <div>
                <label htmlFor="c-int" className="mono-label block mb-2" style={{ color: 'var(--muted)' }}>I&apos;m interested in</label>
                <select id="c-int" className="form-input" value={form.interest} onChange={set('interest')}>
                  <option value="">Select an option</option>
                  {INTERESTS.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="c-msg" className="mono-label block mb-2" style={{ color: 'var(--muted)' }}>Message</label>
                <textarea id="c-msg" className="form-input" placeholder="How can we help?"value={form.message} onChange={set('message')} />
              </div>

              <button type="submit" className="btn-primary justify-center" disabled={state === 'sending'} style={{ opacity: state === 'sending' ? 0.7 : 1 }}>
                {state === 'sending' ? 'Sending…' : 'Send message →'}
              </button>
              {state === 'error' && (
                <p role="alert" style={{ color: 'var(--danger, #ff9b9b)', fontSize: 14 }}>
                  Something went wrong. Please try again, or write to info@dnvarc.com.
                </p>
              )}
            </form>
          )}
        </RevealWrapper>
      </div>
    </section>
  );
}
