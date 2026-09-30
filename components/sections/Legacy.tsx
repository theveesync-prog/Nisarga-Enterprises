import { FOUNDERS, FOUNDING_YEAR } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";

export default function Legacy() {
  return (
    <section className="py-28 px-4 bg-[#f6f6f4]" id="legacy">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[220px_1fr] gap-10 items-center">
        <Reveal>
          <div className="glass-card p-8 text-center">
            <div className="text-5xl font-bold bg-gradient-to-br from-[#c8403f] to-[#a8302f] bg-clip-text text-transparent mb-1">
              {FOUNDING_YEAR}
            </div>
            <div className="text-[#8a8072] text-sm">Founded by</div>
            <div className="text-[#18140f] text-sm font-semibold mt-1">
              {FOUNDERS.join(" & ")}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="text-3xl md:text-5xl font-bold text-[#18140f] mb-5 tracking-tight">
            A legacy built over three <em className="accent">decades.</em>
          </h2>
          <p className="text-[#6f6759] text-lg leading-relaxed max-w-xl">
            We&apos;re not a startup chasing trends. We&apos;re the incumbent brands call when a
            campaign can&apos;t afford to fail, three decades building the quiet infrastructure
            behind Mangaluru and Udupi&apos;s most visible moments.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
