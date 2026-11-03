import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Menu, X, Github, Linkedin, Youtube,
  Mail, Download, GraduationCap, Code2, Trophy, Lightbulb, Globe, Braces,
  Brain, BookOpen, Monitor, Database, Terminal, Send, CheckCircle2, ExternalLink,
  Sparkles, Laptop, Layers, MapPin, Phone, CalendarDays
} from 'lucide-react'
import './style.css'

const email = 'mdtanjeelimam786@gmail.com'
const links = {
  github: 'https://github.com/mdtanjeelimam786-hash',
  linkedin: 'https://www.linkedin.com/in/mdtanjeelimam-ts99',
  youtube: 'https://www.youtube.com/@syed_786_imam',
  x: 'https://x.com/imam_786_bhai'
}
const nav = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Blog', 'Contact']
const skills = [
  ['HTML', 90, 'Markup'], ['CSS', 85, 'Styling'], ['JavaScript', 75, 'Programming'],
  ['React', 65, 'Frontend'], ['Java', 75, 'Programming'], ['Python', 70, 'Programming'],
  ['C', 80, 'Programming'], ['C++', 70, 'Programming'], ['Git & GitHub', 75, 'Tools']
]
const projects = [
  { name: 'Personal Portfolio', desc: 'A responsive portfolio website presenting my skills, projects and journey in technology.', tags: ['React', 'CSS', 'JavaScript'], url: `${links.github}/PORTFOLIO`, icon: Laptop, type: 'PERSONAL WEBSITE', visual: 'portfolio' },
  { name: 'M.T.I Global Chat', desc: 'A chat-focused project exploring real-time communication and a clean user experience.', tags: ['JavaScript', 'Web'], url: `${links.github}/M.T.I-GLOBAL-CHAT`, icon: Globe, type: 'WEB APPLICATION', visual: 'chat' },
  { name: 'ToDo App', desc: 'A simple productivity app concept for organizing tasks and keeping daily work on track.', tags: ['HTML', 'CSS', 'JavaScript'], url: `${links.github}/TODO-APP`, icon: CheckCircle2, type: 'PRODUCTIVITY', visual: 'todo' }
]
const strengths = [
  [Globe, 'Web Development', 'HTML, CSS, JavaScript, React'],
  [Code2, 'Programming', 'Java, Python, C, C++'],
  [Brain, 'Problem Solving', 'Logical thinking & algorithms'],
  [Sparkles, 'Continuous Learning', 'Always exploring new technology']
]
const posts = [
  ['WEB DEVELOPMENT', 'Building a strong foundation in web development', 'A look at the core technologies behind modern, accessible websites.', '01'],
  ['PROGRAMMING', 'Why problem-solving matters in programming', 'How breaking complex challenges into smaller steps builds confidence.', '02'],
  ['CAREER & LEARNING', 'Learning consistently, one project at a time', 'Small experiments and hands-on practice can create meaningful progress.', '03']
]
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [active, setActive] = useState('Home')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const go = (id) => { setMenuOpen(false); document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }); setActive(id) }
  const submit = (e) => {
    e.preventDefault()
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0A%0A${encodeURIComponent(form.message)}`
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(form.subject)}&body=${body}`
    setSent(true)
  }
  return <div className="site-shell">
    <header className="navbar">
      <a className="brand" href="#home" onClick={() => setActive('Home')}><span className="brand-mark">MTI</span><span className="brand-copy"><b>MD TANJEEL IMAM</b><small>IT Student & Aspiring Developer</small></span></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{nav.map(n => <a key={n} className={active === n ? 'active' : ''} href={`#${n.toLowerCase()}`} onClick={() => go(n)}>{n}</a>)}</nav>
      <a className="nav-cv" href="/MD-Tanjeel-Imam-CV.pdf" download><Download size={16}/> Download CV</a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section id="home" className="hero section-wrap">
        <div className="hero-copy reveal">
          <div className="eyebrow"><span className="eyebrow-dot"/> <Sparkles size={14}/> WELCOME TO MY WEBSITE</div>
          <h1>Hi, I'm <span>MD TANJEEL IMAM</span><br/><em>IT Student &amp; Software Developer</em></h1>
          <p className="hero-lead">Passionate about technology, coding and innovation. I build modern web solutions and am always eager to learn new skills in the world of IT.</p>
          <div className="hero-actions"><a className="btn btn-primary" href="#projects" onClick={() => setActive('Projects')}>Explore My Projects <ArrowRight size={17}/></a><a className="btn btn-outline" href="#contact" onClick={() => setActive('Contact')}><Mail size={17}/> Contact Me</a></div>
          <div className="social-row"><span>LET'S CONNECT</span><a aria-label="GitHub" href={links.github} target="_blank" rel="noreferrer"><Github/></a><a aria-label="LinkedIn" href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin/></a><a aria-label="YouTube" href={links.youtube} target="_blank" rel="noreferrer"><Youtube/></a><a aria-label="X" href={links.x} target="_blank" rel="noreferrer"><span className="x-icon">𝕏</span></a></div>
        </div>
        <div className="hero-art">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="blue-blob blob-a"/><div className="blue-blob blob-b"/>
          <div className="portrait-frame"><img src="/portrait.png" alt="Portrait of MD Tanjeel Imam wearing a black suit and tie"/></div>
          <div className="float-card"><span className="float-icon"><GraduationCap size={22}/></span><span><b>Computer Science &amp; Engineering</b><small>Learning · Building · Growing</small></span></div>
          <div className="mini-tag"><span className="pulse"/> Open to opportunities</div>
        </div>
      </section>

      <section className="stats section-wrap" aria-label="Highlights">
        <div className="stat"><span className="stat-icon"><GraduationCap/></span><div><strong>3<span>+</span></strong><small>Years of Learning</small></div></div>
        <div className="stat"><span className="stat-icon"><Code2/></span><div><strong>3<span>+</span></strong><small>Projects Completed</small></div></div>
        <div className="stat"><span className="stat-icon"><Braces/></span><div><strong>100<span>%</span></strong><small>Passion for Coding</small></div></div>
        <div className="stat"><span className="stat-icon"><Trophy/></span><div><strong>Big</strong><small>Dreams for a better future</small></div></div>
      </section>

      <section id="about" className="section section-wrap">
        <div className="section-heading"><span className="section-kicker">GET TO KNOW ME</span><h2>About <em>Me</em></h2><p>A curious mind, a passion for technology, and a commitment to keep growing.</p></div>
        <div className="about-grid">
          <div className="workspace-card"><img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85" alt="Developer workspace with laptop and code" loading="lazy"/><div className="workspace-caption"><span><Code2 size={19}/></span><div><b>Ideas into reality</b><small>One line of code at a time</small></div></div></div>
          <div className="about-copy"><span className="section-kicker">ABOUT ME</span><h3>Turning Ideas Into <em>Innovative Solutions</em></h3><p>I'm an enthusiastic IT graduate with a Diploma in Computer Science Engineering and a strong interest in web development, software engineering and emerging technologies. I enjoy solving problems and building projects that make an impact.</p><p>My academic foundation covers programming, databases, computer networks, operating systems and software development. I'm seeking an entry-level opportunity where I can contribute, collaborate and continue learning.</p><a className="text-link" href="#experience" onClick={() => setActive('Experience')}>Learn More <ArrowRight size={16}/></a></div>
          <div className="strength-list">{strengths.map(([Icon, title, desc]) => <div className="strength" key={title}><span><Icon size={21}/></span><div><b>{title}</b><small>{desc}</small></div></div>)}</div>
        </div>
      </section>

      <section id="skills" className="section section-tint">
        <div className="section-wrap"><div className="section-heading"><span className="section-kicker">MY TOOLKIT</span><h2>Skills &amp; <em>Technologies</em></h2><p>Tools and technologies I use, practice and continue to improve.</p></div>
          <div className="skills-grid">{skills.map(([name, level, group], i) => <div className="skill-card" key={name}><div className="skill-top"><span className="skill-symbol">{['5','{ }','JS','⚛','J','Py','C','C+','⌘'][i]}</span><span className="skill-group">{group}</span></div><div className="skill-name"><b>{name}</b><small>{level}%</small></div><div className="progress"><span style={{width: `${level}%`}}/></div></div>)}</div>
        </div>
      </section>

      <section id="projects" className="section section-wrap">
        <div className="section-heading"><span className="section-kicker">WHAT I'VE BEEN BUILDING</span><h2>Featured <em>Projects</em></h2><p>A few projects that reflect my curiosity and hands-on learning.</p></div>
        <div className="projects-grid">{projects.map(({name, desc, tags, url, icon: Icon, type, visual}) => <article className="project-card" key={name}><div className={`project-visual ${visual}`}><span className="project-type">{type}</span><div className="project-window"><div className="window-dots"><i/><i/><i/></div><Icon size={48}/><b>{name}</b><small>DESIGN · BUILD · LEARN</small></div><a className="project-open" href={url} target="_blank" rel="noreferrer" aria-label={`Open ${name}`}><ArrowUpRight/></a></div><div className="project-content"><h3>{name}</h3><p>{desc}</p><div className="tags">{tags.map(t => <span key={t}>{t}</span>)}</div><a className="text-link" href={url} target="_blank" rel="noreferrer">View on GitHub <ExternalLink size={15}/></a></div></article>)}</div>
        <div className="center-action"><a className="btn btn-outline" href={links.github} target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={17}/></a></div>
      </section>

      <section id="experience" className="section section-tint">
        <div className="section-wrap"><div className="section-heading"><span className="section-kicker">MY JOURNEY</span><h2>Education &amp; <em>Experience</em></h2><p>Building a strong foundation through education, practice and curiosity.</p></div>
          <div className="timeline"><div className="timeline-item"><span className="timeline-icon"><GraduationCap/></span><div className="timeline-card"><small>EDUCATION</small><h3>Diploma in Computer Science Engineering</h3><p>Studied programming, databases, computer networks, operating systems and software development fundamentals.</p></div></div><div className="timeline-item"><span className="timeline-icon"><Terminal/></span><div className="timeline-card"><small>VOCATIONAL TRAINING</small><h3>C Programming Training</h3><p>Completed vocational training in C programming, strengthening foundational coding and logical thinking skills.</p></div></div><div className="timeline-item"><span className="timeline-icon"><Laptop/></span><div className="timeline-card"><small>SELF-DIRECTED LEARNING</small><h3>Projects &amp; Practical Development</h3><p>Practicing web development and programming through personal projects, experimentation and continuous learning.</p></div></div></div>
        </div>
      </section>

      <section id="blog" className="section section-wrap">
        <div className="section-heading"><span className="section-kicker">NOTES FROM MY JOURNEY</span><h2>Latest <em>Insights</em></h2><p>Ideas, lessons and topics I'm exploring in technology.</p></div>
        <div className="blog-grid">{posts.map(([category, title, desc, num]) => <article className="blog-card" key={num}><div className={`blog-art blog-${num}`}><span>{category}</span><b>{num}</b><div className="blog-art-icon">{num === '01' ? <Layers/> : num === '02' ? <Braces/> : <BookOpen/>}</div></div><div className="blog-content"><small>{category}</small><h3>{title}</h3><p>{desc}</p><a className="text-link" href={`mailto:${email}?subject=${encodeURIComponent('I would like to discuss: ' + title)}`}>Discuss this topic <ArrowRight size={15}/></a></div></article>)}</div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-wrap"><div className="section-heading"><span className="section-kicker">LET'S TALK</span><h2>Have a project in <em>mind?</em></h2><p>I'm open to opportunities, collaboration and conversations about technology.</p></div>
          <div className="contact-grid"><div className="contact-info"><h3>Let's build something meaningful.</h3><p>Whether you have an opportunity, a question or just want to connect, my inbox is open.</p><a className="contact-detail" href={`mailto:${email}`}><span><Mail/></span><div><small>EMAIL ME</small><b>{email}</b></div></a><a className="contact-detail" href={links.youtube} target="_blank" rel="noreferrer"><span><Youtube/></span><div><small>YOUTUBE</small><b>@syed_786_imam</b></div></a><a className="contact-detail" href={links.x} target="_blank" rel="noreferrer"><span><span className="x-icon">𝕏</span></span><div><small>FOLLOW ON X</small><b>@imam_786_bhai</b></div></a><div className="contact-note"><Sparkles size={17}/> Always learning. Always building.</div></div>
            <form className="contact-form" onSubmit={submit}><div className="form-row"><label>Your Name<input required value={form.name} onChange={e => setForm({...form, name:e.target.value})} placeholder="Enter your name"/></label><label>Email Address<input required type="email" value={form.email} onChange={e => setForm({...form, email:e.target.value})} placeholder="you@example.com"/></label></div><label>Subject<input required value={form.subject} onChange={e => setForm({...form, subject:e.target.value})} placeholder="What would you like to discuss?"/></label><label>Message<textarea required rows="5" value={form.message} onChange={e => setForm({...form, message:e.target.value})} placeholder="Write your message..."/></label><button className="btn btn-primary submit-btn" type="submit">Send Message <Send size={16}/></button>{sent && <p className="form-hint">Your email app should open with your message ready to send.</p>}</form>
          </div>
        </div>
      </section>
    </main>

    <footer className="footer"><div className="footer-main section-wrap"><a className="brand" href="#home"><span className="brand-mark">MTI</span><span className="brand-copy"><b>MD TANJEEL IMAM</b><small>IT Student & Aspiring Developer</small></span></a><p>Curiosity in mind. Code in action. Growth in progress.</p><div className="footer-social"><a href={links.github} aria-label="GitHub"><Github/></a><a href={links.linkedin} aria-label="LinkedIn"><Linkedin/></a><a href={links.youtube} aria-label="YouTube"><Youtube/></a><a href={links.x} aria-label="X">𝕏</a></div></div><div className="footer-bottom section-wrap"><span>© {new Date().getFullYear()} MD Tanjeel Imam. All rights reserved.</span><div>{nav.map(n => <a key={n} href={`#${n.toLowerCase()}`}>{n}</a>)}</div><a href="#home" className="back-top">Back to top ↑</a></div></footer>
  </div>
}
createRoot(document.getElementById('root')).render(<App />)
