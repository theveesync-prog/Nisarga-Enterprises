"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={heroRef}
      className="bg-white"
      style={{ paddingTop: "5.5rem", paddingBottom: "3rem" }}
      aria-label="Hero — Event Management Platform"
    >
      <div
        className="hidden lg:block relative overflow-hidden"
        style={{
          marginLeft: "2.5rem",
          marginRight: "2.5rem",
          borderRadius: "2rem",
          backgroundColor: "#ffffff",
          height: "620px",
          background: "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
          boxShadow: "0 25px 70px -20px rgba(99, 102, 241, 0.25), 0 8px 24px -8px rgba(0,0,0,0.10)",
        }}
      >
        {/* Content Area */}
        <div
          className="absolute inset-0 flex flex-col justify-center px-12"
          style={{ width: "50%" }}
        >
          <div
            className="space-y-6"
            style={{
              opacity: revealed ? 1 : 0.3,
              transform: revealed ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s cubic-bezier(0.23, 1, 0.320, 1)",
            }}
          >
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-white" />
              <span className="text-white/90 text-sm font-semibold tracking-wide">
                Professional Event Management
              </span>
            </div>

            <h1 className="text-5xl font-bold text-white leading-tight">
              Create Unforgettable Events
            </h1>

            <p className="text-white/80 text-lg max-w-md">
              From corporate gatherings to dream weddings, we handle every detail with precision and creativity.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="#events"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#6366f1] rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Explore Events
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0" style={{ width: "50%", left: "50%" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-96 h-96 bg-white/10 rounded-full blur-3xl"
              style={{
                animation: "pulse 4s ease-in-out infinite",
              }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-64 h-64 bg-white/20 rounded-full blur-2xl"
              style={{
                animation: "pulse 6s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden px-4 pt-8 pb-12">
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
              <Sparkles size={16} className="text-[#6366f1]" />
              <span className="text-[#6366f1] text-sm font-semibold">
                Professional Event Management
              </span>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-[#1f2937] leading-tight">
            Create Unforgettable Events
          </h1>

          <p className="text-gray-600 text-lg max-w-md mx-auto">
            From corporate gatherings to dream weddings, we handle every detail with precision and creativity.
          </p>

          <div className="flex flex-col gap-3 pt-4">
            <a
              href="#events"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#6366f1] to-[#ec4899] text-white rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Explore Events
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-[#6366f1] text-[#6366f1] rounded-full font-semibold hover:bg-[#6366f1]/5 transition-all"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Mobile Image Placeholder */}
        <div className="mt-12 h-80 bg-gradient-to-b from-[#6366f1]/20 to-[#ec4899]/20 rounded-3xl flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="w-24 h-24 mx-auto mb-4 bg-[#6366f1]/10 rounded-full flex items-center justify-center">
              <Sparkles size={40} className="text-[#6366f1]" />
            </div>
            <p>Featured Events</p>
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
