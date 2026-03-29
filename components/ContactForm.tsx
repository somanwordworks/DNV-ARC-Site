"use client";

export default function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const btn = e.currentTarget.querySelector("button[type=submit]") as HTMLButtonElement;
    if (btn) {
      btn.textContent = "Message sent ✓";
      btn.style.background = "#16a34a";
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto flex flex-col gap-3 reveal"
    >
      <div className="grid grid-cols-2 gap-3">
        <input type="text" placeholder="Your name" required
          className="w-full rounded-xl px-4 py-3.5 text-sm font-light outline-none text-white placeholder-white/40 border border-white/15 focus:border-dnv-sky transition-colors"
          style={{ background: "rgba(255,255,255,0.08)" }} />
        <input type="email" placeholder="Email address" required
          className="w-full rounded-xl px-4 py-3.5 text-sm font-light outline-none text-white placeholder-white/40 border border-white/15 focus:border-dnv-sky transition-colors"
          style={{ background: "rgba(255,255,255,0.08)" }} />
      </div>
      <select
        className="w-full rounded-xl px-4 py-3.5 text-sm outline-none border border-white/15 focus:border-dnv-sky transition-colors"
        style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}
        defaultValue=""
      >
        <option value="" disabled>I'm interested in…</option>
        {["Website development","AI / Data engineering","Technical book writing","eLearning curriculum","MVP development","Ghostwriting / Editing","Something else"].map(o => (
          <option key={o} style={{ color: "#0B1E4F", background: "white" }}>{o}</option>
        ))}
      </select>
      <textarea rows={4} placeholder="Tell us about your project or question…"
        className="w-full rounded-xl px-4 py-3.5 text-sm font-light outline-none text-white placeholder-white/40 border border-white/15 focus:border-dnv-sky transition-colors resize-none"
        style={{ background: "rgba(255,255,255,0.08)" }} />
      <button
        type="submit"
        className="btn mt-1 font-semibold text-sm tracking-wide"
        style={{ background: "#2E9EE8", color: "white", boxShadow: "0 4px 18px rgba(46,158,232,0.35)" }}
      >
        Send message
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </form>
  );
}
