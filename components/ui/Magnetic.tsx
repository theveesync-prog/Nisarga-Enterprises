"use client";

import { useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { cn } from "@/lib/utils";

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

/**
 * Wraps a CTA in magnetic hover physics: the element nudges toward the
 * pointer. Position is written directly to CSS custom properties on the
 * DOM node (never React state) so hover tracking never triggers a
 * re-render — see design-taste-frontend skill Section 3.B.
 */
export default function Magnetic({ children, className, strength = 0.25 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const mx = (e.clientX - rect.left - rect.width / 2) * strength;
    const my = (e.clientY - rect.top - rect.height / 2) * strength;
    node.style.setProperty("--mx", `${mx}px`);
    node.style.setProperty("--my", `${my}px`);
  };

  const handlePointerLeave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty("--mx", "0px");
    node.style.setProperty("--my", "0px");
  };

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn("inline-block", className)}
    >
      {children}
    </div>
  );
}
