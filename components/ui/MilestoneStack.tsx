"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

interface MilestoneStackProps {
  cards: React.ReactNode[];
}

/**
 * Two milestone stories pin in sequence and hand off to each other on
 * scroll: the current card shrinks and fades as the next one arrives.
 * Storytelling motivation: these are sequential proof points, and the
 * pin makes the reader sit with each one instead of skimming past.
 * Canonical GSAP sticky-stack pattern (start: "top top", pin: true).
 */
export default function MilestoneStack({ cards }: MilestoneStackProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !ref.current) return;
    const ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray<HTMLElement>(".milestone-card");
      cardEls.forEach((card, i) => {
        if (i === cardEls.length - 1) return;
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: cardEls[cardEls.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        });
        gsap.to(card, {
          scale: 0.94,
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: cardEls[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, [reduce]);

  if (reduce) {
    return (
      <div className="space-y-6">
        {cards.map((card, i) => (
          <div key={i}>{card}</div>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      {cards.map((card, i) => (
        <div key={i} className="milestone-card sticky top-24 pb-6">
          {card}
        </div>
      ))}
    </div>
  );
}
