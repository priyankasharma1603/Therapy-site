import Navbar from "../components/liliac-sections/Navbar";
import Hero from "../components/liliac-sections/Hero";
import About from "../components/liliac-sections/About";
import FulfillingLife from "../components/liliac-sections/FulfillingLife";
import MySpecialties from "../components/liliac-sections/MySpecialties";
import HopeSection from "../components/liliac-sections/HopeSection";
import FaqSection from "../components/liliac-sections/FaqSection";
import Footer from "../components/liliac-sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FulfillingLife />
      <MySpecialties />
      <HopeSection />
      <About />
      <FaqSection />
      <Footer />
    </main>
  );
}