// File: src/App.jsx
import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import CertificationsAchievements from "./components/CertificationsAchievements";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import FloatingMenu from "./components/FloatingMenu";
import './index.css';

import ReactDOM from 'react-dom/client'; 
const root = ReactDOM.createRoot(document.getElementById('root')); root.render(<App />);
export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="font-sans bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-200">
      <FloatingMenu isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <CertificationsAchievements />
      <Contact />
    </div>
  );
}

