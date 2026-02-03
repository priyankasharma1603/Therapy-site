"use client";
import Image from "next/image";
import FadeIn from "../ui/FadeIn";
import "../../styles/hope-section.css";

export default function HopeSection() {
    return (
        <section className="hope-section">
            <div className="hope-container">
                {/* Left: Image */}
                <FadeIn className="hope-image-wrapper">
                    <Image
                        src="/assets/images/hope.webp"
                        alt="Therapy session"
                        fill
                        className="hope-image"
                        priority
                    />
                </FadeIn>

                {/* Right: Content */}
                <div className="hope-content-side">
                    <FadeIn className="hope-content" delay={200}>
                        <div className="hope-text-content">
                            <h2 className="hope-title">
                                You don’t have to do this all <i>alone</i> <br />

                            </h2>

                            <p className="hope-intro">
                                If you are facing any of these, there’s hope:
                            </p>

                            <ul className="hope-list">
                                <li>Persistent feelings of sadness or hopelessness</li>
                                <li>Trouble focusing or making decisions</li>
                                <li>Difficulty maintaining relationships</li>
                                <li>Feeling constantly exhausted or unmotivated</li>
                                <li>A pervasive sense of being overwhelmed</li>
                            </ul>

                            <p className="hope-text">
                                With empathy and guidance, we'll work together to navigate the challenges life throws your way.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="hope-footer">
                        <div className="hope-divider"></div>
                        <FadeIn className="hope-button-wrapper" delay={400}>
                            <a href="#" className="hope-button">
                                WORK WITH ME —
                            </a>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
