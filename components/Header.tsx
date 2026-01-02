export default function Header() {
    return (
        <header className="w-full bg-white/95 backdrop-blur-sm shadow-sm">
            <div className="container-custom py-3 flex items-center justify-between">
                
                {/* Left: Logo + Title */}
                <div className="flex items-center gap-4">
                    <img
                        src="/logos/dnv-arc.png"
                        alt="DNV ARC Logo"
                        className="h-28 w-40 md:h-30 md:w-45 object-contain"
                    />
                </div>

                {/* Right: Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-base font-medium text-slate-700">
                    <a href="#about" className="hover:text-tribe-blue transition-colors">About</a>
                    <a href="#ecosystem" className="hover:text-tribe-blue transition-colors">Ecosystem</a>

                    {/* ⭐ New Services Link */}
                    <a href="/services" className="hover:text-tribe-blue transition-colors">Services</a>

                    <a href="#vision" className="hover:text-tribe-blue transition-colors">Vision</a>
                    
                    <a
                        href="#contact"
                        className="btn btn-outline text-tribe-blue border-tribe-blue hover:bg-tribe-blue hover:text-white"
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}
