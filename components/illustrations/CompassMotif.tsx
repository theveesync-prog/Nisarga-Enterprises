"use client";

import { motion, useReducedMotion } from "motion/react";

interface CompassMotifProps {
  className?: string;
}

/**
 * A dark sculptural object, sitting on the light page like a physical
 * piece, built from the compass mark in Nisarga's own logo rather than
 * a generic abstract shape. Layered gradients simulate depth and a
 * top-left light source; the glowing ring and slow rotation are the
 * only motion, motivated as "finding direction."
 */
export default function CompassMotif({ className }: CompassMotifProps) {
  const reduce = useReducedMotion();

  return (
    <svg viewBox="0 0 600 600" className={className} role="presentation" aria-hidden="true">
      <defs>
        <radialGradient id="cm-body" cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#3a3128" />
          <stop offset="55%" stopColor="#221c16" />
          <stop offset="100%" stopColor="#0f0c09" />
        </radialGradient>
        <linearGradient id="cm-rim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4a3f33" />
          <stop offset="100%" stopColor="#0f0c09" />
        </linearGradient>
        <linearGradient id="cm-ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e3605e" />
          <stop offset="55%" stopColor="#b8863a" />
          <stop offset="100%" stopColor="#a8302f" />
        </linearGradient>
        <radialGradient id="cm-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e3605e" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#e3605e" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cm-ambient" cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="#a8302f" stopOpacity="0" />
          <stop offset="100%" stopColor="#a8302f" stopOpacity="0.08" />
        </radialGradient>
      </defs>

      {/* Ambient shadow the object casts on the page */}
      <ellipse cx="300" cy="520" rx="200" ry="28" fill="#18140f" opacity="0.12" />

      {/* Outer sculpted rim */}
      <circle cx="300" cy="300" r="260" fill="url(#cm-rim)" />
      {/* Main body, offset light source */}
      <circle cx="300" cy="300" r="238" fill="url(#cm-body)" />
      <circle cx="300" cy="300" r="238" fill="url(#cm-ambient)" />

      {/* Compass ticks, cut into the surface */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 15 * Math.PI) / 180;
        const isMajor = i % 6 === 0;
        const r1 = 210;
        const r2 = isMajor ? 186 : 198;
        return (
          <line
            key={i}
            x1={300 + r1 * Math.cos(angle)}
            y1={300 + r1 * Math.sin(angle)}
            x2={300 + r2 * Math.cos(angle)}
            y2={300 + r2 * Math.sin(angle)}
            stroke="rgba(232,207,154,0.3)"
            strokeWidth={isMajor ? 1.5 : 0.75}
          />
        );
      })}

      {/* Glowing ring, the sculpture's one bright feature */}
      <motion.g
        style={{ transformOrigin: "300px 300px" }}
        animate={reduce ? undefined : { rotate: 360 }}
        transition={reduce ? undefined : { duration: 70, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="300" cy="300" r="90" fill="url(#cm-glow)" />
        <circle cx="300" cy="300" r="78" fill="#0f0c09" stroke="url(#cm-ring)" strokeWidth="4" />
        <path d="M300 236 L312 292 L300 300 L288 292 Z" fill="url(#cm-ring)" />
        <path d="M356 300 L308 288 L300 300 L308 312 Z" fill="url(#cm-ring)" opacity="0.85" />
        <path d="M300 364 L288 308 L300 300 L312 308 Z" fill="url(#cm-ring)" opacity="0.7" />
        <path d="M244 300 L292 312 L300 300 L292 288 Z" fill="url(#cm-ring)" opacity="0.85" />
      </motion.g>

      <circle cx="300" cy="300" r="40" fill="#100d0a" />
      <text
        x="300"
        y="313"
        textAnchor="middle"
        fontSize="30"
        fontFamily="var(--font-heading)"
        fontWeight="700"
        fill="#f0dba8"
      >
        N
      </text>

      {/* Top-left specular highlight */}
      <ellipse cx="220" cy="190" rx="70" ry="40" fill="#ffffff" opacity="0.06" />
    </svg>
  );
}
