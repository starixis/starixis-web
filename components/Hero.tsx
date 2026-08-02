import { IntelligenceNetwork } from "./IntelligenceNetwork";

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
        <p className="eyebrow hero-rise">Retail technology for the physical world</p>
        <h1 className="hero-rise" style={{ animationDelay: "80ms" }}>Digitally transforming physical shopping.</h1>
        <p className="hero-lede hero-rise" style={{ animationDelay: "160ms" }}>
          Starixis is building the digital commerce layer for physical retail — connecting shoppers, retailers and shopping destinations through more discoverable, convenient and connected experiences.
        </p>
        <div className="hero-actions hero-rise" style={{ animationDelay: "240ms" }}>
          <a className="button button-primary" href="#contact">Partner with Starixis</a>
          <a className="button button-secondary" href="#vision">Explore our vision</a>
        </div>
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
