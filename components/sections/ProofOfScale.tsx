import { ShieldCheck, Users, Wind } from "@phosphor-icons/react/dist/ssr";
import EventIllustration from "@/components/illustrations/EventIllustration";
import Reveal from "@/components/ui/Reveal";
import MilestoneStack from "@/components/ui/MilestoneStack";

export default function ProofOfScale() {
  return (
    <section className="py-28 px-4 bg-[#f6f6f4]" id="proof-of-scale">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-16">
          <div className="section-label justify-center mb-3">Proof of Scale</div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#18140f] tracking-tight">
            Built for the scale global brands <em className="accent">expect.</em>
          </h2>
        </Reveal>

        <MilestoneStack
          cards={[
            <div key="airshow" className="glass-card overflow-hidden grid md:grid-cols-2">
              <div className="relative h-56 md:h-full">
                <EventIllustration variant="crowd" className="w-full h-full" />
                <div className="glass-chip absolute bottom-4 left-4 px-4 py-2.5 flex items-center gap-2">
                  <Users size={16} weight="fill" className="text-[#a8302f]" />
                  <span className="text-lg font-bold text-[#18140f]">100,000+</span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-[#18140f] mb-2">
                  IAF 50th Anniversary Air Show
                </h3>
                <p className="text-[#6f6759] leading-relaxed">
                  Organized with the DK District Administration for the Suryakiran Aerobatics
                  Team, one of Mangaluru&apos;s largest-ever public events.
                </p>
              </div>
            </div>,
            <div key="balloon" className="glass-card overflow-hidden grid md:grid-cols-2">
              <div className="p-8 flex flex-col justify-center md:order-1 order-2">
                <h3 className="text-xl font-bold text-[#18140f] mb-2">Hot Air Balloon Show</h3>
                <p className="text-[#6f6759] leading-relaxed">
                  Coastal Karnataka&apos;s first, staged during Karavali Utsav. No local
                  precedent, delivered without one.
                </p>
              </div>
              <div className="relative h-56 md:h-full md:order-2 order-1">
                <EventIllustration variant="balloon" className="w-full h-full" />
                <div className="glass-chip absolute bottom-4 right-4 px-4 py-2.5 flex items-center gap-2">
                  <Wind size={16} weight="fill" className="text-[#b8863a]" />
                  <span className="text-sm font-bold text-[#18140f]">Regional First</span>
                </div>
              </div>
            </div>,
          ]}
        />

        <Reveal delay={200}>
          <div className="flex items-start gap-3 max-w-2xl mx-auto text-center justify-center mt-10">
            <ShieldCheck size={20} weight="fill" className="text-[#a8302f] flex-shrink-0 mt-0.5" />
            <p className="text-[#6f6759] leading-relaxed">
              Government-level logistics, security and permits, handled as routine, not a
              special request.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
