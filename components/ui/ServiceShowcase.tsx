"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, type MotionValue } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";

interface Service {
  id: string;
  title: string;
  tagline: string;
  image: string;
}

interface ServiceShowcaseProps {
  services: Service[];
}

/**
 * A hover-reveal service list: the preview image is one element that
 * follows the cursor and swaps content, rather than a card grid. Cursor
 * position is tracked via motion values (useMotionValue/useSpring), never
 * React state, so it never re-renders the tree per the skill's rule on
 * continuous pointer values.
 */
export default function ServiceShowcase({ services }: ServiceShowcaseProps) {
  const [active, setActive] = useState<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 25 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div className="relative" onMouseMove={handleMove} onMouseLeave={() => setActive(null)}>
      {/* Floating preview, follows the cursor, swaps per hovered row */}
      <FloatingPreview x={springX} y={springY} active={active} services={services} />

      <div className="border-t border-[#18140f]/10">
        {services.map((service, i) => (
          <div
            key={service.id}
            onMouseEnter={() => setActive(i)}
            className="group relative border-b border-[#18140f]/10 py-8 md:py-10 cursor-pointer"
          >
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-baseline gap-6 md:gap-10">
                <span className="text-sm font-mono text-[#18140f]/25 w-8">0{i + 1}</span>
                <h3 className="text-2xl md:text-4xl font-bold text-[#18140f] transition-all duration-500 group-hover:translate-x-3 group-hover:text-[#a8302f]">
                  {service.title}
                </h3>
              </div>
              <ArrowUpRight
                size={22}
                weight="bold"
                className="text-[#18140f]/30 flex-shrink-0 transition-all duration-500 group-hover:text-[#a8302f] group-hover:rotate-45 group-hover:scale-110 hidden md:block"
              />
            </div>
            <p className="text-[#6f6759] text-sm mt-2 ml-[3.5rem] md:ml-16 max-w-md">
              {service.tagline}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FloatingPreview({
  x,
  y,
  active,
  services,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  active: number | null;
  services: Service[];
}) {
  return (
    <motion.div
      className="pointer-events-none absolute top-0 left-0 z-10 w-56 h-40 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden shadow-2xl hidden md:block"
      style={{ x, y }}
      animate={{ opacity: active !== null ? 1 : 0, scale: active !== null ? 1 : 0.85 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {services.map((service, i) => (
        <div
          key={service.id}
          className="absolute inset-0 transition-opacity duration-300"
          style={{ opacity: active === i ? 1 : 0 }}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="224px"
          />
        </div>
      ))}
    </motion.div>
  );
}
