"use client";

import { useState } from "react";
import { useReducedMotion } from "motion/react";

interface HeroVideoProps {
  src: string;
  className?: string;
}

/**
 * Autoplaying, muted, looping background video for the hero. Browsers
 * only allow autoplay when muted + playsInline, so those three props
 * are mandatory, not optional. Falls back to a plain gradient if the
 * video 404s (no file uploaded yet) or under prefers-reduced-motion,
 * rather than showing a broken-media icon.
 */
export default function HeroVideo({ src, className }: HeroVideoProps) {
  const [errored, setErrored] = useState(false);
  const reduce = useReducedMotion();

  if (errored) {
    return (
      <div
        className={className}
        style={{ background: "linear-gradient(160deg, #201a14, #100d0a)" }}
      />
    );
  }

  return (
    <video
      className={className}
      style={{ objectFit: "cover" }}
      src={src}
      autoPlay={!reduce}
      muted
      loop
      playsInline
      onError={() => setErrored(true)}
      aria-hidden="true"
    />
  );
}
