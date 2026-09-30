"use client";

import { useRef } from "react";
import { ArrowUpRight, Medal } from "@phosphor-icons/react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "motion/react";
import { FOUNDING_YEAR } from "@/lib/constants";
import HeroVideo from "@/components/ui/HeroVideo";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y = useSpring(rawY, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#18140f]"
      aria-label="Nisarga Publicity introduction"
    >
      {/* Full-bleed hero video background */}
      <motion.div className="absolute inset-0 scale-110" style={reduce ? undefined : { y }}>
        <HeroVideo src="/video/hero.mp4" className="w-full h-full" />
      </motion.div>

      {/* Subtle translucent black scrim for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Copy */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 pt-40 pb-20 flex-1 flex flex-col justify-center">
        <Reveal className="max-w-3xl">
          <div className="glass-chip inline-flex items-center gap-2 px-4 py-2 mb-8">
            <Medal size={15} weight="fill" className="text-[#a8302f]" />
            <span className="text-[#4a4237] text-xs font-semibold tracking-wide uppercase">
              Advertising &amp; Events Authority Since {FOUNDING_YEAR}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-7">
            Building the moments Karnataka <em className="accent">remembers.</em>
          </h1>

          <p className="text-white/75 text-lg max-w-lg mb-10">
            One agency. Every medium, print, outdoor, broadcast, events. National-grade
            execution, delivered locally for three decades.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Magnetic>
              <a href="#contact" className="group btn-island btn-primary font-semibold">
                Start a Conversation
                <span className="btn-island-icon bg-white/15">
                  <ArrowUpRight size={16} weight="bold" />
                </span>
              </a>
            </Magnetic>
            <a href="#capabilities" className="inline-flex items-center px-6 py-3.5 rounded-full font-semibold btn-outline">
              See Our Capability
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
