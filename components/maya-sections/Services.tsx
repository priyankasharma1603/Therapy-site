import FadeIn from "../ui/FadeIn";

export default function Services() {
    const services = [
        {
            title: "Anxiety & Panic",
            description: "Evidence-based strategies for high-achieving adults to navigate chronic worry, tension, and the constant pressure to perform.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                </svg>
            )
        },
        {
            title: "Trauma & EMDR",
            description: "Paced, therapeutic reprocessing of distressing life events, moving from physiological bracing to integrated healing and stability.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            )
        },
        {
            title: "Burnout & Perfectionism",
            description: "A space to slow down and reconnect for creatives and professionals caught in cycles of high-internal pressure and exhaustion.",
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
            )
        }
    ];

    return (
        <section id="services" className="py-20 md:py-28 lg:py-36 xl:py-40 px-6 md:px-10 lg:px-20 xl:px-24 bg-white relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:mb-24 lg:mb-28 xl:mb-32 max-w-3xl">
                    <FadeIn delay={200}>
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-[#223614] leading-[0.9] mb-7 md:mb-9 lg:mb-11 xl:mb-12">
                            Specialized <br />
                            <span className="italic font-serif">Clinical</span> Focus
                        </h2>
                        <p className="text-lg md:text-xl lg:text-2xl text-[#223614]/60 font-light leading-relaxed">
                            Combining practical therapeutic tools with depth-oriented work to support sustainable transformation.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#223614]/10">
                    {services.map((service, i) => (
                        <FadeIn key={i} delay={300 + i * 200} className="border-b md:border-b-0 md:border-r border-[#223614]/10 last:border-r-0">
                            <div className="p-8 md:p-12 lg:p-16 group hover:bg-[#f8f3ed] transition-colors duration-700 h-full flex flex-col">
                                <div className="mb-8 md:mb-10 lg:mb-12 text-[#223614]/30 group-hover:text-[#223614] transition-colors duration-500">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-heading text-[#223614] mb-6 md:mb-8 leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-base md:text-lg text-[#223614]/70 leading-relaxed font-light mb-8 md:mb-10 lg:mb-12">
                                    {service.description}
                                </p>
                                <div className="mt-auto">
                                    <button className="flex items-center gap-3 text-xs md:text-sm font-medium tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                                        Learn More
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-2 transition-transform">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
