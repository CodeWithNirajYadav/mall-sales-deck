import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Stats from "@/components/Stats";
import Retail from "@/components/Retail";
import StorySection from "@/components/StorySection";
import Experiences from "@/components/Experiences";
import EventsModule from "@/components/EventsModule";
import Luxury from "@/components/Luxury";
import CTA from "@/components/CTA";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <Navigation />
      <Hero />
      <Overview />
      <Stats />
      <Retail />
      <StorySection />
      <Experiences />
      <EventsModule />
      <Luxury />
      <CTA />
      <Contact />
    </main>
  );
}