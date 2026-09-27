"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How do I get started with event planning?",
    answer:
      "Simply sign up on our platform, choose your event type, and our team will guide you through the planning process step by step.",
  },
  {
    question: "What types of events do you handle?",
    answer:
      "We specialize in corporate events, weddings, conferences, and social celebrations. Each comes with customized planning and execution.",
  },
  {
    question: "What's included in your event management service?",
    answer:
      "Our services include venue selection, vendor coordination, budget management, timeline planning, day-of coordination, and full event execution.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking 3-6 months in advance for larger events, but we can accommodate shorter timelines depending on availability.",
  },
  {
    question: "Do you have experience with international events?",
    answer:
      "Yes! We have successfully managed events across multiple locations and have experience with international guest coordination.",
  },
  {
    question: "What payment options do you accept?",
    answer:
      "We accept all major payment methods including credit cards, bank transfers, and digital wallets for your convenience.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-[#f9fafb]" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#6366f1]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[#6366f1] text-sm font-semibold uppercase tracking-wide">
              Questions?
            </span>
          </div>
          <h2 className="text-4xl font-bold text-[#1f2937] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about our event planning services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#6366f1]/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-[#6366f1]/2 transition-colors text-left"
              >
                <span className="font-semibold text-[#1f2937]">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={cn(
                    "text-[#6366f1] flex-shrink-0 transition-transform duration-300",
                    openIndex === idx && "rotate-180"
                  )}
                />
              </button>

              {openIndex === idx && (
                <div className="px-6 py-4 bg-[#6366f1]/2 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
