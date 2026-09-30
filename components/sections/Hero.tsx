"use client";

import { ArrowUpRight, Medal, Users, Train } from "@phosphor-icons/react";
import { FOUNDING_YEAR } from "@/lib/constants";
import CompassMotif from "@/components/illustrations/CompassMotif";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";

export default function Hero() {
  return (
    <section
      className="bg-[#0d0b0a] pt-32 pb-16 px-4 relative overflow-hidden"
      aria-label="Nisarga Publicity introduction"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center relative">
        {/* Copy */}
        <Reveal>
          <div className="glass-chip inline-flex items-center gap-2 px-4 py-2 mb-7">
            <Medal size={15} weight="fill" className="text-[#e3605e]" />
            <span className="text-[#e8e2d6] text-xs font-semibold tracking-wide uppercase">
              Advertising &amp; Events Authority Since {FOUNDING_YEAR}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#f8f5ee] leading-[0.95] mb-6">
            Building the
            <br />
            moments Karnataka
            <br />
            <em className="accent">remembers.</em>
          </h1>

          <p className="text-[#a89f92] text-lg max-w-lg mb-9">
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
            <a
              href="#capabilities"
              className="inline-flex items-center px-6 py-3.5 rounded-full font-semibold text-[#e8e2d6] border border-white/15 hover:border-[#c8403f]/50 hover:bg-white/5 transition-colors duration-300"
            >
              See Our Capability
            </a>
          </div>
        </Reveal>

        {/* Bespoke compass visual, tied to the real logo mark */}
        <Reveal delay={150}>
          <div className="relative aspect-square max-w-md mx-auto">
            <CompassMotif className="w-full h-full" />

            {/* Floating stat chips */}
            <div
              className="glass-chip absolute top-2 -left-4 px-5 py-4 float-slow hidden sm:block"
              style={{ ["--float-rotate" as string]: "-3deg" }}
            >
              <div className="flex items-center gap-2">
                <Users size={18} weight="fill" className="text-[#e3605e]" />
                <div>
                  <div className="text-lg font-bold text-[#f8f5ee] leading-none">100K+</div>
                  <div className="text-[11px] text-[#a89f92]">single-event reach</div>
                </div>
              </div>
            </div>

            <div
              className="glass-chip absolute bottom-2 -right-4 px-5 py-4 float-slower hidden sm:block"
              style={{ ["--float-rotate" as string]: "2deg" }}
            >
              <div className="flex items-center gap-2">
                <Train size={18} weight="fill" className="text-[#d6b46c]" />
                <div>
                  <div className="text-sm font-bold text-[#f8f5ee] leading-none">Authorized</div>
                  <div className="text-[11px] text-[#a89f92]">Railways &amp; KSRTC</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
