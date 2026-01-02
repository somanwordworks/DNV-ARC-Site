export default function Footer() {
    return (
        <footer id="contact" className="mt-24 bg-white text-slate-700">
            <div className="container-custom py-12 grid md:grid-cols-2 gap-8">

                {/* Left Side */}
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        <img
                            src="/logos/DNV-Arc.png"
                            className="h-12 object-contain"
                            alt="DNV ARC"
                        />
                    </div>

                    <p className="text-slate-600 text-sm max-w-md">
                        A group company connecting <strong>Data Rhino</strong>, <strong>CINEQ</strong>,
                        and <strong>Rhino Academy</strong>.
                    </p>
                </div>

                {/* Right Side */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h5 className="font-semibold mb-2 text-slate-900">Brands</h5>
                        <ul className="space-y-2 text-sm">
                            <li><a href="https://cineq.in/" target="_blank" className="hover:underline text-slate-700">CINEQ</a></li>
                            <li><a href="#" target="_blank" className="hover:underline text-slate-700">Data Rhino</a></li>
                            <li><a href="#" target="_blank" className="hover:underline text-slate-700">Noteek</a></li>
                            <li><a href="#" target="_blank" className="hover:underline text-slate-700">Conteak</a></li>
                            <li><a href="#" target="_blank" className="hover:underline text-slate-700">Dunly</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-semibold mb-2 text-slate-900">Connect</h5>
                        <ul className="space-y-2 text-sm">
                            <li><a href="mailto:contact@dnvarc.com" className="hover:underline text-slate-700">
                                contact@dnvarc.com
                            </a></li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Copyright Bar */}
            <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
                © {new Date().getFullYear()} DNV ARC. All rights reserved.
            </div>
        </footer>
    );
}
