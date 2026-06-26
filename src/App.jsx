import React from 'react';
import './index.css';

function App() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar glass-panel">
        <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '0.1em' }} className="text-gradient">SJ.</h1>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        
        <div className="hero-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img 
            src="https://github.com/Shivansh1146.png" 
            alt="Shivansh Jaiswal" 
            style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '2rem', border: '4px solid var(--primary)', objectFit: 'cover', boxShadow: '0 0 20px rgba(122, 162, 247, 0.4)' }} 
          />
          <p className="hero-subtitle">BCA (AI & ML) Student</p>
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Shivansh Jaiswal</span>
          </h1>
          <p className="hero-desc">
            I engineer robust backend architectures and integrate Artificial Intelligence to build intelligent, real-world solutions. 
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work ➔
            </a>
            <a href="/Shivansh_Jaiswal_Resume.pdf" download="Shivansh_Jaiswal_Resume.pdf" className="btn btn-glass glass-panel" style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}>
              📄 Resume
            </a>
            <a href="https://github.com/Shivansh1146" target="_blank" rel="noreferrer" className="btn btn-glass glass-panel">
              🐙 GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section container">
        <h2 className="section-title text-gradient">Technical Arsenal</h2>
        <div className="skills-grid">
          {[
            { icon: "💻", title: 'Languages', tools: 'Java, Python, C, C++, JavaScript, HTML/CSS' },
            { icon: "⚙️", title: 'Frameworks', tools: 'Flask, Jinja2, REST API, PWA, React' },
            { icon: "🧠", title: 'AI & ML', tools: 'Gemini API, NLP, Scikit-learn, Pandas, NumPy' },
            { icon: "🗄️", title: 'Databases & Cloud', tools: 'MySQL, SQLite, AWS S3, Firebase, SQLAlchemy' }
          ].map((skill, index) => (
            <div key={index} className="skill-card glass-panel">
              <div className="skill-icon" style={{ fontSize: '2rem' }}>{skill.icon}</div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-desc">{skill.tools}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section container">
        <h2 className="section-title text-gradient">Featured Projects</h2>
        <div className="projects-grid">
          {[
            {
              title: "MedicSense AI",
              desc: "A full-stack healthcare web application using Flask, integrating Google Gemini API for natural language symptom analysis and AI-assisted triage.",
              tags: ["Python", "Flask", "Gemini API", "SQLite", "Firebase"]
            },
            {
              title: "Study Buddy",
              desc: "A Java Swing-based desktop application with role-based access control, AWS S3 for document storage, and Twilio SMS for OTP verification.",
              tags: ["Java Swing", "MySQL", "AWS S3", "Twilio API"]
            },
            {
              title: "Bank Management System",
              desc: "A robust Java-based console application simulating core banking operations using OOP principles and Collections Framework.",
              tags: ["Java", "OOP", "Regex", "Collections"]
            }
          ].map((project, idx) => (
             <div key={idx} className="project-card glass-panel">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
             </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="section container">
        <h2 className="section-title text-gradient">Education & Certifications</h2>
        <div className="projects-grid">
          <div className="project-card glass-panel">
            <h3 className="project-title" style={{ color: 'var(--accent)' }}>🎓 Galgotias University</h3>
            <p style={{ fontWeight: '600', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Bachelor of Computer Applications (AI & ML)</p>
            <p className="project-desc">Greater Noida (09/2024 - Present)</p>
            <div className="project-tags">
              <span className="tag">Artificial Intelligence</span>
              <span className="tag">Machine Learning</span>
            </div>
          </div>
          
          <div className="project-card glass-panel">
            <h3 className="project-title" style={{ color: 'var(--primary)' }}>🏆 Certifications & Hackathons</h3>
            <ul style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', paddingLeft: '1.5rem', flexGrow: 1 }}>
              <li style={{ marginBottom: '0.5rem' }}><b>Hackspace Hackathon</b> - Certificate of Participation (2025)</li>
              <li style={{ marginBottom: '0.5rem' }}><b>NPTEL Certification</b> - Entrepreneurship (IIT/NPTEL 2025)</li>
              <li><b>DevFest Noida</b> - Attendee</li>
            </ul>
            <div className="project-tags">
              <span className="tag">Hackathon</span>
              <span className="tag">NPTEL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="footer">
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Let's Connect</h2>
        <div className="social-links">
          <a href="https://github.com/Shivansh1146" className="social-btn glass-panel" style={{ fontSize: '1.5rem', textDecoration: 'none' }}>
            🐙
          </a>
          <a href="https://www.linkedin.com/in/shivansh-jaiswal-9763a233b/" className="social-btn glass-panel" style={{ fontSize: '1.5rem', textDecoration: 'none' }}>
            💼
          </a>
          <a href="mailto:jaiswalshivansh122@gmail.com" className="social-btn glass-panel" style={{ fontSize: '1.5rem', textDecoration: 'none' }}>
            📧
          </a>
        </div>
        <p style={{ color: 'var(--text-muted)' }}>© 2026 Shivansh Jaiswal. Built with React & Vite.</p>
      </footer>
    </>
  );
}

export default App;
