import { IntelligenceNetwork } from "./IntelligenceNetwork";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <IntelligenceNetwork />
      </div>
      <div className="grid-mask" />
      <div className="hero-aurora" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />
      <div className="shell hero-inner">
        <Reveal className="eyebrow">Retail technology for the physical world</Reveal>
        <Reveal as="h1" delay={80}>Digitally transforming physical shopping.</Reveal>
        <Reveal as="p" className="hero-lede" delay={160}>
          Starixis is building the digital commerce layer for physical retail — connecting shoppers, retailers and shopping destinations through more discoverable, convenient and connected experiences.
        </Reveal>
        <Reveal className="hero-actions" delay={240}>
          <a className="button button-primary" href="#contact">Partner with Starixis</a>
          <a className="button button-secondary" href="#vision">Explore our vision</a>
        </Reveal>
      </div>
      <div className="hero-scroll">
        <a href="#problem" aria-label="Scroll to next section">
          <span className="hero-scroll-track"><span className="hero-scroll-dot" /></span>
          <span className="hero-scroll-label">Scroll</span>
        </a>
      </div>
    </header>
  );
}
