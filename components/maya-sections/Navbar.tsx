"use client";
import { useState, useEffect } from "react";
import FadeIn from "../ui/FadeIn";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            {/* NAVBAR WRAPPER */}
            <nav
                className={`fixed top-0 left-0 w-full z-50 px-6 md:px-10 lg:px-24 transition-all duration-300
                ${isScrolled
                        ? "bg-white/95 backdrop-blur-md border-b border-[#223614]/10 shadow-sm py-3"
                        : "bg-white/80 backdrop-blur-sm py-5"
                    }`}
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center">

                    {/* LOGO */}
                    <FadeIn delay={100}>
                        <a href="#" className="group flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#223614] text-white flex items-center justify-center text-xl font-heading shadow-md group-hover:scale-110 transition">
                                M
                            </div>
                            <h1 className="font-heading text-xl md:text-2xl text-[#223614] tracking-tight hidden sm:block">
                                Dr. Maya Reynolds
                                <span className="ml-1 text-[10px] md:text-xs uppercase opacity-60 tracking-wider">
                                    PsyD
                                </span>
                            </h1>
                        </a>
                    </FadeIn>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex items-center gap-10">
                        <FadeIn delay={150} className="flex gap-8 text-[#223614]/70 font-medium">
                            {["Home", "About", "Services", "Office"].map((item, i) => (
                                <a key={i} href={`#${item.toLowerCase()}`} className="hover:text-[#223614] transition relative group">
                                    {item}
                                    <span className="absolute bottom-[-3px] left-0 w-0 h-[2px] bg-[#223614] transition-all group-hover:w-full"></span>
                                </a>
                            ))}
                        </FadeIn>

                        <FadeIn delay={200}>
                            <a
                                href="#contact"
                                className="px-6 py-2.5 bg-[#223614] text-white rounded-full font-medium shadow-lg hover:bg-[#2f4720] transition"
                            >
                                Contact
                            </a>
                        </FadeIn>
                    </div>

                    {/* MOBILE HAMBURGER BUTTON */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex flex-col gap-1.5 z-50 p-2"
                        aria-label="Toggle menu"
                    >
                        <span className={`w-7 h-0.5 bg-[#223614] rounded transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`w-7 h-0.5 bg-[#223614] rounded transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                        <span className={`w-7 h-0.5 bg-[#223614] rounded transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </nav>

            {/* MOBILE OVERLAY */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden 
                ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={closeMenu}
            />

            {/* MOBILE SIDEBAR */}
            <div
                className={`fixed top-0 right-0 h-full w-[80%] max-w-xs bg-[#f8f3ed] z-50 shadow-xl transition-transform duration-300 md:hidden
                ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* HEADER */}
                <div className="px-8 pt-20 pb-6 border-b border-[#223614]/10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#223614] text-white flex items-center justify-center font-heading text-xl">
                            M
                        </div>
                        <div>
                            <h2 className="font-heading text-lg text-[#223614]">
                                Dr. Maya Reynolds
                            </h2>
                            <p className="text-[10px] uppercase tracking-wider text-[#223614]/60">PsyD</p>
                        </div>
                    </div>
                </div>

                {/* LINKS */}
                <div className="px-8 py-8 flex flex-col gap-6 text-xl text-[#223614] font-heading">
                    {["Home", "About", "Services", "Office", "FAQs"].map((item, i) => (
                        <a
                            key={i}
                            href={`#${item.toLowerCase()}`}
                            onClick={closeMenu}
                            className="py-2 border-b border-[#223614]/10 hover:opacity-60 transition"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* FOOTER BUTTON */}
                <div className="px-8 pb-10 mt-auto">
                    <a
                        href="#contact"
                        onClick={closeMenu}
                        className="block w-full text-center py-4 bg-[#223614] text-white rounded-full font-medium shadow-lg hover:bg-[#2f4720] transition"
                    >
                        Schedule Consultation
                    </a>
                    <p className="text-center text-xs text-[#223614]/40 mt-4">
                        Currently accepting new clients
                    </p>
                </div>
            </div>
        </>
    );
}