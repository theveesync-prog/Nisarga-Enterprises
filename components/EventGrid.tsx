"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface EventType {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  href: string;
}

const eventTypes: EventType[] = [
  {
    id: "corporate",
    title: "Corporate Events",
    description: "Professional conferences, seminars, team building activities, and corporate celebrations.",
    image: "🏢",
    tag: "Business",
    href: "/#contact",
  },
  {
    id: "weddings",
    title: "Weddings",
    description: "Dream weddings crafted with precision. From intimate ceremonies to grand celebrations.",
    image: "💒",
    tag: "Personal",
    href: "/#contact",
  },
  {
    id: "conferences",
    title: "Conferences",
    description: "Large-scale conferences with keynotes, workshops, networking, and multimedia experiences.",
    image: "🎤",
    tag: "Professional",
    href: "/#contact",
  },
  {
    id: "social",
    title: "Social Celebrations",
    description: "Birthdays, anniversaries, reunions, and all special occasions deserve special attention.",
    image: "🎉",
    tag: "Social",
    href: "/#contact",
  },
];

export default function EventGrid() {
  return (
    <section className="py-20 px-4 bg-white" id="events">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#6366f1]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[#6366f1] text-sm font-semibold uppercase tracking-wide">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl font-bold text-[#1f2937] mb-4">
            Event Types We Specialize In
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Whatever the occasion, we have the expertise and experience to make it exceptional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventTypes.map((event) => (
            <Link
              key={event.id}
              href={event.href}
              className="group relative overflow-hidden rounded-3xl card-hover bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-8 flex flex-col justify-between min-h-80"
            >
              {/* Top Right Tag */}
              <div className="inline-flex items-center w-fit gap-2 bg-[#6366f1]/10 px-3 py-1 rounded-full mb-4">
                <span className="text-[#6366f1] text-xs font-semibold uppercase tracking-wide">
                  {event.tag}
                </span>
              </div>

              {/* Content */}
              <div>
                <div className="text-5xl mb-4">{event.image}</div>
                <h3 className="text-2xl font-bold text-[#1f2937] mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Arrow Icon */}
              <div className="inline-flex items-center justify-center w-10 h-10 bg-[#6366f1] rounded-full text-white group-hover:translate-x-1 transition-transform mt-6">
                <ArrowRight size={18} />
              </div>

              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 to-[#ec4899]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-3xl" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
