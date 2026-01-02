export default function ClienteleFlip() {
    const logos = [
        "/clients/client-1.png",
        "/clients/client-2.png",
        "/clients/client-3.png",
        
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container-custom text-center">

                {/* Section Header */}
                <h3 className="text-sm font-semibold tracking-widest text-slate-500 uppercase mb-6">
                    Clientele
                </h3>

                {/* Flip Wrapper */}
                <div className="clientele-flip-wrapper mx-auto">
                    <div className="clientele-flip">
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                className="clientele-flip-item"
                                style={{ animationDelay: `${index * 3}s` }}
                            >
                                <div className="clientele-logo-box">
                                    <img
                                        src={logo}
                                        alt="Client logo"
                                        className="clientele-logo-img"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
