import Link from "next/link";
import Image from "next/image";
import { EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react/dist/ssr";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL, BUSINESS_ADDRESS, FOUNDING_YEAR } from "@/lib/constants";

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
    <footer className="bg-[#1f2937] text-white py-16 px-4 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <Image
                src="/logo/nisarga-lockup.png"
                alt="Nisarga Publicity"
                width={796}
                height={390}
                className="h-16 w-auto mb-3"
              />
              <p className="text-gray-400 text-sm">
                Coastal Karnataka&apos;s advertising and event management authority, since{" "}
                {FOUNDING_YEAR}.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Channels */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">What We Do</h4>
            <ul className="space-y-2">
              {channels.map((channel) => (
                <li key={channel}>
                  <Link href="/#capabilities" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {channel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <EnvelopeSimple size={18} weight="fill" className="text-[#b52b2c] mt-1 flex-shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-400 hover:text-white transition-colors text-sm break-all">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} weight="fill" className="text-[#b52b2c] mt-1 flex-shrink-0" />
                <a href={`tel:${CONTACT_PHONE_TEL}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {CONTACT_PHONE}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} weight="fill" className="text-[#b52b2c] mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  {BUSINESS_ADDRESS.streetAddress}<br />
                  {BUSINESS_ADDRESS.addressLocality}, {BUSINESS_ADDRESS.postalCode}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Nisarga Publicity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
