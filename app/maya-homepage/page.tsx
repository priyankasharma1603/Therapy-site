import Navbar from "../../components/maya-sections/Navbar";
import Hero from "../../components/maya-sections/Hero";
import About from "../../components/maya-sections/About";
import Services from "../../components/maya-sections/Services";
import Office from "../../components/maya-sections/Office";
import FaqSection from "../../components/maya-sections/FaqSection";
import CTA from "../../components/maya-sections/CTA";
import Footer from "../../components/maya-sections/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#f8f3ed]">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Office />
            <FaqSection />
            <CTA />
            <Footer />
        </main>
    );
}