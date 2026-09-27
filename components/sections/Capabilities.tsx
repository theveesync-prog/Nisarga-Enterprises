import { Newspaper, MapPinned, Tv, PartyPopper } from "lucide-react";
import EventIllustration from "@/components/illustrations/EventIllustration";
import Reveal from "@/components/ui/Reveal";

interface Channel {
  id: string;
  title: string;
  tagline: string;
  icon: typeof Newspaper;
  illustration: "print" | "transit" | "broadcast" | "crowd";
}

const channels: Channel[] = [
  {
    id: "print",
    title: "Print & Publication",
    tagline: "Every major newspaper, magazine and journal in the region.",
    icon: Newspaper,
    illustration: "print",
  },
  {
    id: "outdoor",
    title: "Outdoor & Transit",
    tagline: "Hoardings, transit branding — authorized on Railways & KSRTC.",
    icon: MapPinned,
    illustration: "transit",
  },
  {
    id: "broadcast",
    title: "Broadcast & Screen",
    tagline: "TV, radio, FM jingles, cinema slides and DCP placement.",
    icon: Tv,
    illustration: "broadcast",
  },
  {
    id: "events",
    title: "Events & Activation",
    tagline: "Full-scale production, permits, security, manpower.",
    icon: PartyPopper,
    illustration: "crowd",
  },
];

export default function Capabilities() {
  return (
    <section className="py-20 px-4 bg-white" id="capabilities">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <div className="section-label justify-center mb-3">Our Capability</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-3">
            One Agency. Every Channel.
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            No handoffs, no patchwork of vendors — a single command center across every medium.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {channels.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <Reveal key={channel.id} delay={i * 80}>
                <div className="glass-card overflow-hidden">
                  <div className="relative h-36">
                    <EventIllustration variant={channel.illustration} className="w-full h-full" />
                    <div className="absolute top-4 left-4 flex items-center justify-center w-11 h-11 rounded-xl bg-white/90 backdrop-blur shadow-sm">
                      <Icon size={20} className="text-[#6366f1]" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#1f2937] mb-1.5">{channel.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{channel.tagline}</p>
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
