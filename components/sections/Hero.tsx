"use client";

import { ArrowUpRight, Medal, Users, Train } from "@phosphor-icons/react";
import { FOUNDING_YEAR } from "@/lib/constants";
import HeroVideo from "@/components/ui/HeroVideo";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";

export default function Hero() {
  return (
    <section
      className="bg-[#f5f1e9] pt-36 pb-20 px-4 relative overflow-hidden"
      aria-label="Nisarga Publicity introduction"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Copy */}
        <Reveal className="max-w-3xl mb-12">
          <div className="glass-chip inline-flex items-center gap-2 px-4 py-2 mb-8">
            <Medal size={15} weight="fill" className="text-[#a8302f]" />
            <span className="text-[#4a4237] text-xs font-semibold tracking-wide uppercase">
              Advertising &amp; Events Authority Since {FOUNDING_YEAR}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#18140f] leading-[0.95] mb-7">
            Building the moments Karnataka <em className="accent">remembers.</em>
          </h1>

          <p className="text-[#6f6759] text-lg max-w-lg mb-10">
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

        {/* Horizontal video banner */}
        <Reveal delay={150}>
          <div className="relative">
            <div className="bezel-shell">
              <div className="bezel-core overflow-hidden aspect-[16/9] md:aspect-[21/9]">
                <HeroVideo src="/video/hero.mp4" className="w-full h-full" />
              </div>
            </div>

            {/* Floating stat chips */}
            <div
              className="glass-chip absolute top-4 left-4 md:top-6 md:left-6 px-5 py-4 float-slow"
              style={{ ["--float-rotate" as string]: "-2deg" }}
            >
              <div className="flex items-center gap-2">
                <Users size={18} weight="fill" className="text-[#a8302f]" />
                <div>
                  <div className="text-lg font-bold text-[#18140f] leading-none">100K+</div>
                  <div className="text-[11px] text-[#6f6759]">single-event reach</div>
                </div>
              </div>
            </div>

            <div
              className="glass-chip absolute bottom-4 right-4 md:bottom-6 md:right-6 px-5 py-4 float-slower"
              style={{ ["--float-rotate" as string]: "2deg" }}
            >
              <div className="flex items-center gap-2">
                <Train size={18} weight="fill" className="text-[#b8863a]" />
                <div>
                  <div className="text-sm font-bold text-[#18140f] leading-none">Authorized</div>
                  <div className="text-[11px] text-[#6f6759]">Railways &amp; KSRTC</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
