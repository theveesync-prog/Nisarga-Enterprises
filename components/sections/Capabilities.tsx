import Reveal from "@/components/ui/Reveal";
import ServiceShowcase from "@/components/ui/ServiceShowcase";

const channels = [
  {
    id: "print",
    title: "Print & Publication",
    tagline: "Every major newspaper, magazine and journal in the region.",
    image: "/services/print.jpg",
  },
  {
    id: "outdoor",
    title: "Outdoor & Transit",
    tagline: "Hoardings and transit branding, authorized on Railways & KSRTC.",
    image: "/services/transit.webp",
  },
  {
    id: "broadcast",
    title: "Broadcast & Screen",
    tagline: "TV, radio, FM jingles, cinema slides and DCP placement.",
    image: "/services/broadcast.jpg",
  },
  {
    id: "events",
    title: "Events & Activation",
    tagline: "Full-scale production, permits, security, manpower.",
    image: "/services/events.jpg",
  },
];

export default function Capabilities() {
  return (
    <section className="py-28 px-4 bg-white" id="capabilities">
      <div className="max-w-5xl mx-auto">
        <Reveal className="mb-14 max-w-lg">
          <h2 className="text-4xl md:text-6xl font-bold text-[#18140f] tracking-tight">
            One agency. Every <em className="accent">channel.</em>
          </h2>
          <p className="text-[#6f6759] text-lg mt-5">
            No handoffs, no patchwork of vendors: a single command center across every medium.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ServiceShowcase services={channels} />
        </Reveal>
      </div>
    </section>
  );
}
