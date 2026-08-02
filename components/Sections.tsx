import { Gauge, Layers, MapPinned, Network, Search, ShieldCheck, Sparkles, Store, Waypoints } from "lucide-react";
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
    title: "Destination intelligence",
    text: "Help retail destinations better understand engagement, product demand and customer activity across their physical ecosystem.",
    color: "#7aa8ff",
    Icon: MapPinned,
  },
  {
    code: "06",
    title: "Infrastructure that scales",
    text: "Built for multi-location retail, with privacy-conscious customer experiences designed in from the start.",
    color: "#9a86ff",
    Icon: Layers,
  },
];

const ecosystem = [
  {
    audience: "For shoppers",
    title: "Find what is actually available nearby.",
    color: "#4fd6e6",
    points: [
      "Search across a whole destination rather than store by store.",
      "See what is available locally before making the journey.",
      "Move from online discovery to in-store collection or purchase.",
    ],
    note: "No app to adopt before it is useful — discovery works from the web.",
  },
  {
    audience: "For retailers",
    title: "Reach local customers without changing how you operate.",
    color: "#7aa8ff",
    points: [
      "Become discoverable to nearby customers already searching with intent.",
      "Connect through flexible product and inventory integrations.",
      "See what local customers are looking for, not only what sold.",
    ],
    note: "No single mandated system — we work with the setup you already run.",
    cta: ["Talk to us about retailer integration", "mailto:contact@starixis.com?subject=Retailer%20enquiry"],
  },
  {
    audience: "For shopping centres and destinations",
    title: "One digital layer across the whole centre.",
    color: "#9a86ff",
    points: [
      "Unify stores, products and promotions in a single customer experience.",
      "Understand engagement and product demand across your centre.",
      "Give participating retailers a route to local digital discovery.",
    ],
    note: "Designed to complement the channels and schemes you already operate.",
    cta: ["Talk to us about your centre", "mailto:contact@starixis.com?subject=Destination%20enquiry"],
  },
];

const intelligencePillars = [
  {
    audience: "For customers",
    title: "Discovery that understands intent",
    Icon: Sparkles,
    color: "#4fd6e6",
    items: [
      ["Relevance that adapts", "Surface products, stores and offers that reflect what someone is actually looking for nearby."],
      ["Search in natural language", "Let people describe what they want in their own words rather than guessing at categories."],
      ["Context-aware suggestions", "Factor in proximity, availability and preference so recommendations stay useful."],
    ],
  },
  {
    audience: "For retailers and destinations",
    title: "Operations informed by real demand",
    Icon: Gauge,
    color: "#9a86ff",
    items: [
      ["Local demand signals", "Understand what customers are searching for across a destination, not just what sold."],
      ["Cleaner product data", "Keep product, pricing and availability information accurate and dependable across a destination."],
      ["Journey insight", "See how customers move between digital discovery and physical visits."],
    ],
  },
];

// Phase-based rather than dated: signals sequence and direction without committing
// to timelines or exposing specifics of the commercial roadmap.
const roadmap = [
  {
    code: "01",
    phase: "Now",
    title: "Platform built, first pilot in preparation",
    text: "The core platform is built. We are preparing our first destination pilot alongside launch partners.",
    color: "#4fd6e6",
  },
  {
    code: "02",
    phase: "Next",
    title: "Deeper retailer integration",
    text: "Moving retailers from manual product data towards automated inventory and availability synchronisation.",
    color: "#7aa8ff",
  },
  {
    code: "03",
    phase: "Then",
    title: "Closing the local commerce loop",
    text: "Connecting local discovery and purchase through to collection and delivery, so the journey completes end to end.",
    color: "#9a86ff",
  },
  {
    code: "04",
    phase: "Beyond",
    title: "Scale",
    text: "Extending coverage across the UK, and in time into selected international markets.",
    color: "#ff8a4c",
  },
];

// Figures verified against the ONS retail sales bulletin (June 2026). Re-check
// before republishing — the online share moves month to month.
const investorStats = [
  { figure: "70%+", label: "of Great Britain retail spend still happens outside online channels." },
  { figure: "29.4%", label: "online share in June 2026 — a record since 2021, and still under a third." },
];

const whyNow = [
  {
    title: "Online has found its ceiling",
    text: "Even at record penetration, the clear majority of retail spend stays physical. The opportunity is connecting that spend, not replacing it.",
  },
  {
    title: "Retail data is finally tractable",
    text: "Modern AI can make sense of retail data that was previously too inconsistent to work with at scale — the barrier that made this impractical before.",
  },
  {
    title: "Destinations need a digital layer",
    text: "Shopping centres increasingly need one connected experience across their tenants, and have no practical way to build it themselves.",
  },
];

// Deliberately no per-stream maturity labels: stating which lines are unbuilt, in
// build order, hands competitors a capability map. The "builds out as the platform
// scales" framing below keeps it honest without itemising the gaps.
const revenueStreams = [
  { title: "Retailer subscriptions", text: "Recurring fees for discoverability, demand data and integration." },
  { title: "Transaction commission", text: "A share of purchases completed through the platform." },
  { title: "Advertising", text: "Sponsored placement and promotion across local discovery." },
  { title: "Fulfilment", text: "Revenue from local delivery and collection." },
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
      <div className="audience-rows">
        {ecosystem.map(({ audience, title, color, points, note, cta }, index) => (
          <Reveal className="audience" delay={index * 80} key={audience}>
            <div className="audience-head">
              <div className="ecosystem-node" style={{ borderColor: color, color }} aria-hidden="true" />
              <div className="audience-label" style={{ color }}>{audience}</div>
              <h3>{title}</h3>
            </div>
            <div className="audience-body">
              <ul className="audience-list">
                {points.map((point) => (
                  <li className="audience-item" key={point}>
                    <span className="audience-marker" style={{ background: color }} aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="audience-note">{note}</p>
              {cta && <a className="audience-cta" href={cta[1]}>{cta[0]} <span aria-hidden="true">→</span></a>}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Intelligence() {
  return (
    <section id="intelligence" className="shell section" aria-labelledby="intelligence-heading">
      <div className="intelligence-panel">
        <div className="intelligence-glow" aria-hidden="true" />
        <div className="intelligence-head">
          <Reveal className="eyebrow">Applied intelligence</Reveal>
          <Reveal as="h2" id="intelligence-heading" className="heading">
            AI running quietly underneath the experience.
          </Reveal>
          <Reveal as="p" className="body-copy" delay={80}>
            Intelligence is not a feature bolted onto Starixis — it is how the platform makes sense of fragmented retail data. We are building AI into the core of the product to help customers find what they need faster, and to help retailers and shopping destinations understand and serve local demand.
          </Reveal>
        </div>
        <div className="intelligence-pillars">
          {intelligencePillars.map(({ audience, title, Icon, color, items }, index) => (
            <Reveal className="pillar" delay={index * 90} key={audience}>
              <div className="icon-tile">
                <Icon size={17} strokeWidth={1.5} color={color} aria-hidden="true" />
              </div>
              <div className="pillar-audience" style={{ color }}>{audience}</div>
              <h3>{title}</h3>
              <ul className="pillar-list">
                {items.map(([label, text]) => (
                  <li className="pillar-item" key={label}>
                    <span className="pillar-marker" style={{ background: color }} aria-hidden="true" />
                    <span>
                      <strong>{label}</strong>
                      <span>{text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal className="intelligence-note" delay={160}>
          <ShieldCheck size={17} strokeWidth={1.5} color="#7aa8ff" aria-hidden="true" />
          <p>
            Built responsibly. We use data and AI to improve relevance and insight while keeping customer experiences privacy-conscious, with human judgement where decisions matter.
          </p>
        </Reveal>
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

export function Roadmap() {
  return (
    <section id="roadmap" className="shell section" aria-labelledby="roadmap-heading">
      <div className="section-header">
        <div>
          <Reveal className="eyebrow">Where we are going</Reveal>
          <Reveal as="h2" id="roadmap-heading" className="heading">
            Building in deliberate phases.
          </Reveal>
        </div>
        <Reveal as="p" className="note">
          Our direction of travel. Phases indicate sequence and priority rather than fixed dates.
        </Reveal>
      </div>
      <div className="roadmap">
        <div className="roadmap-line" aria-hidden="true" />
        <div className="roadmap-grid">
          {roadmap.map(({ code, phase, title, text, color }, index) => (
            <Reveal className="roadmap-step" delay={index * 80} key={code}>
              <div className="roadmap-node" style={{ borderColor: color, color }} aria-hidden="true">{code}</div>
              <div className="roadmap-phase" style={{ color }}>{phase}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Investors() {
  return (
    <section id="investors" className="band" aria-labelledby="investors-heading">
      <div className="shell section">
        <div className="section-header">
          <div>
            <Reveal className="eyebrow">For investors</Reveal>
            <Reveal as="h2" id="investors-heading" className="heading">
              The majority of retail is still physical.
            </Reveal>
          </div>
          <Reveal as="p" className="note">
            Starixis is building the commerce layer for the part of retail that digital has not yet reached.
          </Reveal>
        </div>

        <div className="investor-stats">
          {investorStats.map(({ figure, label }, index) => (
            <Reveal className="investor-stat" delay={index * 90} key={figure}>
              <div className="investor-figure">{figure}</div>
              <p>{label}</p>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" className="investor-source">
          Source: ONS, Retail sales, Great Britain — June 2026.
        </Reveal>

        <div className="investor-cols">
          <Reveal className="investor-block">
            <h3>Why now</h3>
            <p className="investor-block-lede">Three things have changed at once.</p>
            <ul className="investor-list">
              {whyNow.map(({ title, text }) => (
                <li key={title}>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="investor-block" delay={90}>
            <h3>How we make money</h3>
            <p className="investor-block-lede">A model combining recurring and transactional revenue, building out as the platform scales.</p>
            <ul className="investor-list">
              {revenueStreams.map(({ title, text }) => (
                <li key={title}>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="investor-note" delay={120}>
          <p>
            <strong>Defensibility.</strong> The visible product is the straightforward part. The advantage sits in the infrastructure beneath it and the relationships around it — both take time to build, both compound with every retailer and destination added, and neither can be bought quickly.
          </p>
        </Reveal>

        <Reveal className="investor-cta" delay={160}>
          <p>This is a high-level view of the market we are building for and how the business works. If you would like to understand more, we are happy to talk.</p>
          <a className="button button-secondary" href="mailto:contact@starixis.com?subject=Investor%20enquiry">Investor enquiries</a>
        </Reveal>
      </div>
    </section>
  );
}

// Answers are drawn from claims already made elsewhere on the site — no new
// commitments. Keep them in sync if the Ecosystem or Roadmap copy changes.
export const faqs = [
  {
    q: "What does Starixis actually do?",
    a: "Starixis is building a digital commerce layer for physical retail — making products in nearby stores discoverable online, and connecting that discovery through to an in-store visit, collection or purchase.",
  },
  {
    q: "What do retailers have to change to take part?",
    a: "As little as possible. We connect through flexible product and inventory integrations rather than requiring a single mandated system, so retailers can take part without changing how they already operate.",
  },
  {
    q: "Does this replace the app or loyalty scheme our centre already runs?",
    a: "No. It is designed to complement the channels and schemes a destination already operates, adding a connected discovery layer across participating retailers rather than replacing existing customer touchpoints.",
  },
  {
    q: "Do shoppers need to download an app?",
    a: "No. Discovery works from the web, so there is nothing a customer has to adopt before it is useful to them.",
  },
  {
    q: "How is AI used?",
    a: "To make discovery more relevant — understanding what someone is looking for, keeping product information accurate and dependable, and helping retailers and destinations understand local demand. We use it in a privacy-conscious way, with human judgement where decisions matter.",
  },
  {
    q: "What stage is Starixis at?",
    a: "The core platform is built and we are preparing our first destination pilot alongside launch partners. Our roadmap then moves to deeper retailer integration, closing the local commerce loop, and scaling coverage.",
  },
  {
    q: "How does Starixis make money?",
    a: "Through a combination of recurring and transactional revenue — retailer subscriptions, a share of transactions completed through the platform, advertising across local discovery, and fulfilment — building out as the platform scales.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="shell section" aria-labelledby="faq-heading">
      <div className="section-header">
        <div>
          <Reveal className="eyebrow">Common questions</Reveal>
          <Reveal as="h2" id="faq-heading" className="heading">
            Questions we are asked most.
          </Reveal>
        </div>
        <Reveal as="p" className="note">
          If your question is not here, get in touch and we will answer it directly.
        </Reveal>
      </div>
      <div className="faq-list">
        {faqs.map(({ q, a }, index) => (
          <Reveal className="faq-item" delay={(index % 3) * 60} key={q}>
            <details>
              <summary>
                <span>{q}</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <p>{a}</p>
            </details>
          </Reveal>
        ))}
      </div>
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
          <a className="button button-primary" href="mailto:contact@starixis.com?subject=Partnership%20enquiry">Discuss a partnership</a>
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
              Yogesh has spent over 20 years building large-scale systems across retail, banking and the public sector, working across teams of up to 300 — turning complex, fragmented operations into simple digital experiences.
            </p>
            <p>
              That work led him to a problem hiding in plain sight: most shopping still happens in physical stores, and almost none of it is digitally discoverable. He founded Starixis to close that gap — connecting shoppers, retailers and shopping destinations through a single commerce layer.
            </p>
          </Reveal>
          <Reveal className="founder-link" delay={80}>
            <a href="https://www.linkedin.com/in/yogesh-nagar-uk/" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
