"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, CaretRight } from "@phosphor-icons/react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "motion/react";
import HeroVideo from "@/components/ui/HeroVideo";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";

const heroVideos = [{ src: "/video/hero.mp4" }, { src: "/video/hero-2.mp4" }];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y = useSpring(rawY, { stiffness: 120, damping: 30, mass: 0.4 });

  const current = heroVideos[index];
  const goNext = () => setIndex((i) => (i + 1) % heroVideos.length);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#18140f]"
      aria-label="Nisarga Publicity introduction"
    >
      {/* Full-bleed hero video background */}
      <motion.div className="absolute inset-0 scale-110" style={reduce ? undefined : { y }}>
        <AnimatePresence>
          <motion.div
            key={current.src}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroVideo src={current.src} className="w-full h-full" />
          </motion.div>
        </AnimatePresence>
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
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 pt-28 sm:pt-36 md:pt-40 pb-10 md:pb-14 flex-1 flex flex-col justify-center">
        <Reveal className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] sm:leading-[0.95] mb-5 sm:mb-7">
            Building the moments Karnataka <em className="accent">remembers.</em>
          </h1>

          <p className="text-white/75 text-base sm:text-lg max-w-lg mb-8 sm:mb-10">
            One agency. Every medium, print, outdoor, broadcast, events. National-grade
            execution, delivered locally for three decades.
          </p>

          <Magnetic>
            <a href="#contact" className="group btn-island btn-primary font-semibold">
              Start a Conversation
              <span className="btn-island-icon bg-white/15">
                <ArrowUpRight size={16} weight="bold" />
              </span>
            </a>
          </Magnetic>
        </Reveal>
      </div>

      {/* Next-video control */}
      {heroVideos.length > 1 && (
        <button
          type="button"
          onClick={goNext}
          aria-label="Show next video"
          className="hero-video-nav absolute top-1/2 right-4 md:right-8 z-10"
        >
          <CaretRight size={18} weight="bold" />
        </button>
      )}
    </section>
  );
}
