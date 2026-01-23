"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Heart,
  ArrowUp,
  X,
} from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-sky-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-sky-400 animate-pulse" />
              <h3 className="text-xl font-bold ml-2">ChristianSing</h3>
            </div>
            <p className="text-sky-100 text-sm leading-relaxed">
              Propagating the Word through excellence in church/choral music
              using education, performance, composition and advocacy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-sky-300">Quick Links</h4>
            <ul className="space-y-2">
              {[
                "About Us",
                "Our Mission",
                "Ministries",
                "Membership",
                "Get Involved",
              ].map((link, index) => (
                <li
                  key={link}
                  className="transform hover:translate-x-2 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <a
                    href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sky-200 hover:text-white text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-sky-400 transition-all duration-300 mr-2"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-sky-300">Contact Us</h4>
            <ul className="space-y-3 text-sm text-sky-100">
              <li className="flex items-start group hover:text-white transition-colors duration-300">
                <Mail className="h-4 w-4 mr-2 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a
                  href="mailto:info@christiansingfoundation.org"
                  className="hover:text-white"
                >
                  info@christiansingfoundation.org
                </a>
              </li>
              <li className="flex items-start group hover:text-white transition-colors duration-300">
                <Phone className="h-4 w-4 mr-2 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <a
                    href="tel:+2348035390860"
                    className="block hover:text-white"
                  >
                    08035390860
                  </a>
                  <a
                    href="tel:+2348032006518"
                    className="block hover:text-white"
                  >
                    08032006518
                  </a>
                </div>
              </li>
              <li className="flex items-start group hover:text-white transition-colors duration-300">
                <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-sky-300">Follow Us</h4>
            <div className="flex space-x-3">
              {[
                {
                  Icon: Facebook,
                  href: "https://facebook.com",
                  color: "hover:bg-sky-600",
                },
                {
                  Icon: X,
                  href: "https://twitter.com",
                  color: "hover:bg-sky-500",
                },
                {
                  Icon: Instagram,
                  href: "https://instagram.com",
                  color: "hover:bg-purple-600",
                },
                {
                  Icon: Youtube,
                  href: "https://youtube.com",
                  color: "hover:bg-red-600",
                },
              ].map(({ Icon, href, color }, index) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white bg-opacity-10 p-3 rounded-lg backdrop-blur-sm ${color} transition-all duration-300 transform hover:scale-110 hover:-rotate-6`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  aria-label={`Visit our ${Icon.name}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider with Animation */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-sky-500 opacity-30"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-r from-purple-900 to-sky-900 px-4">
              <Heart className="h-6 w-6 text-sky-400 animate-pulse" />
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-sky-200">
          <p className="mb-2 animate-fadeIn">
            &copy; {new Date().getFullYear()} ChristianSing Foundation. All
            rights reserved.
          </p>
          <p className="text-xs animate-fadeIn animation-delay-200">
            A Not-for-Profit Organisation | Affiliated with the Royal School of
            Church Music, England
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 bg-gradient-to-r from-sky-500 to-purple-600 p-3 rounded-full shadow-2xl hover:shadow-sky-500/50 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6 group-hover:animate-bounce" />
      </button>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
