import { FOUNDERS, FOUNDING_YEAR } from "@/lib/constants";

export default function Legacy() {
  return (
    <section className="py-20 px-4 bg-white" id="legacy">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#6366f1]/10 px-4 py-2 rounded-full mb-4">
          <span className="text-[#6366f1] text-sm font-semibold uppercase tracking-wide">
            Our Story
          </span>
        </div>
        <h2 className="text-4xl font-bold text-[#1f2937] mb-8">
          A Legacy Built Since {FOUNDING_YEAR}
        </h2>

        <div className="space-y-6 text-left md:text-center">
          <p className="text-gray-600 text-lg leading-relaxed">
            Long before &ldquo;experiential marketing&rdquo; was a category, Nisarga Publicity was
            already building it — one newspaper placement, one hoarding, one flawlessly executed
            public event at a time. Founded in {FOUNDING_YEAR} under Managing Partners{" "}
            {FOUNDERS.join(" and ")}, we&apos;ve spent three decades becoming the quiet
            infrastructure behind Mangaluru and Udupi&apos;s most visible brand moments.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are not a startup agency chasing trends. We are the incumbent — the firm regional
            and national brands call when a campaign cannot afford to fail, when a launch has to
            land in front of the right audience on the first attempt, and when reputation is the
            real budget line.
          </p>
        </div>
      </div>
    </section>
  );
}
