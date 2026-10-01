"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const NODES = [
  { id: "clients", label: "Clients" },
  { id: "legacy", label: "Legacy" },
  { id: "capabilities", label: "Capabilities" },
  { id: "proof-of-scale", label: "Proof of Scale" },
  { id: "why-us", label: "Why Us" },
  { id: "engagements", label: "Engagements" },
  { id: "contact", label: "Contact" },
];

const LINE_LENGTH = 1000;

/**
 * A scroll-driven "journey" thread fixed along the right edge: a line
 * draws itself in brand red-gold as the page scrolls from just past the
 * hero down through the footer, a small compass-styled marker travels
 * along it, and a dot lights up at each section it reaches. Absent over
 * the hero itself (fades in right as #clients arrives), since the hero
 * already has its own video/parallax moment.
 *
 * Scroll progress drives everything via direct DOM/gsap.set writes in
 * one shared ScrollTrigger onUpdate tick, never React state, matching
 * the house rule established by Magnetic.tsx for continuous pointer/
 * scroll-driven values.
 */
export default function JourneyThread() {
  const reduce = useReducedMotion();
  const railRef = useRef<HTMLDivElement>(null);
  const litLineRef = useRef<SVGLineElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotLitState = useRef<boolean[]>(NODES.map(() => false));

  useEffect(() => {
    if (reduce || !railRef.current) return;

    const ctx = gsap.context(() => {
      const thresholds: number[] = NODES.map(() => 0);

      const recomputeThresholds = (trigger: ScrollTrigger) => {
        const span = trigger.end - trigger.start;
        NODES.forEach((node, i) => {
          const el = document.getElementById(node.id);
          const offset = el ? el.offsetTop : trigger.start;
          thresholds[i] = span > 0 ? (offset - trigger.start) / span : 0;

          const dot = dotRefs.current[i];
          if (dot) {
            dot.style.top = `${Math.min(Math.max(thresholds[i], 0), 1) * 100}%`;
          }
        });
      };

      const applyProgress = (progress: number) => {
        if (litLineRef.current) {
          gsap.set(litLineRef.current, {
            strokeDashoffset: LINE_LENGTH * (1 - progress),
          });
        }
        if (markerRef.current) {
          markerRef.current.style.top = `${progress * 100}%`;
        }
        NODES.forEach((_, i) => {
          const isLit = progress >= thresholds[i];
          if (isLit !== dotLitState.current[i]) {
            dotLitState.current[i] = isLit;
            dotRefs.current[i]?.classList.toggle("is-lit", isLit);
          }
        });
      };

      // Both start and end are explicit absolute scroll-position
      // functions, with no `trigger` element reference at all — mixing
      // an element-relative `start` ("#clients"/"top top") with a
      // numeric/function `end` measurably confused GSAP's internal
      // reference frame here (start resolved to 0 instead of #clients'
      // actual offset, capping progress well short of 1 at the true
      // bottom of the page). Plain pixel functions for both sidestep
      // that entirely and are a documented ScrollTrigger usage mode.
      const trigger = ScrollTrigger.create({
        start: () => document.getElementById("clients")?.offsetTop ?? 0,
        end: () => document.documentElement.scrollHeight - window.innerHeight,
        scrub: true,
        onRefresh: (self) => recomputeThresholds(self),
        onUpdate: (self) => applyProgress(self.progress),
        onEnter: () => railRef.current?.classList.add("is-visible"),
        onLeaveBack: () => railRef.current?.classList.remove("is-visible"),
      });

      recomputeThresholds(trigger);

      // Slow "finding direction" spin on the marker — desktop only.
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      if (isDesktop) {
        const spinTarget = markerRef.current?.querySelector(".journey-marker-spin");
        if (spinTarget) {
          gsap.to(spinTarget, {
            rotate: 360,
            duration: 14,
            repeat: -1,
            ease: "linear",
            transformOrigin: "50% 50%",
          });
        }
      }
    }, railRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <div
      ref={railRef}
      className={`journey-rail fixed top-0 right-2 md:right-6 h-screen w-4 md:w-5 z-40 pointer-events-none ${
        reduce ? "is-visible" : ""
      }`}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 2 ${LINE_LENGTH}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="journey-line-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e3605e" />
            <stop offset="55%" stopColor="#b8863a" />
            <stop offset="100%" stopColor="#a8302f" />
          </linearGradient>
        </defs>

        <line
          x1="1"
          y1="0"
          x2="1"
          y2={LINE_LENGTH}
          stroke="rgba(24,20,15,0.12)"
          strokeWidth={1.5}
          vectorEffect="non-scaling-stroke"
        />

        {!reduce && (
          <line
            ref={litLineRef}
            x1="1"
            y1="0"
            x2="1"
            y2={LINE_LENGTH}
            stroke="url(#journey-line-grad)"
            strokeWidth={1.5}
            strokeDasharray={LINE_LENGTH}
            strokeDashoffset={LINE_LENGTH}
            vectorEffect="non-scaling-stroke"
          />
        )}
      </svg>

      {NODES.map((node, i) => (
        <div
          key={node.id}
          ref={(el) => {
            dotRefs.current[i] = el;
          }}
          className="journey-dot w-2 h-2 md:w-2.5 md:h-2.5"
          style={{ top: 0 }}
        />
      ))}

      <div
        ref={markerRef}
        className="journey-marker absolute left-1/2 w-4 h-4 md:w-5 md:h-5 -translate-x-1/2 -translate-y-1/2"
        style={{ top: 0, opacity: reduce ? 0 : 1 }}
      >
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <defs>
            <linearGradient id="journey-marker-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e3605e" />
              <stop offset="55%" stopColor="#b8863a" />
              <stop offset="100%" stopColor="#a8302f" />
            </linearGradient>
          </defs>
          <g className="journey-marker-spin" fill="url(#journey-marker-grad)">
            <path d="M32 4 L40 28 L32 32 L24 28 Z" />
            <path d="M60 32 L36 24 L32 32 L36 40 Z" opacity="0.85" />
            <path d="M32 60 L24 36 L32 32 L40 36 Z" opacity="0.7" />
            <path d="M4 32 L28 40 L32 32 L28 24 Z" opacity="0.85" />
          </g>
        </svg>
      </div>
    </div>
  );
}
