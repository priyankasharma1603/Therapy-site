import Image from "next/image";
import Link from "next/link";
import FadeIn from "../ui/FadeIn";
import "../../styles/fulfilling-life.css";

export default function FulfillingLife() {
    return (
        <section className="fulfilling-section">
            {/* Left Content */}
            <div className="fulfilling-content">
                <div className="fulfilling-text-container">
                    <FadeIn delay={200}>
                        <h2 className="fulfilling-title">
                            Live a fulfilling life.
                        </h2>
                    </FadeIn>

                    <FadeIn delay={400}>
                        <p className="fulfilling-text">
                            Life can be challenging—especially when you're trying to balance
                            your personal and professional life.
                        </p>
                    </FadeIn>

                    <FadeIn delay={600}>
                        <p className="fulfilling-text">
                            It's easy to feel like you're alone in facing these challenges, but I
                            want you to know that I'm here to help.
                        </p>
                    </FadeIn>
                </div>

                <FadeIn delay={800} className="w-full">
                    <Link href="/contact" className="fulfilling-link-wrapper">
                        <span className="fulfilling-link">
                            Get in Touch →
                        </span>
                    </Link>
                </FadeIn>
            </div>

            {/* Right Image */}
            <FadeIn className="fulfilling-image-wrapper" delay={400}>
                <Image
                    src="/assets/images/fulfill.webp"
                    alt="Fulfilling Life"
                    fill
                    className="fulfilling-image"
                />
            </FadeIn>
        </section>
    );
}
