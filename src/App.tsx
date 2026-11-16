import {
  ArrowUpRight,
  BriefcaseBusiness,
  Clock,
  Code2,
  Facebook,
  Globe2,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Menu,
  Music2,
  Sparkles,
  Target,
  X,
} from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    number: '01',
    title: 'Multibest ICT',
    type: 'Digital solutions',
    description: 'A confident digital home for a technology brand helping businesses move forward.',
    url: 'https://multibestict.netlify.app/',
    className: 'project-multibest',
    image: '/images/23.png',
  },
  {
    number: '02',
    title: 'Smyt Wears',
    type: 'Fashion & commerce',
    description: 'A sharp, culture-led online presence designed to make every look feel intentional.',
    url: 'https://smytwears.com/',
    className: 'project-smyt',
    image: '/images/2.png',
  },
  {
    number: '03',
    title: 'Heads Up Nigeria',
    type: 'Corporate brand',
    description: 'A clear, credible platform built to give a growing organisation a stronger voice.',
    url: 'https://headsupnigerialimited.com',
    className: 'project-headsup',
    image: '/images/1.png',
  },
  {
    number: '04',
    title: 'Jobnix',
    type: 'Career platform',
    description: 'A practical digital experience connecting ambition with the next right opportunity.',
    url: 'https://jobnix.ng',
    className: 'project-jobnix',
    image: '/images/Screenshot_2026-11-16_153030.png',
  },
];

const services = [
  {
    icon: Code2,
    number: '01',
    title: 'Web development',
    text: 'Fast, responsive websites that turn attention into action.',
    points: [
      'Business & portfolio websites',
      'E-commerce stores',
      'Landing pages that convert',
      'Speed, SEO & mobile-first builds',
    ],
  },
  {
    icon: Target,
    number: '02',
    title: 'Brand strategy',
    text: 'Clear positioning and direction for brands ready to be remembered.',
    points: [
      'Brand positioning & messaging',
      'Audience & market research',
      'Visual identity direction',
      'Launch & growth roadmaps',
    ],
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Brand marketing',
    text: 'Ideas and campaigns that give your brand a reason to be chosen.',
    points: [
      'Campaign concepts & content',
      'Social media presence',
      'Digital growth strategy',
      'Storytelling that sticks',
    ],
  },
];

function handleMove(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a
          className="wordmark"
          href="#top"
          aria-label="Emmanuel Edet Bassey home"
        >
          <img
            src="/logo-mark.svg"
            alt="Emmanuel Edet Bassey logo"
            className="wordmark-mark"
          />
          <span>Emmanuel Edet Bassey</span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              Independent creative partner · Lagos, Nigeria
            </p>

            <h1>
              I build digital<br />
              <em>experiences</em><br />
              that mean more.
            </h1>

            <p className="hero-intro">
              I'm Emmanuel Edet Bassey — a brand marketer, web developer and
              brand strategist helping ambitious businesses become clear,
              credible and impossible to ignore.
            </p>

            <div className="hero-actions">
              <a href="#work" className="button button-dark">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a href="#about" className="text-link">
                More about me <span>↓</span>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <img
                src="/images/WhatsApp_Image_2026-11-16_at_15.14.46.jpeg"
                alt="Emmanuel Edet Bassey in a creative studio"
              />
              <div className="portrait-overlay" />
              <div className="portrait-label">
                <span>Currently building</span>
                <strong>Brands with backbone.</strong>
              </div>
            </div>

            <div className="shape shape-one" />
            <div className="shape shape-two" />

            <div className="hero-stamp">
              <span>EB</span>
              <small>Ideas<br />in motion</small>
            </div>
          </div>
        </section>

        <section className="marquee">
          <div>
            Strategy <span>✦</span> Design <span>✦</span> Development
            <span>✦</span> Growth <span>✦</span> Strategy <span>✦</span> Design
            <span>✦</span>
          </div>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-kicker">
            <span>01</span>
            <span className="line" />
            <span>About me</span>
          </div>

          <div className="about-grid">
            <h2>
              Good brands don't just show up.<br />
              <em>They stand for something.</em>
            </h2>

            <div className="about-text">
              <p>
                I work at the intersection of creative thinking and digital
                execution. That means I can help you find the right story,
                shape the right identity, and build the right experience to
                bring it to life.
              </p>

              <p>
                Whether you're launching from scratch or ready for your next
                chapter, I bring clarity, taste and momentum to the process.
              </p>

              <a
                className="circle-link"
                href="#contact"
                aria-label="Start a conversation"
              >
                <ArrowUpRight size={24} />
              </a>
            </div>
          </div>
        </section>

        <section className="services-modern" id="services">
          <div className="services-inner">
            <div className="section-kicker">
              <span>02</span>
              <span className="line" />
              <span>What I do</span>
            </div>

            <div className="sm-heading">
              <h2>
                From first thought
                <br />
                to <em>full impact.</em>
              </h2>

              <div className="sm-heading-side">
                <p>
                  One creative partner. Three ways to move your brand forward.
                </p>

                <a href="#contact" className="sm-pill">
                  Start a project <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <div className="sm-grid">
              {services.map(({ icon: Icon, number, title, text, points }) => (
                <article
                  className="sm-card"
                  key={title}
                  onMouseMove={handleMove}
                >
                  <div className="sm-card-top">
                    <span className="sm-number">{number}</span>
                    <span className="sm-icon">
                      <Icon size={26} strokeWidth={1.5} />
                    </span>
                  </div>

                  <h3>{title}</h3>
                  <p className="sm-text">{text}</p>

                  <ul className="sm-points">
                    {points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="sm-link"
                    aria-label={`Talk about ${title}`}
                  >
                    <span>Let's talk</span>
                    <span className="sm-arrow">
                      <ArrowUpRight size={18} />
                    </span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="work section-wrap" id="work">
          <div className="section-kicker">
            <span>03</span>
            <span className="line" />
            <span>Selected work</span>
          </div>

          <div className="work-heading">
            <h2>
              A few things<br />
              <em>I've shaped.</em>
            </h2>
            <span className="work-note">
              Tap into a project<br />
              to see it in the wild ↘
            </span>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <a
                className={`project-card ${project.className}`}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                key={project.title}
              >
                <div className="project-number">{project.number}</div>

                <div className="project-icon">
                  <Globe2 size={19} />
                </div>

                <div
                  className="project-image"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                <div className="project-content">
                  <span>{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="project-link">
                    Visit project <ArrowUpRight size={15} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-card">
            <div className="contact-decoration">
              <BriefcaseBusiness size={35} strokeWidth={1.2} />
            </div>

            <div className="contact-main">
              <p className="eyebrow">
                <span className="eyebrow-dot" />
                Have a good one?
              </p>

              <h2>
                Let's make<br />
                <em>something matter.</em>
              </h2>

              <p className="contact-copy">
                Tell me what you're building, what's not working, or where you
                want to go next.
              </p>

              <div className="contact-actions">
                <a
                  href="https://wa.me/2349010947847"
                  target="_blank"
                  rel="noreferrer"
                  className="button button-light"
                >
                  <MessageCircle size={17} />
                  Chat on WhatsApp
                  <ArrowUpRight size={17} />
                </a>

                <a
                  href="mailto:basseyanikan22@gmail.com"
                  className="button button-outline"
                >
                  <Mail size={17} />
                  Send an email
                </a>
              </div>
            </div>

            <aside className="contact-info">
              <a
                className="ci-row"
                href="https://wa.me/2349010947847"
                target="_blank"
                rel="noreferrer"
              >
                <span className="ci-icon">
                  <MessageCircle size={20} strokeWidth={1.6} />
                </span>
                <span className="ci-text">
                  <small>WhatsApp</small>
                  <strong>+234 901 094 7847</strong>
                </span>
                <ArrowUpRight className="ci-arrow" size={18} />
              </a>

              <a
                className="ci-row"
                href="mailto:basseyanikan22@gmail.com"
              >
                <span className="ci-icon">
                  <Mail size={20} strokeWidth={1.6} />
                </span>
                <span className="ci-text">
                  <small>Email</small>
                  <strong>basseyanikan22@gmail.com</strong>
                </span>
                <ArrowUpRight className="ci-arrow" size={18} />
              </a>

              <div className="ci-row ci-static">
                <span className="ci-icon">
                  <Clock size={20} strokeWidth={1.6} />
                </span>
                <span className="ci-text">
                  <small>Availability</small>
                  <strong>Open Monday – Friday</strong>
                </span>
                <span className="ci-open">
                  <i /> Open
                </span>
              </div>

              <div className="ci-row ci-static">
                <span className="ci-text">
                  <small>Follow me</small>
                  <strong>@emmbassey1611</strong>
                </span>

                <span className="ci-socials">
                  <a
                    href="https://www.instagram.com/emmbassey1611"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="https://www.facebook.com/emmbassey1611"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@emmabassey1611"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="TikTok"
                  >
                    <Music2 size={18} />
                  </a>
                </span>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <span>© 2026 Emmanuel Edet Bassey</span>
        <span>@emmabassey1611 · Built with intention.</span>

        <div className="socials">
          <a
            href="https://www.instagram.com/emmbassey1611"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={17} />
          </a>
          <a
            href="https://www.facebook.com/emmbassey1611"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <Facebook size={17} />
          </a>
          <a
            href="https://www.tiktok.com/@emmabassey1611"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
          >
            <Music2 size={17} />
          </a>
          <a href="#contact" aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
