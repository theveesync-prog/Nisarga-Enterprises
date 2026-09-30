import { Buildings, Bank, GraduationCap, Storefront } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/ui/Reveal";

const categories: {
  icon: typeof Buildings;
  title: string;
}[] = [
  { icon: Buildings, title: "Corporate Events" },
  { icon: Bank, title: "Government & Public" },
  { icon: GraduationCap, title: "Educational Events" },
  { icon: Storefront, title: "Private & Retail" },
];

export default function Engagements() {
  return (
    <section className="py-28 px-4 bg-[#120f0c]" id="engagements">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#f8f5ee] max-w-2xl mx-auto tracking-tight">
            Trusted across corporate, government &amp; private{" "}
            <em className="accent">engagements.</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/8 border border-white/8 rounded-2xl overflow-hidden">
          {categories.map((category, i) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.title} delay={i * 70}>
                <div className="flex flex-col items-center justify-center gap-3 py-10 px-4 h-full bg-white/[0.015] hover:bg-[#c8403f]/[0.06] transition-colors duration-500">
                  <Icon size={26} weight="light" className="text-[#e3605e]" />
                  <h3 className="text-sm font-semibold text-[#f2ede4] text-center">
                    {category.title}
                  </h3>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
