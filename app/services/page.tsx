// app/services/page.tsx
import React from "react";
import Footer from "@/components/Footer";

/* ---------------- HEADER MINIMAL (Services Only) ---------------- */
function HeaderMinimal() {
    return (
        <header className="w-full bg-white/95 backdrop-blur-sm shadow-sm">
            <div className="container-custom py-3 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-4">
                    <img
                        src="/logos/dnv-arc.png"
                        alt="DNV ARC Logo"
                        className="h-28 w-40 md:h-30 md:w-45 object-contain"
                    />
                </div>

                {/* Only Home Button */}
                <nav className="hidden md:flex items-center gap-8 text-base font-medium text-slate-700">
                    <a href="/" className="hover:text-tribe-blue transition-colors">
                        Home
                    </a>
                </nav>

            </div>
        </header>
    );
}

/* ---------------- SERVICES DATA ---------------- */
const services = [
    {
        title: "AI, Data & Cloud Engineering",
        subtitle: "Architecture, pipelines, LLMs & MLOps",
        desc: "End-to-end data & AI systems: lakehouses, ETL/ELT pipelines, Databricks/ Spark, LLM/RAG solutions, model fine-tuning, inference scaling and governance.",
        icon: "cloud"
    },
    {
        title: "Technical Book Writing",
        subtitle: "Authoring & Ghostwriting",
        desc: "Technical books, playbooks, whitepapers and leader-level thought pieces — written with hands-on examples, diagrams and production-ready guidance.",
        icon: "book"
    },
    {
        title: "Website & Product Development",
        subtitle: "Next.js, React, Tailwind",
        desc: "Modern, responsive websites and full-stack digital products: Next.js (App Router), API-driven pages, Vercel deployments and performance tuning.",
        icon: "code"
    },
    {
        title: "eLearning & Curriculum",
        subtitle: "Courses, labs & assessments",
        desc: "Course design for Data/AI learners: lesson plans, hands-on labs, assessments and LMS packaging for corporate or public training.",
        icon: "cap"
    },
    {
        title: "Product Development (MVPs)",
        subtitle: "From idea to production",
        desc: "MVP architecture, hosting, integrations and CI/CD. Focus on fast delivery, testable APIs, observability and predictable scale.",
        icon: "rocket"
    },
    {
        title: "Ghostwriting & Editing",
        subtitle: "Executive content & technical editing",
        desc: "Ghostwriting for founders/executives, editorial polishing, technical accuracy reviews and converting notes into publish-ready manuscripts.",
        icon: "pencil"
    }
];

/* ---------------- ICONS ---------------- */
function Icon({ name }: { name: string }) {
    switch (name) {
        case "cloud":
            return (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                    <path d="M20 17.5A4.5 4.5 0 0 0 15.5 13H15a4 4 0 0 0-7.9.7A3.5 3.5 0 0 0 4 17.5C4 19.43 5.57 21 7.5 21h13C22 21 22 18 20 17.5z" stroke="currentColor" strokeWidth="1.4" />
                </svg>
            );
        case "book":
            return (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                    <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3H19" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M3 21V6.5A2.5 2.5 0 0 1 5.5 4H19V21H5.5A2.5 2.5 0 0 1 3 18.5" stroke="currentColor" strokeWidth="1.4" />
                </svg>
            );
        case "code":
            return (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                    <path d="M16 18l6-6-6-6" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M8 6L2 12l6 6" stroke="currentColor" strokeWidth="1.6" />
                </svg>
            );
        case "cap":
            return (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l7 4v6c0 5-7 8-7 8s-7-3-7-8V6l7-4z" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M12 22v-9" stroke="currentColor" strokeWidth="1.4" />
                </svg>
            );
        case "rocket":
            return (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2s3 1 5 3 3 5 3 5-2 1-4 1-4-1-4-1" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M9 11l-7 7v2h2l7-7" stroke="currentColor" strokeWidth="1.4" />
                </svg>
            );
        default:
            return (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                    <path d="M3 21l3-1 11-11 1-3-3 1L4 20z" stroke="currentColor" strokeWidth="1.4" />
                </svg>
            );
    }
}

/* ---------------- SERVICE CARD ---------------- */
function ServiceCard({ title, subtitle, desc, icon }: any) {
    return (
        <article className="group bg-white rounded-xl2 p-6 shadow-soft border border-transparent hover:shadow-lg transition-all duration-200">
            <div className="flex items-start gap-4">
                <div className="flex-none w-12 h-12 rounded-lg bg-gradient-to-br from-tribe-blue to-[#00C6A2] flex items-center justify-center">
                    <Icon name={icon} />
                </div>
                <div className="flex-1">
                    <h3 className="text-tribe-dark font-semibold text-lg">{title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
                </div>
            </div>

            <p className="mt-4 text-slate-600 text-sm leading-relaxed">{desc}</p>
            <div className="mt-5">
                <a href="#contact" className="inline-flex items-center gap-2 text-tribe-blue font-medium hover:underline">
                    Learn more →
                </a>
            </div>
        </article>
    );
}

/* ---------------- PAGE ---------------- */
export default function ServicesPage() {
    return (
        <>
            <HeaderMinimal />

            <main className="min-h-screen bg-white">

                {/* Hero (🎨 doodle background applied here only) */}
                <section className="services-hero py-20">
                    <div className="container-custom text-center">
                        <div className="max-w-3xl mx-auto">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-tribe-dark">
                                Services
                            </h1>

                            <p className="mt-4 text-slate-600 text-lg">
                                Engineering intelligence and building modern digital products — from data platforms and LLMs to
                                courses, books and production-ready websites.
                            </p>

                            <div className="mt-6 flex justify-center gap-4">
                                <a
                                    href="#contact"
                                    className="btn btn-outline border-tribe-blue text-tribe-blue hover:bg-tribe-blue hover:text-white"
                                >
                                    Contact Us
                                </a>

                                <a
                                    href="#services-grid"
                                    className="btn btn-ghost text-slate-700 border border-slate-200"
                                >
                                    Explore Services
                                </a>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Services Grid */}
                <section id="services-grid" className="container-custom pb-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((s) => (
                            <ServiceCard key={s.title} {...s} />
                        ))}
                    </div>

                    {/* Why Choose Us */}
                    <div className="mt-12 grid md:grid-cols-3 gap-6 items-start">
                        <div className="md:col-span-2">
                            <h2 className="text-2xl font-semibold text-tribe-dark">
                                Why DNV ARC
                            </h2>

                            <p className="mt-3 text-slate-600">
                                We combine deep technical experience in data & AI with a product-first delivery mindset.
                                Our services are designed for teams who want practical, production-ready systems — backed by
                                careful governance, observability and cost-aware architecture.
                            </p>
                        </div>
                    </div>
                </section>

            </main>

            {/* ✅ Global Footer */}
            <Footer />
        </>
    );
}
