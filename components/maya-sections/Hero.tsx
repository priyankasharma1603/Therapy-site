"use client";
import FadeIn from "../ui/FadeIn";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 xl:px-24 bg-[#f8f3ed] relative overflow-hidden pt-24 sm:pt-28 md:pt-36 lg:pt-40 pb-16 sm:pb-20 md:pb-28 lg:pb-32">
            {/* Soft Ambient Background Elements */}
            <div className="absolute top-[-15%] right-[-10%] w-[50%] h-[50%] bg-[#223614]/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-15%] w-[40%] h-[40%] bg-[#d7c9b8]/20 blur-[100px] rounded-full pointer-events-none" />

            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />

            <div className="max-w-7xl mx-auto w-full relative z-10 lg:grid lg:grid-cols-12 gap-8 md:gap-10 lg:gap-16 xl:gap-20 items-center">

                {/* Text Content: Left Column (7/12) */}
                <div className="lg:col-span-7 space-y-5 sm:space-y-6 md:space-y-9 lg:space-y-11 xl:space-y-12 mb-10 sm:mb-12 lg:mb-0">
                    <FadeIn delay={100}>
                        <div className="flex items-center gap-2 sm:gap-3 md:gap-5 lg:gap-6">
                            <span className="text-[#223614]/40 font-medium tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.45em] lg:tracking-[0.5em] uppercase text-[8px] sm:text-[9px] md:text-[10px]">
                                Dr. Maya Reynolds — PsyD
                            </span>
                            <div className="flex-1 h-[1px] bg-[#223614]/10" />
                        </div>
                    </FadeIn>

                    <FadeIn delay={300}>
                        <h1 className="font-heading text-[#223614] text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[90px] xl:text-[110px] 2xl:text-[120px] leading-[0.9] sm:leading-[0.85] tracking-tighter">
                            Finding <br />
                            <span className="italic font-serif relative">
                                Stillness
                                <svg className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-0 w-full h-5 sm:h-6 md:h-7 lg:h-8 text-[#223614]/5 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                                    <path d="M0,10 Q25,0 50,10 T100,10" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </span> <br />
                            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl opacity-90 font-light italic block mt-3 sm:mt-4 md:mt-5 lg:mt-6">within complexity</span>
                        </h1>
                    </FadeIn>

                    <div className="max-w-xl">
                        <FadeIn delay={500}>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#223614]/60 leading-relaxed font-light mb-8 sm:mb-10 md:mb-14 lg:mb-16 border-l-2 border-[#223614]/5 pl-4 sm:pl-6 md:pl-8 italic">
                                Specializing in anxiety, trauma, and burnout for identifying the patterns that no longer serve you.
                            </p>
                        </FadeIn>

                        <FadeIn delay={700}>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-8 items-stretch sm:items-center lg:items-start group">
                                <button className="w-full sm:w-auto px-8 sm:px-10 md:px-14 py-4 sm:py-5 md:py-6 bg-[#223614] text-white text-sm sm:text-base rounded-full font-medium shadow-[0_20px_40px_rgba(34,54,20,0.15)] hover:bg-[#2d471b] hover:shadow-[0_25px_50px_rgba(34,54,20,0.25)] transition-all transform hover:-translate-y-1 active:scale-95 duration-500">
                                    Begin Healing
                                </button>
                                <button className="text-[#223614] font-medium border-b border-[#223614]/10 hover:border-[#223614] transition-all py-2 text-sm sm:text-base md:text-lg opacity-60 hover:opacity-100 italic font-serif bg-white/0 hover:bg-[#223614]/5 px-4 -mx-4 rounded-lg">
                                    My Clinical Narrative
                                </button>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Creative Image Layer: Right Column (5/12) */}
                <div className="lg:col-span-5 relative">
                    <FadeIn delay={400}>
                        {/* Reduced size on mobile with max-width constraint */}
                        <div className="relative aspect-[3/4] sm:aspect-[3/4] md:aspect-[4/5] group max-w-[75%] sm:max-w-[80%] md:max-w-full mx-auto md:mx-0">
                            {/* Layered Organic Shape (Behind) - Hidden on mobile */}
                            <div className="hidden md:block absolute -top-10 -right-10 inset-0 bg-[#d7c9b8]/30 rounded-[60%_40%_40%_60%/50%] z-0 transform rotate-12 group-hover:rotate-0 transition-transform duration-1000" />

                            {/* Organic Image Container */}
                            <div className="relative h-full w-full overflow-hidden rounded-[45%_55%_50%_50%/60%_60%_40%_40%] shadow-[0_20px_40px_rgba(0,0,0,0.06)] sm:shadow-[0_30px_60px_rgba(0,0,0,0.08)] md:shadow-[0_50px_100px_rgba(0,0,0,0.08)] z-10 border-6 sm:border-8 md:border-[12px] border-white/60 backdrop-blur-sm">
                                <img
                                    src="/assets/images/hero.png"
                                    alt="Minimalist serene interior"
                                    className="object-cover w-full h-full transform scale-110 group-hover:scale-100 transition-transform duration-[6000ms] ease-out"
                                />
                            </div>

                            {/* Floating Creative Element: Service Tag - Repositioned for mobile */}
                            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 md:-bottom-10 md:-left-10 bg-white/90 backdrop-blur-xl p-4 sm:p-5 md:p-8 rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl sm:shadow-2xl md:shadow-3xl z-20 border border-white max-w-[140px] sm:max-w-[160px] md:max-w-[200px] transform hover:-translate-y-2 transition-transform duration-500">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-[#223614] flex items-center justify-center text-white mb-2 sm:mb-3 md:mb-4">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sm:w-[12px] sm:h-[12px] md:w-[14px] md:h-[14px]"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                </div>
                                <h4 className="text-[#223614] font-heading text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1 leading-tight">Evidence-Based</h4>
                                <p className="text-[#223614]/40 text-[8px] sm:text-[9px] md:text-[10px] tracking-wider uppercase font-medium">Care in Santa Monica</p>
                            </div>

                            {/* Botanical Line Detail - Hidden on mobile */}
                            <div className="hidden md:block absolute top-[10%] -left-16 w-32 h-32 text-[#223614]/10 z-20 pointer-events-none transform -rotate-45">
                                <svg viewBox="0 0 100 100" fill="currentColor">
                                    <path d="M10,80 Q30,20 90,40" stroke="currentColor" fill="none" strokeWidth="1" />
                                    <circle cx="90" cy="40" r="2" />
                                </svg>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Aesthetic Page Scroll Indicator */}
            <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3 md:gap-4 opacity-40">
                <span className="text-[7px] sm:text-[8px] md:text-[9px] tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] uppercase text-[#223614]">Discover</span>
                <div className="w-[1px] h-10 sm:h-12 md:h-16 bg-[#223614] origin-top animate-pulse" />
            </div>
        </section>
    );
}
