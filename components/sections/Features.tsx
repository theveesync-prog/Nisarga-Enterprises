"use client";

import { CheckCircle2, Users, Calendar, Zap, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Smart Planning",
    description: "Organize every aspect of your event with our intuitive planning tools.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work seamlessly with your team, vendors, and clients in one platform.",
  },
  {
    icon: Zap,
    title: "Instant Bookings",
    description: "Real-time availability, quick confirmations, and instant notifications.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Track your event performance with detailed analytics and reports.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Safe and secure payment processing with multiple payment options.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    description: "Vetted vendors and quality checks ensure your event exceeds expectations.",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#6366f1]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[#6366f1] text-sm font-semibold uppercase tracking-wide">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl font-bold text-[#1f2937] mb-4">
            Everything You Need for Perfect Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our platform provides all the tools and support to create and manage memorable events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-2xl card-hover shadow-sm border border-gray-100"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#6366f1] to-[#ec4899] rounded-xl">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1f2937] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
