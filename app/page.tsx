import Hero from "@/components/sections/Hero";
import Legacy from "@/components/sections/Legacy";
import Capabilities from "@/components/sections/Capabilities";
import ProofOfScale from "@/components/sections/ProofOfScale";
import WhyUs from "@/components/sections/WhyUs";
import Engagements from "@/components/sections/Engagements";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Legacy />
      <Capabilities />
      <ProofOfScale />
      <WhyUs />
      <Engagements />
      <FinalCTA />
    </main>
  );
}
