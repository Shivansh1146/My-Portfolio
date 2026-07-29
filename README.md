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
- **Hero CTA Scroll-Fade:** Hero buttons (View My Work / Resume / GitHub) are bound to `viewport={{ amount: 0.4 }}` and `overflow: hidden` per section, ensuring they fully disappear when scrolling into Skills.
- **NeuralCore Thematic Return:** The NeuralCore re-assembles in deep background (Z=−12) behind the Contact section, providing a cinematic bookend without obstructing any text or buttons.

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
| `0.0 – 0.2` | Intro → Hero | NeuralCore (grows, moves right) |
| `0.2 – 0.45` | Hero → Skills | NeuralCore (shrinks out) |
| `0.2 – 0.58` | Skills | Constellation (22 edge-biased nodes, peaks 0.32–0.48) |
| `0.48 – 0.85` | Projects | ProjectGallery (8 deep-background planes at Z=−12) |
| `0.6 – 0.85` | Education | All foreground 3D faded out |
| `0.70 – 1.0` | Contact | NeuralCore re-assembles at Z=−12, Y=−1.4, scale=0.55 |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Three/
│   │   ├── Scene.jsx          # R3F Canvas + ScrollControls root (pages=6)
│   │   ├── IntroOverlay.jsx   # All HTML DOM sections (strict 6×100vh layout)
│   │   ├── NeuralCore.jsx     # Icosahedron mesh, scroll-driven scale/position/Z
│   │   ├── Constellation.jsx  # 22 instanced edge-biased skill particles, fade 0.2–0.58
│   │   ├── ProjectGallery.jsx # 8 deep-background glass planes at Z=−12, fade 0.48–0.85
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
| Excess whitespace below copyright | Landing section had fixed `150vh` with `justify-content:center`, leaving empty void at bottom | Used `marginTop: 3rem` on Contact block and tightened section to `120vh` |
| Constellation nodes cluttering center text | 40 nodes spawned with wide random X range (±6) and inconsistent scale (0.05–0.20) | Reduced to 22 nodes, biased spawn to `|X| > 3.5` edges, normalized scale `0.07–0.10` |
| ProjectGallery planes overlapping card text | Group positioned at Z=−5, planes floating at random positive Z, rendering through DOM cards | Pushed group to Z=−12, all planes at Z=−14 to −20, added `depthWrite={false}` |
| Hero CTA buttons visible during Skills scroll | `whileInView` had no `amount` threshold so buttons persisted past section boundary | Added `viewport={{ amount: 0.4 }}` + `overflow: hidden` to Hero & Skills sections |
| NeuralCore re-assembly overlapping Contact text | Contact-phase NeuralCore at scale=1.35 rendered directly over DOM text at near-Z | Pushed to Z=−12, Y=−1.4, scale=0.55 for clear separation from all foreground text |

---

## 📫 Let's Connect

- **LinkedIn:** [Shivansh Jaiswal](https://www.linkedin.com/in/shivansh-jaiswal-9763a233b/)
- **Email:** jaiswalshivansh122@gmail.com
- **GitHub:** [@Shivansh1146](https://github.com/Shivansh1146)
