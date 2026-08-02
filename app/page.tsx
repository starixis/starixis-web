import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { About, Ecosystem, Faq, faqs, Founder, Intelligence, Investors, Mission, Partnership, Problem, Roadmap, Vision } from "@/components/Sections";

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intelligence />
        <Problem />
        <Vision />
        <Ecosystem />
        <Mission />
        <Roadmap />
        <Investors />
        <Partnership />
        <About />
        <Founder />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
