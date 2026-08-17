'use client';

import { useState } from 'react';
import RevealWrapper from './RevealWrapper';

const services = [
  'Website development',
  'AI / Data engineering',
  'Technical book writing',
  'eLearning curriculum',
  'MVP development',
  'Ghostwriting / Editing',
  'Something else',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-28"
      style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', position: 'relative', zIndex: 1 }}
    >
      <div className="max-w-[1200px] mx-auto px-12">
        <div className="grid grid-cols-2 gap-20 items-start">

          {/* Left */}
          <RevealWrapper>
            <div className="section-label">Contact</div>
            <h2 className="font-heading font-extrabold text-[clamp(36px,4.5vw,58px)] tracking-[0.04em] uppercase max-w-xl leading-[1.05] mb-4">
              Let's build something together.
            </h2>
            <p className="font-body text-[16px] leading-[1.7] mb-12" style={{ color: 'var(--muted)' }}>
              Got a project in mind? Tell us about it and we'll get back within 24 hours.
            </p>

            {[
              { icon: '✉', label: 'info@dnvarc.com', href: 'mailto:info@dnvarc.com' },
              { icon: '💬', label: 'WhatsApp us',        href: 'https://wa.me/919642226262' },
            ].map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 mb-4 no-underline font-body text-[15px] transition-colors duration-200"
                style={{ color: 'var(--text)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--blue)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
              >
                <span
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-base"
                  style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
                >
                  {icon}
                </span>
                {label}
              </a>
            ))}

            <div
              className="mt-12 p-6 rounded-xl"
              style={{ background: 'rgba(22,32,80,0.4)', border: '1px solid var(--border)' }}
            >
              <div className="font-heading font-semibold text-[11px] tracking-[0.14em] uppercase mb-3" style={{ color: 'var(--blue)' }}>
                Response time
              </div>
              <div className="font-heading font-extrabold text-[28px] tracking-[0.04em] uppercase" style={{ color: 'var(--text)' }}>
                Within 24 Hours
              </div>
              <div className="font-body text-[13px] mt-1" style={{ color: 'var(--muted)' }}>
                Mon–Sat · India Standard Time
              </div>
            </div>
          </RevealWrapper>

          {/* Right: form */}
          <RevealWrapper delay={100}>
            {submitted ? (
              <div className="text-center py-16">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-heading font-extrabold text-[28px] tracking-[0.04em] uppercase mb-2">Message Sent!</h3>
                <p className="font-body text-[15px]" style={{ color: 'var(--muted)' }}>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {[
                  { label: 'Your name',     key: 'name',    type: 'text',  placeholder: 'Jane Doe' },
                  { label: 'Email address', key: 'email',   type: 'email', placeholder: 'jane@company.com' },
                ].map(({ label, key, type, placeholder }) => (
                  <div key={key}>
                    <label className="block font-heading font-bold text-[12px] tracking-[0.14em] uppercase mb-2" style={{ color: 'var(--muted)' }}>
                      {label}
                    </label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      required
                      className="form-input"
                      value={form[key as keyof typeof form]}
                      onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                    />
                  </div>
                ))}

                <div>
                  <label className="block font-heading font-bold text-[12px] tracking-[0.14em] uppercase mb-2" style={{ color: 'var(--muted)' }}>
                    I'm interested in…
                  </label>
                  <select
                    className="form-input"
                    value={form.service}
                    onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                  >
                    <option value="">Select a service</option>
                    {services.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block font-heading font-bold text-[12px] tracking-[0.14em] uppercase mb-2" style={{ color: 'var(--muted)' }}>
                    Message
                  </label>
                  <textarea
                    className="form-input"
                    placeholder="Tell us about your project…"
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 py-3.5 rounded-md font-heading font-bold text-[15px] tracking-[0.12em] uppercase text-white transition-all duration-200"
                  style={{ background: 'var(--blue)', boxShadow: '0 0 32px rgba(42,174,224,0.25)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 50px rgba(42,174,224,0.4)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px rgba(42,174,224,0.25)'; }}
                >
                  Send message →
                </button>
              </form>
            )}
          </RevealWrapper>

        </div>
      </div>
    </section>
  );
}
