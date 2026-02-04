import Image from "next/image";
import FadeIn from "../ui/FadeIn";

export default function About() {
    return (
        <section id="about" className="py-20 md:py-24 lg:py-28 xl:py-32 px-6 md:px-10 lg:px-20 xl:px-24 bg-white relative overflow-hidden">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-14 lg:gap-18 xl:gap-20">
                <FadeIn className="w-full lg:w-5/12" delay={200}>
                    <div className="relative group">
                        {/* Organic decorative frame behind image - Hidden on mobile */}
                        <div className="hidden md:block absolute -top-10 -left-10 w-full h-full bg-[#f8f3ed] rounded-[60%_40%_40%_60%/50%] z-0" />

                        <div className="aspect-[4/5] relative overflow-hidden rounded-[45%_55%_50%_50%/60%_60%_40%_40%] shadow-xl md:shadow-2xl z-10 border-2 md:border-4 border-white">
                            <Image
                                src="/assets/images/Dr. Maya Reynolds.png"
                                alt="Dr. Maya Reynolds, PsyD"
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
                            />
                        </div>

                        {/* Unique label - Repositioned for mobile */}
                        <div className="absolute -bottom-4 -right-2 md:-bottom-8 md:-right-4 bg-[#223614] p-6 md:p-8 rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl z-20 transform hover:-translate-y-2 transition-transform">
                            <p className="text-white font-heading text-lg md:text-2xl mb-1">Dr. Maya Reynolds</p>
                            <div className="w-6 md:w-8 h-[1px] bg-white/30 mb-2" />
                            <p className="text-white/60 text-[9px] md:text-[10px] tracking-[0.2em] uppercase">Licensed Psychologist</p>
                        </div>
                    </div>
                </FadeIn>

                <div className="w-full lg:w-7/12 relative">
                    <FadeIn delay={400}>
                        <h2 className="font-heading text-4xl md:text-[42px] lg:text-5xl xl:text-6xl text-[#223614] mb-7 md:mb-9 lg:mb-10 leading-[1.1]">
                            Warm Expertise for <br />
                            <span className="italic">Profound</span> Growth
                        </h2>
                    </FadeIn>

                    <FadeIn delay={600}>
                        <div className="space-y-5 md:space-y-6 text-base md:text-lg text-[#223614]/80 leading-relaxed font-light">
                            <p>
                                I'm a licensed clinical psychologist based in Santa Monica, California,
                                offering therapy for adults who feel overwhelmed by anxiety, stress, or
                                the lingering effects of past experiences. Many of the people I work
                                with are high-achieving, thoughtful, and self-aware.
                            </p>
                            <p>
                                internally feel exhausted, stuck in overthinking, or emotionally on edge.
                                My approach is warm, collaborative, and grounded. I integrate CBT,
                                EMDR, and mindfulness to support healing at a thoughtful pace.
                            </p>
                        </div>

                        {/* Botanical line detail */}
                        <div className="mt-10 md:mt-12 h-[1px] w-32 md:w-40 bg-[#223614]/10" />
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
