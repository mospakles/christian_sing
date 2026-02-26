"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  ArrowUp,
  Music,
} from "lucide-react";

const PAGES = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Mission", "/mission"],
  ["Ministries", "/ministries"],
  ["Impact", "/impact"],
  ["Contact", "/contact"],
];
const INVOLVE = [
  ["Get Involved", "/get-involved"],
  ["Membership", "/membership"],
  ["Prison Ministry", "/ministries"],
  ["School Ministry", "/ministries"],
  ["Health & Social", "/ministries"],
];
const SOCIALS = [
  { I: Facebook, h: "https://facebook.com", l: "Facebook" },
  { I: Twitter, h: "https://twitter.com", l: "Twitter" },
  { I: Instagram, h: "https://instagram.com", l: "Instagram" },
  { I: Youtube, h: "https://youtube.com", l: "YouTube" },
];
const CONTACTS = [
  {
    I: Mail,
    v: "info@christiansingfoundation.org",
    h: "mailto:info@christiansingfoundation.org",
  },
  { I: Phone, v: "08035390860 / 08032006518", h: "tel:+2348035390860" },
  { I: MapPin, v: "Lagos, Nigeria", h: "#" },
  { I: Clock, v: "Saturday 4:00–6:00 PM", h: "#" },
];

export default function Footer() {
  return (
    <footer className="cs-footer">
      <div className="cs-footer__gold-stripe" />
      <div
        className="container"
        style={{
          paddingTop: "clamp(40px,7vw,64px)",
          paddingBottom: "clamp(28px,5vw,40px)",
        }}
      >
        <div className="g-footer">
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  minWidth: 40,
                  borderRadius: "var(--r-m)",
                  background: "rgba(255,255,255,0.10)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Music size={18} color="#fff" />
              </div>
              <div>
                <div
                  className="heading"
                  style={{
                    fontSize: "clamp(0.95rem,1.5vw,1.05rem)",
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  ChristianSing
                </div>
                <div
                  className="eyebrow"
                  style={{
                    color: "var(--gold)",
                    fontSize: "0.54rem",
                    marginTop: 2,
                  }}
                >
                  Foundation
                </div>
              </div>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.42)",
                fontSize: "clamp(0.8rem,1.2vw,0.875rem)",
                lineHeight: 1.75,
                maxWidth: 260,
                marginBottom: 24,
              }}
            >
              Propagating the Word through excellence in church and choral music
              — education, performance, composition and advocacy.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {SOCIALS.map(({ I, h, l }) => (
                <motion.a
                  key={l}
                  href={h}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={l}
                  className="cs-footer__social"
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  <I size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <p
              className="eyebrow"
              style={{ color: "var(--gold)", marginBottom: 18 }}
            >
              Pages
            </p>
            {PAGES.map(([l, h]) => (
              <a key={l} href={h} className="cs-footer__link">
                {l}
              </a>
            ))}
          </div>

          {/* Get Involved */}
          <div>
            <p
              className="eyebrow"
              style={{ color: "var(--gold)", marginBottom: 18 }}
            >
              Get Involved
            </p>
            {INVOLVE.map(([l, h]) => (
              <a key={l} href={h} className="cs-footer__link">
                {l}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p
              className="eyebrow"
              style={{ color: "var(--gold)", marginBottom: 18 }}
            >
              Contact
            </p>
            {CONTACTS.map(({ I, v, h }) => (
              <a key={v} href={h} className="cs-footer__contact-link">
                <I
                  size={14}
                  style={{ marginTop: 2, flexShrink: 0, color: "var(--gold)" }}
                />
                <span>{v}</span>
              </a>
            ))}
            <a
              href="/contact"
              className="btn btn-gold"
              style={{
                marginTop: 16,
                padding: "10px 20px",
                fontSize: "0.72rem",
              }}
            >
              Send a Message →
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="cs-footer__bottom">
          <p className="cs-footer__copyright">
            © {new Date().getFullYear()} ChristianSing Foundation ·
            Not-for-Profit · Affiliated with the Royal School of Church Music,
            England
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cs-footer__back-top"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to top <ArrowUp size={13} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
