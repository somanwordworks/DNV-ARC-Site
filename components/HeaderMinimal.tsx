import Link from "next/link";

export default function HeaderMinimal() {
    return (
        <header className="w-full bg-white/95 backdrop-blur-sm shadow-sm">
            <div className="container-custom py-3 flex items-center justify-between">

                <Link href="/" className="flex items-center gap-4">
                    <img
                        src="/logos/dnv-arc.png"
                        alt="DNV ARC Logo"
                        className="h-28 w-40 md:h-30 md:w-45 object-contain"
                    />
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-base font-medium text-slate-700">
                    <Link
                        href="/"
                        className="hover:text-tribe-blue transition-colors"
                    >
                        Home
                    </Link>
                </nav>

            </div>
        </header>
    );
}