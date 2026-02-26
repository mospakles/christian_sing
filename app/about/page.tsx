"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Check_, Fade, GoldRule, Label, Rise, Wm } from "../components/ui";
import Image from "next/image";

const E: [number, number, number, number] = [0.22, 1, 0.36, 1];

function VerseCard({
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
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: i * 0.1, ease: E }}
    >
      <div className="cs-verse__q">&quot;</div>
      <p className="cs-verse__text">{verse}</p>
      <div className="cs-verse__src">— {src}</div>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <main style={{ background: "var(--ivory)" }}>
      {/* HERO */}
      <section
        className="cs-hero cs-hero--page-flush"
        style={{ background: "var(--viridian)" }}
      >
        <Wm
          text="ABOUT"
          style={{
            right: -15,
            top: 0,
            fontSize: "clamp(100px,22vw,340px)",
            color: "rgba(255,255,255,0.04)",
          }}
        />
        <div
          className="container"
          style={{ position: "relative", zIndex: 1, width: "100%" }}
        >
          <div
            className="cs-grid cs-grid--2col-asym"
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
              >
                Our Story
              </motion.span>
              <motion.h1
                className="display"
                style={{
                  fontSize: "clamp(2rem,8vw,7rem)",
                  color: "#fff",
                  lineHeight: 0.88,
                  marginBottom: 28,
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: E }}
              >
                About
                <br />
                <em className="display-i" style={{ color: "var(--gold)" }}>
                  Christian
                </em>
                <br />
                Sing
              </motion.h1>
              <motion.p
                className="body-text"
                style={{
                  fontSize: "clamp(0.92rem,1.6vw,1.1rem)",
                  color: "rgba(255,255,255,0.65)",
                  maxWidth: 460,
                  marginBottom: 36,
                }}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.3, ease: E }}
              >
                A not-for-profit foundation reviving holy ancient words
                preserved as hymns — in churches, prisons, hospitals and
                schools.
              </motion.p>
              <motion.div
                className="cs-btn-group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
              >
                <a href="/mission" className="btn btn-gold">
                  Our Mission <ArrowRight size={16} />
                </a>
                <a href="/get-involved" className="btn btn-outline-white">
                  Get Involved
                </a>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: E }}
            >
              <Image
                src="/images/musiclesson.jpg"
                alt=""
                width={600}
                height={600}
              />
              {/* <div
                className="img-fill img-dark cs-about-hero-img"
                style={{
                  width: "100%",
                  aspectRatio: "4/5",
                  borderRadius: "var(--r-xl) var(--r-xl) 0 0",
                  position: "relative",
                }}
              >
                <span>Choir performing in worship</span>

                <motion.div
                  style={{
                    position: "absolute",
                    bottom: -1,
                    right: -1,
                    padding: "clamp(10px,2vw,14px) clamp(12px,2.5vw,18px)",
                    background: "#fff",
                    borderRadius:
                      "var(--r-l) var(--r-xs) var(--r-xs) var(--r-xs)",
                    border: "1.5px solid var(--ink-08)",
                  }}
                  initial={{ scale: 0, rotate: 8 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 180 }}
                >
                  <div
                    className="eyebrow"
                    style={{ color: "var(--gold)", marginBottom: 4 }}
                  >
                    Affiliated With
                  </div>
                  <div
                    className="heading"
                    style={{
                      fontSize: "clamp(0.78rem,1.3vw,0.95rem)",
                      color: "var(--viridian)",
                      lineHeight: 1.3,
                    }}
                  >
                    Royal School of
                    <br />
                    Church Music
                  </div>
                </motion.div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOUNDATION STORY */}
      <section style={{ background: "#fff", padding: "var(--sp-2xl) 0" }}>
        <div className="container">
          <Rise>
            <div className="cs-section-header">
              <hr className="hr-gold" />
              <Label>The Foundation</Label>
              <hr className="hr-soft" />
            </div>
          </Rise>
          <div className="cs-grid cs-grid--2col">
            <Fade delay={0.1}>
              <div className="cs-about-mosaic">
                <Image
                  src="/images/hymndist.jpg"
                  alt="Hymn"
                  width={700}
                  height={700}
                  style={{ aspectRatio: "1", borderRadius: "var(--r-l)" }}
                />
              </div>
            </Fade>
            <div>
              <Rise>
                <h2
                  className="display"
                  style={{
                    fontSize: "clamp(2.2rem,5vw,5rem)",
                    color: "var(--viridian)",
                    lineHeight: 0.9,
                    marginBottom: 24,
                  }}
                >
                  Not for profit.
                  <br />
                  <em
                    className="display-i"
                    style={{ color: "var(--gold-dark)" }}
                  >
                    Not for silence.
                  </em>
                </h2>
                <GoldRule />
              </Rise>
              <Rise delay={0.1}>
                <p
                  className="body-text"
                  style={{
                    color: "var(--ink-70)",
                    fontSize: "clamp(0.92rem,1.5vw,1.05rem)",
                    marginBottom: 18,
                  }}
                >
                  ChristianSing is affiliated with the Royal School of Church
                  Music, England. We obey the last commission &quot;go ye&quot;,
                  reviving holy ancient words preserved as hymns.
                </p>
                <p
                  className="body-text"
                  style={{
                    color: "var(--ink-45)",
                    fontSize: "clamp(0.82rem,1.3vw,0.95rem)",
                    marginBottom: 32,
                  }}
                >
                  We sing and distribute hymnbooks in churches, prisons,
                  hospitals, hospices and schools — bringing succour through
                  hymns and psalms.
                </p>
              </Rise>
              <Rise delay={0.18}>
                <Check_>
                  Affiliated with the Royal School of Church Music, England
                </Check_>
                <Check_>
                  Active prison, school and health ministries in Lagos
                </Check_>
                <Check_>
                  Saturday music classes and ABRSM exam preparation
                </Check_>
                <Check_>
                  Hymnbook distribution to churches, prisons and hospitals
                </Check_>
              </Rise>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE BAND */}
      <section
        style={{
          background: "var(--viridian)",
          padding: "var(--sp-xl) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Wm
          text="WORD"
          style={{
            right: 0,
            top: -10,
            fontSize: "clamp(100px,18vw,260px)",
            color: "rgba(255,255,255,0.04)",
          }}
        />
        <div
          className="container"
          style={{ position: "relative", zIndex: 1, maxWidth: 820 }}
        >
          <div
            className="display"
            style={{
              fontSize: "clamp(2.5rem,6vw,4rem)",
              lineHeight: 0.7,
              color: "var(--gold)",
              opacity: 0.5,
              marginBottom: 20,
            }}
          >
            &quot;
          </div>
          <Rise>
            <blockquote
              className="serif-body"
              style={{
                fontSize: "clamp(1.1rem,2.8vw,2.2rem)",
                color: "#fff",
                lineHeight: 1.5,
                marginBottom: 20,
              }}
            >
              The value of good church music cannot be overemphasised — it
              transforms the worship and life of all who seek Him.
            </blockquote>
            <div className="eyebrow" style={{ color: "var(--gold)" }}>
              — ChristianSing Foundation
            </div>
          </Rise>
        </div>
      </section>

      {/* HYMN VERSES */}
      <section
        style={{ background: "var(--ivory-2)", padding: "var(--sp-2xl) 0" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--sp-l)" }}>
            <Rise>
              <Label>Ancient Words</Label>
              <h2
                className="display"
                style={{
                  fontSize: "clamp(2.2rem,5vw,5rem)",
                  color: "var(--viridian)",
                  lineHeight: 0.9,
                  marginTop: 10,
                }}
              >
                The Hymn{" "}
                <em className="display-i" style={{ color: "var(--gold-dark)" }}>
                  That Guides Us
                </em>
              </h2>
            </Rise>
          </div>
          <div className="cs-grid cs-grid--vm" style={{ gap: "var(--gap-m)" }}>
            <VerseCard
              verse="Holy words long preserved for our walk in this world; they resound with God's own heart; O let the ancient words impart."
              src="Lynn DeShazo, v.1"
              i={0}
            />
            <VerseCard
              verse="Holy words of our faith handed down to this age, came to us through sacrifice; O heed the faithful words of Christ."
              src="Lynn DeShazo, v.2"
              i={1}
            />
            <VerseCard
              verse="Words of life, words of hope, give us strength, help us cope, in this world, where e'er we roam; Ancient words will guide us home."
              src="Lynn DeShazo, v.3"
              i={2}
            />
            <VerseCard
              verse="Ancient words ever true, changing me and changing you; We have come with open hearts; Oh, let the ancient words impart."
              src="Lynn DeShazo, v.4"
              i={3}
            />
          </div>
        </div>
      </section>

      {/* VALUE OF MUSIC */}
      <section style={{ background: "#fff", padding: "var(--sp-2xl) 0" }}>
        <div className="container">
          <div className="cs-grid cs-grid--2col">
            <div>
              <Rise>
                <Label>Why It Matters</Label>
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
                  The Value of Good
                  <br />
                  <em
                    className="display-i"
                    style={{ color: "var(--gold-dark)" }}
                  >
                    Church Music
                  </em>
                </h2>
                <GoldRule />
                <p
                  className="body-text"
                  style={{
                    color: "var(--ink-70)",
                    fontSize: "clamp(0.92rem,1.5vw,1.05rem)",
                    marginBottom: 28,
                  }}
                >
                  The value of good church music cannot be overemphasised; it
                  transforms the worship and life of all who worship Him with
                  hymns and psalms.
                </p>
              </Rise>
              <Rise delay={0.1}>
                {[
                  {
                    t: "Draws People In",
                    d: "Good church music draws people into the heart of worship, creating sacred space for encounter with God.",
                  },
                  {
                    t: "Sustains & Inspires",
                    d: "It sustains, challenges and inspires worship beyond what words alone can achieve.",
                  },
                  {
                    t: "Heart of Evangelism",
                    d: "Music reaches souls that preaching alone may not touch — in prisons, hospitals and care homes.",
                  },
                ].map(({ t, d }, i) => (
                  <motion.div
                    key={t}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08, ease: E }}
                    style={{
                      display: "flex",
                      gap: 14,
                      padding: "clamp(12px,2vw,16px) clamp(14px,2.5vw,18px)",
                      borderRadius: "var(--r-m)",
                      border: "1.5px solid var(--ink-08)",
                      background: "var(--ivory-2)",
                      marginBottom: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 3,
                        flexShrink: 0,
                        background: "var(--gold)",
                        borderRadius: 2,
                      }}
                    />
                    <div>
                      <div
                        className="subhead"
                        style={{
                          color: "var(--viridian)",
                          fontSize: "clamp(0.85rem,1.4vw,0.95rem)",
                          marginBottom: 4,
                        }}
                      >
                        {t}
                      </div>
                      <div
                        className="body-text"
                        style={{
                          color: "var(--ink-45)",
                          fontSize: "clamp(0.78rem,1.2vw,0.88rem)",
                        }}
                      >
                        {d}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </Rise>
            </div>
            <Fade delay={0.1}>
              <Image
                src="/images/sing18.jpeg"
                alt="Choir"
                width={700}
                height={700}
                style={{
                  aspectRatio: "1",
                  borderRadius: "var(--r-l)",
                  marginTop: "clamp(20px,4vw,40px)",
                }}
              />
            </Fade>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="cs-cta"
        style={{ background: "var(--gold)", padding: "var(--sp-2xl) 0" }}
      >
        <Wm
          text="JOIN"
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
              Join Us Today
            </h2>
            <p className="cs-cta__body">
              Be part of something eternal — spreading the love of Christ
              through sacred music.
            </p>
            <div className="cs-btn-group cs-btn-group--center">
              <a href="/membership" className="btn btn-viridian">
                Become a Member
              </a>
              <a href="/contact" className="btn btn-outline-white">
                Contact Us
              </a>
            </div>
          </Rise>
        </div>
      </section>
    </main>
  );
}
