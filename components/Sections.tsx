import { MapPinned, Network, Search, Sparkles, Store, Waypoints } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./Reveal";

const problems = [
  {
    number: "01",
    title: "Fragmented discovery",
    text: "Customers move between individual shops, websites and platforms to understand what is available locally.",
    color: "#4fd6e6",
  },
  {
    number: "02",
    title: "Disconnected customer journeys",
    text: "Digital discovery, in-store visits, payments, collection and retailer engagement often operate as separate experiences.",
    color: "#7aa8ff",
  },
  {
    number: "03",
    title: "Limited destination-level visibility",
    text: "Shopping destinations have limited ability to create a unified digital experience across participating retailers.",
    color: "#9a86ff",
  },
];

const capabilities = [
  {
    code: "01",
    title: "Local product discovery",
    text: "Help customers discover products, stores and relevant offers available within nearby physical retail destinations.",
    color: "#4fd6e6",
    Icon: Search,
  },
  {
    code: "02",
    title: "Connected retail experiences",
    text: "Bring mobile, web, QR-enabled and destination-based customer touchpoints into a more consistent journey.",
    color: "#7aa8ff",
    Icon: Network,
  },
  {
    code: "03",
    title: "Digital-to-physical commerce",
    text: "Enable customers to move naturally from online discovery and purchase intent to physical collection and in-store engagement.",
    color: "#9a86ff",
    Icon: Waypoints,
  },
  {
    code: "04",
    title: "Retailer connectivity",
    text: "Support retailers through flexible product, inventory and commerce integrations without forcing every business into the same operating model.",
    color: "#4fd6e6",
    Icon: Store,
  },
  {
    code: "05",
    title: "Intelligent personalisation",
    text: "Use data and AI responsibly to improve product relevance, customer discovery and the overall shopping experience.",
    color: "#7aa8ff",
    Icon: Sparkles,
  },
  {
    code: "06",
    title: "Destination intelligence",
    text: "Help retail destinations better understand engagement, product demand and customer activity across their physical ecosystem.",
    color: "#9a86ff",
    Icon: MapPinned,
  },
];

const ecosystem = [
  {
    audience: "For shoppers",
    text: "Discover more of what is available nearby and move more easily from inspiration to purchase.",
    color: "#4fd6e6",
  },
  {
    audience: "For retailers",
    text: "Improve digital visibility, reach high-intent local customers and participate in connected destination experiences.",
    color: "#7aa8ff",
  },
  {
    audience: "For shopping destinations",
    text: "Create a unified digital layer across stores, products, promotions and customer touchpoints.",
    color: "#9a86ff",
  },
];

const innovationPoints = [
  "Digital discovery for physical inventory",
  "Connected mobile, web and destination experiences",
  "Flexible retailer and commerce integrations",
  "AI-supported relevance and personalisation",
  "Scalable infrastructure for multi-location retail",
  "Privacy-conscious customer experiences",
];

export function Problem() {
  return (
    <section id="problem" className="shell section" aria-labelledby="problem-heading">
      <div className="manifesto">
        <Reveal className="eyebrow">The opportunity</Reveal>
        <Reveal as="h2" id="problem-heading" className="heading">
          Physical shopping was never designed for digital discovery.
        </Reveal>
        <Reveal className="problem-intro">
          <p className="body-copy">
            Online shopping has made products instantly searchable, comparable and accessible. Physical retail, however, remains fragmented across individual stores, systems and locations.
          </p>
          <p className="body-copy">
            Customers often cannot easily discover which products are available nearby, compare options across a shopping destination, access relevant local offers or move seamlessly from digital discovery to an in-store purchase.
          </p>
          <p className="body-copy problem-close">Starixis is working to close that gap.</p>
        </Reveal>
      </div>
      <div className="problem-grid">
        {problems.map((item, index) => (
          <Reveal className="problem-card" delay={index * 90} key={item.title}>
            <div className="problem-number" style={{ color: item.color }}>{item.number}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Vision() {
  return (
    <section id="vision" className="band" aria-labelledby="vision-heading">
      <div className="shell section">
        <div className="section-header vision-header">
          <div>
            <Reveal className="eyebrow">Our vision</Reveal>
            <Reveal as="h2" id="vision-heading" className="heading">
              The digital commerce layer for physical retail.
            </Reveal>
          </div>
        </div>
        <Reveal className="vision-lede">
          <p className="body-copy">
            Starixis is developing technology that helps transform physical retail destinations into connected, digitally discoverable and increasingly shoppable environments.
          </p>
          <p className="body-copy">
            Our vision is to make local shopping as easy to explore as online commerce, while keeping physical stores and shopping destinations at the centre of the experience.
          </p>
        </Reveal>
        <div className="card-grid">
          {capabilities.map(({ code, title, text, color, Icon }, index) => (
            <Reveal className="innovation-card" delay={(index % 3) * 80} key={title}>
              <div className="icon-tile">
                <Icon size={17} strokeWidth={1.5} color={color} aria-hidden="true" />
              </div>
              <div className="card-label" style={{ color }}>{code}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Ecosystem() {
  return (
    <section id="ecosystem" className="shell section" aria-labelledby="ecosystem-heading">
      <div className="cap-heading">
        <Reveal className="eyebrow">The ecosystem</Reveal>
        <Reveal as="h2" id="ecosystem-heading" className="heading">
          Connecting the physical retail ecosystem.
        </Reveal>
        <Reveal as="p" className="caption">
          One connected layer across shoppers, retailers and shopping destinations.
        </Reveal>
      </div>
      <div className="ecosystem-wrap">
        <div className="ecosystem-line" aria-hidden="true" />
        <div className="ecosystem-grid">
          {ecosystem.map((item, index) => (
            <Reveal className="ecosystem-card" delay={index * 100} key={item.audience}>
              <div className="ecosystem-node" style={{ borderColor: item.color, color: item.color }} aria-hidden="true" />
              <h3>{item.audience}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Mission() {
  return (
    <section className="future" aria-labelledby="mission-heading">
      <div className="grid-mask" />
      <div className="shell future-inner">
        <Reveal className="eyebrow">Our principle</Reveal>
        <Reveal as="h2" id="mission-heading">
          We are not replacing physical shopping.
          <span> We are making it more discoverable, connected and convenient.</span>
        </Reveal>
        <Reveal as="p" className="body-copy">
          The future of retail is not purely online or purely offline. It is a connected experience in which digital technology strengthens physical stores, shopping destinations and the communities around them.
        </Reveal>
      </div>
    </section>
  );
}

export function InnovationAreas() {
  return (
    <section id="innovation" className="shell section" aria-labelledby="innovation-heading">
      <div className="section-header">
        <div>
          <Reveal className="eyebrow">Built for what comes next</Reveal>
          <Reveal as="h2" id="innovation-heading" className="heading">
            Built for the next era of retail.
          </Reveal>
        </div>
        <Reveal as="p" className="note">
          A focused approach to connected retail technology — designed for physical commerce, local discovery and destination-scale experiences.
        </Reveal>
      </div>
      <ul className="innovation-points">
        {innovationPoints.map((point, index) => (
          <Reveal as="li" className="innovation-point" delay={(index % 3) * 70} key={point}>
            <span className="innovation-point-marker" aria-hidden="true" />
            <span>{point}</span>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export function Partnership() {
  return (
    <section id="partnership" className="band" aria-labelledby="partnership-heading">
      <div className="shell section partnership-inner">
        <Reveal className="eyebrow">Partnerships</Reveal>
        <Reveal as="h2" id="partnership-heading" className="heading">
          Building the future of physical retail together.
        </Reveal>
        <Reveal className="partnership-copy">
          <p className="body-copy">
            We are engaging with retailers, shopping destinations, technology partners and industry leaders who share our ambition to create better connected physical shopping experiences.
          </p>
          <p className="body-copy">
            Whether you operate a retail brand, manage a shopping destination or work across retail innovation, we would be interested in starting a conversation.
          </p>
        </Reveal>
        <Reveal className="hero-actions">
          <a className="button button-primary" href="#contact">Discuss a partnership</a>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="shell section" aria-labelledby="about-heading">
      <div className="about-inner">
        <Reveal className="eyebrow">About Starixis</Reveal>
        <Reveal as="h2" id="about-heading" className="about-lead">
          Starixis is a UK retail technology company focused on the digital transformation of physical shopping.
        </Reveal>
        <Reveal as="p" className="about-secondary">
          We are developing connected commerce technology that brings together product discovery, physical retailers, shopping destinations and modern customer experiences.
        </Reveal>
        <Reveal as="p" className="about-secondary">
          Our goal is to help physical retail become more searchable, measurable, accessible and digitally connected — without losing the value of the in-person shopping experience.
        </Reveal>
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
            <Image
              src="/yogesh-nagar-founder-starixis.jpg"
              alt="Yogesh Nagar, Founder of Starixis"
              width={1400}
              height={1700}
              sizes="(max-width: 900px) min(86vw, 360px), 360px"
              unoptimized
            />
          </div>
        </Reveal>
        <div className="founder-copy">
          <Reveal className="eyebrow">Founder</Reveal>
          <Reveal as="h2" id="founder-heading" className="founder-name">Yogesh Nagar</Reveal>
          <Reveal as="p" className="founder-role">Founder, Starixis</Reveal>
          <Reveal className="founder-bio">
            <p>
              Starixis was founded by Yogesh Nagar, a product builder focused on turning complex, fragmented systems into simpler digital experiences.
            </p>
            <p>
              After years of working with large-scale technology, Yogesh began exploring how thoughtful engineering and product design could strengthen everyday physical shopping. He created Starixis as a home for building retail technology that connects shoppers, retailers and shopping destinations more effectively.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
