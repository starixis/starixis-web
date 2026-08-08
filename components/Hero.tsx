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
        <p className="eyebrow hero-rise">Connected physical retail</p>
        <h1 className="hero-rise" style={{ animationDelay: "80ms" }}>The digital commerce layer for physical retail.</h1>
        <p className="hero-lede hero-rise" style={{ animationDelay: "160ms" }}>
          Starixis is developing technology designed to help physical retail evolve for a more connected world.
        </p>
        <div className="hero-actions hero-rise" style={{ animationDelay: "240ms" }}>
          <a className="button button-primary" href="#partnership">Discuss a partnership</a>
          <a className="button button-secondary" href="#investors">For investors</a>
        </div>
      </div>
      <div className="hero-scroll">
        <a href="#vision" aria-label="Scroll to next section">
          <span className="hero-scroll-track"><span className="hero-scroll-dot" /></span>
          <span className="hero-scroll-label">Scroll</span>
        </a>
      </div>
    </header>
  );
}
