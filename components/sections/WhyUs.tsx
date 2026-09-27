import { Key, ShieldCheck, MapPin, FileCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const reasons = [
  {
    icon: Key,
    title: "Exclusive access",
    description: "Authorized on Railways & KSRTC — surfaces competitors can't touch.",
  },
  {
    icon: ShieldCheck,
    title: "Zero-compromise execution",
    description: "Legal, security, manpower — we absorb the risk, you show up and shine.",
  },
  {
    icon: MapPin,
    title: "Three decades of local authority",
    description: "We know the venue, the official, the permit, the audience.",
  },
  {
    icon: FileCheck,
    title: "One contract, every medium",
    description: "Print, outdoor, broadcast, events — one accountable partner.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 px-4 bg-white" id="why-us">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <div className="section-label justify-center mb-3">Why Us</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937]">
            Why the Most Demanding Brands Work With <em className="accent">Us</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={i * 80}>
                <div className="glass-card p-7 h-full">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#b52b2c] to-[#c8983f] rounded-xl">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1f2937] mb-1.5">{reason.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
