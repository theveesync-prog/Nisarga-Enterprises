"use client";

import { useState } from "react";
import { useReducedMotion } from "motion/react";

interface HeroVideoProps {
  src: string;
  className?: string;
  /** Degrees to rotate the raw footage (e.g. -90 to turn a portrait
   *  source so it reads as landscape). 0 renders it unrotated. */
  rotate?: number;
}

/**
 * Autoplaying, muted, looping background video for the hero. Browsers
 * only allow autoplay when muted + playsInline, so those three props
 * are mandatory, not optional. Falls back to a plain gradient if the
 * video 404s (no file uploaded yet) or under prefers-reduced-motion,
 * rather than showing a broken-media icon.
 */
export default function HeroVideo({ src, className, rotate = 0 }: HeroVideoProps) {
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

  if (rotate) {
    // The source is portrait. Rotating it so it reads as landscape means
    // its own width/height must swap before the rotation is applied, or
    // it won't fill a landscape frame — sized off the viewport since this
    // always backs a full-bleed, near-viewport-sized hero.
    return (
      <div className={className} style={{ position: "relative", overflow: "hidden" }}>
        <video
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100vh",
            height: "100vw",
            transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
            objectFit: "cover",
          }}
          src={src}
          autoPlay={!reduce}
          muted
          loop
          playsInline
          onError={() => setErrored(true)}
          aria-hidden="true"
        />
      </div>
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
