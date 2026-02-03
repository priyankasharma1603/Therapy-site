import Link from "next/link";
import Image from "next/image";
import FadeIn from "../ui/FadeIn";
import "../../styles/footer.css";

const Footer = () => {
    return (
        <footer className="footer-container">
            {/* Top Section */}
            <div className="footer-top">
                {/* Brand/Logo Section (Start) */}
                <FadeIn className="footer-brand" delay={100}>
                    <Link href="/">
                        <Image
                            src="/assets/images/logo.png"
                            alt="Lilac Template"
                            width={310}
                            height={55}
                            className="footer-logo"
                        />
                    </Link>
                    <div className="footer-info">
                        <p>123 Example Road</p>
                        <p>Minneapolis, MN</p>
                        <a
                            href="mailto:email@example.com"
                            className="footer-email"
                        >
                            email@example.com
                        </a>
                        <a
                            href="tel:5555555555"
                            className="footer-phone"
                        >
                            (555) 555-5555
                        </a>
                    </div>
                </FadeIn>

                {/* Info/Links Group (End) */}
                <div className="footer-links-group">
                    <FadeIn className="footer-section" delay={300}>
                        <h3>Hours</h3>
                        <p>Monday – Friday</p>
                        <p>10am – 6pm</p>
                    </FadeIn>

                    <FadeIn className="footer-section footer-section-find" delay={500}>
                        <h3>Find</h3>
                        <ul className="footer-nav-list">
                            <li className="footer-nav-item">
                                <Link href="/" className="footer-nav-link footer-nav-link-home">
                                    Home
                                </Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link href="/contact" className="footer-nav-link footer-nav-link-other">
                                    Contact
                                </Link>
                            </li>
                            <li className="footer-nav-item">
                                <Link href="/blog" className="footer-nav-link footer-nav-link-other">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </FadeIn>
                </div>
            </div>

            {/* Bottom Section */}
            <FadeIn className="footer-bottom" delay={700}>
                <div className="footer-legal-container">
                    <Link href="/privacy" className="footer-legal-link">
                        Privacy & Cookies Policy
                    </Link>
                    <Link href="/good-faith-estimate" className="footer-legal-link">
                        Good Faith Estimate
                    </Link>
                    <Link href="/terms" className="footer-legal-link">
                        Website Terms & Conditions
                    </Link>
                    <Link href="/disclaimer" className="footer-legal-link">
                        Disclaimer
                    </Link>
                </div>

                <div className="footer-credits">
                    <p>
                        Website Template Credits: <a href="https://gobloomcreative.com" target="_blank" rel="noopener noreferrer">Go Bloom Creative</a>
                    </p>
                </div>

                <div className="footer-copyright">
                    <p>All Rights Reserved © 2024 Your Business Name Here, LLC.</p>
                </div>
            </FadeIn>
        </footer>
    );
};

export default Footer;
