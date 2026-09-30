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
    <section className="py-28 px-4 bg-white" id="why-us">
      <div className="max-w-4xl mx-auto">
        <Reveal className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#18140f] max-w-lg tracking-tight">
            Why the most demanding brands work with <em className="accent">us.</em>
          </h2>
        </Reveal>

        <div className="divide-y divide-[#18140f]/8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={i * 70}>
                <div className="flex items-center gap-6 py-8 group">
                  <span className="text-sm font-mono text-[#18140f]/20 w-8 flex-shrink-0">
                    0{i + 1}
                  </span>
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#c8403f] to-[#8f2020] flex-shrink-0 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                    <Icon size={22} weight="fill" className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#18140f] mb-0.5">{reason.title}</h3>
                    <p className="text-[#6f6759] text-sm">{reason.description}</p>
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
