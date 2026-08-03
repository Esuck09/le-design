import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const asset = (path: string) => `${basePath}${path}`;

const projects = [
  {
    number: "01",
    title: "Taman Residence Trees",
    subtitle: "Soft modern sanctuary",
    type: "Residential concept",
    location: "Shah Alam, Selangor",
    description:
      "A quiet composition of warm neutrals, clean storage and softly illuminated details - designed to make everyday rituals feel beautifully resolved.",
    mainImage: "/projects/taman-entry.jpg",
    detailImage: "/projects/taman-altar.jpg",
    mainAlt: "Custom full-height entry storage at Taman Residence Trees",
    detailAlt: "Minimal altar and fluted wall panel at Taman Residence Trees",
  },
  {
    number: "02",
    title: "CK & Jess",
    subtitle: "Playful calm",
    type: "Residential concept",
    location: "Selangor, Malaysia",
    description:
      "A bright, personality-led home that balances collectables and colour with a calm architectural shell, warm light and generous built-ins.",
    mainImage: "/projects/ckj-living.jpg",
    detailImage: "/projects/ckj-studio.jpg",
    mainAlt: "Warm modern living and kitchen space for CK and Jess",
    detailAlt: "Bright collectables studio designed for CK and Jess",
  },
  {
    number: "03",
    title: "Mr Teoh Residence",
    subtitle: "Sculpted after dark",
    type: "Residential concept",
    location: "Selangor, Malaysia",
    description:
      "Dark stone, bronze light and precise joinery bring a cinematic edge to this home, with every display considered as part of the architecture.",
    mainImage: "/projects/teoh-bar.jpg",
    detailImage: "/projects/teoh-foyer.jpg",
    mainAlt: "Illuminated home bar and display at Mr Teoh Residence",
    detailAlt: "Stone feature wall and entrance foyer at Mr Teoh Residence",
  },
];

const services = [
  {
    number: "01",
    title: "Space planning",
    body: "We translate how you live into a clear, functional plan before a single finish is chosen.",
  },
  {
    number: "02",
    title: "Interior design",
    body: "Mood, material, lighting and custom details come together in one coherent visual direction.",
  },
  {
    number: "03",
    title: "Build & fit-out",
    body: "Our team carries the concept through construction, coordination and the final on-site details.",
  },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Le Design Concept home">
          <Image
            src={asset("/brand/le-design-wordmark.png")}
            alt="Le Design Concept"
            width="820"
            height="250"
          />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#studio">Studio</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
        </nav>

        <a className="header-cta" href="#contact">
          Start a project <span aria-hidden="true">↗</span>
        </a>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            <a href="#studio">Studio</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#contact">Start a project</a>
          </nav>
        </details>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow reveal reveal-1">Interior design · Build · Selangor</p>
          <h1 id="hero-title" className="reveal reveal-2">
            Interior,
            <br />
            <em>considered.</em>
          </h1>
          <div className="hero-copy-bottom reveal reveal-3">
            <p>
              Thoughtful spaces, expressive details and a build process handled
              from first idea to final fitting.
            </p>
            <a className="circle-link" href="#projects" aria-label="Explore selected projects">
              <span>Explore</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-visual reveal reveal-2">
          <div className="hero-arch" aria-hidden="true" />
          <figure>
            <Image
              src={asset("/projects/teoh-bar.jpg")}
              alt="Warmly illuminated custom bar at Mr Teoh Residence"
              width="1260"
              height="838"
              fetchPriority="high"
            />
            <figcaption>
              <span>Featured residence</span>
              <span>Shah Alam · 2026</span>
            </figcaption>
          </figure>
          <p className="hero-index" aria-hidden="true">L / D</p>
        </div>
      </section>

      <section className="studio" id="studio" aria-labelledby="studio-title">
        <div className="section-label light-label">
          <span>Our point of view</span>
          <span>Le Design Concept</span>
        </div>
        <div className="studio-grid">
          <h2 id="studio-title">
            Designed for the way life <em>really happens.</em>
          </h2>
          <div className="studio-copy">
            <p>
              We are an interior design and build studio creating homes with
              clarity, character and lasting function.
            </p>
            <p>
              Our approach is personal and practical: listen closely, design
              with intention, then carry every detail through to completion.
            </p>
          </div>
        </div>
        <div className="process-line" aria-label="Our three-part approach">
          <div><span>01</span><strong>Listen</strong></div>
          <div><span>02</span><strong>Design</strong></div>
          <div><span>03</span><strong>Build</strong></div>
        </div>
      </section>

      <section className="projects" id="projects" aria-labelledby="projects-title">
        <div className="section-label">
          <span>Selected work</span>
          <span>2026 collection</span>
        </div>
        <div className="projects-heading">
          <h2 id="projects-title">Spaces with a point of view.</h2>
          <p>
            Three distinct homes. One shared belief: the best interiors feel as
            good as they look.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-media">
                <div className="project-main-image">
                  <Image
                    src={asset(project.mainImage)}
                    alt={project.mainAlt}
                    width="1260"
                    height="838"
                    loading="lazy"
                  />
                </div>
                <div className="project-detail-image">
                  <Image
                    src={asset(project.detailImage)}
                    alt={project.detailAlt}
                    width="1260"
                    height="838"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="project-info">
                <div className="project-number">{project.number}</div>
                <div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-location">
                  <span>{project.location}</span>
                  <span aria-hidden="true">↗</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services" id="services" aria-labelledby="services-title">
        <div className="section-label">
          <span>What we do</span>
          <span>End-to-end service</span>
        </div>
        <div className="services-heading">
          <h2 id="services-title">One studio.<br /><em>Every detail.</em></h2>
          <p>
            A single creative and construction team means fewer handovers,
            clearer decisions and a result that stays true to the concept.
          </p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-break" aria-label="Design promise">
        <Image
          src={asset("/projects/teoh-foyer.jpg")}
          alt="Stone entrance feature designed by Le Design Concept"
          width="1260"
          height="838"
          loading="lazy"
        />
        <div className="feature-overlay" />
        <blockquote>
          <p>Good design is felt<br />before it is explained.</p>
          <cite>Le Design Concept</cite>
        </blockquote>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="contact-topline">
          <span>Have a space in mind?</span>
          <span>Let&apos;s talk.</span>
        </div>
        <h2 id="contact-title">Make room for<br /><em>something better.</em></h2>
        <div className="contact-grid">
          <div className="contact-actions">
            <a
              className="primary-contact"
              href="https://wa.me/60122948408"
              target="_blank"
              rel="noreferrer"
            >
              Start on WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a href="mailto:cheyenne.chy924@gmail.com">
              cheyenne.chy924@gmail.com
            </a>
            <a href="tel:+60122948408">+60 12 294 8408</a>
          </div>
          <address>
            No. 36, 1st Floor, Jalan Kemuning Prima C33/C<br />
            Seksyen 33, 40400 Shah Alam, Selangor
          </address>
        </div>
      </section>

      <footer>
        <a className="footer-brand" href="#top" aria-label="Back to top">
          <Image
            src={asset("/brand/le-design-wordmark.png")}
            alt="Le Design Concept"
            width="820"
            height="250"
          />
        </a>
        <p>Interior design · Build · Malaysia</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
