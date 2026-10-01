import {
  MapPin,
  Phone,
  Clock,
  EnvelopeSimple,
  ArrowUpRight,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  CONTACT_WHATSAPP,
  BUSINESS_ADDRESS,
  BUSINESS_HOURS,
  BUSINESS_MAP_URL,
  BUSINESS_MAP_EMBED_URL,
} from "@/lib/constants";

export default function VisitUsCard() {
  return (
    <div className="glass-card overflow-hidden grid md:grid-cols-2">
      {/* Info panel */}
      <div className="p-8 md:p-10 flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl font-bold text-[#18140f] mb-3 tracking-tight">
          Visit us
        </h3>
        <p className="text-[#6f6759] mb-6">
          Questions or want to book? Come find us in {BUSINESS_ADDRESS.addressLocality}
          {" — "}
          {BUSINESS_HOURS.weekday}, {BUSINESS_HOURS.hours}.
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <a
            href={CONTACT_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#18140f] text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity duration-300"
          >
            Book on WhatsApp
            <ArrowUpRight size={15} weight="bold" />
          </a>
          <a
            href={`tel:${CONTACT_PHONE_TEL}`}
            className="inline-flex items-center gap-1.5 text-[#a8302f] font-semibold text-sm hover:text-[#7a1f1f] transition-colors"
          >
            Call us
            <ArrowRight size={15} weight="bold" />
          </a>
        </div>

        <div className="border-t border-[#18140f]/8 pt-6 space-y-3">
          <div className="flex items-start gap-3">
            <MapPin size={17} weight="fill" className="text-[#b8863a] mt-0.5 flex-shrink-0" />
            <span className="text-[#4a4237] text-sm leading-relaxed">
              {BUSINESS_ADDRESS.streetAddress},
              <br />
              {BUSINESS_ADDRESS.addressLocality}, {BUSINESS_ADDRESS.addressRegion}{" "}
              {BUSINESS_ADDRESS.postalCode}
            </span>
          </div>

          <div className="flex items-start gap-3">
            <Phone size={17} weight="fill" className="text-[#b8863a] mt-0.5 flex-shrink-0" />
            <a href={`tel:${CONTACT_PHONE_TEL}`} className="text-[#4a4237] text-sm hover:text-[#a8302f] transition-colors">
              {CONTACT_PHONE}
            </a>
          </div>

          <div className="flex items-start gap-3">
            <EnvelopeSimple size={17} weight="fill" className="text-[#b8863a] mt-0.5 flex-shrink-0" />
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#4a4237] text-sm hover:text-[#a8302f] transition-colors break-all">
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="flex items-start gap-3">
            <Clock size={17} weight="fill" className="text-[#b8863a] mt-0.5 flex-shrink-0" />
            <span className="text-[#4a4237] text-sm">
              {BUSINESS_HOURS.weekday}: {BUSINESS_HOURS.hours}
              <br />
              {BUSINESS_HOURS.closedDay}: Closed
            </span>
          </div>
        </div>
      </div>

      {/* Map panel */}
      <div className="relative min-h-[320px] md:min-h-full">
        <iframe
          src={BUSINESS_MAP_EMBED_URL}
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Nisarga Publicity location"
        />
        <a
          href={BUSINESS_MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 bg-white text-[#18140f] text-xs font-semibold px-4 py-2 rounded-full shadow-[0_8px_24px_-8px_rgba(24,20,15,0.3)] hover:bg-[#f6f6f4] transition-colors"
        >
          Open in Maps
          <ArrowUpRight size={13} weight="bold" />
        </a>
      </div>
    </div>
  );
}
