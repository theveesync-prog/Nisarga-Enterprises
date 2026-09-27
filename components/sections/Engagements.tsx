import { Building2, Landmark, GraduationCap, ShoppingBag } from "lucide-react";
import EventIllustration from "@/components/illustrations/EventIllustration";
import Reveal from "@/components/ui/Reveal";

const categories: {
  icon: typeof Building2;
  title: string;
  illustration: "corporate" | "government" | "education" | "retail";
}[] = [
  { icon: Building2, title: "Corporate Events", illustration: "corporate" },
  { icon: Landmark, title: "Government & Public", illustration: "government" },
  { icon: GraduationCap, title: "Educational Events", illustration: "education" },
  { icon: ShoppingBag, title: "Private & Retail", illustration: "retail" },
];

export default function Engagements() {
  return (
    <section className="py-20 px-4 bg-[#f9fafb]" id="engagements">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <div className="section-label justify-center mb-3">Where We Work</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937] max-w-2xl mx-auto">
            Trusted Across Corporate, Government &amp; Private <em className="accent">Engagements</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((category, i) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.title} delay={i * 70}>
                <div className="glass-card overflow-hidden text-center">
                  <div className="relative h-24">
                    <EventIllustration variant={category.illustration} className="w-full h-full" />
                  </div>
                  <div className="p-5">
                    <div className="mb-3 mx-auto inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#b52b2c] to-[#c8983f] rounded-lg">
                      <Icon size={18} className="text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-[#1f2937]">{category.title}</h3>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
