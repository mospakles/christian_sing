"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Book, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  currentPage?: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage = "home" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Mission", href: "/mission" },
    { label: "Ministries", href: "/ministries" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Impact Stories", href: "/impact" },
    { label: "Membership", href: "/membership" },
    // { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white shadow-xl py-3"
          : "bg-gradient-to-r from-sky-50 to-purple-50 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with Animation */}
          <Link href="/" className="flex items-center group">
            {/* <div className="ml-3"> */}
              <Image
                src="/images/logo.jpeg"
                alt="logo"
                width={60}
                height={60}
              />
            {/* </div> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg group ${
                  currentPage === item.href.slice(1) ||
                  (item.href === "/" && currentPage === "home")
                    ? "text-purple-700"
                    : "text-gray-700 hover:text-purple-700"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-sky-100 to-purple-100 rounded-lg transform transition-all duration-300 ${
                    currentPage === item.href.slice(1) ||
                    (item.href === "/" && currentPage === "home")
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                  }`}
                ></div>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative p-2 text-purple-700 hover:bg-gradient-to-r hover:from-sky-100 hover:to-purple-100 rounded-lg transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <X
                className={`absolute inset-0 transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="space-y-2 pb-4">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`block py-3 px-4 text-sm font-semibold rounded-lg transition-all duration-300 transform ${
                  currentPage === item.href.slice(1) ||
                  (item.href === "/" && currentPage === "home")
                    ? "bg-gradient-to-r from-sky-500 to-purple-600 text-white shadow-lg scale-105"
                    : "text-gray-700 hover:bg-gradient-to-r hover:from-sky-100 hover:to-purple-100 hover:scale-105"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMenuOpen
                    ? "slideInRight 0.3s ease-out forwards"
                    : "none",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
