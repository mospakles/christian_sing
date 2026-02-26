"use client";
// ─── RESPONSIVE CONTACT PAGE ────────────────────────────────────

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import {
  Wm,
  Rise,
  Label,
  GoldRule,
  FieldLabel,
  FieldErr,
} from "../components/ui";

const E: [number, number, number, number] = [0.22, 1, 0.36, 1];

const FAQS = [
  {
    q: "When do your Saturday classes run?",
    a: "Classes run every Saturday from 4:00 PM to 6:00 PM. They are open to all ages and levels of musical experience.",
  },
  {
    q: "How can I join the ChristianSing choir?",
    a: "Contact us via the form on this page or call us directly. We hold open choir sessions and would love to welcome you.",
  },
  {
    q: "Can my church partner with you for prison ministry?",
    a: "Yes — we actively seek church partnerships for our prison ministry. Please get in touch and we'll arrange a conversation.",
  },
  {
    q: "How do I donate hymnbooks to a specific institution?",
    a: "Contact us with the name and location of the institution. We'll advise on how to arrange a targeted hymnbook donation.",
  },
  {
    q: "Are you affiliated with any denomination?",
    a: "ChristianSing Foundation is non-denominational. We are affiliated with the Royal School of Church Music, England, and welcome Christians from all traditions.",
  },
];

const INFO = [
  {
    Icon: Mail,
    label: "Email",
    value: "info@christiansingfoundation.org",
    href: "mailto:info@christiansingfoundation.org",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "08035390860 / 08032006518",
    href: "tel:+2348035390860",
  },
  { Icon: MapPin, label: "Location", value: "Lagos, Nigeria", href: "#" },
  {
    Icon: Clock,
    label: "Classes",
    value: "Saturday 4:00 – 6:00 PM",
    href: "#",
  },
];

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="cs-faq">
      <button className="cs-faq__btn" onClick={() => setOpen(!open)}>
        <span className="cs-faq__q">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ flexShrink: 0 }}
        >
          <ChevronDown size={18} style={{ color: "var(--gold)" }} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: E }}
            style={{ overflow: "hidden" }}
          >
            <p className="cs-faq__a">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [tried, setTried] = useState(false);
  const [done, setDone] = useState(false);

  const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  const errs = {
    name: !name.trim() ? "Full name is required" : "",
    email: !isEmail(email) ? "A valid email is required" : "",
    message: !message.trim() ? "Please enter your message" : "",
  };
  const allOk = !Object.values(errs).some(Boolean);
  const cls = (key: keyof typeof errs, val: string) => {
    if (tried && errs[key]) return "field error";
    if (val) return "field valid";
    return "field";
  };
  function submit(e: React.FormEvent) {
    e.preventDefault();
    setTried(true);
    if (allOk) setDone(true);
  }

  return (
    <main style={{ background: "var(--ivory)" }}>
      {/* HERO */}
      <section
        className="cs-hero cs-hero--page"
        style={{ background: "var(--ivory-2)" }}
      >
        <Wm
          text="CONTACT"
          style={{
            right: -20,
            top: 0,
            fontSize: "clamp(80px,16vw,260px)",
            color: "rgba(26,92,74,0.05)",
          }}
        />
        <div
          className="container"
          style={{ position: "relative", zIndex: 1, maxWidth: 860 }}
        >
          <motion.span
            className="eyebrow"
            style={{
              color: "var(--gold-dark)",
              display: "block",
              marginBottom: 16,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Get in Touch
          </motion.span>
          <motion.h1
            className="display"
            style={{
              fontSize: "clamp(3rem, 10vw, 11rem)",
              color: "var(--viridian)",
              lineHeight: 0.88,
              marginBottom: 24,
            }}
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: E }}
          >
            Contact{" "}
            <em className="display-i" style={{ color: "var(--gold-dark)" }}>
              Us
            </em>
          </motion.h1>
          <motion.p
            className="body-text"
            style={{
              fontSize: "clamp(0.95rem,1.8vw,1.15rem)",
              color: "var(--ink-70)",
              maxWidth: 520,
            }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: E }}
          >
            We&apos;d love to hear from you — whether you want to join, partner,
            donate, or simply find out more.
          </motion.p>
        </div>
      </section>

      {/* INFO CARDS */}
      <section style={{ background: "#fff", padding: "var(--sp-xl) 0" }}>
        <div className="container">
          <div className="cs-grid cs-grid--info">
            {INFO.map(({ Icon, label, value, href }, i) => (
              <Rise key={label} delay={i * 0.1}>
                <motion.a
                  href={href}
                  className="cs-info-card"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260 }}
                >
                  <div className="cs-info-card__icon">
                    <Icon size={20} style={{ color: "var(--viridian)" }} />
                  </div>
                  <div className="cs-info-card__label">{label}</div>
                  <div className="cs-info-card__value">{value}</div>
                </motion.a>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + FAQ */}
      <section
        style={{ background: "var(--ivory-2)", padding: "var(--sp-xl) 0" }}
      >
        <div className="container">
          <div className="cs-grid cs-grid--2col">
            {/* Form */}
            <Rise>
              <Label>Send a Message</Label>
              <h2
                className="display"
                style={{
                  fontSize: "clamp(2rem,4.5vw,4.5rem)",
                  color: "var(--viridian)",
                  lineHeight: 0.9,
                  marginTop: 10,
                  marginBottom: 24,
                }}
              >
                Write to{" "}
                <em className="display-i" style={{ color: "var(--gold-dark)" }}>
                  Us
                </em>
              </h2>
              <GoldRule />
              <div
                style={{
                  background: "#fff",
                  borderRadius: "var(--r-xl)",
                  border: "1.5px solid var(--ink-08)",
                  overflow: "hidden",
                  boxShadow: "0 8px 40px rgba(26,92,74,0.07)",
                }}
              >
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, var(--viridian) 0%, var(--viridian-mid) 100%)",
                    padding: "24px 32px",
                  }}
                >
                  <div className="eyebrow" style={{ color: "var(--gold)" }}>
                    Contact Form
                  </div>
                </div>
                <AnimatePresence mode="wait">
                  {done ? (
                    <motion.div
                      key="done"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: E }}
                      style={{
                        padding: "clamp(36px,7vw,56px) clamp(24px,5vw,32px)",
                        textAlign: "center",
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.15,
                          type: "spring",
                          stiffness: 200,
                        }}
                        style={{
                          width: 72,
                          height: 72,
                          borderRadius: "50%",
                          background: "var(--viridian-pale)",
                          border: "2px solid var(--viridian)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 24px",
                        }}
                      >
                        <CheckCircle
                          size={36}
                          style={{ color: "var(--viridian)" }}
                        />
                      </motion.div>
                      <h4
                        className="heading"
                        style={{
                          fontSize: "clamp(1.4rem,3vw,1.8rem)",
                          color: "var(--viridian)",
                          marginBottom: 12,
                        }}
                      >
                        Message Sent!
                      </h4>
                      <p
                        className="body-text"
                        style={{ color: "var(--ink-45)" }}
                      >
                        Thank you, {name}. We&apos;ll reply to {email} within 48
                        hours.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={submit}
                      style={{
                        padding: "clamp(20px,4vw,28px) clamp(20px,5vw,32px)",
                      }}
                      noValidate
                    >
                      <div
                        className="cs-form-grid"
                        style={{ marginBottom: 16 }}
                      >
                        <div>
                          <FieldLabel required>Full Name</FieldLabel>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                            className={cls("name", name)}
                          />
                          <FieldErr msg={tried ? errs.name : ""} />
                        </div>
                        <div>
                          <FieldLabel>Phone</FieldLabel>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+234 xxx xxx xxxx"
                            className="field"
                          />
                        </div>
                      </div>
                      <div style={{ marginBottom: 16 }}>
                        <FieldLabel required>Email Address</FieldLabel>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          className={cls("email", email)}
                        />
                        <FieldErr msg={tried ? errs.email : ""} />
                      </div>
                      <div style={{ marginBottom: 16 }}>
                        <FieldLabel>Subject</FieldLabel>
                        <input
                          type="text"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder="What is your message about?"
                          className="field"
                        />
                      </div>
                      <div style={{ marginBottom: 24 }}>
                        <FieldLabel required>Message</FieldLabel>
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={5}
                          placeholder="Your message…"
                          className={cls("message", message)}
                        />
                        <FieldErr msg={tried ? errs.message : ""} />
                      </div>
                      <motion.button
                        type="submit"
                        whileHover={allOk ? { scale: 1.03 } : {}}
                        whileTap={allOk ? { scale: 0.97 } : {}}
                        className={allOk ? "btn btn-viridian" : "btn"}
                        style={{
                          width: "100%",
                          justifyContent: "center",
                          opacity: allOk ? 1 : 0.4,
                          cursor: allOk ? "pointer" : "not-allowed",
                          background: allOk ? undefined : "var(--ink-08)",
                          color: allOk ? undefined : "var(--ink-20)",
                        }}
                      >
                        Send Message <ArrowRight size={16} />
                      </motion.button>
                      <p
                        style={{
                          textAlign: "center",
                          color: "var(--ink-20)",
                          fontSize: "0.75rem",
                          marginTop: 14,
                        }}
                      >
                        We aim to reply within 48 hours
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Rise>

            {/* FAQ */}
            <div>
              <Rise delay={0.12}>
                <Label>FAQ</Label>
                <h2
                  className="display"
                  style={{
                    fontSize: "clamp(2rem,4.5vw,4.5rem)",
                    color: "var(--viridian)",
                    lineHeight: 0.9,
                    marginTop: 10,
                    marginBottom: 24,
                  }}
                >
                  Common{" "}
                  <em
                    className="display-i"
                    style={{ color: "var(--gold-dark)" }}
                  >
                    Questions
                  </em>
                </h2>
                <GoldRule />
                <div>
                  {FAQS.map(({ q, a }) => (
                    <FAQ key={q} q={q} a={a} />
                  ))}
                </div>
              </Rise>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section
        style={{
          background: "var(--viridian)",
          padding: "var(--sp-xl) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Wm
          text="LAGOS"
          style={{
            right: -10,
            bottom: -20,
            fontSize: "clamp(100px,18vw,260px)",
            color: "rgba(255,255,255,0.04)",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="cs-grid cs-grid--2col">
            <Rise>
              <span
                className="eyebrow"
                style={{
                  color: "var(--gold)",
                  display: "block",
                  marginBottom: 14,
                }}
              >
                Find Us
              </span>
              <h2
                className="display"
                style={{
                  fontSize: "clamp(2.2rem,5vw,5rem)",
                  color: "#fff",
                  lineHeight: 0.9,
                  marginBottom: 24,
                }}
              >
                We&apos;re Based in{" "}
                <em className="display-i" style={{ color: "var(--gold)" }}>
                  Lagos
                </em>
              </h2>
              <p
                className="body-text"
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "clamp(0.88rem,1.4vw,1.05rem)",
                  marginBottom: 36,
                }}
              >
                Our Saturday classes and rehearsals are held in Lagos. Contact
                us directly for the exact venue address before attending.
              </p>
              <div className="cs-btn-group">
                <a
                  href="mailto:info@christiansingfoundation.org"
                  className="btn btn-gold"
                >
                  Email Us
                </a>
                <a href="tel:+2348035390860" className="btn btn-outline-white">
                  Call Us
                </a>
              </div>
            </Rise>
            <Rise delay={0.12}>
              <div className="cs-glass">
                {INFO.map(({ Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      marginBottom: 22,
                      paddingBottom: 22,
                      borderBottom: "1px solid rgba(255,255,255,0.07)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.opacity = "0.8")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.opacity = "1")
                    }
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        minWidth: 36,
                        borderRadius: "var(--r-s)",
                        background: "rgba(201,146,42,0.18)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={16} style={{ color: "var(--gold)" }} />
                    </div>
                    <div>
                      <div
                        className="eyebrow"
                        style={{
                          color: "rgba(255,255,255,0.45)",
                          marginBottom: 4,
                        }}
                      >
                        {label}
                      </div>
                      <div
                        className="subhead"
                        style={{
                          color: "#fff",
                          fontSize: "clamp(0.8rem,1.3vw,0.9rem)",
                          lineHeight: 1.45,
                        }}
                      >
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Rise>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
