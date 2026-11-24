"use client";
import { useState } from "react";

type Skill = {
  name: string;
  logo?: string;
  logos?: string[];
  group: string;
  symbol?: string;
};

const skills: Skill[] = [
  { name: "HTML", logo: "https://cdn.simpleicons.org/html5/E34F26", group: "WEB" },
  { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E", group: "WEB" },
  { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB", group: "WEB" },
  { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/FFFFFF", group: "WEB" },

  { name: "C", logo: "https://cdn.simpleicons.org/c/A8B9CC", group: "CODE" },
  { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus/00599C", group: "CODE" },
  { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB", group: "CODE" },

  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", group: "TOOLS" },
  { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/FFFFFF", group: "TOOLS" },
  { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032", group: "TOOLS" },
  { name: "GitHub", logo: "https://cdn.simpleicons.org/github/FFFFFF", group: "TOOLS" },

  { name: "Video Editing", symbol: "▶", group: "CREATIVE" },
  { name: "Photo Editing", symbol: "✦", group: "CREATIVE" },
  { name: "AI Tools", symbol: "✧", group: "CREATIVE" },

  { name: "Creative Thinking", symbol: "✦", group: "PERSONAL" },
  { name: "Teamwork", symbol: "♧", group: "PERSONAL" },
  { name: "Problem Solving", symbol: "⌘", group: "PERSONAL" },
];
const navItems = [["About","about"],["Skills","skills"],["Journey","achievements"],["Projects","projects"],["Contact","contact"]];
const journey = [
  ["01","HACKATHON PROJECT","Smart India Hackathon 2026","Contributed to MediIndia Care with THE WISERZ team, focusing on the administrative dashboard, provider and treatment management, testing and error handling.","MediIndia Care"],
  ["02","PRACTICAL LEARNING","Learning by building","Practising programming and modern web development while exploring JavaScript, React and Next.js.","Continuous learning"],
  ["03","STUDENT LIFE","Collaboration & creativity","Interested in student activities, teamwork, communication and creative problem-solving.","Campus involvement"],
];

export default function Home() {
const [dark, setDark] = useState(true);
const [menuOpen, setMenuOpen] = useState(false);

const toggleTheme = () => {
  setDark(prev => !prev);
};

const toggleMenu = () => {
  setMenuOpen(prev => !prev);
};
  const [filter,setFilter] = useState("ALL");
  const filters = ["ALL","WEB","CODE","TOOLS","CREATIVE","PERSONAL"];
  const shown = filter === "ALL" ? skills : skills.filter(s=>s.group===filter);

  // Scroll to the real section position, accounting for the sticky navbar.
  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    setMenuOpen(false);

    const target = document.getElementById(id);
    if (!target) return;

    window.history.replaceState(null, "", `#${id}`);
    window.setTimeout(() => {
      const navbar = document.querySelector(".nav");
      const navHeight = navbar?.getBoundingClientRect().height ?? 84;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 18;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }, 80);
  };

  return (
    <main className={`site ${dark?"dark":"light"}`} id="top">
      <div className="ambient ambient-one"/><div className="ambient ambient-two"/><div className="ambient ambient-three"/>
      <nav className="nav">
        <a href="#top" className="brand" onClick={()=>setMenuOpen(false)}><span className="brand-avatar">EJ</span><b>EKANSH JINDAL</b><span className="brand-chevron"></span></a>
        <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?"CLOSE −":"MENU +"}</button>
        <div className={`nav-links ${menuOpen?"open":""}`}>{navItems.map(([label,id])=><a key={id} href={`#${id}`} onClick={(event)=>handleNavClick(event,id)}>{label}</a>)}</div>
    <button
  type="button"
  className="theme-button"
  onClick={toggleTheme}
  aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
  title={dark ? "Switch to light mode" : "Switch to dark mode"}
>
  <span className="theme-icon">
    {dark ? "☾" : "☀"}
  </span>
  <span className="theme-orbit"></span>
</button>
      </nav>

      <section className="hero" id="home">
        <div className="hero-topline"><span>PORTFOLIO / 2026</span><span>COMPUTER SCIENCE · INDIA</span></div>
        <div className="hero-copy">
          <span className="eyebrow"><i/> B.TECH CSE STUDENT · CREATIVE BUILDER</span>
          <h1>IDEAS INTO<br/><span className="outline">DIGITAL</span> <span className="accent">REALITY.</span></h1>
          <p>Hey, I&apos;m <strong>Ekansh Jindal</strong> — a Computer Science Engineering student exploring technology, creative work and meaningful digital experiences.</p>
          <div className="hero-actions"><a className="primary-button" href="#projects">Explore my work ↗</a><a className="text-link" href="#contact">Let&apos;s connect ↗</a></div>
          <div className="hero-meta"><span><b>01</b> STUDENT DEVELOPER</span><span><b>02</b> TECH + CREATIVITY</span></div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="photo-card">
            <div className="photo-top"><span>EKANSH / PROFILE</span><span className="available">● AVAILABLE TO CONNECT</span></div>
            <div className="photo-placeholder"><div className="photo-glow"/><strong>EJ</strong><span></span></div>
            <div className="photo-bottom"><b>EKANSH JINDAL</b><span>Computer Science & Engineering</span></div>
          </div>
          <span className="float-tag tag-one">&lt;/&gt; BUILD</span><span className="float-tag tag-two">✳ CREATE</span><span className="float-tag tag-three">AI · WEB · DESIGN</span>
        </div>
        <div className="hero-footer"><div><small>BASED IN</small><b>Bathinda, Punjab, India</b></div><a href="#about">SCROLL TO EXPLORE ↓</a><div className="hero-socials"><a href="https://linkedin.com/in/ekanshjindal1" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="https://github.com/bhaveshbansal01/SIH-HACKATHON-2K26-THE-WISERZ" target="_blank" rel="noreferrer">GITHUB ↗</a></div></div>
      </section>

      <section className="section" id="about">
        <div className="section-heading"><span className="kicker">01 / ABOUT</span><h2>A Little About <em>Me.</em></h2><p>Curious by nature. Learning through practice. Creating with purpose.</p></div>
        <div className="about-layout">
          <article className="panel about-main"><span className="kicker">● THE PERSON BEHIND THE SCREEN</span><h3>Student mindset.<br/><em>Builder energy.</em></h3>
            <p>I&apos;m <strong>Ekansh Jindal</strong>, a B.Tech Computer Science and Engineering student at Giani Zail Singh Campus College of Engineering and Technology, MRSPTU. I enjoy exploring how technology works and turning what I learn into practical work.</p>
            <p>Alongside coding, I&apos;m interested in AI tools, video editing, photo editing and creative problem-solving. I believe consistent practice and collaboration make every project a learning opportunity.</p>
            <blockquote>“Learn something. Build something. Make the next version better.”</blockquote>
          </article>
          <div className="about-side"><article className="panel info-card"><span>⌘</span><small className="kicker">01 / TECH</small><h3>What I&apos;m exploring</h3><p>Programming, modern web development, AI tools and useful digital experiences.</p></article><article className="panel info-card"><span>✳</span><small className="kicker">02 / CREATIVE</small><h3>Beyond coding</h3><p>Visual storytelling, editing, teamwork and bringing fresh ideas into the things I create.</p></article></div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading centered"><span className="kicker">02 / TOOLKIT</span><h2>Things I <em>work with.</em></h2><p>A growing mix of technologies, creative tools and skills.</p></div>
        <div className="filters">
  {filters.map((f) => (
    <button
      type="button"
      key={f}
      className={filter === f ? "selected" : ""}
      onClick={() => setFilter(f)}
    >
      {f}
    </button>
  ))}
</div>
        <div className="skills-grid">{shown.map((s,i)=><article className="panel skill-card" key={s.name}><small>{String(i+1).padStart(2,"0")}</small><div className={`skill-logo ${s.logos?"skill-logo-pair":""}`}>{s.logos?s.logos.map((logo,index)=><img key={logo} src={logo} alt={`${s.name} logo ${index+1}`} loading="lazy"/>):s.logo?<img src={s.logo} alt={`${s.name} logo`} loading="lazy"/>:<b>{s.symbol}</b>}</div><h3 style={{ fontSize: "1.25rem", fontWeight: 800 }}>
  {s.name}
</h3><span>{s.group}</span></article>)}</div>
        <p className="skills-note">ALWAYS LEARNING · ALWAYS IMPROVING</p>
      </section>

      <section className="section" id="education">
        <div className="section-heading centered"><span className="kicker">03 / THE FOUNDATION</span><h2>My <em>Education.</em></h2><p>The academic journey behind my work.</p></div>
        <div className="education-list">
          <article className="panel education-card"><div className="education-icon">⌂</div><div><span className="kicker">CURRENTLY PURSUING</span><h3>B.Tech Computer Science &amp; Engineering</h3><p>Giani Zail Singh Campus College of Engineering and Technology</p><p>Maharaja Ranjit Singh Punjab Technical University (MRSPTU), Bathinda</p></div><span className="year-pill">B.TECH</span></article>
          <article className="panel education-card"><div className="education-icon">12</div><div><span className="kicker">SENIOR SECONDARY</span><h3>Class 12th</h3><p>Kids Kingdom Convent School</p><p>Percentage: <strong>80%</strong></p></div><span className="year-pill">80%</span></article>
          <article className="panel education-card"><div className="education-icon">10</div><div><span className="kicker">SECONDARY</span><h3>Class 10th</h3><p>Kids Kingdom Convent School</p><p>Percentage: <strong>80%</strong></p></div><span className="year-pill">80%</span></article>
        </div>
      </section>

      <section className="section" id="achievements">
        <div className="section-heading centered"><span className="kicker">04 / STUDENT JOURNEY</span><h2>Learning in <em>Action.</em></h2><p>Projects, practice and experiences shaping my journey.</p></div>
        <div className="journey-list">{journey.map(([n,type,title,desc,tag])=><article className="panel journey-card" key={n}><span className="journey-number">{n}</span><div><small className="kicker">{type}</small><h3>{title}</h3><p>{desc}</p></div><span className="journey-tag">{tag}</span></article>)}</div>
      </section>

      <section className="section" id="experience">
        <div className="section-heading centered"><span className="kicker">05 / HANDS-ON EXPERIENCE</span><h2>Building with a <em>team.</em></h2><p>A practical project experience beyond the classroom.</p></div>
        <article className="panel experience-card"><div className="experience-number">01</div><div><small className="kicker">SMART INDIA HACKATHON 2026 · THE WISERZ</small><h3>MediIndia Care</h3><span className="role-pill">Admin Dashboard &amp; Testing</span><p>Contributed to administrative dashboard work, provider and treatment management, testing and error handling as part of the hackathon team.</p></div><span className="year-pill">2026</span></article>
      </section>

      <section className="section" id="projects">
        <div className="section-heading centered"><span className="kicker">06 / SELECTED WORK</span><h2>Made with <em>purpose.</em></h2><p>A team project focused on a real-world problem space.</p></div>
        <article className="panel project-card">
          <div className="project-art"><div className="project-art-top"><span>MEDINDIA CARE</span><span>TEAM PROJECT / 01</span></div>
            <div className="project-showcase"><div className="mock-window"><div className="mock-bar"><i/><i/><i/><span>ADMIN DASHBOARD</span></div><div className="mock-body"><aside>✚<i/><i/><i/><i/></aside><div className="mock-content"><small>MEDINDIA CARE / ADMIN</small><b>Management dashboard</b><div className="mock-cards"><i/><i/><i/></div><div className="mock-lines"><i/><i/><i/></div></div></div></div><span className="project-stamp">HEALTH<br/>TECH</span></div>
            <div className="project-art-bottom"><span>HEALTHCARE</span><span>DESIGNED &amp; DEVELOPED AS A TEAM</span></div>
          </div>
          <div className="project-details"><small className="kicker">SMART INDIA HACKATHON 2026</small><h3>MediIndia <em>Care.</em></h3><p>A healthcare-focused project developed with THE WISERZ team for Smart India Hackathon 2026. My contribution focused on the administrative dashboard, provider and treatment management, testing and error handling.</p><div className="project-tags"><span>Healthcare</span><span>Admin Dashboard</span><span>Provider Management</span><span>Treatment Management</span><span>Testing</span></div><div className="project-actions"><a className="primary-button" href="https://github.com/bhaveshbansal01/SIH-HACKATHON-2K26-THE-WISERZ" target="_blank" rel="noreferrer">View project on GitHub ↗</a><a className="text-link live-demo-link" href="https://mediindiacare.vercel.app/" target="_blank" rel="noreferrer">View live demo ↗</a></div></div>
        </article>
      </section>

      <section className="section contact-section" id="contact"><div className="panel contact-card"><span className="kicker">07 / GET IN TOUCH</span><h2>Have an idea?<br/><em>Let&apos;s connect.</em></h2><p>Open to learning, collaboration and conversations around technology and creative projects.</p><span className="contact-location">Bathinda, Punjab, India</span><div className="contact-socials"><a href="https://linkedin.com/in/ekanshjindal1" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/bhaveshbansal01/SIH-HACKATHON-2K26-THE-WISERZ" target="_blank" rel="noreferrer">GitHub ↗</a></div><a className="primary-button" href="https://linkedin.com/in/ekanshjindal1" target="_blank" rel="noreferrer">Connect with me ↗</a></div></section>
      <footer className="footer"><a href="#top" className="brand"><span className="brand-avatar">EJ</span><b>Ekansh Jindal</b></a><span>© 2026 EKANSH JINDAL · STUDENT PORTFOLIO</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
