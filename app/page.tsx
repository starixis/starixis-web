import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { About, Ecosystem, Founder, InnovationAreas, Mission, Partnership, Problem, Vision } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Vision />
        <Ecosystem />
        <Mission />
        <InnovationAreas />
        <Partnership />
        <About />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
