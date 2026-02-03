"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../../styles/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav className={`nav-container ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
        {/* Mobile Hamburger (Left) */}
        <button
          className="nav-hamburger"
          onClick={() => setIsOpen(true)}
        >
          <svg className="nav-hamburger-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 9h16M4 15h16" />
          </svg>
        </button>

        <div className="nav-logo-container">
          <Link href="/">
            <Image
              src="/assets/images/logo.png"
              alt="Lilac Template"
              width={200}
              height={60}
              className="nav-logo"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#" className="nav-link">Blog</a>
          <a href="#" className="nav-link">Contact</a>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-header">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="mobile-menu-close"
            >
              <svg className="mobile-menu-close-icon" fill="none" stroke="currentColor" viewBox="0 0 30 30">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="mobile-menu-logo-wrapper">
              <Link href="/">
                <Image src="/assets/images/logo.png" alt="Lilac Template" fill className="mobile-menu-logo" />
              </Link>
            </div>
          </div>

          <div className="mobile-menu-content">
            <a href="#" className="mobile-menu-link" onClick={() => setIsOpen(false)}>Blog</a>
            <a href="#" className="mobile-menu-link" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </>
  );
}
