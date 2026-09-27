"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE, BUSINESS_ADDRESS } from "@/lib/constants";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 px-4 bg-white" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#6366f1]/10 px-4 py-2 rounded-full mb-4">
              <span className="text-[#6366f1] text-sm font-semibold uppercase tracking-wide">
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl font-bold text-[#1f2937] mb-6">
              Let&apos;s Plan Your Next Event
            </h2>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              Have questions? Our team is ready to help you create the perfect event. Reach out today and let&apos;s discuss your vision.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#6366f1]/10 rounded-xl">
                    <Mail size={24} className="text-[#6366f1]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1f2937] mb-1">Email</h3>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-gray-600 hover:text-[#6366f1] transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#6366f1]/10 rounded-xl">
                    <Phone size={24} className="text-[#6366f1]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1f2937] mb-1">Phone</h3>
                  <a
                    href={`tel:${CONTACT_PHONE}`}
                    className="text-gray-600 hover:text-[#6366f1] transition-colors"
                  >
                    {CONTACT_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#6366f1]/10 rounded-xl">
                    <MapPin size={24} className="text-[#6366f1]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1f2937] mb-1">Address</h3>
                  <p className="text-gray-600">
                    {BUSINESS_ADDRESS.streetAddress}<br />
                    {BUSINESS_ADDRESS.addressLocality}, {BUSINESS_ADDRESS.addressRegion} {BUSINESS_ADDRESS.postalCode}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#f9fafb] rounded-3xl p-8 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#1f2937] mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20 focus:border-[#6366f1]"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#1f2937] mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20 focus:border-[#6366f1]"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#1f2937] mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91-XXXXXXXXXX"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20 focus:border-[#6366f1]"
                  required
                />
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-semibold text-[#1f2937] mb-2">
                  Event Type
                </label>
                <select
                  id="eventType"
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20 focus:border-[#6366f1]"
                  required
                >
                  <option value="">Select event type...</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="wedding">Wedding</option>
                  <option value="conference">Conference</option>
                  <option value="social">Social Celebration</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#1f2937] mb-2">
                  Tell us about your event
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your event vision..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20 focus:border-[#6366f1] resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#6366f1] to-[#ec4899] text-white font-semibold py-3.5 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
