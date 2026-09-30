"use client";

import { ArrowUpRight, Medal, Users, Train } from "@phosphor-icons/react";
import { FOUNDING_YEAR } from "@/lib/constants";
import EventIllustration from "@/components/illustrations/EventIllustration";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";

export default function Hero() {
  return (
    <section className="bg-white pt-28 pb-12 px-4" aria-label="Nisarga Publicity introduction">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Copy */}
        <Reveal>
          <div className="glass-chip inline-flex items-center gap-2 px-4 py-2 mb-6">
            <Medal size={15} weight="fill" className="text-[#b52b2c]" />
            <span className="text-[#1f2937] text-xs font-semibold tracking-wide uppercase">
              Advertising &amp; Events Authority Since {FOUNDING_YEAR}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#1f2937] leading-tight mb-5">
            Building the moments Karnataka <em className="accent">remembers.</em>
          </h1>

          <p className="text-gray-600 text-lg max-w-lg mb-8">
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
              className="inline-flex items-center px-6 py-3.5 rounded-full font-semibold text-[#1f2937] border border-gray-200 hover:border-[#b52b2c]/40 hover:bg-[#b52b2c]/5 transition-colors duration-300"
            >
              See Our Capability
            </a>
          </div>
        </Reveal>

        {/* Floating glass visual */}
        <Reveal delay={150}>
          <div className="relative">
            <div className="bezel-shell">
              <div
                className="bezel-core relative overflow-hidden"
                style={{ boxShadow: "0 30px 80px -24px rgba(181, 43, 44, 0.3)" }}
              >
                <EventIllustration variant="crowd" className="w-full h-auto" />
              </div>
            </div>

            {/* Floating stat chips */}
            <div
              className="glass-chip absolute -top-6 -left-6 px-5 py-4 float-slow hidden sm:block"
              style={{ ["--float-rotate" as string]: "-3deg" }}
            >
              <div className="flex items-center gap-2">
                <Users size={18} weight="fill" className="text-[#b52b2c]" />
                <div>
                  <div className="text-lg font-bold text-[#1f2937] leading-none">100K+</div>
                  <div className="text-[11px] text-gray-500">single-event reach</div>
                </div>
              </div>
            </div>

            <div
              className="glass-chip absolute -bottom-6 -right-4 px-5 py-4 float-slower hidden sm:block"
              style={{ ["--float-rotate" as string]: "2deg" }}
            >
              <div className="flex items-center gap-2">
                <Train size={18} weight="fill" className="text-[#c8983f]" />
                <div>
                  <div className="text-sm font-bold text-[#1f2937] leading-none">Authorized</div>
                  <div className="text-[11px] text-gray-500">Railways &amp; KSRTC</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
