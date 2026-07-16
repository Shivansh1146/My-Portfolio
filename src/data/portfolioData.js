import { Code, Server, Cpu, Database } from 'lucide-react';

export const skillsData = [
  { icon: Code, title: 'Languages', tools: 'Java, Python, C, C++, JavaScript, HTML/CSS' },
  { icon: Server, title: 'Frameworks', tools: 'Flask, Jinja2, REST API, PWA, React, Vite' },
  { icon: Cpu, title: 'AI & ML', tools: 'Gemini API, NLP, Scikit-learn, Pandas, NumPy' },
  { icon: Database, title: 'Databases & Cloud', tools: 'MySQL, SQLite, AWS S3, Firebase, SQLAlchemy' }
];

export const projectsData = [
  {
    id: "medicsense",
    title: "MedicSense AI",
    problem:
      "Bridging the gap between initial symptoms and preliminary triage using intelligent AI analysis.",
    desc: "A full-stack healthcare web application using Flask, integrating Google Gemini API for natural language symptom analysis and AI-assisted triage.",
    tags: ["Python", "Flask", "AI/ML", "SQLite", "Firebase"],
    github: "https://github.com/Shivansh1146/MedicSenseAI",
    demo: "https://medicsenseai.netlify.app",
  },
  {
    id: "studybuddy",
    title: "Study Buddy",
    problem:
      "Streamlining secure document sharing and role-based access for educational institutions.",
    desc: "A Java Swing-based desktop application with role-based access control, AWS S3 for document storage, and Twilio SMS for OTP verification.",
    tags: ["Java", "MySQL", "AWS S3", "API"],
    github: null, // not published — button will be hidden
    demo: null,
  },
  {
    id: "bankmanagement",
    title: "Bank Management System",
    problem:
      "Simulating core banking operations with a secure and robust object-oriented architecture.",
    desc: "A robust Java-based console application simulating core banking operations using OOP principles and Collections Framework.",
    tags: ["Java", "OOP", "CLI"],
    github: "https://github.com/Shivansh1146/Bankproject",
    demo: null,
  },
];

export const educationData = [
  {
    id: "galgotias",
    title: "🎓 Galgotias University",
    subtitle: "Bachelor of Computer Applications (AI & ML)",
    duration: "Greater Noida (09/2024 - Present)",
    tags: ["Artificial Intelligence", "Machine Learning"]
  },
  {
    id: "certs",
    title: "🏆 Certifications & Hackathons",
    subtitle: "Continuous Learning",
    duration: "Various",
    items: [
      "Hackspace Hackathon - Certificate of Participation (2025)",
      "NPTEL Certification - Entrepreneurship (IIT/NPTEL 2025)",
      "DevFest Noida - Attendee"
    ],
    tags: ["Hackathon", "NPTEL", "DevFest"]
  }
];

export const socialLinks = {
  github: "https://github.com/Shivansh1146",
  linkedin: "https://www.linkedin.com/in/shivansh-jaiswal-9763a233b/",
  email: "mailto:jaiswalshivansh122@gmail.com",
  resume: "/Shivansh_Jaiswal_Resume.pdf"
};
