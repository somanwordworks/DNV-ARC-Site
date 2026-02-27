import HeaderMinimal from "@/components/HeaderMinimal";
import Footer from "@/components/Footer";

export default function PricingPage() {
    return (
        <>
            <HeaderMinimal />

            <main className="bg-white text-gray-800">

                {/* ✅ HERO SECTION (Now matching Services style) */}
                <section className="relative py-28 bg-gray-50 overflow-hidden">

                    {/* Background Illustration */}
                    <div className="absolute inset-0 opacity-40">
                        <img
                            src="/backgrounds/services-bg.png" // 👈 Use SAME file used in Services page
                            alt="Background Illustration"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="relative z-10 text-center px-6">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Website Development Pricing
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Transparent pricing tailored for Indian and International clients.
                            Choose a package that fits your business needs.
                        </p>
                    </div>
                </section>


                {/* India Pricing */}
                <section className="py-16 px-6 md:px-20">
                    <h2 className="text-3xl font-bold mb-10 text-center">
                        🇮🇳 India Pricing
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="border rounded-xl p-8 shadow-sm hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-4">Starter</h3>
                            <p className="text-3xl font-bold mb-6">₹9,999</p>
                            <ul className="space-y-3 text-gray-600">
                                <li>• One Page Website</li>
                                <li>• Up to 5 Sections</li>
                                <li>• Responsive Design</li>
                                <li>• Contact Form</li>
                                <li>• Basic SEO Setup</li>
                            </ul>
                        </div>

                        <div className="border-2 border-black rounded-xl p-8 shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Business</h3>
                            <p className="text-3xl font-bold mb-6">₹24,999</p>
                            <ul className="space-y-3 text-gray-600">
                                <li>• Up to 5 Pages</li>
                                <li>• WhatsApp Integration</li>
                                <li>• Social Media Integration</li>
                                <li>• Basic SEO</li>
                                <li>• 2 Revisions</li>
                            </ul>
                        </div>

                        <div className="border rounded-xl p-8 shadow-sm hover:shadow-md transition">
                            <h3 className="text-xl font-semibold mb-4">Professional</h3>
                            <p className="text-3xl font-bold mb-6">₹44,999</p>
                            <ul className="space-y-3 text-gray-600">
                                <li>• Up to 10 Pages</li>
                                <li>• Custom UI Design</li>
                                <li>• Blog Setup</li>
                                <li>• Advanced SEO</li>
                                <li>• 3 Revisions</li>
                            </ul>
                        </div>

                    </div>
                </section>


                {/* International Pricing */}
                <section className="py-16 px-6 md:px-20 bg-gray-50">
                    <h2 className="text-3xl font-bold mb-10 text-center">
                        🌎 International Pricing
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="border rounded-xl p-8 shadow-sm">
                            <h3 className="text-xl font-semibold mb-4">Starter</h3>
                            <p className="text-3xl font-bold mb-6">$249</p>
                            <ul className="space-y-3 text-gray-600">
                                <li>• One Page Website</li>
                                <li>• Responsive Design</li>
                                <li>• Contact Form</li>
                            </ul>
                        </div>

                        <div className="border-2 border-black rounded-xl p-8 shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Business</h3>
                            <p className="text-3xl font-bold mb-6">$599</p>
                            <ul className="space-y-3 text-gray-600">
                                <li>• Up to 5 Pages</li>
                                <li>• SEO Setup</li>
                                <li>• WhatsApp Integration</li>
                            </ul>
                        </div>

                        <div className="border rounded-xl p-8 shadow-sm">
                            <h3 className="text-xl font-semibold mb-4">Professional</h3>
                            <p className="text-3xl font-bold mb-6">$1,099</p>
                            <ul className="space-y-3 text-gray-600">
                                <li>• Up to 10 Pages</li>
                                <li>• Blog + Gallery</li>
                                <li>• Advanced Optimization</li>
                            </ul>
                        </div>

                    </div>
                </section>


                {/* Notes */}
                <section className="py-12 px-6 md:px-20 text-center">
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Pricing includes design and development only. Content and images must be provided by the client unless content writing service is selected. Hosting and maintenance are billed separately on a yearly basis. Custom features are quoted separately.
                    </p>
                </section>

            </main>

            <Footer />
        </>
    );
}