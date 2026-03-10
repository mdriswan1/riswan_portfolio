# Mohamed Riswan — Developer Portfolio

A modern, dark-themed personal developer portfolio built with **React + Vite**.

## 🚀 Quick Start

### Prerequisites
- Node.js v18+ installed
- npm or yarn

### Installation

```bash
# 1. Navigate into project folder
cd portfolio-website

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Then open **http://localhost:5173** in your browser.

### Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 📁 Project Structure

```
portfolio-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── images/          # Add your images here
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky nav with smooth scroll + mobile menu
│   │   ├── Hero.jsx          # Landing section with animated intro
│   │   ├── Experience.jsx    # Timeline-based work experience
│   │   ├── Skills.jsx        # Categorized skill bars
│   │   ├── Projects.jsx      # Project cards with GitHub links
│   │   ├── Education.jsx     # Education cards
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx       # Contact form + social links
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js  # ✏️ Edit all portfolio content here
│   ├── pages/
│   │   └── Home.jsx
│   ├── styles/
│   │   └── main.css          # All CSS with custom properties
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## ✏️ Customization

**All portfolio content lives in one place:**
```
src/data/portfolioData.js
```

Edit `portfolioData.js` to update:
- Personal info (name, email, GitHub, LinkedIn)
- Work experience
- Skills and proficiency levels
- Projects (add/remove projects)
- Education
- Certifications

---

## 🎨 Design Features

- **Dark terminal/cyberpunk aesthetic** with green accent color
- **Noise texture overlay** for depth
- **Grid background** in hero section
- **Scroll-triggered animations** via IntersectionObserver
- **Animated skill bars** with staggered delays
- **Fully responsive** — works on mobile, tablet, desktop
- **Custom scrollbar** styled to match theme
- **Smooth scrolling** navigation
- **Mobile hamburger menu**

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI Framework |
| Vite 5 | Build tool & dev server |
| React Router v6 | Client-side routing |
| CSS Custom Properties | Theming system |
| Google Fonts (Syne, DM Mono, Cabinet Grotesk) | Typography |

---

## 📦 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drag the `dist/` folder to netlify.com/drop
```

### GitHub Pages
Add `base: '/repo-name/'` to `vite.config.js` then:
```bash
npm run build
# Push the dist/ folder to gh-pages branch
```
