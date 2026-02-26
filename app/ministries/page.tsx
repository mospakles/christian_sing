"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Music, BookOpen, Heart } from "lucide-react";
import { Check_, Fade, GoldRule, Img, Label, Rise, Wm } from "../components/ui";
import Image from "next/image";

const E: [number, number, number, number] = [0.22, 1, 0.36, 1];

const MINISTRIES = [
  {
    slug: "prison",
    label: "Prison Ministry",
    icon: Music,
    color: "var(--viridian)",
    bg: "var(--viridian-pale)",
    img: "/images/prisson.jpg",
    imgLabel: "Prison worship service",
    tag: "Outreach",
    summary:
      "Bringing the healing power of hymns and worship to inmates across Lagos prisons — partnering with local Anglican churches.",
    what: [
      {
        t: "Monthly Visits",
        d: "Regular worship services inside Lagos prison facilities.",
      },
      {
        t: "Hymnbook Distribution",
        d: "Providing inmates with personal hymnbooks to keep and use.",
      },
      {
        t: "Church Partnership",
        d: "Collaborating with All Saints Anglican, Yaba and others.",
      },
      {
        t: "Chaplaincy Support",
        d: "Supporting prison chaplains with music and materials.",
      },
    ],
    checks: [
      "Monthly worship services in Lagos prisons",
      "Hymnbooks provided to inmates",
      "Church partnerships established",
      "Transformative impact on inmates' lives",
    ],
  },
  {
    slug: "school",
    label: "School Ministry",
    icon: BookOpen,
    color: "var(--gold-dark)",
    bg: "var(--gold-light)",
    img: "/images/schooll.jpg",
    imgLabel: "Students in music class",
    tag: "Education",
    summary:
      "Equipping young Christians with a love for sacred music through ABRSM-aligned theory and practical lessons every Saturday.",
    what: [
      {
        t: "Saturday Classes",
        d: "Weekly music lessons 4:00–6:00 PM for all ages and levels.",
      },
      {
        t: "ABRSM Preparation",
        d: "Theory and practical exam coaching — 11 graduates in 2019.",
      },
      {
        t: "Hymnology",
        d: "Teaching the history, theology and beauty of Christian hymnody.",
      },
      {
        t: "Choir Training",
        d: "Developing voices and reading skills for church choirs.",
      },
    ],
    checks: [
      "11 ABRSM graduates in 2019 alone",
      "Saturday 4:00–6:00 PM classes",
      "All ages and experience levels welcome",
      "Theory and practical training",
    ],
  },
  {
    slug: "health",
    label: "Health & Social",
    icon: Heart,
    color: "var(--ruby)",
    bg: "var(--ruby-pale)",
    img: "/images/elderlycare.jpg",
    imgLabel: "Singing at care home",
    tag: "Care",
    summary:
      "Monthly worship visits to the Cerebral Palsy Centre and Old Peoples Home in Yaba — bringing joy and comfort through sacred song.",
    what: [
      {
        t: "Cerebral Palsy Centre",
        d: "Monthly hymn-singing sessions at the centre in Yaba, Lagos.",
      },
      {
        t: "Old Peoples Home",
        d: "Regular visits to the Old Peoples Home, Yaba.",
      },
      {
        t: "Pastoral Care",
        d: "Pastoral presence alongside music for those who are isolated.",
      },
      {
        t: "Hospice Support",
        d: "Bringing comfort to the terminally ill through sacred song.",
      },
    ],
    checks: [
      "Monthly visits to Cerebral Palsy Centre, Yaba",
      "Regular worship at Old Peoples Home",
      "Holistic care combining music and prayer",
      "Open to volunteers",
    ],
  },
];

function MinistryBlock({ m, i }: { m: (typeof MINISTRIES)[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = i % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className="cs-ministry-block"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: E }}
    >
      <div className="cs-grid cs-grid--2col" style={{ alignItems: "center" }}>
        <div
          className={isEven ? "cs-ministry-img" : "cs-ministry-img"}
          style={{ order: isEven ? 1 : 2 }}
        >
          <Rise delay={0.1}>
            <div style={{ position: "relative" }}>
              <Img
                label={m.imgLabel}
                dark
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  borderRadius: "var(--r-xl)",
                }}
              />
              <Image src={m.img} alt={m.imgLabel} fill />
              <motion.div
                style={{ position: "absolute", top: 16, left: 16 }}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.35, type: "spring", stiffness: 200 }}
              >
                <span className="badge badge-viridian">{m.tag}</span>
              </motion.div>
            </div>
          </Rise>
        </div>

        {/* Text — always second on mobile */}
        <div className="cs-ministry-text" style={{ order: isEven ? 2 : 1 }}>
          <Rise>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "var(--r-m)",
                  background: m.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <m.icon size={20} style={{ color: m.color }} />
              </div>
              <span className="eyebrow" style={{ color: m.color }}>
                {m.label}
              </span>
            </div>
            <h2
              className="display"
              style={{
                fontSize: "clamp(2rem,4.5vw,4.5rem)",
                color: "var(--viridian)",
                lineHeight: 0.9,
                marginBottom: 16,
              }}
            >
              {m.label}
            </h2>
            <div
              style={{
                width: 48,
                height: 3,
                background: m.color,
                borderRadius: 2,
                marginBottom: 20,
              }}
            />
            <p
              className="body-text"
              style={{
                color: "var(--ink-70)",
                fontSize: "clamp(0.9rem,1.5vw,1.05rem)",
                marginBottom: 28,
              }}
            >
              {m.summary}
            </p>
          </Rise>

          {/* What we do cards */}
          <Rise delay={0.12}>
            <div
              className="cs-ministry-block__what-grid"
              style={{ marginBottom: 28 }}
            >
              {m.what.map(({ t, d }) => (
                <div key={t} className="cs-ministry-block__card">
                  <div
                    className="subhead"
                    style={{
                      color: "var(--viridian)",
                      fontSize: "clamp(0.8rem,1.3vw,0.9rem)",
                      marginBottom: 6,
                    }}
                  >
                    {t}
                  </div>
                  <div
                    className="body-text"
                    style={{
                      color: "var(--ink-45)",
                      fontSize: "clamp(0.75rem,1.1vw,0.82rem)",
                    }}
                  >
                    {d}
                  </div>
                </div>
              ))}
            </div>
          </Rise>

          <Rise delay={0.18}>
            {m.checks.map((c) => (
              <Check_ key={c}>{c}</Check_>
            ))}
            <div className="cs-btn-group" style={{ marginTop: 28 }}>
              <a href="/get-involved" className="btn btn-viridian">
                Support This Ministry <ArrowRight size={16} />
              </a>
              <a href="/contact" className="btn btn-outline">
                Contact Us
              </a>
            </div>
          </Rise>
        </div>
      </div>
    </motion.div>
  );
}

export default function MinistriesPage() {
  return (
    <main style={{ background: "var(--ivory)" }}>
      {/* HERO */}
      <section
        className="cs-hero cs-hero--page"
        style={{ background: "var(--ivory-2)" }}
      >
        <Wm
          text="SERVE"
          style={{
            right: -15,
            top: 0,
            fontSize: "clamp(100px,20vw,300px)",
            color: "rgba(26,92,74,0.05)",
          }}
        />
        <div
          className="container"
          style={{ position: "relative", zIndex: 1, maxWidth: 820 }}
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
            What We Do
          </motion.span>
          <motion.h1
            className="display"
            style={{
              fontSize: "clamp(3rem,10vw,11rem)",
              color: "var(--viridian)",
              lineHeight: 0.88,
              marginBottom: 24,
            }}
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: E }}
          >
            Our{" "}
            <em className="display-i" style={{ color: "var(--gold-dark)" }}>
              Ministries
            </em>
          </motion.h1>
          <motion.p
            className="body-text"
            style={{
              fontSize: "clamp(0.95rem,1.8vw,1.15rem)",
              color: "var(--ink-70)",
              maxWidth: 540,
            }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: E }}
          >
            Three active ministries carrying sacred music into prisons, schools,
            and care homes across Lagos.
          </motion.p>
        </div>
      </section>

      {/* MINISTRY COUNT BAND */}
      <section
        style={{
          background: "var(--viridian)",
          padding: "clamp(20px,4vw,32px) 0",
        }}
      >
        <div className="container">
          <div className="cs-stats-grid">
            {[
              { n: "3", l: "Active Ministries" },
              { n: "100+", l: "Lives Touched" },
              { n: "11", l: "ABRSM Graduates" },
              { n: "∞", l: "Songs Sung" },
            ].map(({ n, l }) => (
              <div key={l} className="cs-stat">
                <div className="cs-stat__n">{n}</div>
                <div className="cs-stat__label">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MINISTRY BLOCKS */}
      <section style={{ background: "#fff", padding: "var(--sp-xl) 0" }}>
        <div className="container">
          {MINISTRIES.map((m, i) => (
            <MinistryBlock key={m.slug} m={m} i={i} />
          ))}
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section
        style={{ background: "var(--ivory-2)", padding: "var(--sp-2xl) 0" }}
      >
        <div className="container">
          <div className="cs-partnership-grid">
            <Rise>
              <Label>Partner With Us</Label>
              <h2
                className="display"
                style={{
                  fontSize: "clamp(2rem,5vw,5rem)",
                  color: "var(--viridian)",
                  lineHeight: 0.9,
                  marginTop: 10,
                  marginBottom: 22,
                }}
              >
                Could Your Church
                <br />
                <em className="display-i" style={{ color: "var(--gold-dark)" }}>
                  Join the Mission?
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
                We actively partner with churches across Lagos for prison
                visits, hymnbook distributions and outreach events. If your
                church wants to be involved, we would love to hear from you.
              </p>
              <div className="cs-btn-group">
                <a href="/contact" className="btn btn-viridian">
                  Get in Touch <ArrowRight size={16} />
                </a>
                <a href="/get-involved" className="btn btn-outline">
                  Donate
                </a>
              </div>
            </Rise>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="cs-cta"
        style={{ background: "var(--gold)", padding: "var(--sp-xl) 0" }}
      >
        <Wm
          text="GO"
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
            maxWidth: 640,
          }}
        >
          <Rise>
            <h2 className="cs-cta__title">Support Our Ministries</h2>
            <p className="cs-cta__body">
              Your donation keeps hymnbooks in prisons, students in Saturday
              classes, and singers visiting care homes.
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
