"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { EVENTS } from "@/lib/events";
import Reveal from "@/components/ui/Reveal";

export default function RecentEvents() {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    const row = rowRef.current;
    if (!row) return;
    const card = row.querySelector<HTMLElement>("[data-event-card]");
    const amount = card ? card.offsetWidth + 24 : row.clientWidth * 0.8;
    row.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-white" id="recent-events">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-[#18140f] uppercase tracking-wide leading-tight">
            See the moments
            <br />
            we&apos;ve brought to life.
          </h2>
        </Reveal>

        <div
          ref={rowRef}
          className="event-fan-row flex gap-10 sm:gap-14 overflow-x-auto py-12 px-4 snap-x snap-mandatory scroll-smooth justify-start lg:justify-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {EVENTS.map((event, i) => (
            <Link
              key={event.slug}
              href={`/events/${event.slug}`}
              data-event-card
              className={`event-card-3d group relative flex-shrink-0 w-[170px] sm:w-[200px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl snap-start ${
                i % 2 === 0 ? "tilt-a" : "tilt-b"
              }`}
            >
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 170px, 200px"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.85) 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="w-6 h-[2px] bg-[#e8cf9a] mb-2" />
                <span
                  className="block text-white font-display font-bold text-sm sm:text-base leading-tight"
                  style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
                >
                  {event.title}
                </span>
                <span className="block text-[#e8cf9a] text-[10px] font-semibold uppercase tracking-[0.18em] mt-1.5">
                  {event.client}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-4">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Previous event"
            className="flex items-center justify-center w-9 h-9 rounded-full border border-[#18140f]/15 text-[#18140f] hover:bg-[#18140f]/5 transition-colors"
          >
            <ArrowLeft size={15} weight="bold" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Next event"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#18140f] text-white hover:opacity-90 transition-opacity"
          >
            <ArrowRight size={15} weight="bold" />
          </button>
        </div>
      </div>
    </section>
  );
}
