import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Legacy from "@/components/sections/Legacy";
import Capabilities from "@/components/sections/Capabilities";
import RecentEvents from "@/components/sections/RecentEvents";
import ProofOfScale from "@/components/sections/ProofOfScale";
import WhyUs from "@/components/sections/WhyUs";
import Engagements from "@/components/sections/Engagements";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Legacy />
      <Capabilities />
      <RecentEvents />
      <ProofOfScale />
      <WhyUs />
      <Engagements />
      <FinalCTA />
    </main>
  );
}
