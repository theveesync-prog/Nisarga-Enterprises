import { FOUNDERS, FOUNDING_YEAR } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";

export default function Legacy() {
  return (
    <section className="py-24 px-4 bg-white" id="legacy">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[220px_1fr] gap-10 items-center">
        <Reveal>
          <div className="bezel-shell">
            <div className="bezel-core p-8 text-center">
              <div className="text-5xl font-bold text-gradient mb-1">{FOUNDING_YEAR}</div>
              <div className="text-gray-500 text-sm">Founded by</div>
              <div className="text-[#1f2937] text-sm font-semibold mt-1">
                {FOUNDERS.join(" & ")}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-4">
            A Legacy Built Over Three <em className="accent">Decades</em>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We&apos;re not a startup chasing trends. We&apos;re the incumbent brands call when a
            campaign can&apos;t afford to fail, three decades building the quiet infrastructure
            behind Mangaluru and Udupi&apos;s most visible moments.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
