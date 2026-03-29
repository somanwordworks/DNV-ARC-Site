"use client";

const CLIENTS = [
  { src: "/clients/client-1.png", alt: "Client 1" },
  { src: "/clients/client-2.png", alt: "Client 2" },
  { src: "/clients/client-3.png", alt: "Client 3" },
  { src: "/clients/client-4.png", alt: "Client 4" },
];

// Duplicate enough times for a seamless loop
const TRACK = [...CLIENTS, ...CLIENTS, ...CLIENTS];

export default function ClienteleMarquee() {
  return (
    <div className="py-12 border-y border-[rgba(11,30,79,0.08)] bg-white overflow-hidden">
      <p className="text-center text-xs font-semibold tracking-[0.14em] uppercase text-ink-faint mb-8">
        Trusted by our clients
      </p>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, white, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(270deg, white, transparent)" }} />

        <div className="flex gap-16 items-center marquee-track w-max">
          {TRACK.map((c, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: 160, height: 72 }}
            >
              <img
                src={c.src}
                alt={c.alt}
                className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
                style={{ maxHeight: 64, maxWidth: 140, filter: "none", WebkitFilter: "none" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
