"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  BookOpen,
  Music,
} from "lucide-react";
import {
  Check_,
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

const TIERS = [
  {
    label: "Associate",
    price: "Free",
    color: "var(--viridian-pale)",
    accent: "var(--viridian)",
    Icon: Users,
    perks: [
      "Monthly newsletter",
      "Prayer updates",
      "Event invitations",
      "Access to resources",
    ],
  },
  {
    label: "Supporting",
    price: "₦1,000/mo",
    color: "var(--gold-light)",
    accent: "var(--gold-dark)",
    Icon: Star,
    perks: [
      "Everything in Associate",
      "Hymnbook gift",
      "Ministry reports",
      "Priority event access",
    ],
    featured: true,
  },
  {
    label: "Patron",
    price: "₦5,000/mo",
    color: "var(--viridian)",
    accent: "#fff",
    dark: true,
    Icon: Music,
    perks: [
      "Everything in Supporting",
      "Name in annual report",
      "Personal ministry update",
      "Dedicated prayer partner",
    ],
  },
];

export default function MembershipPage() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [church, setChurch] = useState("");
  const [tier, setTier] = useState("Associate");
  const [why, setWhy] = useState("");
  const [tried, setTried] = useState(false);
  const [done, setDone] = useState(false);

  const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  const errs = {
    first: !first.trim() ? "First name required" : "",
    last: !last.trim() ? "Last name required" : "",
    email: !isEmail(email) ? "Valid email required" : "",
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
        style={{ background: "var(--ivory-2)" }}
      >
        <Wm
          text="MEMBER"
          style={{
            right: -15,
            top: 0,
            fontSize: "clamp(80px,16vw,240px)",
            color: "rgba(26,92,74,0.05)",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="cs-grid cs-grid--2col">
            <div>
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
                Join the Family
              </motion.span>
              <motion.h1
                className="display"
                style={{
                  fontSize: "clamp(2rem,7vw,8rem)",
                  color: "var(--viridian)",
                  lineHeight: 0.88,
                  marginBottom: 28,
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: E }}
              >
                Become a<br />
                <em className="display-i" style={{ color: "var(--gold-dark)" }}>
                  Member
                </em>
              </motion.h1>
              <motion.p
                className="body-text"
                style={{
                  fontSize: "clamp(0.92rem,1.6vw,1.1rem)",
                  color: "var(--ink-70)",
                  maxWidth: 440,
                  marginBottom: 36,
                }}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.3, ease: E }}
              >
                Join a community of Christians committed to spreading the
                ancient words of faith through sacred music.
              </motion.p>
              <motion.div
                className="cs-btn-group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
              >
                <a href="#apply" className="btn btn-viridian">
                  Apply Now <ArrowRight size={16} />
                </a>
                <a href="/get-involved" className="btn btn-outline">
                  Donate Instead
                </a>
              </motion.div>
            </div>
            <Fade delay={0.15}>
              <Image
                src="/images/sing13.jpeg"
                alt=""
                width={700}
                height={600}
                style={{
                  width: "100%",
                  aspectRatio: "3/2",
                  borderRadius: "var(--r-xl)",
                }}
              />
            </Fade>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP TIERS */}
      {/* <section style={{ background: "#fff", padding: "var(--sp-2xl) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--sp-l)" }}>
            <Rise>
              <Label>Membership Tiers</Label>
              <h2
                className="display"
                style={{
                  fontSize: "clamp(2.2rem,5vw,5rem)",
                  color: "var(--viridian)",
                  lineHeight: 0.9,
                  marginTop: 10,
                }}
              >
                Choose Your{" "}
                <em className="display-i" style={{ color: "var(--gold-dark)" }}>
                  Level
                </em>
              </h2>
            </Rise>
          </div>
          <div
            className="cs-grid cs-grid--3col"
            style={{ alignItems: "stretch" }}
          >
            {TIERS.map(
              (
                { label, price, color, accent, dark, Icon, perks, featured },
                i,
              ) => (
                <Rise key={label} delay={i * 0.1}>
                  <motion.div
                    className={featured ? "" : ""}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 260 }}
                    style={{
                      height: "100%",
                      background: color,
                      borderRadius: "var(--r-xl)",
                      padding: "clamp(24px,4vw,36px) clamp(20px,3.5vw,28px)",
                      border: featured
                        ? "2px solid var(--gold)"
                        : "1.5px solid var(--ink-08)",
                      boxShadow: featured
                        ? "0 20px 60px rgba(201,146,42,0.2)"
                        : "none",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {featured && (
                      <div style={{ position: "absolute", top: 14, right: 14 }}>
                        <span className="badge badge-gold">Most Popular</span>
                      </div>
                    )}
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "var(--r-m)",
                        background: dark
                          ? "rgba(255,255,255,0.12)"
                          : accent + "18",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 20,
                      }}
                    >
                      <Icon
                        size={22}
                        style={{ color: dark ? "var(--gold)" : accent }}
                      />
                    </div>
                    <div
                      className="eyebrow"
                      style={{
                        color: dark ? "var(--gold)" : accent,
                        marginBottom: 8,
                      }}
                    >
                      {label}
                    </div>
                    <div
                      className="display"
                      style={{
                        fontSize: "clamp(1.6rem,3vw,2.4rem)",
                        color: dark ? "#fff" : "var(--viridian)",
                        lineHeight: 1,
                        marginBottom: 20,
                      }}
                    >
                      {price}
                    </div>
                    <div
                      style={{
                        height: 2,
                        background: dark
                          ? "rgba(255,255,255,0.15)"
                          : "var(--ink-08)",
                        marginBottom: 20,
                      }}
                    />
                    {perks.map((p) => (
                      <div
                        key={p}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          marginBottom: 12,
                        }}
                      >
                        <div
                          style={{
                            width: 18,
                            height: 18,
                            minWidth: 18,
                            borderRadius: "50%",
                            background: dark
                              ? "rgba(201,146,42,0.25)"
                              : accent + "20",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 1,
                          }}
                        >
                          <CheckCircle
                            size={11}
                            style={{ color: dark ? "var(--gold)" : accent }}
                          />
                        </div>
                        <span
                          className="body-text"
                          style={{
                            color: dark
                              ? "rgba(255,255,255,0.75)"
                              : "var(--ink-70)",
                            fontSize: "clamp(0.78rem,1.2vw,0.88rem)",
                          }}
                        >
                          {p}
                        </span>
                      </div>
                    ))}
                    <a
                      href="#apply"
                      onClick={() => setTier(label)}
                      className={
                        dark
                          ? "btn btn-gold"
                          : featured
                            ? "btn btn-viridian"
                            : "btn btn-outline"
                      }
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        marginTop: 24,
                      }}
                    >
                      Choose {label}
                    </a>
                  </motion.div>
                </Rise>
              ),
            )}
          </div>
        </div>
      </section> */}

      {/* BENEFITS */}
      <section
        style={{
          background: "var(--viridian)",
          padding: "var(--sp-xl) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Wm
          text="GROW"
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
                Why Join?
              </span>
              <h2
                className="display"
                style={{
                  fontSize: "clamp(2rem,5vw,5rem)",
                  color: "#fff",
                  lineHeight: 0.9,
                  marginBottom: 22,
                }}
              >
                Benefits of
                <br />
                <em className="display-i" style={{ color: "var(--gold)" }}>
                  Membership
                </em>
              </h2>
              <GoldRule />
              <p
                className="body-text"
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "clamp(0.9rem,1.5vw,1.05rem)",
                  marginBottom: 28,
                }}
              >
                Membership connects you to a community of faith-filled music
                lovers and keeps you informed about the work your support makes
                possible.
              </p>
            </Rise>
            <Rise delay={0.1}>
              <div className="cs-grid cs-grid--vm" style={{ gap: 14 }}>
                {[
                  {
                    t: "Stay Informed",
                    d: "Monthly newsletters and detailed ministry reports.",
                  },
                  {
                    t: "Prayer Community",
                    d: "A network of members praying for each other and the mission.",
                  },
                  {
                    t: "Events Access",
                    d: "Priority invitations to concerts, services and workshops.",
                  },
                  {
                    t: "Spiritual Growth",
                    d: "Resources for deepening your love of sacred hymnody.",
                  },
                ].map(({ t, d }, i) => (
                  <motion.div
                    key={t}
                    className="cs-value"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08, ease: E }}
                    style={{ padding: "clamp(14px,2.5vw,20px)" }}
                  >
                    <div
                      className="subhead"
                      style={{
                        color: "#fff",
                        fontSize: "clamp(0.85rem,1.4vw,0.95rem)",
                        marginBottom: 6,
                      }}
                    >
                      {t}
                    </div>
                    <div
                      className="body-text"
                      style={{
                        color: "rgba(255,255,255,0.55)",
                        fontSize: "clamp(0.78rem,1.2vw,0.88rem)",
                      }}
                    >
                      {d}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Rise>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section
        id="apply"
        style={{ background: "var(--ivory-2)", padding: "var(--sp-2xl) 0" }}
      >
        <div className="container">
          <div
            className="cs-grid cs-grid--2col"
            style={{ alignItems: "start" }}
          >
            <Rise>
              <Label>Apply Today</Label>
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
                Membership
                <br />
                <em className="display-i" style={{ color: "var(--gold-dark)" }}>
                  Application
                </em>
              </h2>
              <GoldRule />
              <p
                className="body-text"
                style={{
                  color: "var(--ink-70)",
                  marginBottom: 24,
                  fontSize: "clamp(0.9rem,1.5vw,1.05rem)",
                }}
              >
                Fill in the form and we will be in touch within 48 hours to
                confirm your membership and send your welcome pack.
              </p>
              <Check_>
                No obligation — membership is free at Associate level
              </Check_>
              <Check_>
                We will never share your details with third parties
              </Check_>
              <Check_>You can upgrade or cancel at any time</Check_>
            </Rise>

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
                    Application Form
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
                        Welcome, {first}!
                      </h4>
                      <p
                        className="body-text"
                        style={{ color: "var(--ink-45)" }}
                      >
                        Your {tier} membership application has been received.
                        We&apos;ll be in touch at {email} within 48 hours.
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
                      <div
                        className="cs-form-grid"
                        style={{ marginBottom: 16 }}
                      >
                        <div>
                          <FieldLabel required>First Name</FieldLabel>
                          <input
                            type="text"
                            value={first}
                            onChange={(e) => setFirst(e.target.value)}
                            placeholder="First name"
                            className={cls("first", first)}
                          />
                          <FieldErr msg={tried ? errs.first : ""} />
                        </div>
                        <div>
                          <FieldLabel required>Last Name</FieldLabel>
                          <input
                            type="text"
                            value={last}
                            onChange={(e) => setLast(e.target.value)}
                            placeholder="Last name"
                            className={cls("last", last)}
                          />
                          <FieldErr msg={tried ? errs.last : ""} />
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

                      <div
                        className="cs-form-grid"
                        style={{ marginBottom: 16 }}
                      >
                        <div>
                          <FieldLabel>Phone Number</FieldLabel>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+234 xxx xxx xxxx"
                            className="field"
                          />
                        </div>
                        <div>
                          <FieldLabel>Your Church</FieldLabel>
                          <input
                            type="text"
                            value={church}
                            onChange={(e) => setChurch(e.target.value)}
                            placeholder="Church name (optional)"
                            className="field"
                          />
                        </div>
                      </div>

                      {/* Tier selector */}
                      <div style={{ marginBottom: 16 }}>
                        <FieldLabel>Membership Tier</FieldLabel>
                        <div
                          style={{ display: "flex", gap: 8, flexWrap: "wrap" }}
                        >
                          {TIERS.map(({ label }) => (
                            <button
                              key={label}
                              type="button"
                              onClick={() => setTier(label)}
                              style={{
                                flex: "1 1 auto",
                                padding: "10px 14px",
                                borderRadius: "var(--r-m)",
                                border:
                                  tier === label
                                    ? "2px solid var(--viridian)"
                                    : "1.5px solid var(--ink-20)",
                                background:
                                  tier === label
                                    ? "var(--viridian-ghost)"
                                    : "transparent",
                                color:
                                  tier === label
                                    ? "var(--viridian)"
                                    : "var(--ink-45)",
                                fontFamily: "Outfit, sans-serif",
                                fontWeight: 700,
                                fontSize: "clamp(0.72rem,1.2vw,0.8rem)",
                                cursor: "pointer",
                                transition: "all 0.15s",
                                minHeight: 44,
                              }}
                            >
                              {label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div style={{ marginBottom: 24 }}>
                        <FieldLabel>Why do you want to join?</FieldLabel>
                        <textarea
                          value={why}
                          onChange={(e) => setWhy(e.target.value)}
                          rows={4}
                          placeholder="Tell us a little about yourself and your interest in ChristianSing…"
                          className="field"
                        />
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
                        Submit Application <ArrowRight size={16} />
                      </motion.button>
                      <p
                        style={{
                          textAlign: "center",
                          color: "var(--ink-20)",
                          fontSize: "0.72rem",
                          marginTop: 12,
                        }}
                      >
                        We reply within 48 hours · Your data is never shared
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Rise>
          </div>
        </div>
      </section>
    </main>
  );
}
