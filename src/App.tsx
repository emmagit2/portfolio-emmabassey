import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Globe2,
  Linkedin,
  Mail,
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
    title: 'Jobnix',
    type: 'Career platform',
    description: 'A practical digital experience connecting ambition with the next right opportunity.',
    url: 'https://jobnix.ng',
    className: 'project-jobnix',
    image: '/images/Screenshot_2026-11-16_153030.png',
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
    title: 'Multibest ICT',
    type: 'Digital solutions',
    description: 'A confident digital home for a technology brand helping businesses move forward.',
    url: 'https://multibestict.netlify.app/',
    className: 'project-multibest',
    image: '/images/23.png',
  },
];

const services = [
  {
    icon: Code2,
    title: 'Web development',
    text: 'Fast, responsive websites that turn attention into action.',
  },
  {
    icon: Target,
    title: 'Brand strategy',
    text: 'Clear positioning and direction for brands ready to be remembered.',
  },
  {
    icon: Sparkles,
    title: 'Brand marketing',
    text: 'Ideas and campaigns that give your brand a reason to be chosen.',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Emmanuel Edet Absey home">
          <span className="wordmark-mark">EE</span>
          <span>Emmanuel Edet Absey</span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Independent creative partner · Lagos, Nigeria</p>
            <h1>I build digital<br /><em>experiences</em><br />that mean more.</h1>
            <p className="hero-intro">I&apos;m Emmanuel Edet Absey — a brand marketer, web developer and brand strategist helping ambitious businesses become clear, credible and impossible to ignore.</p>
            <div className="hero-actions">
              <a href="#work" className="button button-dark">Explore my work <ArrowUpRight size={17} /></a>
              <a href="#about" className="text-link">More about me <span>↓</span></a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <img src="/images/WhatsApp_Image_2026-11-16_at_15.14.46.jpeg" alt="Emmanuel Edet Absey in a creative studio" />
              <div className="portrait-overlay" />
              <div className="portrait-label"><span>Currently building</span><strong>Brands with backbone.</strong></div>
            </div>
            <div className="shape shape-one" />
            <div className="shape shape-two" />
            <div className="hero-stamp"><span>EB</span><small>Ideas<br />in motion</small></div>
          </div>
        </section>

        <section className="marquee"><div>Strategy <span>✦</span> Design <span>✦</span> Development <span>✦</span> Growth <span>✦</span> Strategy <span>✦</span> Design <span>✦</span></div></section>

        <section className="about section-wrap" id="about">
          <div className="section-kicker"><span>01</span><span className="line" /><span>About me</span></div>
          <div className="about-grid">
            <h2>Good brands don&apos;t just show up.<br /><em>They stand for something.</em></h2>
            <div className="about-text">
              <p>I work at the intersection of creative thinking and digital execution. That means I can help you find the right story, shape the right identity, and build the right experience to bring it to life.</p>
              <p>Whether you&apos;re launching from scratch or ready for your next chapter, I bring clarity, taste and momentum to the process.</p>
              <a className="circle-link" href="#contact" aria-label="Start a conversation"><ArrowUpRight size={24} /></a>
            </div>
          </div>
        </section>

        <section className="services section-wrap" id="services">
          <div className="section-kicker"><span>02</span><span className="line" /><span>What I do</span></div>
          <div className="services-heading"><h2>From first thought<br />to <em>full impact.</em></h2><p>One creative partner. Three ways to move your brand forward.</p></div>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }, index) => (
              <article className="service-card" key={title}>
                <div className="service-top"><span>0{index + 1}</span><Icon size={25} strokeWidth={1.5} /></div>
                <h3>{title}</h3><p>{text}</p><span className="service-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="work section-wrap" id="work">
          <div className="section-kicker"><span>03</span><span className="line" /><span>Selected work</span></div>
          <div className="work-heading"><h2>A few things<br /><em>I&apos;ve shaped.</em></h2><span className="work-note">Tap into a project<br />to see it in the wild ↘</span></div>
          <div className="project-grid">
            {projects.map((project) => (
              <a className={`project-card ${project.className}`} href={project.url} target="_blank" rel="noreferrer" key={project.title}>
                <div className="project-number">{project.number}</div><div className="project-icon"><Globe2 size={19} /></div><div className="project-image" style={{ backgroundImage: `url(${project.image})` }} />
                <div className="project-content"><span>{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><span className="project-link">Visit project <ArrowUpRight size={15} /></span></div>
              </a>
            ))}
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-card">
            <div className="contact-decoration"><BriefcaseBusiness size={35} strokeWidth={1.2} /></div>
            <p className="eyebrow"><span className="eyebrow-dot" /> Have a good one?</p>
            <h2>Let&apos;s make<br /><em>something matter.</em></h2>
            <p className="contact-copy">Tell me what you&apos;re building, what&apos;s not working, or where you want to go next.</p>
            <a href="mailto:hello@emmanuelbassey.com" className="button button-light"><Mail size={17} /> Start a conversation <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><span>© 2026 Emmanuel Edet Absey</span><span>@emmabassey1611 · Built with intention.</span><div className="socials"><a href="https://www.tiktok.com/@emmabassey1611" target="_blank" rel="noreferrer" aria-label="TikTok"><Music2 size={17} /></a><a href="#contact" aria-label="LinkedIn"><Linkedin size={17} /></a></div></footer>
    </div>
  );
}

export default App;
