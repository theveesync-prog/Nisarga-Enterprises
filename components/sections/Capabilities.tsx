import { Newspaper, MapPinned, Tv, PartyPopper } from "lucide-react";

interface Channel {
  id: string;
  title: string;
  description: string;
  icon: typeof Newspaper;
}

const channels: Channel[] = [
  {
    id: "print",
    title: "Print & Publication",
    description:
      "Placements across every major newspaper, magazine and journal in the region.",
    icon: Newspaper,
  },
  {
    id: "outdoor",
    title: "Outdoor & Transit",
    description:
      "Hoardings, pole ads, mobile display vans, bus panels and street branding — backed by our position as an authorized advertising partner of Southern Railways and KSRTC, giving us reach into railway stations, bus stands and transit surfaces closed to most agencies.",
    icon: MapPinned,
  },
  {
    id: "broadcast",
    title: "Broadcast & Screen",
    description:
      "TV spots, radio and FM jingles, cinema slide and video advertising, and Digital Cinema Packages (DCP) for theatre placement.",
    icon: Tv,
  },
  {
    id: "events",
    title: "Events & Activation",
    description:
      "Full-scale conceptualization, production and on-ground execution, including permits, security clearances and manpower mobilization.",
    icon: PartyPopper,
  },
];

export default function Capabilities() {
  return (
    <section className="py-20 px-4 bg-white" id="capabilities">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#6366f1]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[#6366f1] text-sm font-semibold uppercase tracking-wide">
              Our Capability
            </span>
          </div>
          <h2 className="text-4xl font-bold text-[#1f2937] mb-4">
            One Agency. Every Channel. No Handoffs.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Most agencies specialize — a print buyer, an outdoor vendor, an events shop, run
            separately and stitched together by your marketing team. Nisarga Publicity was built
            differently: as a single command center across every medium that puts a brand in
            front of an audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <div
                key={channel.id}
                className="group relative overflow-hidden rounded-3xl card-hover bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-8"
              >
                <div className="mb-5 inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#6366f1] to-[#ec4899] rounded-2xl">
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1f2937] mb-3">{channel.title}</h3>
                <p className="text-gray-600 leading-relaxed">{channel.description}</p>

                <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 to-[#ec4899]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-3xl" />
              </div>
            );
          })}
        </div>

        <p className="text-center text-gray-600 text-lg mt-12 max-w-2xl mx-auto">
          One point of accountability. One brand voice, consistently executed, across every
          surface your audience sees.
        </p>
      </div>
    </section>
  );
}
