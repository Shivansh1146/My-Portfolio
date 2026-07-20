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

The portfolio is used to showcase my expertise in **Backend Engineering** and **Artificial Intelligence**, highlighting my academic background, technical skills, and featured projects like *MedicSense AI* and *Study Buddy*.

## ✨ Features

- **Immersive 3D WebGL Experience:** A scroll-synchronized journey featuring a glowing Neural Core, a floating 3D particle constellation, and suspended glass project planes.
- **Apple-Style Monochrome Aesthetic:** Deep OLED blacks, pure whites, and premium silver tones create a state-of-the-art, professional developer presence.
- **Dynamic Performance Profiling:** Utilizes `@react-three/drei`'s `<PerformanceMonitor>` to intelligently scale the device pixel ratio (`dpr`) based on live framerate drops, guaranteeing a smooth 60fps across hardware tiers.
- **Smart Mobile Fallback:** Automatically detects mobile devices, touch screens, and `prefers-reduced-motion` settings to seamlessly swap the 3D WebGL context for a highly-optimized, battery-friendly 2D SPA.
- **Scroll-Sync Navigation:** Precise DOM-to-Canvas scroll synchronization using programmatic `getBoundingClientRect` mapping to avoid layout clamping.
- **Framer Motion Animations:** Elegant, physics-based UI reveals overlaying the 3D canvas.

## 🛠️ Architecture & Tech Stack

This project uses a highly modern, modular React architecture:
- **Core Framework:** React.js 19
- **3D Engine:** Three.js + React Three Fiber + Drei
- **Post-Processing:** `@react-three/postprocessing` (Luminance Bloom Effects)
- **Animations:** Framer Motion
- **Build Tool:** Vite 8
- **Styling:** Custom CSS3 with CSS Variables (No external CSS libraries to bloat the bundle)
- **Data Management:** Centralized JSON-like data architecture (`src/data/portfolioData.js`)

## 🚀 Run Locally

To spin up a local instance of this portfolio, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shivansh1146/My-Portfolio.git
   ```

2. **Navigate into the directory:**
   ```bash
   cd My-Portfolio
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **View in browser:**
   Open `http://localhost:5173` to see the application running.

## 📫 Let's Connect

Feel free to reach out for collaborations, roles, or inquiries:
- **LinkedIn:** [Shivansh Jaiswal](https://www.linkedin.com/in/shivansh-jaiswal-9763a233b/)
- **Email:** jaiswalshivansh122@gmail.com
- **GitHub:** [@Shivansh1146](https://github.com/Shivansh1146)
