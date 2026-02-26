"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, AlertCircle } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ─── Scroll reveal: fade + rise ────────────────────────────── */
export function Rise({
  children,
  delay = 0,
  className = "",
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 38 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.72, delay, ease: EASE }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ─── Scroll reveal: fade only ───────────────────────────────── */
export function Fade({
  children,
  delay = 0,
  className = "",
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.85, delay, ease: EASE }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ─── Image tile ─────────────────────────────────────────────── */
export function Img({
  label,
  dark = false,
  className = "",
  style,
  children,
}: {
  label: string;
  dark?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`img-fill${dark ? " img-dark" : ""} ${className}`}
      style={style}
    >
      <span>{label}</span>
      {children}
    </div>
  );
}

/* ─── Badge ──────────────────────────────────────────────────── */
export function Badge({
  children,
  variant = "viridian",
}: {
  children: React.ReactNode;
  variant?: "viridian" | "gold" | "ruby" | "white";
}) {
  return <span className={`badge badge-${variant}`}>{children}</span>;
}

/* ─── Eyebrow label ──────────────────────────────────────────── */
export function Label({
  children,
  color = "var(--gold)",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <p className="cs-label" style={{ color }}>
      {children}
    </p>
  );
}

/* ─── Gold accent rule ───────────────────────────────────────── */
export function GoldRule() {
  return <hr className="cs-gold-rule" />;
}

/* ─── Decorative background watermark ───────────────────────── */
export function Wm({
  text,
  size = "clamp(140px, 22vw, 280px)",
  color = "rgba(26,92,74,0.05)",
  style,
}: {
  text: string;
  size?: string;
  color?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div aria-hidden className="wm" style={{ fontSize: size, color, ...style }}>
      {text}
    </div>
  );
}

/* ─── Checklist row ──────────────────────────────────────────── */
export function Check_({
  children,
  color = "var(--viridian)",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <div className="cs-check">
      <span className="cs-check__icon" style={{ background: color }}>
        <Check size={12} color="#fff" strokeWidth={3} />
      </span>
      <span className="cs-check__text">{children}</span>
    </div>
  );
}

/* ─── Form field label ───────────────────────────────────────── */
export function FieldLabel({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="cs-field-label">
      {children}
      {required && <span className="cs-field-req">*</span>}
    </label>
  );
}

/* ─── Field error ────────────────────────────────────────────── */
export function FieldErr({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <div className="cs-field-err">
      <AlertCircle size={13} />
      {msg}
    </div>
  );
}

/* ─── Divider with centered ornament ────────────────────────── */
export function Ornament({ color = "var(--ink-08)" }: { color?: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        margin: "32px 0",
      }}
    >
      <div style={{ flex: 1, height: 1, background: color }} />
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: "var(--r-xs)",
          background: "var(--gold)",
          transform: "rotate(45deg)",
        }}
      />
      <div style={{ flex: 1, height: 1, background: color }} />
    </div>
  );
}

/* ─── Large decorative quote mark ───────────────────────────── */
export function QMark({ color = "rgba(201,146,42,0.18)" }: { color?: string }) {
  return (
    <div
      aria-hidden
      className="display"
      style={{
        fontSize: "clamp(80px, 14vw, 220px)",
        lineHeight: 0.75,
        color,
        userSelect: "none",
        pointerEvents: "none",
      }}
    >
      &quot;
    </div>
  );
}
