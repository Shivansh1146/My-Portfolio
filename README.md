<div align="center">
  <h1 align="center">Shivansh Jaiswal | Immersive 3D Portfolio 🚀</h1>
  <h3>A premium, Apple-style minimalist 3D developer portfolio engineered with React Three Fiber & Vite.</h3>
  
  <p align="center">
    <a href="https://reactjs.org/">
      <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    </a>
    <a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction">
      <img src="https://img.shields.io/badge/React_Three_Fiber-black?style=for-the-badge&logo=threedotjs&logoColor=white" alt="R3F" />
    </a>
    <a href="https://vitejs.dev/">
      <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    </a>
    <a href="https://www.framer.com/motion/">
      <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
    </a>
  </p>

  <p align="center">
    <strong><a href="https://my-portfolio-five-eta-69.vercel.app">🔴 View Live Deployment</a></strong>
  </p>
</div>

---

## 🌟 Overview

This repository contains the source code for my fully immersive, scroll-driven 3D personal portfolio. It is designed to be highly interactive and visually striking, using an **Apple-Style Minimalist Monochrome** design system powered by **WebGL** and **React Three Fiber**.

The portfolio showcases my expertise in **Backend Engineering** and **Artificial Intelligence**, highlighting my academic background, technical skills, and featured projects like *MedicSense AI* and *Study Buddy*.

---

## ✨ Features

- **Immersive 3D WebGL Experience:** A scroll-synchronized journey featuring a glowing Neural Core, a floating 3D particle constellation, and suspended glass project planes.
- **Apple-Style Monochrome Aesthetic:** Deep OLED blacks, pure whites, and premium silver tones create a state-of-the-art professional presence.
- **Dynamic Performance Profiling:** Uses `@react-three/drei`'s `<PerformanceMonitor>` to intelligently scale the device pixel ratio (`dpr`) based on live framerate, guaranteeing smooth 60fps across hardware tiers.
- **Smart Mobile Fallback:** Automatically detects mobile devices, touch screens, and `prefers-reduced-motion` to seamlessly swap the 3D WebGL context for a fast, battery-friendly 2D SPA.
- **Scroll-Sync Navigation:** All 3D assets (NeuralCore, Constellation, ProjectGallery) are driven by `scroll.offset` (0→1) with precisely calibrated fade thresholds so each asset appears only during its designated section.
- **Pixel-Perfect Layout:** Strict `height`-based section sizing ensures the total HTML scroll height exactly matches `ScrollControls pages={6}` (600vh), eliminating dead zones and content bleeding.
- **Fixed Navbar Z-Index:** The glassmorphic Navbar uses `z-index: 99999` and avoids nested stacking contexts, guaranteeing it renders above all 3D canvas and DOM overlay content at all times.
- **Framer Motion Animations:** Physics-based UI reveals (`whileInView`) overlaid on the 3D canvas with per-section entrance animations.

---

## 🛠️ Architecture & Tech Stack

| Layer | Technology |
|-------|-----------|
| Core Framework | React 19 |
| 3D Engine | Three.js + React Three Fiber + Drei |
| Post-Processing | `@react-three/postprocessing` (Bloom) |
| Animations | Framer Motion |
| Build Tool | Vite 8 |
| Styling | Custom CSS3 with CSS Variables |
| Data | Centralized `src/data/portfolioData.js` |
| Deployment | Vercel (auto-deploy from `master`) |

### Scroll Architecture (6-Page Layout)

The entire experience is driven by `<ScrollControls pages={6}>`, mapping `scroll.offset` (0.0 → 1.0) to 6 sections of `100vh` each:

| Offset Range | Section | 3D Asset Active |
|---|---|---|
| `0.0 – 0.2` | Intro → Hero | NeuralCore (grows) |
| `0.2 – 0.4` | Hero → Skills | NeuralCore (shrinks out) |
| `0.2 – 0.6` | Skills | Constellation (peaks at 0.35–0.5) |
| `0.5 – 0.9` | Projects | ProjectGallery planes |
| `0.6 – 0.9` | Education | All 3D faded out |
| `0.9 – 1.0` | Contact | Clean void |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Three/
│   │   ├── Scene.jsx          # R3F Canvas + ScrollControls root (pages=6)
│   │   ├── IntroOverlay.jsx   # All HTML DOM sections (strict 6×100vh layout)
│   │   ├── NeuralCore.jsx     # Icosahedron mesh, scroll-driven scale/position
│   │   ├── Constellation.jsx  # Instanced skill particles, fade 0.2–0.6
│   │   ├── ProjectGallery.jsx # Floating glass project planes, fade 0.5–0.9
│   │   └── ScrollHandler.jsx  # Nav-link → scroll offset bridge
│   ├── Navbar.jsx             # Fixed pill navbar, z-index: 99999
│   ├── Hero.jsx               # 2D fallback hero section
│   ├── Skills.jsx             # 2D fallback skills section
│   ├── Projects.jsx           # 2D fallback projects section
│   ├── Education.jsx          # 2D fallback education section
│   └── Footer.jsx             # 2D fallback footer
├── data/
│   └── portfolioData.js       # All content: projects, education, skills, links
├── hooks/
│   └── useDeviceCapabilities.js # Mobile/touch/reduced-motion detection
├── App.jsx                    # Routes between 3D and 2D fallback builds
├── App.css                    # App-level styles
└── index.css                  # Global design system & CSS variables
```

---

## 🚀 Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/Shivansh1146/My-Portfolio.git

# 2. Navigate into the directory
cd My-Portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

# 5. Open in browser
# http://localhost:5173
```

---

## 🐛 Regression History & Fixes

| Issue | Root Cause | Fix Applied |
|---|---|---|
| Navbar hidden behind 3D content | Nested `position:fixed` wrapper in `App.jsx` created a stacking context capping z-index at 100 | Removed wrapper; set `.navbar { z-index: 99999 }` |
| "Education" text bleeding into project cards | Sections using `100vh` with `justify-content:center` allowed overflow on mid-size screens | Changed to `height: 150vh` + `justify-content: flex-start` + explicit top padding |
| Constellation & Gallery visible in Contact section | Fade thresholds were calibrated for `pages={5}`, not `pages={6}` | Recalibrated all 3D offset math to match 6-page layout |
| Excess whitespace below copyright | Landing section had fixed `150vh` with `justify-content:center`, leaving empty void at bottom | Used `marginTop: auto` on Contact block to anchor it to the floor |

---

## 📫 Let's Connect

- **LinkedIn:** [Shivansh Jaiswal](https://www.linkedin.com/in/shivansh-jaiswal-9763a233b/)
- **Email:** jaiswalshivansh122@gmail.com
- **GitHub:** [@Shivansh1146](https://github.com/Shivansh1146)
