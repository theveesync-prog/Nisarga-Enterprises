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
    <section className="py-16 md:py-24 px-4 bg-white" id="engagements">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#18140f] max-w-2xl mx-auto tracking-tight">
            Trusted across corporate, government &amp; private{" "}
            <em className="accent">engagements.</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#18140f]/8 border border-[#18140f]/8 rounded-2xl overflow-hidden">
          {categories.map((category, i) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.title} delay={i * 70}>
                <div className="flex flex-col items-center justify-center gap-3 py-10 px-4 h-full bg-white hover:bg-[#a8302f]/[0.05] transition-colors duration-500">
                  <Icon size={26} weight="light" className="text-[#a8302f]" />
                  <h3 className="text-sm font-semibold text-[#18140f] text-center">
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
