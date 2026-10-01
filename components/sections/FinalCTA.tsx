import { WhatsappLogo, EnvelopeSimple, MapPin, FileText, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_WHATSAPP,
  BUSINESS_ADDRESS,
} from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";

const CAPABILITY_DECK_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Request for Capability Deck, Nisarga Publicity"
)}`;

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white" id="contact">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div
            className="rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #c8403f 0%, #8f2020 65%, #2a1010 100%)" }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d6b46c]/20 rounded-full blur-3xl float-slow" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl float-slower" />

            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 tracking-tight">
                Bring your next launch to the agency that doesn&apos;t{" "}
                <em className="accent-gold">miss.</em>
              </h2>
              <p className="text-white/85 text-lg mb-9 max-w-xl mx-auto">
                Talk to us and see what a single, accountable, three-decade-old agency can do.
              </p>

              <Magnetic>
                <a
                  href={CAPABILITY_DECK_MAILTO}
                  className="group btn-island bg-white text-[#8f2020] font-semibold"
                >
                  <FileText size={18} weight="bold" />
                  Request a Capability Deck
                  <span className="btn-island-icon bg-[#8f2020]/10">
                    <ArrowUpRight size={16} weight="bold" />
                  </span>
                </a>
              </Magnetic>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="glass-card p-5 flex items-start gap-3">
              <WhatsappLogo size={18} weight="fill" className="text-[#a8302f] mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs font-semibold text-[#8a8072] mb-1">WhatsApp</div>
                <a
                  href={CONTACT_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#18140f] hover:text-[#a8302f] text-sm font-medium"
                >
                  {CONTACT_PHONE}
                </a>
              </div>
            </div>

            <div className="glass-card p-5 flex items-start gap-3">
              <EnvelopeSimple size={18} weight="fill" className="text-[#a8302f] mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs font-semibold text-[#8a8072] mb-1">Email</div>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#18140f] hover:text-[#a8302f] text-sm font-medium break-all">
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <div className="glass-card p-5 flex items-start gap-3">
              <MapPin size={18} weight="fill" className="text-[#a8302f] mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs font-semibold text-[#8a8072] mb-1">Visit</div>
                <p className="text-[#18140f] text-sm font-medium">
                  {BUSINESS_ADDRESS.addressLocality}, {BUSINESS_ADDRESS.postalCode}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
