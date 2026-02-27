import Link from "next/link";

export default function HeaderMinimal() {
    return (
        <header className="w-full bg-white/95 backdrop-blur-sm shadow-sm">
            <div className="container-custom py-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-4">
                    <img
                        src="/logos/dnv-arc.png"
                        alt="DNV ARC Logo"
                        className="h-20 w-auto object-contain"
                    />
                </Link>

                {/* Minimal Navigation */}
                <nav className="flex items-center text-base font-medium text-slate-700">
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