import { Key, ShieldCheck, MapPin, FileCheck } from "lucide-react";

const reasons = [
  {
    icon: Key,
    title: "Exclusive access",
    description:
      "Our authorized status with Southern Railways and KSRTC puts your brand on surfaces most competitors simply cannot touch.",
  },
  {
    icon: ShieldCheck,
    title: "Zero-compromise execution",
    description:
      "From legal formalities to security to manpower, we manage the operational risk so your brand only has to show up and shine.",
  },
  {
    icon: MapPin,
    title: "Three decades of local authority",
    description:
      "We know which venue, which official, which permit and which audience segment actually moves the needle in this market — knowledge no outside agency can replicate on their first campaign.",
  },
  {
    icon: FileCheck,
    title: "One contract, every medium",
    description:
      "Consolidate print, outdoor, broadcast and events under a single accountable partner, and cut the coordination tax of managing five vendors.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 px-4 bg-white" id="why-us">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#6366f1]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[#6366f1] text-sm font-semibold uppercase tracking-wide">
              Why Us
            </span>
          </div>
          <h2 className="text-4xl font-bold text-[#1f2937] mb-4">
            Why the Most Demanding Brands Work With Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="bg-[#f9fafb] p-8 rounded-2xl card-hover border border-gray-100"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#6366f1] to-[#ec4899] rounded-xl">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1f2937] mb-2">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
