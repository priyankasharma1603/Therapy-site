import Image from "next/image";
import FadeIn from "../ui/FadeIn";
import "../../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero-section">

      {/* Left Image - Arch Shape */}
      <FadeIn className="hero-image-wrapper">
        <Image
          src="/assets/images/heroimg.webp"
          fill
          alt="Woman holding flowers"
          className="hero-image"
          priority
        />
      </FadeIn>

      {/* Text Content */}
      <FadeIn className="hero-content" delay={200}>
        <h1 className="hero-title">
          Live your life <br /> in full bloom
        </h1>

        <p className="hero-subtitle">
          Therapy for Adults in Minneapolis, MN.
        </p>

        <a href="#" className="hero-button inline-block">
          CONNECT WITH ME →
        </a>
      </FadeIn>
    </section>
  );
}