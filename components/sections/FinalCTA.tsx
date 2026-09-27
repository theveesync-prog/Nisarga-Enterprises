import { Mail, Phone, MapPin, FileText } from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_ALT,
  CONTACT_PHONE_TEL,
  BUSINESS_ADDRESS,
} from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";

const CAPABILITY_DECK_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Request for Capability Deck — Nisarga Publicity"
)}`;

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-white" id="contact">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div
            className="rounded-[2rem] p-10 md:p-14 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #b52b2c 0%, #c8983f 100%)" }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl float-slow" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl float-slower" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Bring Your Next Launch to the Agency That Doesn&apos;t{" "}
                <em className="accent-gold">Miss</em>
              </h2>
              <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">
                Talk to us — see what a single, accountable, three-decade-old agency can do.
              </p>

              <a
                href={CAPABILITY_DECK_MAILTO}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-[#b52b2c] bg-white hover:shadow-lg transition-all"
              >
                <FileText size={18} />
                Request a Capability Deck
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="glass-card p-5 flex items-start gap-3">
              <Phone size={18} className="text-[#b52b2c] mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs font-semibold text-gray-500 mb-1">Call</div>
                <a href={`tel:${CONTACT_PHONE_TEL}`} className="block text-[#1f2937] hover:text-[#b52b2c] text-sm font-medium">
                  {CONTACT_PHONE}
                </a>
                <a href={`tel:${CONTACT_PHONE_ALT.replace(/\s/g, "")}`} className="block text-[#1f2937] hover:text-[#b52b2c] text-sm font-medium">
                  {CONTACT_PHONE_ALT}
                </a>
              </div>
            </div>

            <div className="glass-card p-5 flex items-start gap-3">
              <Mail size={18} className="text-[#b52b2c] mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs font-semibold text-gray-500 mb-1">Email</div>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#1f2937] hover:text-[#b52b2c] text-sm font-medium break-all">
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <div className="glass-card p-5 flex items-start gap-3">
              <MapPin size={18} className="text-[#b52b2c] mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs font-semibold text-gray-500 mb-1">Visit</div>
                <p className="text-[#1f2937] text-sm font-medium">
                  {BUSINESS_ADDRESS.addressLocality} – {BUSINESS_ADDRESS.postalCode}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
