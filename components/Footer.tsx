"use client";

import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE, BUSINESS_ADDRESS, SOCIAL_LINKS } from "@/lib/constants";

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
              <h3 className="text-2xl font-bold text-gradient mb-2">Nisarga</h3>
              <p className="text-gray-400 text-sm">
                Professional event management and planning platform for all your special moments.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Services", "Events", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`/${link.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Types */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Event Types</h4>
            <ul className="space-y-2">
              {["Corporate Events", "Weddings", "Conferences", "Social Celebrations"].map((type) => (
                <li key={type}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {type}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#6366f1] mt-1 flex-shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#6366f1] mt-1 flex-shrink-0" />
                <a href={`tel:${CONTACT_PHONE}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {CONTACT_PHONE}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#6366f1] mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  {BUSINESS_ADDRESS.streetAddress}<br />
                  {BUSINESS_ADDRESS.addressLocality}, {BUSINESS_ADDRESS.addressRegion}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex justify-center gap-6">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#6366f1] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#6366f1] transition-colors">
              <Twitter size={20} />
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#6366f1] transition-colors">
              <Instagram size={20} />
            </a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#6366f1] transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Nisarga Enterprises. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
