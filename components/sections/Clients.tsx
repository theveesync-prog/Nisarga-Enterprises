import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const rowOne = [
  { name: "KPN Fresh", src: "/clients/kpn.png", square: true },
  { name: "Tata Motors", src: "/clients/tata.png" },
  { name: "Reliance Smart", src: "/clients/reliance.png" },
  { name: "SPAR", src: "/clients/spar.png" },
  { name: "Pilikula Biological Park", src: "/clients/pilikula.png" },
  { name: "Government of Karnataka, Department of Tourism", src: "/clients/karnataka-tourism.png" },
  { name: "ICICI Bank", src: "/clients/icici.png" },
  { name: "JCB", src: "/clients/jcb.png" },
  { name: "Hyundai", src: "/clients/hyundai.png" },
  { name: "Toyota", src: "/clients/toyota.png" },
];

const rowTwo = [
  { name: "ONGC MRPL", src: "/clients/ongc-mrpl.png", square: true },
  { name: "Audi", src: "/clients/audi.png" },
  { name: "Abharan Jewellers", src: "/clients/abharan.png" },
  { name: "Kalyan Jewellers", src: "/clients/kalyan.png", square: true },
  { name: "Castrol", src: "/clients/castrol.png" },
  { name: "Kia", src: "/clients/kia.png" },
  { name: "Croma", src: "/clients/croma.png" },
  { name: "MG", src: "/clients/mg.png", square: true },
  { name: "KFC", src: "/clients/kfc.png", square: true },
];

function MarqueeRow({
  clients,
  reverse,
}: {
  clients: typeof rowOne;
  reverse?: boolean;
}) {
  const loop = [...clients, ...clients];
  return (
    <div className="marquee-viewport">
      <div className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}>
        {loop.map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            className={`client-logo flex items-center justify-center flex-shrink-0 ${
              client.square ? "w-32 h-32" : "w-48 h-28"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={client.src}
                alt={client.name}
                fill
                className="object-contain"
                sizes="240px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section className="py-14 md:py-20 bg-white overflow-hidden" id="clients">
      <div className="max-w-5xl mx-auto px-4">
        <Reveal className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#18140f] tracking-tight">
            Brands who&apos;ve put their name on our <em className="accent">work.</em>
          </h2>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <div className="space-y-4">
          <MarqueeRow clients={rowOne} />
          <MarqueeRow clients={rowTwo} reverse />
        </div>
      </Reveal>
    </section>
  );
}
