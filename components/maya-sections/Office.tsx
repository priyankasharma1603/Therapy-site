import FadeIn from "../ui/FadeIn";

export default function Office() {
    return (
        <section id="office" className="py-20 md:py-28 lg:py-40 px-6 md:px-10 lg:px-24 bg-[#f8f3ed] relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-24 items-center">
                    <div className="lg:col-span-5">
                        <FadeIn delay={200}>
                            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                                <div className="w-8 md:w-12 h-[1px] bg-[#223614]/20" />
                                <span className="text-[#223614] font-medium tracking-[0.3em] md:tracking-[0.4em] uppercase text-[9px] md:text-[10px] opacity-50">
                                    The Space
                                </span>
                            </div>
                            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#223614] leading-[0.9] mb-6 md:mb-8 lg:mb-10 xl:mb-12">
                                A Calm <br />
                                <span className="italic font-serif">Sanctuary</span>
                            </h2>
                            <p className="text-base md:text-lg lg:text-xl text-[#223614]/70 leading-relaxed font-light mb-8 md:mb-10 lg:mb-12 max-w-md">
                                My clinical space in Santa Monica is designed to feel quiet, private, and grounded—a place to slow down and reconnect.
                            </p>

                            <div className="space-y-5 md:space-y-6 lg:space-y-8 mb-10 md:mb-12 lg:mb-16">
                                <div className="group flex items-start gap-4 md:gap-5 lg:gap-6">
                                    <div className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full border border-[#223614]/10 flex items-center justify-center group-hover:bg-[#223614] group-hover:text-white transition-all duration-500 flex-shrink-0">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-[19px] md:h-[19px] lg:w-5 lg:h-5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-heading text-base md:text-lg text-[#223614] mb-1">Location</h4>
                                        <p className="text-sm md:text-base text-[#223614]/50 font-light">123th Street 45 W, Santa Monica, CA</p>
                                    </div>
                                </div>
                                <div className="group flex items-start gap-4 md:gap-5 lg:gap-6">
                                    <div className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full border border-[#223614]/10 flex items-center justify-center group-hover:bg-[#223614] group-hover:text-white transition-all duration-500 flex-shrink-0">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-[19px] md:h-[19px] lg:w-5 lg:h-5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-heading text-base md:text-lg text-[#223614] mb-1">Availability</h4>
                                        <p className="text-sm md:text-base text-[#223614]/50 font-light">In-person and Secure Telehealth</p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full sm:w-auto px-10 md:px-11 lg:px-12 py-4 md:py-[18px] lg:py-5 bg-[#223614] text-white rounded-full font-medium text-sm md:text-base shadow-[0_15px_30px_rgba(34,54,20,0.15)] hover:bg-[#2d471b] hover:shadow-[0_20px_40px_rgba(34,54,20,0.25)] transition-all transform hover:-translate-y-1 active:scale-95 duration-500">
                                Take a Virtual Tour
                            </button>
                        </FadeIn>
                    </div>


                    {/* Image Grid - Images in row on all screen sizes */}
                    <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                        <FadeIn delay={600} className="col-span-1">
                            <div className="aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl relative group">
                                <img
                                    src="/assets/images/office1.jpeg"
                                    alt="Main therapy area"
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-[3000ms]"
                                />
                                <div className="absolute inset-0 bg-[#223614]/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </FadeIn>
                        <FadeIn delay={800} className="col-span-1 md:mt-12 lg:mt-16 xl:mt-24">
                            <div className="aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl relative group">
                                <img
                                    src="/assets/images/office2.jpeg"
                                    alt="Office details"
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-[3000ms]"
                                />
                                <div className="absolute inset-0 bg-[#223614]/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
