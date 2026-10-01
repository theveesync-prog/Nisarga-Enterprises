import Link from "next/link";
import Image from "next/image";
import { EnvelopeSimple, WhatsappLogo, MapPin } from "@phosphor-icons/react/dist/ssr";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_WHATSAPP, BUSINESS_ADDRESS, FOUNDING_YEAR } from "@/lib/constants";

const quickLinks = [
  { label: "Legacy", href: "/#legacy" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Contact", href: "/#contact" },
];

const channels = ["Print & Publication", "Outdoor & Transit", "Broadcast & Screen", "Events & Activation"];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#18140f]/8 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/logo/nisarga-lockup.png"
              alt="Nisarga Publicity"
              width={796}
              height={390}
              className="h-14 w-auto mb-3"
            />
            <p className="text-[#6f6759] text-sm max-w-[22ch]">
              Coastal Karnataka&apos;s advertising and event management authority, since{" "}
              {FOUNDING_YEAR}.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm text-[#18140f]">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#6f6759] hover:text-[#a8302f] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Channels */}
          <div>
            <h4 className="font-semibold mb-4 text-sm text-[#18140f]">What We Do</h4>
            <ul className="space-y-2.5">
              {channels.map((channel) => (
                <li key={channel}>
                  <Link href="/#capabilities" className="text-[#6f6759] hover:text-[#a8302f] transition-colors text-sm">
                    {channel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm text-[#18140f]">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <EnvelopeSimple size={17} weight="fill" className="text-[#a8302f] mt-0.5 flex-shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#6f6759] hover:text-[#a8302f] transition-colors text-sm break-all">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <WhatsappLogo size={17} weight="fill" className="text-[#a8302f] mt-0.5 flex-shrink-0" />
                <a
                  href={CONTACT_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6f6759] hover:text-[#a8302f] transition-colors text-sm"
                >
                  {CONTACT_PHONE}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={17} weight="fill" className="text-[#a8302f] mt-0.5 flex-shrink-0" />
                <span className="text-[#6f6759] text-sm">
                  {BUSINESS_ADDRESS.streetAddress}<br />
                  {BUSINESS_ADDRESS.addressLocality}, {BUSINESS_ADDRESS.postalCode}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#18140f]/8 pt-8 text-center text-[#6f6759] text-sm">
          <p>&copy; {currentYear} Nisarga Publicity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
