"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Music } from "lucide-react";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Mission", href: "/mission" },
  { label: "Ministries", href: "/ministries" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Impact", href: "/impact" },
  { label: "Membership", href: "/membership" },
  { label: "Contact", href: "/contact" },
] as const;

const SPRING = { type: "spring", stiffness: 440, damping: 36 } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

export default function Navbar({ current = "home" }: { current?: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 44);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  /* Lock body scroll when mobile drawer is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const slug = (href: string) => (href === "/" ? "home" : href.slice(1));
  const active = (href: string) => current === slug(href);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      className={`navbar${scrolled ? " navbar--scrolled" : ""}`}
    >
      <div className="navbar__gold-bar" />

      <div className="container navbar__inner">
        {/* ── Logo ── */}
        <motion.a
          href="/"
          className="navbar__logo"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="navbar__logo-icon"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 360 }}
          >
            <Music size={18} color="#fff" />
          </motion.div>
          <div className="navbar__logo-text">
            <div className="navbar__logo-text-primary">ChristianSing</div>
            <div className="navbar__logo-text-sub">Foundation</div>
          </div>
        </motion.a>

        {/* ── Desktop nav ── */}
        <nav className="navbar__nav" aria-label="Main navigation">
          {LINKS.map((link, i) => {
            const isActive = active(link.href);
            return (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className={`navbar__link${isActive ? " navbar__link--active" : ""}`}
              >
                {link.label}
                {isActive && (
                  <>
                    <motion.span
                      layoutId="nav-bar"
                      transition={SPRING}
                      style={{
                        position: "absolute",
                        bottom: 3,
                        left: 6,
                        right: 6,
                        height: 2,
                        background: "var(--viridian)",
                        borderRadius: 2,
                      }}
                    />
                    <motion.span
                      layoutId="nav-dot"
                      transition={SPRING}
                      style={{
                        position: "absolute",
                        bottom: -1,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "var(--gold)",
                      }}
                    />
                  </>
                )}
              </motion.a>
            );
          })}
          <motion.a
            href="/get-involved"
            className="btn btn-viridian"
            style={{
              marginLeft: 12,
              padding: "10px 20px",
              fontSize: "0.78rem",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Donate ♥
          </motion.a>
        </nav>

        {/* ── Mobile hamburger ── */}
        <motion.button
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
          className="navbar__hamburger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X size={18} />
              </motion.span>
            ) : (
              <motion.span
                key="m"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu size={18} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="navbar__drawer"
            style={{ maxHeight: "calc(100dvh - 72px)", overflowY: "auto" }}
          >
            <div
              className="container"
              style={{ paddingBlock: 12, paddingBottom: 20 }}
            >
              {LINKS.map((link, i) => {
                const isActive = active(link.href);
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                    onClick={() => setOpen(false)}
                    className={`navbar__drawer-link${isActive ? " navbar__drawer-link--active" : ""}`}
                  >
                    {isActive && <span className="navbar__drawer-accent" />}
                    {link.label}
                  </motion.a>
                );
              })}
              <div className="navbar__drawer-cta">
                <a
                  href="/get-involved"
                  className="btn btn-viridian"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                  onClick={() => setOpen(false)}
                >
                  Donate Now ♥
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
