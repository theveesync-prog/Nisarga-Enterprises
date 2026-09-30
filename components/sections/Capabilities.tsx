import { Newspaper, MapPin, Television, Confetti } from "@phosphor-icons/react/dist/ssr";
import EventIllustration from "@/components/illustrations/EventIllustration";
import Reveal from "@/components/ui/Reveal";

interface Channel {
  id: string;
  title: string;
  tagline: string;
  icon: typeof Newspaper;
  illustration: "print" | "transit" | "broadcast" | "crowd";
  span: string;
}

const channels: Channel[] = [
  {
    id: "print",
    title: "Print & Publication",
    tagline: "Every major newspaper, magazine and journal in the region.",
    icon: Newspaper,
    illustration: "print",
    span: "md:col-span-7",
  },
  {
    id: "outdoor",
    title: "Outdoor & Transit",
    tagline: "Hoardings and transit branding, authorized on Railways & KSRTC.",
    icon: MapPin,
    illustration: "transit",
    span: "md:col-span-5",
  },
  {
    id: "broadcast",
    title: "Broadcast & Screen",
    tagline: "TV, radio, FM jingles, cinema slides and DCP placement.",
    icon: Television,
    illustration: "broadcast",
    span: "md:col-span-5",
  },
  {
    id: "events",
    title: "Events & Activation",
    tagline: "Full-scale production, permits, security, manpower.",
    icon: Confetti,
    illustration: "crowd",
    span: "md:col-span-7",
  },
];

export default function Capabilities() {
  return (
    <section className="py-28 px-4 bg-[#0d0b0a]" id="capabilities">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#f8f5ee] mb-4 tracking-tight">
            One agency. Every <em className="accent">channel.</em>
          </h2>
          <p className="text-[#a89f92] max-w-xl mx-auto text-lg">
            No handoffs, no patchwork of vendors: a single command center across every medium.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {channels.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <Reveal key={channel.id} delay={i * 80} className={channel.span}>
                <div className="glass-card overflow-hidden h-full flex flex-col">
                  <div className="relative h-40">
                    <EventIllustration variant={channel.illustration} className="w-full h-full" />
                    <div className="absolute top-4 left-4 flex items-center justify-center w-11 h-11 rounded-xl bg-[#0d0b0a]/80 backdrop-blur border border-white/10">
                      <Icon size={20} weight="duotone" className="text-[#e3605e]" />
                    </div>
                  </div>
                  <div className="p-6 flex-1">
                    <h3 className="text-lg font-bold text-[#f8f5ee] mb-1.5">{channel.title}</h3>
                    <p className="text-[#a89f92] text-sm leading-relaxed">{channel.tagline}</p>
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
