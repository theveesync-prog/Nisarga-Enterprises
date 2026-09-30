"use client";

import { useEffect, useRef, useState } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!rotate) return;
    const el = containerRef.current;
    if (!el) return;
    const update = () => setSize({ width: el.clientWidth, height: el.clientHeight });
    update();
    // Measures the container in real pixels rather than vh/vw, which
    // drift on mobile as the browser chrome shows/hides — the vh/vw
    // approach left gaps around the video on phones.
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [rotate]);

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
    // it won't fill a landscape frame.
    return (
      <div ref={containerRef} className={className} style={{ position: "relative", overflow: "hidden" }}>
        {size.width > 0 && size.height > 0 && (
          <video
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: size.height,
              height: size.width,
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
        )}
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
