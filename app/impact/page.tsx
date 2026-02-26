"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Fade, GoldRule, Img, Label, Rise, Wm } from "../components/ui";
import Image from "next/image";

const E: [number, number, number, number] = [0.22, 1, 0.36, 1];

const FILTERS = ["All", "Prison", "School", "Health & Social", "Church"];

const STORIES = [
  {
    title: "Redemption Sung Behind Bars",
    tag: "Prison",
    excerpt:
      "When our team first entered Kirikiri prison with hymnbooks, we did not expect what followed — grown men weeping as they sang 'Amazing Grace' for the first time in years.",
    name: "Deacon Emmanuel",
    role: "Prison Ministry Volunteer",
    highlight:
      "Inmates singing hymns independently in their cells within weeks.",
  },
  {
    title: "11 ABRSM Graduates in One Year",
    tag: "School",
    excerpt:
      "In 2019, eleven of our Saturday class students passed their ABRSM theory and practical examinations — a milestone that proved what faithful, consistent teaching achieves.",
    name: "Mrs. Adaeze O.",
    role: "Music Teacher, ChristianSing",
    highlight: "100% pass rate among students who sat the 2019 exams.",
  },
  {
    title: "Joy at the Old Peoples Home",
    tag: "Health & Social",
    excerpt:
      "The residents who rarely spoke began to mouth the words of 'Abide With Me'. One elderly woman asked us to return every week. We have not missed a month since.",
    name: "Sister Grace",
    role: "Health Ministry Team",
    highlight: "Monthly visits now confirmed at two Yaba facilities.",
  },
  {
    title: "A Church Rediscovering Hymns",
    tag: "Church",
    excerpt:
      "After receiving a consignment of hymnbooks, the choir director wrote to say the congregation had started requesting hymns by name — something that had never happened before.",
    name: "Rev. Chukwudi A.",
    role: "Anglican Church, Surulere",
    highlight: "Hymnbooks now used in every Sunday service.",
  },
  {
    title: "From Student to Choir Director",
    tag: "School",
    excerpt:
      "Tunde started our Saturday classes at age 14. He passed his Grade 5 ABRSM theory at 16 and now leads the youth choir at his local church. Music changed his trajectory.",
    name: "Tunde B.",
    role: "Former Saturday Class Student",
    highlight: "Now leading a 30-voice youth choir.",
  },
  {
    title: "Cerebral Palsy Centre: Finding Voice",
    tag: "Health & Social",
    excerpt:
      "For non-verbal residents, music became communication. Staff noticed increased alertness, eye contact and attempts at vocalisation during and after our sessions.",
    name: "Nurse Fatima",
    role: "Cerebral Palsy Centre, Yaba",
    highlight: "Documented improvement in resident engagement.",
  },
];

function StoryCard({ s, i }: { s: (typeof STORIES)[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: E }}
      style={{ height: "100%" }}
    >
      <motion.div
        className="cs-story-card"
        style={{ height: "100%" }}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 260 }}
      >
        <div className="cs-story-card__img img-fill img-dark">
          <span>Story image</span>
          <div className="cs-story-card__tag">{s.tag}</div>
        </div>
        <div className="cs-story-card__body">
          <h3 className="cs-story-card__title">{s.title}</h3>
          <p className="cs-story-card__body-text">&ldquo;{s.excerpt}&rdquo;</p>

          {/* Highlight */}
          <div
            style={{
              padding: "10px 14px",
              borderRadius: "var(--r-s)",
              background: "var(--viridian-pale)",
              border: "1px solid var(--viridian-pale)",
              marginBottom: 20,
            }}
          >
            <div
              className="eyebrow"
              style={{
                color: "var(--viridian)",
                marginBottom: 2,
                fontSize: "0.55rem",
              }}
            >
              Impact
            </div>
            <div
              className="body-text"
              style={{
                color: "var(--viridian)",
                fontSize: "clamp(0.75rem,1.2vw,0.82rem)",
                fontWeight: 600,
              }}
            >
              {s.highlight}
            </div>
          </div>

          <div className="cs-story-card__author">
            <div
              className="cs-story-card__avatar img-fill"
              style={{ width: 40, height: 40, borderRadius: "50%" }}
            >
              <span style={{ fontSize: "0.4rem" }}>Photo</span>
            </div>
            <div>
              <div className="cs-story-card__name">{s.name}</div>
              <div className="cs-story-card__role">{s.role}</div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ImpactStoriesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered =
    activeFilter === "All"
      ? STORIES
      : STORIES.filter((s) => s.tag === activeFilter);

  return (
    <main style={{ background: "var(--ivory)" }}>
      {/* HERO */}
      <section
        className="cs-hero cs-hero--page"
        style={{ background: "var(--viridian)" }}
      >
        <Wm
          text="IMPACT"
          style={{
            right: -15,
            top: 0,
            fontSize: "clamp(80px,16vw,240px)",
            color: "rgba(255,255,255,0.04)",
          }}
        />
        <div
          className="container"
          style={{ position: "relative", zIndex: 1, width: "100%" }}
        >
          <div className="cs-impact-hero-grid">
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
                Real Stories
              </motion.span>
              <motion.h1
                className="display"
                style={{
                  fontSize: "clamp(2rem,8vw,8rem)",
                  color: "#fff",
                  lineHeight: 0.88,
                  marginBottom: 24,
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: E }}
              >
                Impact
                <br />
                <em className="display-i" style={{ color: "var(--gold)" }}>
                  Stories
                </em>
              </motion.h1>
              <motion.p
                className="body-text"
                style={{
                  fontSize: "clamp(0.92rem,1.6vw,1.1rem)",
                  color: "rgba(255,255,255,0.65)",
                  maxWidth: 480,
                }}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.3, ease: E }}
              >
                Every hymnbook placed, every class taught, every prison visit —
                they ripple outward in ways we cannot always measure.
              </motion.p>
            </div>

            {/* Mini stats */}
            <motion.div
              className="cs-impact-stats"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: E }}
            >
              {[
                { n: "100+", l: "Lives Touched" },
                { n: "11", l: "ABRSM Graduates" },
                { n: "3", l: "Ministries" },
                { n: "∞", l: "Songs Shared" },
              ].map(({ n, l }) => (
                <div
                  key={l}
                  style={{
                    padding: "clamp(14px,2.5vw,20px)",
                    background: "rgba(255,255,255,0.07)",
                    borderRadius: "var(--r-l)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    textAlign: "center",
                  }}
                >
                  <div
                    className="cs-stat__n"
                    style={{ fontSize: "clamp(1.8rem,4vw,3rem)" }}
                  >
                    {n}
                  </div>
                  <div className="cs-stat__label">{l}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED TESTIMONIAL */}
      <section
        style={{
          background: "var(--viridian-pale)",
          padding: "var(--sp-xl) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Wm
          text='"'
          style={{
            top: -30,
            left: -10,
            fontSize: "clamp(120px,20vw,300px)",
            color: "rgba(26,92,74,0.07)",
          }}
        />
        <div
          className="container"
          style={{ position: "relative", zIndex: 1, maxWidth: 840 }}
        >
          <Rise>
            <div style={{ display: "flex", gap: 3, marginBottom: 22 }}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  style={{ fill: "var(--gold)", color: "var(--gold)" }}
                />
              ))}
            </div>
            <blockquote className="cs-testimonial__quote">
              &ldquo;Seeing the transformation in the inmates&apos; faces as
              they sang was powerful beyond words. The hymns touched hearts in
              ways our preaching alone couldn&apos;t reach.&rdquo;
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
                style={{ width: 52, height: 52, borderRadius: "50%" }}
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
                  All Saints Anglican, Yaba
                </div>
              </div>
            </div>
          </Rise>
        </div>
      </section>

      {/* STORIES GRID */}
      <section
        style={{ background: "var(--ivory)", padding: "var(--sp-2xl) 0" }}
      >
        <div className="container">
          <Rise>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "var(--gap-m)",
                marginBottom: "var(--sp-l)",
              }}
            >
              <div>
                <Label>Stories</Label>
                <h2
                  className="display"
                  style={{
                    fontSize: "clamp(2rem,4.5vw,4.5rem)",
                    color: "var(--viridian)",
                    lineHeight: 0.9,
                    marginTop: 8,
                  }}
                >
                  Voices of{" "}
                  <em
                    className="display-i"
                    style={{ color: "var(--gold-dark)" }}
                  >
                    Change
                  </em>
                </h2>
              </div>
              <GoldRule />
            </div>
          </Rise>

          {/* Filter pills */}
          <Rise delay={0.08}>
            <div className="cs-filters">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`cs-filter-btn${activeFilter === f ? " cs-filter-btn--active" : ""}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Rise>

          <motion.div layout className="cs-stories-grid">
            {filtered.map((s, i) => (
              <StoryCard key={s.title} s={s} i={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* SCRIPTURE BRIDGE */}
      <section
        style={{ background: "var(--ivory-2)", padding: "var(--sp-xl) 0" }}
      >
        <div className="container">
          <div className="cs-grid cs-grid--2col">
            <Fade delay={0.1}>
              {/* <Img
                label="Community worship"
                dark
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  borderRadius: "var(--r-xl)",
                }}
              /> */}
              <Image
                src="/images/choirr.jpg"
                alt=""
                width={600}
                height={600}
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  borderRadius: "var(--r-xl)",
                }}
              />
            </Fade>
            <Rise delay={0.12}>
              <div className="cs-verse">
                <div className="cs-verse__q">&quot;</div>
                <p className="cs-verse__text">
                  Let the word of Christ dwell in you richly in all wisdom;
                  teaching and admonishing one another in psalms and hymns and
                  spiritual songs, singing with grace in your hearts to the
                  Lord.
                </p>
                <div className="cs-verse__src">— Colossians 3:16</div>
              </div>
              <div style={{ marginTop: 28 }}>
                <p
                  className="body-text"
                  style={{
                    color: "var(--ink-70)",
                    fontSize: "clamp(0.9rem,1.5vw,1.05rem)",
                    marginBottom: 28,
                  }}
                >
                  These stories are our obedience to that verse — teaching,
                  admonishing, singing. In prisons, schools, homes and
                  hospitals, the ancient words still carry power.
                </p>
                <div className="cs-btn-group">
                  <a href="/get-involved" className="btn btn-viridian">
                    Support the Mission <ArrowRight size={16} />
                  </a>
                  <a href="/contact" className="btn btn-outline">
                    Share Your Story
                  </a>
                </div>
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
          text="MORE"
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
            <h2
              className="cs-cta__title"
              style={{ fontSize: "clamp(2.4rem,7vw,6.5rem)" }}
            >
              Add Your Story
            </h2>
            <p className="cs-cta__body">
              Have you been touched by ChristianSing? We&apos;d love to hear how
              music and hymns have shaped your faith.
            </p>
            <div className="cs-btn-group cs-btn-group--center">
              <a href="/contact" className="btn btn-viridian">
                Get In Touch
              </a>
              <a href="/get-involved" className="btn btn-outline-white">
                Donate
              </a>
            </div>
          </Rise>
        </div>
      </section>
    </main>
  );
}
