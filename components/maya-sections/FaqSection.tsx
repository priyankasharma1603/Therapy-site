"use client";
import { useState } from "react";
import FadeIn from "../ui/FadeIn";

const faqs = [
    {
        question: "What is your approach to therapy?",
        answer: "I take a warm, collaborative, and grounded approach. I integrate evidence-based methods such as CBT, EMDR, and mindfulness to help clients understand both the emotional and physiological sides of their experience."
    },
    {
        question: "Do you offer in-person or telehealth sessions?",
        answer: "Yes, I offer both in-person therapy at my Santa Monica office and secure telehealth sessions for clients located throughout California."
    },
    {
        question: "What is EMDR, and how can it help me?",
        answer: "EMDR (Eye Movement Desensitization and Reprocessing) is a specialized therapy designed to help the brain process traumatic or distressing memories so they no longer cause the same emotional or physiological distress."
    },
    {
        question: "How do I know if we're a good fit?",
        answer: "Therapy works best when you feel respected and understood. I offer a free 15-minute consultation so we can discuss your goals and see if my style feels right for you."
    }
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-20 md:py-28 lg:py-36 xl:py-40 px-6 md:px-10 lg:px-20 xl:px-24 bg-white relative">
            <div className="max-w-4xl mx-auto">
                <FadeIn delay={200}>
                    <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-7 lg:mb-8">
                        <div className="w-8 md:w-10 lg:w-12 h-[1px] bg-[#223614]/20" />
                        <span className="text-[#223614] font-medium tracking-[0.3em] md:tracking-[0.4em] uppercase text-[9px] md:text-[10px] opacity-50">
                            Support
                        </span>
                        <div className="w-8 md:w-10 lg:w-12 h-[1px] bg-[#223614]/20" />
                    </div>
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#223614] mb-14 md:mb-18 lg:mb-22 xl:mb-24 text-center leading-[0.9]">
                        Common <span className="italic font-serif">Questions</span>
                    </h2>
                </FadeIn>

                <div className="space-y-3 md:space-y-4">
                    {faqs.map((faq, i) => (
                        <FadeIn key={i} delay={300 + i * 100}>
                            <div className={`border-b border-[#223614]/10 transition-all duration-500 ${openIndex === i ? 'pb-6 md:pb-8 pt-3 md:pt-4' : 'py-3 md:py-4'}`}>
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full text-left flex justify-between items-center group py-3 md:py-4"
                                >
                                    <span className={`text-lg md:text-xl lg:text-2xl font-heading transition-colors duration-300 pr-4 ${openIndex === i ? 'text-[#223614]' : 'text-[#223614]/60 group-hover:text-[#223614]'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#223614]/10 flex items-center justify-center transition-all duration-500 flex-shrink-0 ${openIndex === i ? 'bg-[#223614] text-white border-[#223614] rotate-45' : 'group-hover:border-[#223614]/30'}`}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="md:w-[14px] md:h-[14px]"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                                    </div>
                                </button>
                                <div
                                    className={`transition-all duration-700 ease-in-out overflow-hidden ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="text-base md:text-lg lg:text-xl text-[#223614]/60 leading-relaxed font-light pr-8 md:pr-12 pt-3 md:pt-4">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
