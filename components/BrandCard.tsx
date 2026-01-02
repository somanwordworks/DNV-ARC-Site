type Props = {
    title: string;
    description: string;
    href: string;
    logoSrc: string;
    accentClass: string;
};

export default function BrandCard({
    title,
    description,
    href,
    logoSrc,
    accentClass,
}: Props) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl bg-white shadow-soft overflow-hidden ring-1 ring-slate-200 hover:shadow-xl transition transform hover:-translate-y-1"
        >
            {/* Header Section with logo */}
            <div
                className={`p-5 ${accentClass} text-white flex flex-col items-center justify-center gap-3`}
            >
                {/* Logo sizing logic */}
                <img
                    src={logoSrc}
                    alt={title}
                    className={`object-contain mx-auto transition-all duration-300 ${title === "CINEQ"
                            ? "h-24 md:h-28 scale-125" // Larger for smaller PNG logos
                            : "h-16 md:h-20"
                        }`}
                    style={{ maxHeight: "110px" }}
                />
                <h3 className="font-semibold text-lg text-center tracking-wide">{title}</h3>
            </div>

            {/* Description */}
            <div className="p-5 text-center text-slate-600 text-sm min-h-[90px] flex items-center justify-center">
                <p>{description}</p>
            </div>

            {/* CTA */}
            <div className="px-5 pb-5 text-center">
                <span className="text-tribe-blue font-semibold group-hover:underline">
                    Visit {title} →
                </span>
            </div>
        </a>
    );
}
