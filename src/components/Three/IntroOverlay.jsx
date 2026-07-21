import { FileText } from 'lucide-react';
import { socialLinks, skillsData, projectsData, educationData } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../Icons';
import { motion } from 'framer-motion';

// Backend-related skill keywords for categorization
const BACKEND_SKILLS = ['Java', 'Python', 'C', 'C++', 'Flask', 'Jinja2', 'REST API', 'MySQL', 'SQLite', 'AWS S3', 'Firebase', 'SQLAlchemy'];

function extractSkillNames(data) {
  // skillsData has { title, tools: "comma,separated,string" }
  const allNames = [];
  data.forEach(cat => {
    cat.tools.split(',').map(s => s.trim()).forEach(name => {
      if (name) allNames.push(name);
    });
  });
  return [...new Set(allNames)];
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      viewport={{ once: false, margin: "-50px" }}
      className="glass-panel"
      style={{
        padding: '2.5rem',
        borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.2)',
        maxWidth: '600px',
        width: '100%'
      }}
    >
      <h3 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: 700 }}>
        {project.title}
      </h3>
      <p style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--accent)', fontWeight: 500, fontStyle: 'italic' }}>
        {project.problem}
      </p>
      <p style={{ fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
        {project.desc}
      </p>

      <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {project.tags.map(tag => (
          <span key={tag} style={{
            padding: '0.35rem 0.75rem',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '6px',
            fontSize: '0.85rem',
            color: 'var(--text)'
          }}>
            {tag}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary"
            style={{ padding: '0.65rem 1.3rem', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem' }}>
            Live Demo ➔
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-glass"
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.65rem 1.3rem', borderRadius: '8px', fontSize: '0.95rem' }}>
            <GithubIcon size={16} /> Source
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function IntroOverlay() {
  const allSkills = extractSkillNames(skillsData);
  const backendSkills = allSkills.filter(s => BACKEND_SKILLS.some(b => s.includes(b)));
  const aiSkills = allSkills.filter(s => !BACKEND_SKILLS.some(b => s.includes(b)));

  return (
    <div className="scroll-overlay" style={{ width: '100vw' }}>

      {/* ===== Page 1: Cinematic Intro ===== */}
      <section id="intro" className="overlay-section cinematic" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '80vw', height: '60vh',
          background: 'radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none', zIndex: -1
        }} />
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
          className="cinematic-text"
          style={{ fontSize: '3rem', fontWeight: 300, textAlign: 'center', maxWidth: '800px', lineHeight: 1.4 }}
        >
          Engineering robust structures.<br />
          Integrating <span className="text-gradient" style={{ fontWeight: 600 }}>intelligent systems.</span>
        </motion.h2>
      </section>

      {/* ===== Page 2: Hero ===== */}
      <section id="about" className="overlay-section hero-section" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '0 5rem', position: 'relative' }}>
        <div style={{
          position: 'absolute', top: '50%', left: '20%', transform: 'translateY(-50%)',
          width: '80vw', height: '80vh',
          background: 'radial-gradient(circle, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 60%)',
          pointerEvents: 'none', zIndex: -1
        }} />
        <div className="hero-content" style={{ zIndex: 10, maxWidth: '600px', textAlign: 'left' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <p className="hero-subtitle" style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Backend Engineer & AI Developer
            </p>
            <h1 className="hero-title" style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
              Hi, I'm <span className="text-gradient">Shivansh Jaiswal</span>
            </h1>
            <p className="hero-desc" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
              I engineer robust backend architectures and integrate Artificial Intelligence to build intelligent, real-world solutions that scale.
            </p>

            <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn btn-primary" style={{ padding: '1rem 2rem', borderRadius: '8px', fontWeight: 600 }} onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('nav-scroll', { detail: 'projects' })); }}>
                View My Work ➔
              </a>
              <a href={socialLinks.resume} download className="btn btn-glass glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem' }}>
                <FileText size={20} /> Resume
              </a>
              <a href={socialLinks.github} target="_blank" rel="noreferrer" className="btn btn-glass glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem' }}>
                <GithubIcon size={20} /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== Page 3: Constellation / Skills ===== */}
      <section id="skills" className="overlay-section skills-section" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 5rem', position: 'relative' }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '100vw', height: '80vh',
          background: 'radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none', zIndex: -1
        }} />
        <div className="skills-content" style={{ zIndex: 10, width: '100%', maxWidth: '1000px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ width: '45%' }}
          >
            <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: 600 }}>Backend & Architecture</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {backendSkills.map(name => (
                <span key={name} className="skill-tag glass-panel" style={{ padding: '0.5rem 1rem', fontSize: '1rem', border: '1px solid rgba(255,255,255,0.3)' }}>
                  {name}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ width: '45%', textAlign: 'right' }}
          >
            <h3 style={{ fontSize: '2.5rem', color: 'var(--accent)', marginBottom: '1.5rem', fontWeight: 600 }}>AI & Frontend Tools</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'flex-end' }}>
              {aiSkills.map(name => (
                <span key={name} className="skill-tag glass-panel" style={{ padding: '0.5rem 1rem', fontSize: '1rem', border: '1px solid rgba(255,255,255,0.3)' }}>
                  {name}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ===== Page 4 & 5: Project Gallery ===== */}
      <section id="projects" className="overlay-section projects-section" style={{
        minHeight: '200vh', display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', padding: '10vh 2rem', position: 'relative', gap: '3rem'
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '100vw', height: '100vh',
          background: 'radial-gradient(circle, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 65%)',
          pointerEvents: 'none', zIndex: -1
        }} />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          style={{ fontSize: '2.5rem', fontWeight: 700, textAlign: 'center', marginBottom: '1rem', zIndex: 10 }}
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        <div style={{
          display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center',
          zIndex: 10, maxWidth: '1300px', width: '100%'
        }}>
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* ===== Page 6 & 7: Education + Contact / Landing ===== */}
      <section className="overlay-section landing-section" style={{
        minHeight: '200vh', display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', padding: '10vh 2rem', position: 'relative', gap: '4rem'
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '100vw', height: '100vh',
          background: 'radial-gradient(circle, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 60%)',
          pointerEvents: 'none', zIndex: -1
        }} />

        {/* Education */}
        <motion.div
          id="education"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          style={{ zIndex: 10, maxWidth: '700px', width: '100%', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem' }}>
            <span className="text-gradient">Education</span> & Credentials
          </h2>

          {educationData.map(edu => (
            <div key={edu.id} className="glass-panel" style={{ padding: '1.5rem 2rem', borderRadius: '12px', marginBottom: '1rem', textAlign: 'left', border: '1px solid rgba(255,255,255,0.15)' }}>
              <h4 style={{ fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '0.3rem' }}>{edu.title}</h4>
              <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{edu.subtitle}</p>
              <p style={{ color: 'var(--accent)', fontSize: '0.9rem' }}>{edu.duration}</p>
              {edu.items && (
                <ul style={{ marginTop: '0.75rem', paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {edu.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              )}
            </div>
          ))}
        </motion.div>

        {/* Contact */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          style={{ zIndex: 10, textAlign: 'center' }}
        >
          <p style={{ fontSize: '1.3rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Let's build something together.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="btn btn-glass glass-panel"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem' }}>
              <GithubIcon size={20} /> GitHub
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="btn btn-glass glass-panel"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem' }}>
              <LinkedinIcon size={20} /> LinkedIn
            </a>
            <a href={socialLinks.email} className="btn btn-primary"
              style={{ padding: '0.8rem 1.5rem', borderRadius: '8px', fontWeight: 600 }}>
              Contact Me ➔
            </a>
            <a href={socialLinks.resume} download className="btn btn-glass glass-panel"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem' }}>
              <FileText size={20} /> Download Resume
            </a>
          </div>
          <p style={{ marginTop: '3rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} Shivansh Jaiswal. Engineered with React & Vite.
          </p>
        </motion.div>
      </section>

    </div>
  );
}
