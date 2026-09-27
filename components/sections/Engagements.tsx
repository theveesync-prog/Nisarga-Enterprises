import { Building2, Landmark, GraduationCap, ShoppingBag } from "lucide-react";

const categories = [
  {
    icon: Building2,
    title: "Corporate Events",
    description: "Road shows, product launches, market activations, in-shop campaigns.",
  },
  {
    icon: Landmark,
    title: "Government & Public Events",
    description: "Large-scale civic and administrative programs.",
  },
  {
    icon: GraduationCap,
    title: "Educational Ecosystem Events",
    description: "Intra- and inter-collegiate festivals and outreach.",
  },
  {
    icon: ShoppingBag,
    title: "Private & Retail Activations",
    description: "Mall promotions, exhibitions, dealer meets.",
  },
];

export default function Engagements() {
  return (
    <section className="py-20 px-4 bg-[#f9fafb]" id="engagements">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#6366f1]/10 px-4 py-2 rounded-full mb-4">
            <span className="text-[#6366f1] text-sm font-semibold uppercase tracking-wide">
              Where We Work
            </span>
          </div>
          <h2 className="text-4xl font-bold text-[#1f2937] mb-4">
            Trusted Across Corporate, Government, Institutional and Private Engagements
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            From corporate product launches and dealer meets to government-scale public programs,
            from inter-collegiate festivals to private and retail activations — Nisarga Publicity
            has been the execution partner of record across Coastal Karnataka&apos;s most
            demanding event categories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-white p-6 rounded-2xl card-hover shadow-sm border border-gray-100 text-center"
              >
                <div className="mb-4 mx-auto inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#6366f1] to-[#ec4899] rounded-xl">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-base font-semibold text-[#1f2937] mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
