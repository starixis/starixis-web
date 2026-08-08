import Image from "next/image";
import { Reveal } from "./Reveal";

const ecosystemParticipants = [
  { number: "01", label: "Customers", color: "#4fd6e6" },
  { number: "02", label: "Retailers", color: "#7aa8ff" },
  { number: "03", label: "Retail destinations", color: "#9a86ff" },
  { number: "04", label: "Technology partners", color: "#ff8a4c" },
];

const responsiblePrinciples = ["Security", "Privacy", "Reliability", "Accessibility", "Responsible use of data"];

export const faqs = [
  {
    q: "What does Starixis do?",
    a: "Starixis is developing technology for the digital transformation of physical retail. We are focused on creating a more connected relationship between digital commerce and real-world retail environments. Specific platform capabilities are discussed with partners directly.",
  },
  {
    q: "Is Starixis a marketplace?",
    a: "Our ambitions extend beyond any single traditional retail technology category. Starixis is developing an underlying technology platform for connected physical retail, with capabilities that will evolve as the platform and ecosystem develop.",
  },
  {
    q: "Who is Starixis built for?",
    a: "Our work considers the wider physical retail ecosystem, including customers, retailers, shopping destinations and technology partners. We work selectively with organisations where there is a strong strategic fit.",
  },
  {
    q: "Does Starixis replace existing retailer or shopping-centre technology?",
    a: "No. Our philosophy is to complement the retail ecosystem rather than require organisations to replace established technology unnecessarily. The exact approach depends on the environment and partner.",
  },
  {
    q: "How does Starixis use AI?",
    a: "AI forms part of our broader technology strategy. We are exploring its use where it can meaningfully improve retail experiences and understanding while maintaining appropriate safeguards around privacy, security and human oversight. Detailed capabilities are not disclosed publicly.",
  },
  {
    q: "What stage is Starixis at?",
    a: "Starixis is actively developing and validating its technology and engaging with potential partners around future deployments. Additional information is available during relevant partnership or investment discussions.",
  },
  {
    q: "How does Starixis make money?",
    a: "Starixis is developing a commercial model designed around the value its technology creates across the retail ecosystem. Detailed commercial information is shared directly with prospective partners and investors.",
  },
  {
    q: "Can retailers or shopping destinations work with Starixis?",
    a: "Yes. We welcome conversations with organisations interested in exploring the future of connected physical retail.",
  },
];

export function Introduction() {
  return (
    <section id="vision" className="shell section opening" aria-labelledby="opening-heading">
      <div className="opening-grid">
        <div>
          <Reveal className="eyebrow">Our focus</Reveal>
          <Reveal as="h2" id="opening-heading" className="heading">
            Physical retail, connected for a digital world.
          </Reveal>
        </div>
        <Reveal className="opening-copy">
          <p>Our focus is on creating infrastructure that brings digital capability closer to the physical retail experience — while keeping retailers, destinations and real-world shopping at the centre.</p>
          <p>We believe the next generation of retail will not be defined by online or offline alone, but by how intelligently the two can work together.</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Landscape() {
  return (
    <section id="landscape" className="band" aria-labelledby="landscape-heading">
      <div className="shell section narrative-grid">
        <div>
          <Reveal className="eyebrow">The landscape</Reveal>
          <Reveal as="h2" id="landscape-heading" className="heading">Building for a more connected retail landscape.</Reveal>
        </div>
        <Reveal className="narrative-copy">
          <p>Physical retail is complex. Customers, retailers, destinations, technology and commerce all operate across different systems and experiences.</p>
          <p>Starixis is exploring how those environments can become more connected, responsive and digitally enabled without adding unnecessary complexity.</p>
          <p>The technology behind that vision is being developed deliberately, with an emphasis on scalability, interoperability and long-term usefulness.</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Strengthened() {
  return (
    <section className="future" aria-labelledby="strengthened-heading">
      <div className="grid-mask" />
      <div className="shell future-inner">
        <Reveal className="eyebrow">Our principle</Reveal>
        <Reveal as="h2" id="strengthened-heading">Physical retail. <span>Strengthened by technology.</span></Reveal>
        <Reveal className="future-copy">
          <p>We are not trying to replace the physical shopping experience.</p>
          <p>We believe technology can strengthen it.</p>
          <p>Starixis is focused on helping create retail environments that are easier to engage with, easier to understand and better connected to the digital expectations customers already have elsewhere in their lives.</p>
          <p>How that experience evolves will continue to expand as the platform develops.</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Ecosystem() {
  return (
    <section id="ecosystem" className="shell section" aria-labelledby="ecosystem-heading">
      <div className="section-header">
        <div>
          <Reveal className="eyebrow">The ecosystem</Reveal>
          <Reveal as="h2" id="ecosystem-heading" className="heading">Built around the retail ecosystem.</Reveal>
        </div>
        <Reveal as="p" className="note">Technology designed to create value across the participants that make physical retail work.</Reveal>
      </div>
      <Reveal className="ecosystem-intro">
        <p>Starixis takes an ecosystem approach.</p>
        <p>We are interested in technology that can create value across the different participants that make physical retail work — including customers, retailers, retail destinations and technology partners.</p>
        <p>Rather than designing another isolated retail tool, our ambition is to create technology capable of becoming part of the broader infrastructure around modern physical commerce.</p>
      </Reveal>
      <div className="ecosystem-cards">
        {ecosystemParticipants.map(({ number, label, color }, index) => (
          <Reveal className="ecosystem-card" delay={index * 70} key={label}>
            <span className="ecosystem-index" style={{ color }}>{number}</span>
            <h3>{label}</h3>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Evolution() {
  return (
    <section className="band" aria-labelledby="evolution-heading">
      <div className="shell section evolution-grid">
        <div>
          <Reveal className="eyebrow">The platform</Reveal>
          <Reveal as="h2" id="evolution-heading" className="heading">Designed to evolve.</Reveal>
        </div>
        <Reveal className="evolution-panel">
          <p>Retail environments, customer behaviour and technology are constantly changing.</p>
          <p>Starixis is therefore being developed as an adaptable platform rather than around a single interaction, channel or use case.</p>
          <p>Our longer-term ambition extends beyond any individual feature: to help establish a stronger digital foundation for physical retail.</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Responsibility() {
  return (
    <section className="shell section" aria-labelledby="responsibility-heading">
      <div className="responsibility-head">
        <Reveal className="eyebrow">Responsible technology</Reveal>
        <Reveal as="h2" id="responsibility-heading" className="heading">Responsible technology from the beginning.</Reveal>
        <Reveal className="responsibility-copy">
          <p>Technology operating within real-world retail environments needs to earn trust.</p>
          <p>Security, privacy, reliability, accessibility and responsible use of data are considered fundamental to how Starixis is being developed.</p>
          <p>We believe sophisticated technology should make experiences simpler — not make the technology itself more visible.</p>
        </Reveal>
      </div>
      <div className="value-grid" aria-label="Responsible technology principles">
        {responsiblePrinciples.map((principle, index) => (
          <Reveal className="value-item" delay={index * 60} key={principle}>
            <span aria-hidden="true" />
            {principle}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Development() {
  return (
    <section id="development" className="shell section" aria-labelledby="development-heading">
      <Reveal className="development-panel">
        <div className="development-glow" aria-hidden="true" />
        <div className="development-content">
          <p className="eyebrow">Our approach</p>
          <h2 id="development-heading" className="heading">Building deliberately.</h2>
          <div className="development-copy">
            <p>Starixis is currently developing and validating its technology with a focus on selected real-world retail environments.</p>
            <p>We are taking a deliberate approach to market development, working with organisations that share our interest in the future of connected physical retail.</p>
            <p>Further details about our technology, commercial model and deployment approach are shared directly with relevant partners and investors.</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Investors() {
  return (
    <section id="investors" className="band" aria-labelledby="investors-heading">
      <div className="shell section engagement-inner">
        <Reveal className="eyebrow">For investors</Reveal>
        <Reveal as="h2" id="investors-heading" className="heading">Infrastructure for the digital evolution of physical retail.</Reveal>
        <Reveal className="engagement-copy">
          <p>Starixis is being built around a long-term belief: physical commerce represents a significant part of the retail economy, yet much of its underlying experience remains disconnected from the capabilities customers increasingly expect from digital environments.</p>
          <p>We see an opportunity to build technology at that intersection.</p>
          <p>Our commercial strategy, platform architecture and go-to-market model are discussed directly with prospective investors.</p>
        </Reveal>
        <Reveal className="hero-actions">
          <a className="button button-primary" href="mailto:contact@starixis.com?subject=Investor%20enquiry">Investor enquiries <span aria-hidden="true">→</span></a>
        </Reveal>
      </div>
    </section>
  );
}

export function Partnership() {
  return (
    <section id="partnership" className="shell section" aria-labelledby="partnership-heading">
      <div className="engagement-inner">
        <Reveal className="eyebrow">Partnerships</Reveal>
        <Reveal as="h2" id="partnership-heading" className="heading">Building the future of physical retail together.</Reveal>
        <Reveal className="engagement-copy">
          <p>We are interested in conversations with retailers, shopping destinations, technology organisations and industry partners exploring the future of physical commerce.</p>
          <p>Starixis is selectively engaging with organisations where there is a strong strategic fit.</p>
        </Reveal>
        <Reveal className="hero-actions">
          <a className="button button-secondary" href="mailto:contact@starixis.com?subject=Partnership%20enquiry">Discuss a partnership <span aria-hidden="true">→</span></a>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="band" aria-labelledby="about-heading">
      <div className="shell section about-inner">
        <Reveal className="eyebrow">About Starixis</Reveal>
        <Reveal as="h2" id="about-heading" className="about-lead">A UK retail technology company focused on the digital transformation of physical shopping.</Reveal>
        <Reveal as="p" className="about-secondary">Starixis develops technology for the evolving relationship between physical retail and digital commerce.</Reveal>
        <Reveal as="p" className="about-secondary">Our ambition is simple: help make physical retail more connected, intelligent and ready for the next generation of customer expectations.</Reveal>
        <Reveal as="p" className="about-legal">Starixis Limited</Reveal>
      </div>
    </section>
  );
}

export function Founder() {
  return (
    <section className="shell section founder" aria-labelledby="founder-heading">
      <div className="founder-grid">
        <Reveal className="founder-portrait-wrap">
          <div className="founder-glow" aria-hidden="true" />
          <div className="founder-portrait">
            <Image src="/yogesh-nagar-founder-starixis.jpg" alt="Yogesh Nagar, Founder of Starixis" width={1400} height={1700} sizes="(max-width: 900px) min(86vw, 360px), 360px" unoptimized />
          </div>
        </Reveal>
        <div className="founder-copy">
          <Reveal className="eyebrow">Founder</Reveal>
          <Reveal as="h2" id="founder-heading" className="founder-name">Yogesh Nagar</Reveal>
          <Reveal as="p" className="founder-role">Founder, Starixis</Reveal>
          <Reveal className="founder-bio">
            <p>Yogesh is a technology consultant and product builder with more than 20 years of experience working with complex, large-scale technology systems.</p>
            <p>Starixis was founded from a belief that some of the most interesting opportunities in retail now sit at the intersection of technology and the physical world.</p>
          </Reveal>
          <Reveal className="founder-link" delay={80}>
            <a href="https://www.linkedin.com/in/yogesh-nagar-uk/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn <span aria-hidden="true">→</span></a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="band" aria-labelledby="faq-heading">
      <div className="shell section">
        <div className="section-header">
          <div>
            <Reveal className="eyebrow">Common questions</Reveal>
            <Reveal as="h2" id="faq-heading" className="heading">Questions about Starixis.</Reveal>
          </div>
        </div>
        <div className="faq-list">
          {faqs.map(({ q, a }, index) => (
            <Reveal className="faq-item" delay={(index % 3) * 60} key={q}>
              <details>
                <summary><span>{q}</span><span className="faq-icon" aria-hidden="true" /></summary>
                <p>{a}</p>
              </details>
            </Reveal>
          ))}
        </div>
        <Reveal className="faq-cta">
          <a className="button button-secondary" href="mailto:contact@starixis.com">Start a conversation <span aria-hidden="true">→</span></a>
        </Reveal>
      </div>
    </section>
  );
}
