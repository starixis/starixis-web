import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="shell section" aria-labelledby="contact-heading">
      <div className="contact-grid">
        <div className="contact-copy">
          <Reveal className="eyebrow">Get in touch</Reveal>
          <Reveal as="h2" id="contact-heading" className="heading">
            Tell us how we can work together.
          </Reveal>
          <Reveal as="p" className="body-copy">
            We welcome conversations with retailers, shopping destination operators, technology partners and investors interested in the digital future of physical retail.
          </Reveal>
          <Reveal className="contact-meta">
            <div>
              <a href="https://www.linkedin.com/company/starixis" target="_blank" rel="noopener noreferrer">LinkedIn →</a>
            </div>
          </Reveal>
        </div>
        <Reveal className="email-panel">
          <p className="eyebrow">Partnerships</p>
          <h3>Discuss a partnership</h3>
          <p>Share a brief introduction to your organisation and where our interests may align.</p>
          <a className="email-link" href="mailto:contact@starixis.com">contact@starixis.com</a>
        </Reveal>
      </div>
    </section>
  );
}
