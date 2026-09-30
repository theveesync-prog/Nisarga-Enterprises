import { Key, ShieldCheck, MapPinLine, FileText } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/ui/Reveal";

const reasons = [
  {
    icon: Key,
    title: "Exclusive access",
    description: "Authorized on Railways & KSRTC, surfaces competitors can't touch.",
  },
  {
    icon: ShieldCheck,
    title: "Zero-compromise execution",
    description: "Legal, security, manpower: we absorb the risk, you show up and shine.",
  },
  {
    icon: MapPinLine,
    title: "Three decades of local authority",
    description: "We know the venue, the official, the permit, the audience.",
  },
  {
    icon: FileText,
    title: "One contract, every medium",
    description: "Print, outdoor, broadcast, events, one accountable partner.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 px-4 bg-white" id="why-us">
      <div className="max-w-4xl mx-auto">
        <Reveal className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] max-w-lg">
            Why the Most Demanding Brands Work With <em className="accent">Us</em>
          </h2>
        </Reveal>

        <div className="divide-y divide-gray-100">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={i * 70}>
                <div className="flex items-center gap-6 py-7 group">
                  <span className="text-sm font-mono text-gray-300 w-8 flex-shrink-0">
                    0{i + 1}
                  </span>
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#b52b2c] to-[#c8983f] flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
                    <Icon size={22} weight="fill" className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1f2937] mb-0.5">{reason.title}</h3>
                    <p className="text-gray-600 text-sm">{reason.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
