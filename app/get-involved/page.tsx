"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Heart, Users, BookOpen, CheckCircle } from "lucide-react";
import {
  Fade,
  GoldRule,
  Img,
  Label,
  Rise,
  Wm,
  FieldLabel,
  FieldErr,
} from "../components/ui";
import Image from "next/image";

const E: [number, number, number, number] = [0.22, 1, 0.36, 1];

const WAYS = [
  {
    Icon: Heart,
    label: "Donate",
    color: "var(--viridian)",
    desc: "Fund hymnbooks, prison visits, Saturday classes and care home trips.",
  },
  {
    Icon: Users,
    label: "Volunteer",
    color: "var(--gold-dark)",
    desc: "Join a ministry team — teach, sing, visit or organise alongside us.",
  },
  {
    Icon: BookOpen,
    label: "Sponsor a Student",
    color: "var(--ruby)",
    desc: "Cover the cost of ABRSM exams and materials for one music student.",
  },
];

const PRESETS = [500, 1000, 2500, 5000, 10000, 25000];

function fmt(n: number) {
  return "₦" + n.toLocaleString();
}

export default function GetInvolvedPage() {
  const [amount, setAmount] = useState<number | null>(1000);
  const [custom, setCustom] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [freq, setFreq] = useState<"once" | "monthly">("once");
  const [tried, setTried] = useState(false);
  const [done, setDone] = useState(false);

  const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  const finalAmt = custom
    ? parseInt(custom.replace(/\D/g, ""), 10) || 0
    : amount || 0;
  const errs = {
    name: !name.trim() ? "Name is required" : "",
    email: !isEmail(email) ? "Valid email required" : "",
    amount: finalAmt < 100 ? "Please enter at least ₦100" : "",
  };
  const allOk = !Object.values(errs).some(Boolean);
  const cls = (k: keyof typeof errs, v: string) =>
    tried && errs[k] ? "field error" : v ? "field valid" : "field";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTried(true);
    if (allOk) setDone(true);
  }

  return (
    <main style={{ background: "var(--ivory)" }}>
      {/* HERO */}
      <section
        className="cs-hero cs-hero--page"
        style={{ background: "var(--viridian)" }}
      >
        <Wm
          text="GIVE"
          style={{
            right: -10,
            top: 0,
            fontSize: "clamp(100px,20vw,300px)",
            color: "rgba(255,255,255,0.04)",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="cs-grid cs-grid--2col">
            <div>
              <motion.span
                className="eyebrow"
                style={{
                  color: "var(--gold)",
                  display: "block",
                  marginBottom: 16,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Join the Mission
              </motion.span>
              <motion.h1
                className="display"
                style={{
                  fontSize: "clamp(2rem,8vw,8rem)",
                  color: "#fff",
                  lineHeight: 0.88,
                  marginBottom: 28,
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: E }}
              >
                Get
                <br />
                <em className="display-i" style={{ color: "var(--gold)" }}>
                  Involved
                </em>
              </motion.h1>
              <motion.p
                className="body-text"
                style={{
                  fontSize: "clamp(0.92rem,1.6vw,1.1rem)",
                  color: "rgba(255,255,255,0.65)",
                  maxWidth: 440,
                  marginBottom: 36,
                }}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.3, ease: E }}
              >
                Support our mission to put a hymnbook in every Christian&apos;s
                hands — through prisons, schools, hospitals and churches.
              </motion.p>
              <motion.div
                className="cs-btn-group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
              >
                <a href="#donate" className="btn btn-gold">
                  Donate Now <ArrowRight size={16} />
                </a>
                <a href="/membership" className="btn btn-outline-white">
                  Become a Member
                </a>
              </motion.div>
            </div>
            <Fade delay={0.2}>
              <Image
                src="/images/volunteer.jpg"
                alt=""
                width={500}
                height={500}
              />
            </Fade>
          </div>
        </div>
      </section>

      {/* WAYS TO HELP */}
      <section style={{ background: "#fff", padding: "var(--sp-2xl) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--sp-l)" }}>
            <Rise>
              <Label>Three Ways to Help</Label>
              <h2
                className="display"
                style={{
                  fontSize: "clamp(2.2rem,5vw,5rem)",
                  color: "var(--viridian)",
                  lineHeight: 0.9,
                  marginTop: 10,
                }}
              >
                How You Can{" "}
                <em className="display-i" style={{ color: "var(--gold-dark)" }}>
                  Give
                </em>
              </h2>
            </Rise>
          </div>
          <div className="cs-ways-grid">
            {WAYS.map(({ Icon, label, color, desc }, i) => (
              <Rise key={label} delay={i * 0.1}>
                <motion.div
                  className="card"
                  style={{
                    padding: "clamp(24px,4vw,36px) clamp(20px,3.5vw,28px)",
                    height: "100%",
                  }}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 260 }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "var(--r-l)",
                      background: color + "18",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <Icon size={24} style={{ color }} />
                  </div>
                  <h3
                    className="heading"
                    style={{
                      fontSize: "clamp(1.3rem,2.5vw,1.6rem)",
                      color: "var(--viridian)",
                      marginBottom: 12,
                    }}
                  >
                    {label}
                  </h3>
                  <p
                    className="body-text"
                    style={{
                      color: "var(--ink-45)",
                      fontSize: "clamp(0.82rem,1.3vw,0.92rem)",
                    }}
                  >
                    {desc}
                  </p>
                </motion.div>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* DONATION FORM */}
      <section
        id="donate"
        style={{ background: "var(--ivory-2)", padding: "var(--sp-2xl) 0" }}
      >
        <div className="container">
          <div className="cs-donation-layout">
            {/* Left copy */}
            <div>
              <Rise>
                <Label>Make a Donation</Label>
                <h2
                  className="display"
                  style={{
                    fontSize: "clamp(2rem,4.5vw,4.5rem)",
                    color: "var(--viridian)",
                    lineHeight: 0.9,
                    marginTop: 10,
                    marginBottom: 22,
                  }}
                >
                  Every Naira
                  <br />
                  <em
                    className="display-i"
                    style={{ color: "var(--gold-dark)" }}
                  >
                    Multiplies
                  </em>
                </h2>
                <GoldRule />
                <p
                  className="body-text"
                  style={{
                    color: "var(--ink-70)",
                    fontSize: "clamp(0.9rem,1.5vw,1.05rem)",
                    marginBottom: 28,
                  }}
                >
                  Your gift provides hymnbooks, funds Saturday music classes,
                  sends volunteers into prisons and care homes, and supports
                  ABRSM exam fees for young musicians.
                </p>
              </Rise>
              <Rise delay={0.1}>
                {[
                  { amt: "₦500", what: "One hymnbook for a prisoner" },
                  { amt: "₦2,500", what: "One month of Saturday classes" },
                  { amt: "₦10,000", what: "One ABRSM exam entry fee" },
                  { amt: "₦25,000", what: "A full care home visit team" },
                ].map(({ amt, what }, i) => (
                  <div
                    key={amt}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      marginBottom: 14,
                      padding: "12px 16px",
                      borderRadius: "var(--r-m)",
                      background: "#fff",
                      border: "1.5px solid var(--ink-08)",
                    }}
                  >
                    <div
                      style={{
                        width: 52,
                        flexShrink: 0,
                        fontFamily: "Cormorant Garamond, Georgia, serif",
                        fontWeight: 700,
                        fontSize: "clamp(0.95rem,1.6vw,1.1rem)",
                        color: "var(--gold-dark)",
                      }}
                    >
                      {amt}
                    </div>
                    <div
                      style={{
                        width: 1,
                        height: 32,
                        background: "var(--ink-08)",
                        flexShrink: 0,
                      }}
                    />
                    <div
                      className="body-text"
                      style={{
                        color: "var(--ink-70)",
                        fontSize: "clamp(0.8rem,1.3vw,0.9rem)",
                      }}
                    >
                      {what}
                    </div>
                  </div>
                ))}
              </Rise>
            </div>

            {/* Right form */}
            <Rise delay={0.12}>
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
                    Donation Form
                  </div>
                  <div
                    className="heading"
                    style={{
                      color: "#fff",
                      fontSize: "clamp(1rem,1.8vw,1.2rem)",
                      marginTop: 6,
                    }}
                  >
                    {finalAmt >= 100
                      ? `Donating ${fmt(finalAmt)}`
                      : "Choose an amount"}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {done ? (
                    <motion.div
                      key="done"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
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
                        Thank You, {name}!
                      </h4>
                      <p
                        className="body-text"
                        style={{ color: "var(--ink-45)" }}
                      >
                        Your donation of {fmt(finalAmt)} will be directed where
                        it&apos;s needed most. A receipt will be sent to {email}
                        .
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      style={{
                        padding: "clamp(20px,4vw,28px) clamp(20px,5vw,32px)",
                      }}
                      noValidate
                    >
                      {/* Frequency toggle */}
                      <div
                        style={{
                          display: "flex",
                          gap: 8,
                          marginBottom: 22,
                          background: "var(--ivory-2)",
                          borderRadius: "var(--r-m)",
                          padding: 4,
                        }}
                      >
                        {(["once", "monthly"] as const).map((f) => (
                          <button
                            key={f}
                            type="button"
                            onClick={() => setFreq(f)}
                            style={{
                              flex: 1,
                              padding: "10px",
                              borderRadius: "var(--r-s)",
                              border: "none",
                              cursor: "pointer",
                              background:
                                freq === f ? "var(--viridian)" : "transparent",
                              color: freq === f ? "#fff" : "var(--ink-45)",
                              fontFamily: "Outfit, sans-serif",
                              fontWeight: 700,
                              fontSize: "clamp(0.72rem,1.2vw,0.8rem)",
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              transition: "all 0.2s",
                            }}
                          >
                            {f === "once" ? "One-off" : "Monthly"}
                          </button>
                        ))}
                      </div>

                      {/* Presets */}
                      <div
                        className="cs-donation-presets"
                        style={{ marginBottom: 14 }}
                      >
                        {PRESETS.map((p) => (
                          <button
                            key={p}
                            type="button"
                            onClick={() => {
                              setAmount(p);
                              setCustom("");
                            }}
                            className={`cs-preset-btn${amount === p && !custom ? " cs-preset-btn--active" : ""}`}
                          >
                            {fmt(p)}
                          </button>
                        ))}
                      </div>

                      {/* Custom amount */}
                      <div style={{ marginBottom: 22 }}>
                        <FieldLabel>Or enter custom amount</FieldLabel>
                        <div style={{ position: "relative" }}>
                          <span
                            style={{
                              position: "absolute",
                              left: 14,
                              top: "50%",
                              transform: "translateY(-50%)",
                              color: "var(--ink-45)",
                              fontFamily: "Outfit, sans-serif",
                              fontWeight: 700,
                            }}
                          >
                            ₦
                          </span>
                          <input
                            type="text"
                            value={custom}
                            placeholder="0"
                            onChange={(e) => {
                              setCustom(e.target.value);
                              setAmount(null);
                            }}
                            className={
                              tried && errs.amount ? "field error" : "field"
                            }
                            style={{ paddingLeft: 30 }}
                          />
                        </div>
                        <FieldErr msg={tried ? errs.amount : ""} />
                      </div>

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
                          <FieldLabel required>Email</FieldLabel>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            className={cls("email", email)}
                          />
                          <FieldErr msg={tried ? errs.email : ""} />
                        </div>
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={allOk ? { scale: 1.03 } : {}}
                        whileTap={allOk ? { scale: 0.97 } : {}}
                        style={{
                          width: "100%",
                          justifyContent: "center",
                          background: allOk ? "var(--gold)" : "var(--ink-08)",
                          color: allOk ? "#fff" : "var(--ink-20)",
                          opacity: allOk ? 1 : 0.5,
                          cursor: allOk ? "pointer" : "not-allowed",
                        }}
                        className="btn"
                      >
                        Donate {finalAmt >= 100 ? fmt(finalAmt) : ""}{" "}
                        <Heart size={15} style={{ marginLeft: 4 }} />
                      </motion.button>

                      <p
                        style={{
                          textAlign: "center",
                          color: "var(--ink-20)",
                          fontSize: "0.72rem",
                          marginTop: 12,
                        }}
                      >
                        Secure · Confidential · Goes directly to ministry work
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Rise>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="cs-cta"
        style={{ background: "var(--viridian)", padding: "var(--sp-xl) 0" }}
      >
        <Wm
          text="SERVE"
          style={{
            right: -10,
            bottom: -20,
            fontSize: "clamp(100px,18vw,260px)",
            color: "rgba(255,255,255,0.04)",
          }}
        />
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            maxWidth: 640,
          }}
        >
          <Rise>
            <h2
              className="cs-cta__title"
              style={{ fontSize: "clamp(2.4rem,7vw,6.5rem)" }}
            >
              Become a Member
            </h2>
            <p className="cs-cta__body">
              Join the ChristianSing family — receive updates, prayer requests
              and ministry reports.
            </p>
            <div className="cs-btn-group cs-btn-group--center">
              <a href="/membership" className="btn btn-gold">
                Apply Now <ArrowRight size={16} />
              </a>
              <a href="/contact" className="btn btn-outline-white">
                Ask a Question
              </a>
            </div>
          </Rise>
        </div>
      </section>
    </main>
  );
}
