import Image from "next/image";
import FadeIn from "../ui/FadeIn";
import "../../styles/about.css";

export default function AboutPage() {
    return (
        <main className="about-main">
            <section className="about-section">

                {/* RIGHT IMAGES */}
                <div className="about-image-container">
                    {/* MAIN ARCH IMAGE */}
                    <FadeIn className="about-arch">
                        <Image
                            src="/assets/images/abt.webp"
                            alt="Lilac person"
                            width={600}
                            height={900}
                            className="w-full h-full object-cover"
                        />
                    </FadeIn>

                    {/* CIRCLE IMAGE OVERLAY */}
                    <FadeIn className="about-circle-overlay" delay={400}>
                        <Image
                            src="/assets/images/abt2.webp"
                            alt="White flowers"
                            width={321}
                            height={321}
                            className="rounded-full object-cover w-full h-full shadow-lg"
                        />
                    </FadeIn>
                </div>

                {/* LEFT TEXT CONTENT */}
                <div className="about-content">
                    <FadeIn delay={200}>
                        <h1 className="about-title">
                            Hi, I’m Lilac.
                        </h1>
                    </FadeIn>

                    <FadeIn delay={400}>
                        <p className="about-text">
                            I\'m committed to providing a safe and supportive environment where we can explore
                            your thoughts, feelings, and behaviors. With empathy and guidance, we\'ll work together
                            to navigate the challenges life throws your way.
                        </p>
                    </FadeIn>

                    <FadeIn delay={600} className="about-button-container">
                        <button className="about-button">
                            LET\'S CHAT →
                        </button>
                    </FadeIn>
                </div>

            </section>
        </main>
    );
}
