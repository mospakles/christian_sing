"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Eye,
  Target,
  Flame,
  Globe,
  BookOpen,
  Music,
  Sparkles,
  Heart,
} from "lucide-react";
import { Img, Rise, Label, GoldRule, Fade, Wm } from "../components/ui";

const E: [number, number, number, number] = [0.22, 1, 0.36, 1];

const PILLARS = [
  {
    n: "01",
    Icon: Music,
    title: "Education",
    accent: "var(--viridian)",
    desc: "Equipping singers and musicians from beginners to ABRSM-level with theory and practice of sacred music.",
  },
  {
    n: "02",
    Icon: Sparkles,
    title: "Performance",
    accent: "var(--gold-dark)",
    desc: "Taking worship into prisons, schools, hospitals and care homes — wherever hearts need to be stirred.",
  },
  {
    n: "03",
    Icon: BookOpen,
    title: "Composition",
    accent: "#7C3AED",
    desc: "Encouraging creation and preservation of new sacred works rooted in orthodox Christian tradition.",
  },
  {
    n: "04",
    Icon: Globe,
    title: "Advocacy",
    accent: "var(--ruby)",
    desc: "Championing quality church music in Nigerian Christianity through speaking, writing and partnership.",
  },
];
const SCRIPTS = [
  {
    verse:
      "Go ye therefore, and teach all nations, baptising them in the name of the Father, and of the Son, and of the Holy Ghost.",
    src: "Matthew 28:19",
  },
  {
    verse:
      "Let the word of Christ dwell in you richly in all wisdom; teaching and admonishing one another in psalms and hymns and spiritual songs.",
    src: "Colossians 3:16",
  },
  {
    verse:
      "Speaking to yourselves in psalms and hymns and spiritual songs, singing and making melody in your heart to the Lord.",
    src: "Ephesians 5:19",
  },
  {
    verse:
      "Praise ye the LORD. Sing unto the LORD a new song, and his praise in the congregation of saints.",
    src: "Psalm 149:1",
  },
];
const VALUES = [
  {
    Icon: Flame,
    label: "Faith",
    desc: "Everything flows from belief in the Lord Jesus Christ and trust in the power of His Word.",
  },
  {
    Icon: Heart,
    label: "Excellence",
    desc: "We honour God with our best — in preparation, presentation, and pastoral care.",
  },
  {
    Icon: Target,
    label: "Community",
    desc: "Music is communal. We build belonging wherever we go — in prisons, schools and care homes.",
  },
  {
    Icon: Eye,
    label: "Service",
    desc: "We are compelled by the great commission to go, to give, and to sing — without expectation of return.",
  },
];

function PillarCard({
  n,
  Icon,
  title,
  desc,
  accent,
  delay,
}: {
  n: string;
  Icon: React.ElementType;
  title: string;
  desc: string;
  accent: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.68, delay, ease: E }}
    >
      <motion.div
        className="cs-pillar"
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 260 }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = accent;
          el.style.boxShadow = `0 20px 56px ${accent}22`;
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "var(--ink-08)";
          el.style.boxShadow = "none";
        }}
      >
        <div className="cs-pillar__num" aria-hidden>
          {n}
        </div>
        <div className="cs-pillar__icon" style={{ background: accent + "18" }}>
          <Icon size={22} style={{ color: accent }} />
        </div>
        <div className="cs-pillar__title">{title}</div>
        <p className="cs-pillar__desc">{desc}</p>
        <motion.div
          className="cs-pillar__bar"
          style={{ background: accent }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.35, ease: E }}
        />
      </motion.div>
    </motion.div>
  );
}

function ScriptCard({
  verse,
  src,
  i,
}: {
  verse: string;
  src: string;
  i: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className="cs-verse"
      initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: i * 0.1, ease: E }}
    >
      <div className="cs-verse__q">&quot;</div>
      <p className="cs-verse__text">{verse}</p>
      <div className="cs-verse__src">— {src}</div>
    </motion.div>
  );
}

function ValueCard({
  Icon,
  label,
  desc,
  i,
}: {
  Icon: React.ElementType;
  label: string;
  desc: string;
  i: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: i * 0.1, ease: E }}
    >
      <motion.div className="cs-value" whileHover={{ y: -6 }}>
        <div className="cs-value__icon">
          <Icon size={20} style={{ color: "var(--gold)" }} />
        </div>
        <div className="cs-value__title">{label}</div>
        <p className="cs-value__desc">{desc}</p>
      </motion.div>
    </motion.div>
  );
}

export default function MissionPage() {
  return (
    <main style={{ background: "var(--ivory)" }}>
      {/* ── HERO ── */}
      <section
        className="cs-hero cs-hero--page-flush"
        style={{ background: "var(--viridian)" }}
      >
        <Wm
          text="MISSION"
          style={{
            right: -20,
            top: 0,
            fontSize: "clamp(100px,20vw,300px)",
            color: "rgba(255,255,255,0.04)",
          }}
        />
        <div
          className="container"
          style={{ position: "relative", zIndex: 1, width: "100%" }}
        >
          <div
            className="cs-grid cs-grid--2col"
            style={{ alignItems: "flex-end" }}
          >
            <div style={{ paddingBottom: "var(--sp-xl)" }}>
              <motion.span
                className="eyebrow"
                style={{
                  color: "var(--gold)",
                  display: "block",
                  marginBottom: 16,
                }}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Our Purpose
              </motion.span>
              <motion.h1
                className="display"
                style={{
                  fontSize: "clamp(3.2rem, 9vw, 10rem)",
                  color: "#fff",
                  lineHeight: 0.88,
                  marginBottom: 28,
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: E }}
              >
                Our
                <br />
                <em className="display-i" style={{ color: "var(--gold)" }}>
                  Mission
                </em>
              </motion.h1>
              <motion.p
                className="serif-body"
                style={{
                  fontSize: "clamp(1rem,2.2vw,1.8rem)",
                  color: "rgba(255,255,255,0.70)",
                  lineHeight: 1.5,
                }}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.3, ease: E }}
              >
                To propagate the Word through excellence in church and choral
                music using education, performance, composition and advocacy.
              </motion.p>
            </div>
            <Fade delay={0.2}>
              <Img
                label="Congregation in worship"
                dark
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  borderRadius: "var(--r-xl) var(--r-xl) 0 0",
                }}
              />
            </Fade>
          </div>
        </div>
      </section>

      {/* ── VISION + MISSION CARDS ── */}
      <section
        style={{ background: "var(--ivory-2)", padding: "var(--sp-xl) 0" }}
      >
        <div className="container">
          <div className="cs-grid cs-grid--vm" style={{ gap: "var(--gap-m)" }}>
            {[
              {
                Icon: Eye,
                label: "Our Vision",
                bg: "var(--viridian)",
                headline: "A Hymnbook in Every Christian's Hands",
                body: "A Nigeria where every Christian has ready access to the treasury of sacred hymnody, and ancient words of faith shape worship in every home, church, prison and hospital.",
              },
              {
                Icon: Target,
                label: "Our Mission",
                bg: "var(--viridian-dark)",
                headline: "Propagate the Word Through Music",
                body: "Education, performance, composition and advocacy are our four pillars — each a means of planting the gospel more deeply in the soul through sacred music.",
              },
            ].map(({ Icon, label, bg, headline, body }, idx) => (
              <Rise key={label} delay={idx * 0.12}>
                <div
                  style={{
                    borderRadius: "var(--r-xl)",
                    background: bg,
                    padding: "clamp(28px,5vw,44px) clamp(24px,4.5vw,40px)",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  <Wm
                    text='"'
                    style={{
                      bottom: -20,
                      right: -10,
                      fontSize: "clamp(5rem,10vw,8rem)",
                      color: "rgba(255,255,255,0.04)",
                    }}
                  />
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 24,
                      }}
                    >
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: "var(--r-s)",
                          background: "rgba(255,255,255,0.12)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon size={18} color="var(--gold)" />
                      </div>
                      <span
                        className="eyebrow"
                        style={{ color: "var(--gold)", opacity: 0.8 }}
                      >
                        {label}
                      </span>
                    </div>
                    <h2
                      className="heading"
                      style={{
                        fontSize: "clamp(1.4rem,2.8vw,2.4rem)",
                        color: "#fff",
                        lineHeight: 1.1,
                        marginBottom: 20,
                      }}
                    >
                      {headline}
                    </h2>
                    <div
                      style={{
                        width: 48,
                        height: 3,
                        background: "var(--gold)",
                        borderRadius: 2,
                        marginBottom: 20,
                      }}
                    />
                    <p
                      className="body-text"
                      style={{
                        color: "rgba(255,255,255,0.58)",
                        fontSize: "clamp(0.85rem,1.3vw,0.95rem)",
                      }}
                    >
                      {body}
                    </p>
                  </div>
                </div>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUR PILLARS ── */}
      <section style={{ background: "#fff", padding: "var(--sp-xl) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--sp-l)" }}>
            <Rise>
              <Label>How We Work</Label>
              <h2
                className="display"
                style={{
                  fontSize: "clamp(2.4rem,5.5vw,5.5rem)",
                  color: "var(--viridian)",
                  lineHeight: 0.9,
                  marginTop: 10,
                }}
              >
                The Four{" "}
                <em className="display-i" style={{ color: "var(--gold-dark)" }}>
                  Pillars
                </em>
              </h2>
            </Rise>
          </div>
          <div className="cs-grid cs-grid--4col">
            {PILLARS.map((p, i) => (
              <PillarCard key={p.title} {...p} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SCRIPTURE ── */}
      <section
        style={{ background: "var(--ivory-2)", padding: "var(--sp-xl) 0" }}
      >
        <div className="container">
          <div
            className="cs-grid cs-grid--2col"
            style={{ alignItems: "start" }}
          >
            <div>
              <Rise>
                <Label>Biblical Basis</Label>
                <h2
                  className="display"
                  style={{
                    fontSize: "clamp(2.2rem,5vw,5rem)",
                    color: "var(--viridian)",
                    lineHeight: 0.9,
                    marginTop: 10,
                    marginBottom: 24,
                  }}
                >
                  Rooted in{" "}
                  <em
                    className="display-i"
                    style={{ color: "var(--gold-dark)" }}
                  >
                    Scripture
                  </em>
                </h2>
                <GoldRule />
                <p
                  className="body-text"
                  style={{
                    color: "var(--ink-70)",
                    fontSize: "clamp(0.9rem,1.5vw,1.05rem)",
                    marginBottom: 32,
                  }}
                >
                  Our work is not merely cultural or artistic — it is obedience.
                  The Bible commands us to sing, to teach one another in psalms
                  and hymns.
                </p>
              </Rise>
              <Fade delay={0.2}>
                <Img
                  label="Open Bible and hymnbook"
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    borderRadius: "var(--r-l)",
                  }}
                />
              </Fade>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {SCRIPTS.map((s, i) => (
                <ScriptCard key={i} verse={s.verse} src={s.src} i={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section
        style={{
          background: "var(--viridian)",
          padding: "var(--sp-xl) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Wm
          text="VALUES"
          style={{
            right: -10,
            top: 0,
            fontSize: "clamp(100px,18vw,260px)",
            color: "rgba(255,255,255,0.04)",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "var(--sp-l)" }}>
            <Rise>
              <span
                className="eyebrow"
                style={{
                  color: "var(--gold)",
                  display: "block",
                  marginBottom: 14,
                }}
              >
                What Drives Us
              </span>
              <h2
                className="display"
                style={{
                  fontSize: "clamp(2.4rem,5.5vw,5.5rem)",
                  color: "#fff",
                  lineHeight: 0.9,
                }}
              >
                Core{" "}
                <em className="display-i" style={{ color: "var(--gold)" }}>
                  Values
                </em>
              </h2>
            </Rise>
          </div>
          <div className="cs-grid cs-grid--4col">
            {VALUES.map((v, i) => (
              <ValueCard key={v.label} {...v} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="cs-cta"
        style={{ background: "var(--gold)", padding: "var(--sp-xl) 0" }}
      >
        <Wm
          text="ACT"
          style={{
            right: -10,
            bottom: -20,
            fontSize: "clamp(100px,18vw,260px)",
            color: "rgba(255,255,255,0.08)",
          }}
        />
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            maxWidth: 680,
          }}
        >
          <Rise>
            <h2
              className="cs-cta__title"
              style={{ fontSize: "clamp(2.4rem,7vw,6.5rem)" }}
            >
              Be Part of Something Eternal
            </h2>
            <p className="cs-cta__body">
              The mission is vast, the harvest great — there is room for your
              gifts, time and generosity.
            </p>
            <div className="cs-btn-group" style={{ justifyContent: "center" }}>
              <a href="/get-involved" className="btn btn-viridian">
                Get Involved <ArrowRight size={16} />
              </a>
              <a href="/membership" className="btn btn-outline-white">
                Become a Member
              </a>
            </div>
          </Rise>
        </div>
      </section>
    </main>
  );
}
