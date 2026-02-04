"use client";
import FadeIn from "../ui/FadeIn";

export default function CTA() {
    return (
        <section className="py-16 md:py-18 lg:py-20 bg-[#f8f3ed] px-6 md:px-10 lg:px-20 xl:px-24 relative overflow-hidden">
            {/* Subtle Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Compact Horizontal Card */}
                <div className="bg-gradient-to-br from-[#223614] to-[#2d471b] rounded-2xl md:rounded-3xl lg:rounded-[2.5rem] px-6 md:px-10 lg:px-14 xl:px-16 py-10 md:py-12 lg:py-14 xl:py-16 relative overflow-hidden shadow-[0_30px_80px_rgba(34,54,20,0.25)]">

                    {/* Organic Background Shape */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/[0.03] rounded-[60%_40%_30%_70%/50%] blur-3xl pointer-events-none" />

                    {/* Grid Layout: Split Content */}
                    <div className="relative z-10 grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">

                        {/* Left: Text Content (7 cols) */}
                        <div className="lg:col-span-7">
                            <FadeIn delay={100}>
                                <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
                                    <div className="w-8 md:w-12 h-[1px] bg-white/20" />
                                    <span className="text-white/40 text-[8px] md:text-[9px] font-medium tracking-[0.4em] md:tracking-[0.5em] uppercase">
                                        Free Consultation
                                    </span>
                                </div>
                            </FadeIn>

                            <FadeIn delay={300}>
                                <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-[#f8f3ed] mb-5 md:mb-6 leading-[0.95] tracking-tight">
                                    Ready to begin <br />
                                    <span className="italic font-serif text-[#f8f3ed]/80">your journey?</span>
                                </h2>
                            </FadeIn>

                            <FadeIn delay={500}>
                                <p className="text-base md:text-lg lg:text-xl text-[#f8f3ed]/60 font-light leading-relaxed max-w-xl">
                                    Let's connect for a 15-minute consultation to explore how we can work together.
                                </p>
                            </FadeIn>
                        </div>

                        {/* Right: Action Area (5 cols) */}
                        <div className="lg:col-span-5 flex flex-col gap-5 md:gap-6">
                            <FadeIn delay={700}>
                                <button className="w-full px-8 md:px-10 py-4 md:py-5 bg-[#f8f3ed] text-[#223614] rounded-full font-medium shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:bg-white hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)] transition-all transform hover:-translate-y-1 active:scale-95 duration-500">
                                    Schedule Consultation
                                </button>
                            </FadeIn>

                            <FadeIn delay={900}>
                                <div className="flex items-center justify-center gap-3 md:gap-4">
                                    <div className="flex-1 h-[1px] bg-white/10" />
                                    <span className="text-white/30 text-xs uppercase tracking-widest">or</span>
                                    <div className="flex-1 h-[1px] bg-white/10" />
                                </div>
                            </FadeIn>

                            <FadeIn delay={1100}>
                                <a
                                    href="mailto:maya@example.com"
                                    className="block text-center text-[#f8f3ed] font-medium py-3 text-sm md:text-base opacity-70 hover:opacity-100 font-serif italic transition-all hover:bg-white/5 rounded-full"
                                >
                                    maya@example.com
                                </a>
                            </FadeIn>

                            {/* Availability Badge */}
                            <FadeIn delay={1300}>
                                <div className="mt-2 md:mt-4 flex items-center gap-2 md:gap-3 justify-center lg:justify-start">
                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    <p className="text-[9px] md:text-[10px] tracking-wider uppercase text-white/30">
                                        Accepting new clients
                                    </p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>

                    {/* Decorative Corner Element - Hidden on mobile */}
                    <div className="hidden md:block absolute -bottom-8 -left-8 w-32 h-32 text-white/5 pointer-events-none">
                        <svg viewBox="0 0 100 100" fill="currentColor">
                            <circle cx="50" cy="50" r="48" stroke="currentColor" fill="none" strokeWidth="0.5" />
                            <path d="M50,2 L50,98" stroke="currentColor" strokeWidth="0.5" />
                            <path d="M2,50 L98,50" stroke="currentColor" strokeWidth="0.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
