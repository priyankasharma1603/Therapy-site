import FadeIn from "../ui/FadeIn";

export default function Footer() {
    return (
        <footer className="bg-[#1a2810] text-[#f8f3ed] py-12 md:py-13 lg:py-14 px-6 md:px-10 lg:px-20 xl:px-24 relative overflow-hidden">
            {/* Background elements - Hidden on mobile */}
            <div className="hidden md:block absolute top-0 right-0 w-[40%] h-[100%] bg-white/5 skew-x-[-15deg] translate-x-[20%] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[200px] md:w-[250px] lg:w-[300px] h-[200px] md:h-[250px] lg:h-[300px] bg-[#223614] rounded-full blur-[80px] md:blur-[100px] lg:blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-14 lg:gap-18 xl:gap-20 mb-14 md:mb-20 lg:mb-26 xl:mb-32">
                    <div className="lg:col-span-5">
                        <FadeIn delay={100}>
                            <h2 className="font-heading text-3xl md:text-4xl mb-6 md:mb-8 leading-tight">
                                Compassionate support <br />
                                for <span className="italic">conscious healing</span>.
                            </h2>
                            <p className="text-[#f8f3ed]/60 text-base md:text-lg leading-relaxed max-w-md mb-10 md:mb-12">
                                I provide a space where clinical depth meets human warmth, helping adults find clarity amidst the complexity of modern life.
                            </p>
                            <div className="flex gap-4 md:gap-6">
                                <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all">
                                    <span className="sr-only">Instagram</span>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="md:w-5 md:h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.058-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </a>
                                <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="md:w-5 md:h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
                        <FadeIn delay={200}>
                            <h3 className="text-white font-heading text-lg md:text-xl mb-6 md:mb-8">Navigation</h3>
                            <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-[#f8f3ed]/50">
                                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                                <li><a href="#office" className="hover:text-white transition-colors">Office</a></li>
                                <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
                            </ul>
                        </FadeIn>

                        <FadeIn delay={300}>
                            <h3 className="text-white font-heading text-lg md:text-xl mb-6 md:mb-8">Specialties</h3>
                            <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-[#f8f3ed]/50">
                                <li><a href="#" className="hover:text-white transition-colors">Anxiety Therapy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">EMDR Treatment</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Burnout Recovery</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Trauma Work</a></li>
                            </ul>
                        </FadeIn>

                        <FadeIn delay={400} className="col-span-2 md:col-span-1">
                            <h3 className="text-white font-heading text-lg md:text-xl mb-6 md:mb-8">Contact</h3>
                            <div className="space-y-4 md:space-y-6 text-sm md:text-base text-[#f8f3ed]/50 italic font-serif">
                                <p className="not-italic font-sans">123th Street 45 W,<br />Santa Monica, CA 90401</p>
                                <a href="mailto:maya@example.com" className="block hover:text-white transition-colors not-italic font-sans">maya@example.com</a>
                                <p className="text-xs md:text-sm border-t border-white/10 pt-3 md:pt-4">Currently accepting new in-person and telehealth clients.</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                <FadeIn delay={500} className="pt-10 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center text-white font-heading text-xs">
                            M
                        </div>
                        <p className="text-[#f8f3ed]/30 text-xs md:text-sm tracking-widest uppercase">
                            © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD
                        </p>
                    </div>
                    <div className="flex gap-6 md:gap-10 text-[#f8f3ed]/30 text-[10px] md:text-xs tracking-widest uppercase">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Accessibility</a>
                    </div>
                </FadeIn>
            </div>
        </footer>
    );
}
