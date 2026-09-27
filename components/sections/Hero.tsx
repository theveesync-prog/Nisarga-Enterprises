"use client";

import { ArrowRight, Award } from "lucide-react";
import { useEffect, useState } from "react";
import { FOUNDING_YEAR } from "@/lib/constants";

export default function Hero() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="bg-white"
      style={{ paddingTop: "5.5rem", paddingBottom: "3rem" }}
      aria-label="Hero — Nisarga Publicity"
    >
      <div
        className="hidden lg:block relative overflow-hidden"
        style={{
          marginLeft: "2.5rem",
          marginRight: "2.5rem",
          borderRadius: "2rem",
          minHeight: "620px",
          background: "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
          boxShadow: "0 25px 70px -20px rgba(99, 102, 241, 0.25), 0 8px 24px -8px rgba(0,0,0,0.10)",
        }}
      >
        {/* Content Area */}
        <div className="relative z-10 flex flex-col justify-center px-14 py-16 max-w-2xl">
          <div
            className="space-y-6"
            style={{
              opacity: revealed ? 1 : 0.3,
              transform: revealed ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s cubic-bezier(0.23, 1, 0.320, 1)",
            }}
          >
            <div className="flex items-center gap-2">
              <Award size={16} className="text-white" />
              <span className="text-white/90 text-sm font-semibold tracking-wide uppercase">
                Coastal Karnataka&apos;s Advertising &amp; Events Authority — Since {FOUNDING_YEAR}
              </span>
            </div>

            <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight">
              Three Decades Building the Moments Karnataka Remembers.
            </h1>

            <p className="text-white/85 text-lg max-w-xl">
              Nisarga Publicity is the agency of record behind Coastal Karnataka&apos;s largest public
              activations, its official railway and transit advertising rights, and its most
              demanding brand launches. One partner. Every medium. National-grade execution,
              delivered locally.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#6366f1] rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Start a Conversation
                <ArrowRight size={16} />
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                See Our Capability
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 -translate-y-1/2">
            <div
              className="w-96 h-96 bg-white/10 rounded-full blur-3xl"
              style={{ animation: "pulse 4s ease-in-out infinite" }}
            />
          </div>
          <div className="absolute top-1/3 right-24">
            <div
              className="w-64 h-64 bg-white/20 rounded-full blur-2xl"
              style={{ animation: "pulse 6s ease-in-out infinite" }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden px-4 pt-8 pb-4">
        <div
          className="space-y-6 text-center"
          style={{
            opacity: revealed ? 1 : 0.3,
            transform: revealed ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.23, 1, 0.320, 1)",
          }}
        >
          <div className="flex justify-center">
            <div className="flex items-center gap-2 bg-[#6366f1]/10 px-4 py-2 rounded-full">
              <Award size={16} className="text-[#6366f1]" />
              <span className="text-[#6366f1] text-xs font-semibold uppercase tracking-wide">
                Since {FOUNDING_YEAR}
              </span>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-[#1f2937] leading-tight">
            Three Decades Building the Moments Karnataka Remembers.
          </h1>

          <p className="text-gray-600 text-base max-w-md mx-auto">
            Nisarga Publicity is the agency of record behind Coastal Karnataka&apos;s largest public
            activations, official railway and transit advertising rights, and its most demanding
            brand launches. One partner. Every medium.
          </p>

          <div className="flex flex-col gap-3 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#6366f1] to-[#ec4899] text-white rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Start a Conversation
              <ArrowRight size={16} />
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-[#6366f1] text-[#6366f1] rounded-full font-semibold hover:bg-[#6366f1]/5 transition-all"
            >
              See Our Capability
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
      `}</style>
    </section>
  );
}
