import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import EventGrid from "@/components/EventGrid";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <EventGrid />
      <Features />
      <FAQ />
      <Contact />
    </main>
  );
}
