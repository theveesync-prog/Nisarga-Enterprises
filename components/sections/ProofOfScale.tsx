import { ShieldCheck, Users, Wind } from "lucide-react";
import EventIllustration from "@/components/illustrations/EventIllustration";
import Reveal from "@/components/ui/Reveal";

export default function ProofOfScale() {
  return (
    <section className="py-20 px-4 bg-[#f9fafb]" id="proof-of-scale">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-14">
          <div className="section-label justify-center mb-3">Proof of Scale</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937]">
            Built for the Scale Global Brands Expect
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Reveal>
            <div className="glass-card overflow-hidden h-full flex flex-col">
              <div className="relative h-44">
                <EventIllustration variant="crowd" className="w-full h-full" />
                <div className="glass-chip absolute bottom-4 left-4 px-4 py-2.5 flex items-center gap-2">
                  <Users size={16} className="text-[#6366f1]" />
                  <span className="text-lg font-bold text-[#1f2937]">100,000+</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#1f2937] mb-1.5">IAF 50th Anniversary Air Show</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Organized with the DK District Administration for the Suryakiran Aerobatics
                  Team — one of Mangaluru&apos;s largest-ever public events.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="glass-card overflow-hidden h-full flex flex-col">
              <div className="relative h-44">
                <EventIllustration variant="balloon" className="w-full h-full" />
                <div className="glass-chip absolute bottom-4 left-4 px-4 py-2.5 flex items-center gap-2">
                  <Wind size={16} className="text-[#ec4899]" />
                  <span className="text-sm font-bold text-[#1f2937]">Regional First</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#1f2937] mb-1.5">Hot Air Balloon Show</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Coastal Karnataka&apos;s first, staged during Karavali Utsav — no local
                  precedent, delivered without one.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="flex items-start gap-3 max-w-2xl mx-auto text-center justify-center">
            <ShieldCheck size={20} className="text-[#6366f1] flex-shrink-0 mt-0.5" />
            <p className="text-gray-600 leading-relaxed">
              Government-level logistics, security and permits — handled as routine, not a
              special request.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
