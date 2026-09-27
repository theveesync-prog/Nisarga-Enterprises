import { Mail, Phone, MapPin, FileText } from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_ALT,
  CONTACT_PHONE_TEL,
  BUSINESS_ADDRESS,
} from "@/lib/constants";

const CAPABILITY_DECK_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Request for Capability Deck — Nisarga Publicity"
)}`;

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-white" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#1f2937] mb-6">
          Bring Your Next Launch to the Agency That Doesn&apos;t Miss
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          If your brand is entering Coastal Karnataka — or has simply outgrown agencies that can
          only do one thing well — talk to us. In one call, we&apos;ll walk you through what a
          single, accountable, three-decade-old agency can do that a patchwork of vendors cannot.
        </p>

        <a
          href={CAPABILITY_DECK_MAILTO}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white btn-primary mb-12"
        >
          <FileText size={18} />
          Request a Capability Deck
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left max-w-2xl mx-auto pt-8 border-t border-gray-200">
          <div className="flex items-start gap-3">
            <Phone size={20} className="text-[#6366f1] mt-1 flex-shrink-0" />
            <div>
              <div className="text-sm font-semibold text-[#1f2937] mb-1">Call</div>
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className="block text-gray-600 hover:text-[#6366f1] transition-colors text-sm"
              >
                {CONTACT_PHONE}
              </a>
              <a
                href={`tel:${CONTACT_PHONE_ALT.replace(/\s/g, "")}`}
                className="block text-gray-600 hover:text-[#6366f1] transition-colors text-sm"
              >
                {CONTACT_PHONE_ALT}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail size={20} className="text-[#6366f1] mt-1 flex-shrink-0" />
            <div>
              <div className="text-sm font-semibold text-[#1f2937] mb-1">Email</div>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-gray-600 hover:text-[#6366f1] transition-colors text-sm break-all"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin size={20} className="text-[#6366f1] mt-1 flex-shrink-0" />
            <div>
              <div className="text-sm font-semibold text-[#1f2937] mb-1">Visit</div>
              <p className="text-gray-600 text-sm">
                {BUSINESS_ADDRESS.streetAddress}, {BUSINESS_ADDRESS.addressLocality} –{" "}
                {BUSINESS_ADDRESS.postalCode}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
