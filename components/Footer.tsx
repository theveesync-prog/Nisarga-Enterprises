import Link from "next/link";
import Image from "next/image";
import {
  WhatsappLogo,
  InstagramLogo,
  MapPin,
  ArrowUp,
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
  BUSINESS_MAP_DIRECTIONS_URL,
  SOCIAL_LINKS,
  FOUNDING_YEAR,
} from "@/lib/constants";

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "Legacy", href: "/#legacy" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  { label: "WhatsApp", href: CONTACT_WHATSAPP, icon: WhatsappLogo },
  { label: "Instagram", href: SOCIAL_LINKS.instagram, icon: InstagramLogo },
  { label: "Get directions", href: BUSINESS_MAP_URL, icon: MapPin },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 pb-24 md:pb-4">
      <div
        className="max-w-6xl mx-auto rounded-[2rem] p-8 md:p-12"
        style={{ background: "#18140f" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="inline-block bg-white rounded-xl p-2 mb-4">
              <Image
                src="/logo/nisarga-lockup.png"
                alt="Nisarga Publicity"
                width={796}
                height={390}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/60 text-sm max-w-[26ch] mb-4">
              Coastal Karnataka&apos;s advertising and event management authority, since{" "}
              {FOUNDING_YEAR}.
            </p>
            <span className="inline-block text-xs font-medium text-white/70 bg-white/10 rounded-full px-3 py-1.5">
              Est. {FOUNDING_YEAR} · Mangaluru
            </span>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.14em] uppercase text-white/50 mb-4">
              Pages
            </h4>
            <ul className="space-y-2.5">
              {pageLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/75 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.14em] uppercase text-white/50 mb-4">
              Address
            </h4>
            <p className="text-white/75 text-sm leading-relaxed mb-3">
              {BUSINESS_ADDRESS.streetAddress},
              <br />
              {BUSINESS_ADDRESS.addressLocality}, {BUSINESS_ADDRESS.addressRegion}{" "}
              {BUSINESS_ADDRESS.postalCode}
            </p>
            <a href={`tel:${CONTACT_PHONE_TEL}`} className="block text-white/75 hover:text-white transition-colors text-sm mb-1">
              {CONTACT_PHONE}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="block text-white/75 hover:text-white transition-colors text-sm break-all mb-3">
              {CONTACT_EMAIL}
            </a>
            <a
              href={BUSINESS_MAP_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#e8cf9a] hover:text-[#f0dba8] transition-colors text-sm font-medium"
            >
              Get directions
              <ArrowRight size={14} weight="bold" />
            </a>
          </div>

          {/* Open Times */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.14em] uppercase text-white/50 mb-4">
              Open Times
            </h4>
            <p className="text-white/75 text-sm mb-1">{BUSINESS_HOURS.weekday}</p>
            <p className="text-white font-semibold text-sm mb-1">{BUSINESS_HOURS.hours}</p>
            <p className="text-white/50 text-sm mb-5">{BUSINESS_HOURS.closedDay}: Closed</p>

            <div className="flex items-center gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    <Icon size={16} weight="fill" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} Nisarga Publicity. All rights reserved.
          </p>
          <a
            href="#"
            aria-label="Back to top"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors flex-shrink-0"
          >
            <ArrowUp size={16} weight="bold" />
          </a>
        </div>
      </div>
    </footer>
  );
}
