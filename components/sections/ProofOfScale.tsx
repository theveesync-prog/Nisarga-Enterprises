import { ShieldCheck, Users, Wind } from "lucide-react";

export default function ProofOfScale() {
  return (
    <section className="py-20 px-4 bg-[#f9fafb]" id="proof-of-scale">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#6366f1]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[#6366f1] text-sm font-semibold uppercase tracking-wide">
              Proof of Scale
            </span>
          </div>
          <h2 className="text-4xl font-bold text-[#1f2937] mb-4">
            Built for the Scale Global Brands Expect
          </h2>
        </div>

        <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#6366f1] to-[#ec4899] rounded-2xl">
              <Users size={26} className="text-white" />
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1f2937]">100,000+</div>
              <div className="text-gray-500 text-sm">crowd at a single activation</div>
            </div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            When the Indian Air Force marked its 50th anniversary with the elite Suryakiran
            Aerobatics Team, the DK District Administration entrusted Nisarga Publicity to
            organize the show — one of the largest outdoor public events in Mangaluru&apos;s
            history, drawing a crowd of over 100,000.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#6366f1] to-[#ec4899] rounded-2xl">
              <Wind size={26} className="text-white" />
            </div>
            <div className="text-2xl font-bold text-[#1f2937]">A Regional First</div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            We also brought Coastal Karnataka its first-ever Hot Air Balloon Show, staged during
            Karavali Utsav, the region&apos;s flagship annual festival — an activation with no
            local precedent, delivered without one.
          </p>
        </div>

        <div className="flex items-start gap-4 max-w-3xl mx-auto">
          <ShieldCheck size={24} className="text-[#6366f1] flex-shrink-0 mt-1" />
          <p className="text-gray-600 text-lg leading-relaxed">
            This is the operational grade a premium brand needs from a regional partner:
            government-level logistics, security and permit management, handled as a matter of
            course, not as a special request.
          </p>
        </div>
      </div>
    </section>
  );
}
