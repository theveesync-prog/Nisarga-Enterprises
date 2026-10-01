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
          className="flex gap-6 sm:gap-8 overflow-x-auto py-6 px-2 snap-x snap-mandatory scroll-smooth justify-start lg:justify-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {EVENTS.map((event, i) => (
            <Link
              key={event.slug}
              href={`/events/${event.slug}`}
              data-event-card
              className={`group relative flex-shrink-0 w-[170px] sm:w-[200px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl snap-start transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-3 hover:rotate-0 hover:shadow-2xl ${
                i % 2 === 0 ? "rotate-[-3deg]" : "rotate-[3deg]"
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
                    "linear-gradient(180deg, transparent 45%, rgba(0,0,0,0.8) 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-white font-extrabold text-xs sm:text-sm uppercase tracking-wide">
                  {event.title}
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
