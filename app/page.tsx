import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandCard from "@/components/BrandCard";
import { BRANDS } from "@/data/brands";

/* 🔹 Clientele Vertical Flip */
import ClienteleFlip from "@/components/ClienteleFlip";

export default function Page() {
    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero */}
            <section className="relative hero-gradient hero-noise text-white py-28 md:py-35 overflow-hidden">

                {/* ⭐ Animated Arc Behind Hero */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl opacity-40 pointer-events-none arc-animate z-0">
                    <svg viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M50 200 C250 50 550 50 750 200"
                            stroke="url(#grad)"
                            strokeWidth="16"
                            strokeLinecap="round"
                        />
                        <defs>
                            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#0078D4" />
                                <stop offset="100%" stopColor="#00C6A2" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Background DNV ARC watermark */}
                <div className="watermark"></div>

                {/* Premium floating glow orbs */}
                <div className="hero-orb orb-1"></div>
                <div className="hero-orb orb-2"></div>

                {/* Content */}
                <div className="container-custom relative z-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 drop-shadow-lg">
                        Empowering the Arc of Innovation
                    </h1>

                    <p className="max-w-2xl mx-auto text-white/90 mb-10 text-lg md:text-xl">
                        DNV ARC is the parent collective connecting innovation across entertainment,
                        analytics, and education.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="#ecosystem"
                            className="btn btn-primary shadow-lg shadow-blue-500/30 hover:shadow-blue-400/40 transition-all"
                        >
                            Explore Brands
                        </a>

                        <a
                            href="#about"
                            className="btn btn-outline bg-white/90 backdrop-blur-sm hover:bg-white"
                        >
                            About DNV ARC
                        </a>
                    </div>
                </div>
            </section>

            {/* Clientele (Vertical Flip Logos) */}
            <ClienteleFlip />

            {/* About */}
            <section id="about" className="py-16 md:py-20 bg-tribe-light">
                <div className="container-custom grid md:grid-cols-2 gap-10 items-center">

                    <div className="reveal-on-scroll">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                            About DNV ARC
                        </h2>

                        <p className="text-slate-700">
                            We build experiences that blend creativity with data-driven intelligence.
                            Under the DNV ARC umbrella, we operate complementary products spanning
                            cinema analytics, personal finance, and professional education.
                        </p>

                        <p className="text-slate-700 mt-4">
                            DNV ARC follows a web-first approach with limited, intentional mobile
                            experiences to reduce unnecessary screen time.
                        </p>
                    </div>

                    <div className="relative">
                        <img
                            src="/rhino-watermark.svg"
                            alt="Rhino geometric"
                            className="opacity-60 max-w-md md:ml-auto"
                        />
                    </div>

                </div>
            </section>

            {/* Ecosystem */}
            <section id="ecosystem" className="py-16 md:py-20">
                <div className="container-custom">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
                        Our Ecosystem
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {BRANDS.map(b => (
                            <BrandCard
                                key={b.key}
                                title={b.title}
                                description={b.description}
                                href={b.href}
                                logoSrc={b.logo}
                                accentClass={b.accentClass}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision */}
            <section id="vision" className="py-16 md:py-20 bg-tribe-light">
                <div className="container-custom grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                            Our Vision
                        </h2>

                        <p className="text-slate-700">
                            Empowering creators and analysts through technology and knowledge.
                            We keep our products lightweight, affordable, and accessible—including
                            support for regional languages—so small teams can do big things.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-200">
                            <ul className="space-y-3 text-slate-700 text-sm">
                                <li>• Innovation with integrity</li>
                                <li>• Continuous learning & growth</li>
                                <li>• Data-informed decisions everywhere</li>
                                <li>• Data-driven and AI-ready foundations</li>
                                <li>• Accessible, multilingual, and inclusive technology</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
