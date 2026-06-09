import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import StorySection from "@/components/StorySection";
import EventsModule from "@/components/EventsModule";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="bg-black text-white">

      <Navigation />

      <Hero />

      <Stats />

      <StorySection />

      <EventsModule />

      <CTA />

    </main>
  );
}