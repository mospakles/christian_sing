"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Img, Rise, Label, GoldRule, Fade, Wm } from "./components/ui";
import Image from "next/image";

const E: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ── Stat ─────────────────────────────────────────────────── */
function Stat({
  n,
  label,
  delay,
}: {
  n: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="cs-stat"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: E }}
    >
      <div className="cs-stat__n">{n}</div>
      <div className="cs-stat__label">{label}</div>
    </motion.div>
  );
}

/* ── Ministry card ────────────────────────────────────────── */
function MinCard({
  n,
  title,
  desc,
  imgLabel,
  tag,
  delay,
}: {
  n: string;
  title: string;
  desc: string;
  imgLabel: string;
  tag: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: E }}
    >
      <motion.a
        href="/ministries"
        className="cs-min-card"
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 260 }}
      >
        <div className="cs-min-card__img img-fill img-dark">
          <span>{imgLabel}</span>
          <div className="cs-min-card__num" aria-hidden>
            {n}
          </div>
        </div>
        <div className="cs-min-card__body">
          <span className="badge badge-viridian">{tag}</span>
          <div className="cs-min-card__title">{title}</div>
          <p className="cs-min-card__desc">{desc}</p>
          <span className="cs-min-card__cta">
            Learn more <ArrowRight size={12} />
          </span>
        </div>
      </motion.a>
    </motion.div>
  );
}

/* ── Event row ────────────────────────────────────────────── */
function EventRow({
  day,
  month,
  title,
  note,
  delay,
}: {
  day: string;
  month: string;
  title: string;
  note: string;
  delay: number;
}) {
  return (
    <Rise delay={delay}>
      <motion.div
        className="cs-event"
        whileHover={{ x: 6 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="cs-event__date">
          <span className="cs-event__day">{day}</span>
          <span className="cs-event__month">{month}</span>
        </div>
        <div className="cs-event__body">
          <div className="cs-event__note">{note}</div>
          <div className="cs-event__title">{title}</div>
        </div>
        <ArrowRight
          size={16}
          style={{ color: "var(--ink-20)", flexShrink: 0 }}
        />
      </motion.div>
    </Rise>
  );
}

/* ── Page ─────────────────────────────────────────────────── */
export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <main style={{ background: "var(--ivory)" }}>
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section ref={heroRef} className="cs-hero cs-hero--full">
        {/* Parallax background */}
        <motion.div
          style={{
            y: bgY,
            position: "absolute",
            inset: "-20% 0 -20%",
            zIndex: 0,
          }}
        >
          <Image
            src="/images/choirrr.jpg"
            alt=""
            fill
            style={{ width: "100%", height: "100%" }}
          />
          <div className="cs-hero__overlay" />
        </motion.div>

        {/* Floating music notes */}
        {(["♪", "♫", "♩", "♬"] as const).map((s, i) => (
          <motion.span
            key={i}
            aria-hidden
            style={{
              position: "absolute",
              fontSize: clamp(40 + i * 10, 56 + i * 14),
              color: "rgba(201,146,42,0.10)",
              left: `${8 + i * 22}%`,
              top: `${14 + (i % 2) * 34}%`,
              fontFamily: "serif",
              userSelect: "none",
              pointerEvents: "none",
            }}
            animate={{
              y: [0, -16, 0],
              rotate: [0, 6, -4, 0],
              opacity: [0.07, 0.14, 0.07],
            }}
            transition={{
              duration: 7 + i * 1.4,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          >
            {s}
          </motion.span>
        ))}

        <motion.div
          style={{
            y: textY,
            position: "relative",
            zIndex: 1,
            width: "100%",
            paddingTop: 100,
          }}
        >
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ marginBottom: 32 }}
            >
              <span className="badge badge-white">
                Spreading the Gospel Through Music
              </span>
            </motion.div>

            <motion.h1
              className="display"
              initial={{ opacity: 0, y: 56 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.3, ease: E }}
              style={{
                fontSize: "clamp(2rem, 10vw, 7rem)",
                color: "#fff",
                lineHeight: 0.88,
                maxWidth: 1080,
              }}
            >
              Sing Unto
              <br />
              <span style={{ color: "var(--gold)" }}>The Lord</span>
              <br />
              <span
                style={{ color: "rgba(255,255,255,0.65)", fontStyle: "italic" }}
              >
                a New Song
              </span>
            </motion.h1>

            <motion.p
              className="body-text"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: E }}
              style={{
                fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.8,
                maxWidth: 540,
                marginTop: 28,
                marginBottom: 36,
              }}
            >
              Propagating the Word through excellence in church and choral music
              — education, performance, composition and advocacy across Nigeria.
            </motion.p>

            <motion.div
              className="cs-btn-group"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: E }}
            >
              <motion.a
                href="/get-involved"
                className="btn btn-gold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Involved <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="/about"
                className="btn btn-outline-white"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Our Story
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ══ WHO WE ARE ════════════════════════════════════════ */}
      <section style={{ background: "#fff", padding: "var(--sp-2xl) 0" }}>
        <div className="container">
          <Rise>
            <div className="cs-section-header">
              <hr className="hr-gold" />
              <Label>Who We Are</Label>
              <hr className="hr-soft" />
            </div>
          </Rise>

          <div className="cs-grid cs-grid--2col">
            <div>
              <Rise>
                <h2
                  className="display"
                  style={{
                    fontSize: "clamp(2rem, 5vw, 5rem)",
                    color: "var(--viridian)",
                    lineHeight: 0.9,
                    marginBottom: 28,
                  }}
                >
                  A Hymnbook
                  <br />
                  <em
                    className="display-i"
                    style={{ color: "var(--gold-dark)" }}
                  >
                    in Every
                  </em>
                  <br />
                  Christian&apos;s Hand
                </h2>
              </Rise>
              <Rise delay={0.1}>
                <GoldRule />
                <p
                  className="body-text"
                  style={{
                    fontSize: "clamp(0.95rem,1.5vw,1.1rem)",
                    color: "var(--ink-70)",
                    marginBottom: 18,
                  }}
                >
                  ChristianSing Foundation is a not-for-profit organisation
                  affiliated with the Royal School of Church Music, England —
                  reviving the use of holy ancient words preserved as hymns.
                </p>
                <p
                  className="body-text"
                  style={{
                    color: "var(--ink-45)",
                    fontSize: "clamp(0.85rem,1.3vw,0.95rem)",
                    marginBottom: 36,
                  }}
                >
                  We sing and distribute hymnbooks in churches, prisons,
                  hospitals, hospices and schools — wherever the Word can be
                  preached.
                </p>
              </Rise>
              <Rise delay={0.18}>
                <div className="cs-btn-group">
                  <a href="/about" className="btn btn-viridian">
                    Learn More <ArrowRight size={16} />
                  </a>
                  <a href="/mission" className="btn btn-outline">
                    Our Mission
                  </a>
                </div>
              </Rise>
            </div>

            {/* Mosaic */}
            <Fade delay={0.14}>
              <div style={{ position: "relative" }}>
                <div className="cs-mosaic">
                  <Img
                    label="Choir rehearsal"
                    style={{ aspectRatio: "3/4", borderRadius: "var(--r-xl)" }}
                  />
                  <Image
                    src="/images/hymndist.jpg"
                    alt=""
                    fill
                    style={{ aspectRatio: "3/4", borderRadius: "var(--r-xl)" }}
                  />
                </div>
                <motion.div
                  className="cs-photo-badge"
                  style={{ bottom: -22, left: -22 }}
                  initial={{ scale: 0, rotate: -14 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 180 }}
                >
                  <div className="cs-photo-badge__n">100+</div>
                  <div className="cs-photo-badge__label">Lives Touched</div>
                </motion.div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* ══ STATS ════════════════════════════════════════════ */}
      <section
        style={{
          background: "var(--viridian)",
          padding: "8px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Wm
          text="SING"
          style={{
            right: -10,
            bottom: -20,
            fontSize: "clamp(100px,18vw,260px)",
            color: "rgba(255,255,255,0.04)",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="cs-stats-grid">
            {[
              { n: "100+", l: "Lives Touched", d: 0 },
              { n: "11", l: "ABRSM Graduates", d: 0.1 },
              { n: "3", l: "Active Ministries", d: 0.2 },
              { n: "∞", l: "Hymns Shared", d: 0.3 },
            ].map(({ n, l, d }) => (
              <Stat key={l} n={n} label={l} delay={d} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ QUOTE ════════════════════════════════════════════ */}
      <section
        style={{
          background: "var(--ivory-2)",
          padding: "var(--sp-2xl) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <Rise>
            <Label>Lynn DeShazo</Label>
            <blockquote
              className="serif-body"
              style={{
                fontSize: "clamp(1.2rem, 3vw, 2.6rem)",
                color: "var(--viridian)",
                lineHeight: 1.42,
                marginBottom: 20,
                maxWidth: 860,
              }}
            >
              Holy words long preserved for our walk in this world; they resound
              with God&apos;s own heart — O let the ancient words impart.
            </blockquote>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <hr className="hr-gold" style={{ margin: 0 }} />
              <span
                className="eyebrow"
                style={{ color: "var(--gold-dark)", whiteSpace: "nowrap" }}
              >
                Ancient Words Hymn
              </span>
            </div>
          </Rise>
        </div>
      </section>

      {/* ══ MINISTRIES ════════════════════════════════════════ */}
      <section
        style={{ background: "var(--ivory)", padding: "var(--sp-2xl) 0" }}
      >
        <div className="container">
          <Rise>
            <div
              className="cs-flex--between"
              style={{ marginBottom: "var(--sp-l)" }}
            >
              <div>
                <Label>Our Work</Label>
                <h2
                  className="display"
                  style={{
                    fontSize: "clamp(2.4rem, 5.5vw, 5.5rem)",
                    color: "var(--viridian)",
                    lineHeight: 0.9,
                    marginTop: 8,
                  }}
                >
                  Our{" "}
                  <em
                    className="display-i"
                    style={{ color: "var(--gold-dark)" }}
                  >
                    Ministries
                  </em>
                </h2>
              </div>
              <a href="/ministries" className="btn btn-outline">
                View All <ArrowRight size={14} />
              </a>
            </div>
          </Rise>
          <div className="cs-grid cs-grid--3col">
            <MinCard
              n="01"
              title="Prison Ministry"
              imgLabel="Prison ministry worship"
              tag="Outreach"
              desc="Bringing worship through hymns to those behind bars — partnering with Lagos churches."
              delay={0}
            />
            <MinCard
              n="02"
              title="School Ministry"
              imgLabel="School music class"
              tag="Education"
              desc="ABRSM exam prep, Saturday classes 4–6 PM. 11 graduates in 2019 alone."
              delay={0.1}
            />
            <MinCard
              n="03"
              title="Health & Social"
              imgLabel="Care home visit"
              tag="Care"
              desc="Monthly worship at the Cerebral Palsy Centre and Old Peoples Home, Yaba."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* ══ EVENTS ════════════════════════════════════════════ */}
      <section
        style={{ background: "var(--ivory-2)", padding: "var(--sp-2xl) 0" }}
      >
        <div className="container">
          <div
            className="cs-grid cs-grid--2col"
            style={{ alignItems: "start" }}
          >
            <div>
              <Rise>
                <Label>Calendar</Label>
                <h2
                  className="display"
                  style={{
                    fontSize: "clamp(2.2rem, 5vw, 5rem)",
                    color: "var(--viridian)",
                    lineHeight: 0.9,
                    marginTop: 8,
                    marginBottom: 20,
                  }}
                >
                  Upcoming
                  <br />
                  <em
                    className="display-i"
                    style={{ color: "var(--gold-dark)" }}
                  >
                    Events
                  </em>
                </h2>
                <GoldRule />
                <p
                  className="body-text"
                  style={{
                    color: "var(--ink-70)",
                    marginBottom: 36,
                    fontSize: "clamp(0.88rem,1.4vw,1rem)",
                  }}
                >
                  Celebrating the sacred seasons of the Christian calendar
                  throughout the year — join us.
                </p>
              </Rise>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <EventRow
                  day="26"
                  month="Jan"
                  title="Thanksgiving Service"
                  note="4th Sunday in January"
                  delay={0.08}
                />
                <EventRow
                  day="03"
                  month="May"
                  title="Power of His Resurrection"
                  note="3rd Sunday after Easter"
                  delay={0.16}
                />
                <EventRow
                  day="27"
                  month="Sep"
                  title="Our Service to God & Nation"
                  note="Sunday before October 1"
                  delay={0.24}
                />
                <EventRow
                  day="29"
                  month="Nov"
                  title="The Advent of Our Lord"
                  note="1st Sunday in Advent"
                  delay={0.32}
                />
              </div>
            </div>
            {/* Image hidden on tablet/mobile by CSS (events-img) */}
            <Fade delay={0.14}>
              <Image
                src="/images/sing14.jpeg"
                alt=""
                width={700}
                height={700}
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  borderRadius: "var(--r-xl)",
                }}
                className="cs-events-img"
              />
            </Fade>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIAL ═══════════════════════════════════════ */}
      <section
        style={{
          background: "var(--viridian-pale)",
          padding: "var(--sp-2xl) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Wm
          text='"'
          style={{
            top: -40,
            left: -10,
            fontSize: "clamp(120px,20vw,300px)",
            color: "rgba(26,92,74,0.08)",
          }}
        />
        <div
          className="container"
          style={{ position: "relative", zIndex: 1, maxWidth: 860 }}
        >
          <Rise>
            <div style={{ display: "flex", gap: 4, marginBottom: 24 }}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  style={{ fill: "var(--gold)", color: "var(--gold)" }}
                />
              ))}
            </div>
            <blockquote className="cs-testimonial__quote">
              &quot;Seeing the transformation in the inmates&apos; faces as they
              sang was powerful beyond words. The hymns touched hearts in ways
              our preaching alone couldn&apos;t reach.&quot;
            </blockquote>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                flexWrap: "wrap",
              }}
            >
              <Img
                label=""
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              />
              <div>
                <div
                  className="subhead"
                  style={{
                    color: "var(--viridian)",
                    fontSize: "clamp(0.85rem,1.4vw,0.95rem)",
                  }}
                >
                  Pastor David
                </div>
                <div
                  className="eyebrow"
                  style={{ color: "var(--ink-45)", marginTop: 2 }}
                >
                  All Saints Anglican Church, Yaba
                </div>
              </div>
            </div>
          </Rise>
        </div>
      </section>

      {/* ══ FINAL CTA ═════════════════════════════════════════ */}
      <section
        className="cs-cta"
        style={{ background: "var(--gold)", padding: "var(--sp-2xl) 0" }}
      >
        <div className="cs-cta__hatch" />
        <Wm
          text="GIVE"
          style={{
            right: -10,
            bottom: -20,
            fontSize: "clamp(100px,18vw,260px)",
            color: "rgba(28,25,23,0.06)",
          }}
        />
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            maxWidth: 720,
          }}
        >
          <Rise>
            <h2 className="cs-cta__title">Join the Mission</h2>
            <p className="cs-cta__body">
              Support our mission to bring hymnbooks to churches, prisons,
              hospitals and schools across Nigeria.
            </p>
            <div className="cs-btn-group" style={{ justifyContent: "center" }}>
              <motion.a
                href="/get-involved"
                className="btn btn-viridian"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Donate Now
              </motion.a>
              <motion.a
                href="/membership"
                className="btn btn-outline-white"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Become a Member
              </motion.a>
            </div>
          </Rise>
        </div>
      </section>
    </main>
  );
}

/* tiny helper (not React) */
function clamp(a: number, b: number) {
  return Math.min(a, b);
}
