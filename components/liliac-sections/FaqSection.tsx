"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "../ui/FadeIn";
import "../../styles/faq-section.css";

const faqData = [
    {
        question: "Do you take insurance?",
        answer: "Yes, I am currently in-network with some major insurance providers. Please reach out to confirm your specific coverage and benefits."
    },
    {
        question: "What are your rates?",
        answer: "My rates vary depending on the type of session. Individual therapy is $150 per session, and intake sessions are $175. I also offer a sliding scale for those in need."
    },
    {
        question: "Do you have any openings?",
        answer: "I currently have limited availability for new clients. Please contact me to discuss potential session times and waitlist options."
    }
];

const backgroundData = [
    {
        title: "Education",
        content: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea."
    },
    {
        title: "Licensure",
        content: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea."
    },
    {
        title: "Certifications",
        content: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea."
    }
];

export default function FaqSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const [activeBgIndex, setActiveBgIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const toggleBgAccordion = (index: number) => {
        setActiveBgIndex(activeBgIndex === index ? null : index);
    };

    return (
        <>
            <section id="faqs" className="faq-section-container">

                {/* LEFT IMAGE */}
                <div className="faq-image-container">
                    <FadeIn className="faq-image-wrapper">
                        <Image
                            src="/assets/images/faq.webp"
                            alt="Therapy Image"
                            width={461}
                            height={691}
                            className="faq-image"
                        />
                    </FadeIn>
                </div>

                {/* RIGHT SIDE */}
                <div className="faq-content-side">
                    <FadeIn delay={200}>
                        <h2 className="faq-title">FAQs</h2>
                    </FadeIn>

                    <div className="space-y-0">
                        {faqData.map((item, index) => (
                            <FadeIn key={index} delay={300 + index * 100}>
                                <div className={`faq-accordion-item ${index === faqData.length - 1 ? "faq-accordion-item-last" : ""} `}>
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="faq-accordion-button"
                                    >
                                        <span className="faq-accordion-icon">
                                            {activeIndex === index ? "−" : "+"}
                                        </span>
                                        <h3 className="faq-accordion-question">{item.question}</h3>
                                    </button>

                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="faq-accordion-content"
                                            >
                                                <p className="faq-accordion-answer">
                                                    {item.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROFESSIONAL BACKGROUND SECTION */}
            <section className="background-section">
                <div className="background-container">
                    <FadeIn>
                        <h2 className="background-title">My Professional Background</h2>
                    </FadeIn>

                    <div className="space-y-0">
                        {backgroundData.map((item, index) => (
                            <FadeIn key={index} delay={200 + index * 100}>
                                <div className={`background-accordion-item ${index === backgroundData.length - 1 ? "background-accordion-item-last" : ""} `}>
                                    <button
                                        onClick={() => toggleBgAccordion(index)}
                                        className="background-accordion-button"
                                    >
                                        <h3 className="background-accordion-title">{item.title}</h3>
                                        <span className="background-accordion-icon">
                                            {activeBgIndex === index ? "−" : "+"}
                                        </span>
                                    </button>

                                    <AnimatePresence>
                                        {activeBgIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="background-accordion-content"
                                            >
                                                <p className="background-accordion-text">
                                                    {item.content}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* GET STARTED CTA SECTION */}
            <section className="cta-section">
                <div className="cta-container">
                    <FadeIn>
                        <h2 className="cta-title">
                            Get started today.
                        </h2>
                    </FadeIn>
                    <FadeIn delay={200}>
                        <p className="cta-text">
                            Ready to take the first step towards a happier, healthier you?<br />
                            Contact me to book your first session. I look forward to starting this<br />
                            therapeutic journey with you.
                        </p>
                    </FadeIn>
                    <FadeIn delay={400} className="cta-button-wrapper">
                        <button className="cta-button">
                            GET IN TOUCH →
                        </button>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
