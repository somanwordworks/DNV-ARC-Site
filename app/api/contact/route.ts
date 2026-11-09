import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const MAX = { name: 120, email: 200, interest: 80, message: 4000 };

function clean(v: unknown, max: number) {
  return typeof v === 'string' ? v.trim().slice(0, max) : '';
}

// Sends the enquiry to info@dnvarc.com through Resend.
// Needs RESEND_API_KEY in the environment (and optionally CONTACT_FROM, CONTACT_TO).
// Without a key it answers 503, so the form can tell the visitor the truth and offer email instead.
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 });
  }

  // Honeypot: real visitors never fill this in.
  if (clean(body.company, 50)) return NextResponse.json({ ok: true });

  const name = clean(body.name, MAX.name);
  const email = clean(body.email, MAX.email);
  const interest = clean(body.interest, MAX.interest);
  const message = clean(body.message, MAX.message);

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: 'invalid' }, { status: 422 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return NextResponse.json({ ok: false, error: 'not_configured' }, { status: 503 });
  }

  const to = process.env.CONTACT_TO || 'info@dnvarc.com';
  const from = process.env.CONTACT_FROM || 'DNV ARC Website <onboarding@resend.dev>';

  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const html = `<p><b>Name:</b> ${esc(name)}</p><p><b>Email:</b> ${esc(email)}</p><p><b>Interested in:</b> ${esc(interest || 'n/a')}</p><p>${esc(message).replace(/\n/g, '<br>')}</p>`;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject: `New enquiry from ${name}`, html }),
    });
    if (!res.ok) return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 });
  }
}
