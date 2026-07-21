"use client";

import { FormEvent, useState } from "react";

const capabilities = [
  {
    number: "01",
    title: "Discover",
    text: "Research, observation and evidence that reveal what people need, how services perform and where the real opportunities lie.",
    tags: "Research · Human insight · Context",
  },
  {
    number: "02",
    title: "Clarify",
    text: "Strategy, information architecture, journey mapping and service blueprints that make complex situations understandable.",
    tags: "Strategy · Synthesis · Alignment",
  },
  {
    number: "03",
    title: "Design",
    text: "Accessible products and services shaped around real human needs, organizational realities and measurable outcomes.",
    tags: "UX · Service design · Accessibility",
  },
  {
    number: "04",
    title: "Transform",
    text: "Practical guidance for digital transformation, responsible AI adoption and organizational change that lasts.",
    tags: "AI · Innovation · Change",
  },
  {
    number: "05",
    title: "Measure",
    text: "Validation, evaluation and continuous learning that improve decisions, reduce risk and strengthen capability.",
    tags: "Testing · Outcomes · Learning",
  },
];

const principles = [
  ["Start with Humans", "Understand the people behind every service, product, process and decision."],
  ["Seek Evidence", "Replace assumptions with research, observation, experimentation and measurable insight."],
  ["See the Big Picture", "Consider the wider context, relationships and consequences before changing one part."],
  ["Create Clarity", "Organize complexity into shared understanding so people can move forward with confidence."],
  ["Augment Intelligence", "Use AI and technology to strengthen human judgment—not replace it."],
  ["Design for Impact", "Measure success through better decisions, better services and meaningful experiences."],
];

export default function Home() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
    });

    if (response.ok) {
      form.reset();
      setStatus("sent");
      return;
    }

    setStatus("error");
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ergonaute Consulting home">
          <img src="/ergonaute-logo.svg" alt="Ergonaute Consulting" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">What we do</a>
          <a href="#approach">How we work</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Human-centred strategy for the AI era</p>
          <h1>
            Human Insight.<br />
            <span>Intelligent Decisions.</span>
          </h1>
          <p className="hero-lede">
            We help organizations transform complexity into clarity—enabling better decisions and creating meaningful experiences.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#services">Explore how we help</a>
            <a className="text-link" href="#contact">Start a conversation <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="constellation" aria-label="Information becoming understanding">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="signal s1" />
          <span className="signal s2 orange" />
          <span className="signal s3" />
          <span className="signal s4" />
          <span className="signal s5 orange" />
          <span className="signal s6" />
          <span className="signal s7 orange" />
          <span className="signal s8" />
          <div className="insight-core">
            <span>insight</span>
            <strong>clarity</strong>
          </div>
        </div>
      </section>

      <section className="belief-band">
        <p>Our belief</p>
        <h2>Understanding people is the shortest path to intelligent decisions.</h2>
      </section>

      <section className="section intro" aria-labelledby="complexity-title">
        <div>
          <p className="section-label">Why Ergonaute</p>
          <h2 id="complexity-title">Complexity is not the problem. Unclear decisions are.</h2>
        </div>
        <div className="intro-copy">
          <p>
            Organizations face more information, more technology and more pressure to act quickly. AI expands the possibilities—but it does not decide what matters.
          </p>
          <p>
            Ergonaute brings human insight, evidence, strategy and design together so leaders can understand the situation, align people and move forward with confidence.
          </p>
        </div>
        <div className="outcome-row">
          <article><span>01</span><h3>Better decisions</h3><p>Evidence and shared understanding reduce uncertainty.</p></article>
          <article><span>02</span><h3>Better services</h3><p>Human needs connect to policy, process and technology.</p></article>
          <article><span>03</span><h3>Meaningful experiences</h3><p>Clarity and care improve outcomes for everyone involved.</p></article>
        </div>
      </section>

      <section className="section services" id="services" aria-labelledby="services-title">
        <div className="section-heading">
          <div>
            <p className="section-label">What we do</p>
            <h2 id="services-title">From understanding to lasting impact.</h2>
          </div>
          <p>Five connected capabilities, adapted to the challenge—not imposed as a rigid process.</p>
        </div>
        <div className="capability-list">
          {capabilities.map((capability) => (
            <article key={capability.title}>
              <span className="cap-number">{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
              <small>{capability.tags}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section approach" id="approach" aria-labelledby="approach-title">
        <div className="approach-intro">
          <p className="section-label">How we work</p>
          <h2 id="approach-title">A disciplined way to create clarity.</h2>
          <p>Our principles guide every research engagement, workshop, service redesign and AI initiative.</p>
        </div>
        <div className="principle-grid">
          {principles.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ai-section">
        <div className="ai-statement">
          <p className="section-label light">Our philosophy</p>
          <h2>Technology and AI should amplify human insight—not replace it.</h2>
        </div>
        <div className="ai-copy">
          <p>We help organizations introduce AI where it improves human capability, service quality and decision confidence.</p>
          <ul>
            <li>Frame the right problem before selecting technology</li>
            <li>Keep accountability clear in high-impact decisions</li>
            <li>Design for trust, accessibility and responsible use</li>
            <li>Build internal capability—not dependency</li>
          </ul>
        </div>
      </section>

      <section className="section about" id="about" aria-labelledby="about-title">
        <div className="about-mark" aria-hidden="true">
          <span className="about-dot orange" />
          <span className="about-dot blue" />
          <span className="about-dot sage" />
          <strong>35+</strong>
          <small>years of practice</small>
        </div>
        <div className="about-copy">
          <p className="section-label">About Ergonaute</p>
          <h2 id="about-title">Deep experience. A clear point of view.</h2>
          <p>
            Ergonaute Consulting brings more than three decades of experience across user experience, cognitive ergonomics, service design, information architecture, accessibility, organizational transformation and education.
          </p>
          <p>
            We work with public institutions and complex organizations that need to understand people, align stakeholders and turn ambitious change into services that work.
          </p>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="contact-copy">
          <p className="section-label light">Start a conversation</p>
          <h2 id="contact-title">What complexity are you trying to clarify?</h2>
          <p>Tell us a little about the challenge. We’ll respond personally and explore whether Ergonaute is the right partner.</p>
          <p className="form-note">Your message is sent privately to Ergonaute and is used only to respond to your inquiry.</p>
        </div>
        {status === "sent" ? (
          <div className="success-message" role="status">
            <span>✓</span>
            <h3>Thank you.</h3>
            <p>Your message has been sent to Ergonaute. We’ll be in touch soon.</p>
            <button type="button" onClick={() => setStatus("idle")}>Send another message</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="honeypot" aria-hidden="true">
              <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
            </div>
            <div className="field-row">
              <label>First and last name<input name="name" required autoComplete="name" /></label>
              <label>Email address<input name="email" type="email" required autoComplete="email" /></label>
            </div>
            <label>Organization<input name="organization" autoComplete="organization" /></label>
            <label>What would you like to discuss?
              <select name="topic" defaultValue="">
                <option value="" disabled>Select a topic</option>
                <option>Research and human insight</option>
                <option>Experience or service design</option>
                <option>AI and digital transformation</option>
                <option>Accessibility</option>
                <option>Strategy, facilitation or training</option>
                <option>Something else</option>
              </select>
            </label>
            <label>Tell us about the challenge<textarea name="message" rows={5} required /></label>
            <label className="consent"><input type="checkbox" required /><span>I consent to Ergonaute using this information to respond to my inquiry.</span></label>
            {status === "error" && <p className="form-error" role="alert">We couldn’t send your message. Please try again in a moment.</p>}
            <button className="button button-orange" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </section>

      <footer>
        <img src="/ergonaute-logo.svg" alt="Ergonaute Consulting" />
        <p>Human Insight. Intelligent Decisions.</p>
        <div><a href="#top">Back to top ↑</a><span>© 2026 Ergonaute Consulting. Established 2002.</span></div>
      </footer>
    </main>
  );
}
