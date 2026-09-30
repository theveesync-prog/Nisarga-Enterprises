"use client";

import { motion, useReducedMotion } from "motion/react";

interface CompassMotifProps {
  className?: string;
}

/**
 * A large, bespoke reinterpretation of the mark from Nisarga's own logo
 * (the four-point compass star + concentric rings), rendered as the
 * hero's signature visual instead of a generic abstract blob. The
 * rotation is slow and motivated: a compass that finds direction.
 */
export default function CompassMotif({ className }: CompassMotifProps) {
  const reduce = useReducedMotion();

  return (
    <svg viewBox="0 0 600 600" className={className} role="presentation" aria-hidden="true">
      <defs>
        <radialGradient id="compass-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c8403f" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#c8403f" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="compass-star" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e3605e" />
          <stop offset="100%" stopColor="#c8403f" />
        </linearGradient>
      </defs>

      <circle cx="300" cy="300" r="280" fill="url(#compass-glow)" />

      {/* Concentric rings */}
      {[240, 190, 140].map((r, i) => (
        <circle
          key={r}
          cx="300"
          cy="300"
          r={r}
          fill="none"
          stroke="rgba(214,180,108,0.22)"
          strokeWidth={i === 0 ? 1.5 : 0.75}
        />
      ))}

      {/* Tick marks around the outer ring */}
      {Array.from({ length: 36 }).map((_, i) => {
        const angle = (i * 10 * Math.PI) / 180;
        const isMajor = i % 9 === 0;
        const r1 = 240;
        const r2 = isMajor ? 222 : 232;
        return (
          <line
            key={i}
            x1={300 + r1 * Math.cos(angle)}
            y1={300 + r1 * Math.sin(angle)}
            x2={300 + r2 * Math.cos(angle)}
            y2={300 + r2 * Math.sin(angle)}
            stroke="rgba(214,180,108,0.35)"
            strokeWidth={isMajor ? 1.5 : 0.75}
          />
        );
      })}

      {/* Rotating four-point star, slow and motivated */}
      <motion.g
        style={{ transformOrigin: "300px 300px" }}
        animate={reduce ? undefined : { rotate: 360 }}
        transition={reduce ? undefined : { duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <path
          d="M300 60 L322 278 L300 300 L278 278 Z"
          fill="url(#compass-star)"
        />
        <path
          d="M300 540 L322 322 L300 300 L278 322 Z"
          fill="url(#compass-star)"
          opacity="0.55"
        />
        <path
          d="M60 300 L278 278 L300 300 L278 322 Z"
          fill="#d6b46c"
          opacity="0.85"
        />
        <path
          d="M540 300 L322 278 L300 300 L322 322 Z"
          fill="#d6b46c"
          opacity="0.5"
        />
      </motion.g>

      <circle cx="300" cy="300" r="46" fill="#0d0b0a" stroke="url(#compass-star)" strokeWidth="2" />
      <text
        x="300"
        y="314"
        textAnchor="middle"
        fontSize="34"
        fontFamily="var(--font-heading)"
        fontWeight="700"
        fill="#f5f1ea"
      >
        N
      </text>
    </svg>
  );
}
