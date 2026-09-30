import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const clients = [
  { name: "KPN Fresh", src: "/clients/kpn.png", square: true },
  { name: "Tata Motors", src: "/clients/tata.png" },
  { name: "Reliance Smart", src: "/clients/reliance.png" },
  { name: "SPAR", src: "/clients/spar.png" },
  { name: "Pilikula Biological Park", src: "/clients/pilikula.png" },
  { name: "Government of Karnataka, Department of Tourism", src: "/clients/karnataka-tourism.png" },
  { name: "ICICI Bank", src: "/clients/icici.png" },
  { name: "ONGC MRPL", src: "/clients/ongc-mrpl.png", square: true },
  { name: "Audi", src: "/clients/audi.png" },
];

// Duplicated once so the marquee can loop seamlessly at -50%.
const loop = [...clients, ...clients];

export default function Clients() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="clients">
      <div className="max-w-5xl mx-auto px-4">
        <Reveal className="text-center mb-14">
          <div className="section-label justify-center mb-3">Trusted By</div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#18140f] tracking-tight">
            Brands who&apos;ve put their name on our work.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <div className="marquee-viewport">
          <div className="marquee-track">
            {loop.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className={`client-tile flex items-center justify-center p-6 flex-shrink-0 ${
                  client.square ? "w-28 h-28" : "w-40 h-24"
                }`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.src}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="200px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
