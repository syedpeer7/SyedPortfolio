import React from "react";
import ThemeToggle from "./ThemeToggle";

const menuItems = [
  { href: "#about", label: "About", icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.797.657 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  ) },
  { href: "#skills", label: "Skills", icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 21m5.25-4l.75 4m-7.5-8.25l-2.25-2.25m13.5 2.25l2.25-2.25M12 3v4m0 0a4 4 0 100 8 4 4 0 000-8z" /></svg>
  ) },
  { href: "#education", label: "Education", icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0H6m6 0h6" /></svg>
  ) },
  { href: "#projects", label: "Projects", icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v4a1 1 0 001 1h3m10-5v4a1 1 0 01-1 1h-3m-4 0v4a1 1 0 001 1h3m10-5v4a1 1 0 01-1 1h-3" /></svg>
  ) },
  { href: "#contact", label: "Contact", icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V8a4 4 0 00-8 0v4m8 0v4a4 4 0 01-8 0v-4" /></svg>
  ) },
];

export default function FloatingMenu({ isDark, toggleTheme }) {
  return (
    <nav className="fixed top-6 left-6 z-50 flex flex-col gap-4 items-center">
      {menuItems.map((item, idx) => (
        <a
          key={item.label}
          href={item.href}
          className="w-14 h-14 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-indigo-100 dark:hover:bg-indigo-700 transition-colors border border-gray-200 dark:border-gray-700 group"
          title={item.label}
        >
          <span className="text-indigo-600 dark:text-indigo-300 group-hover:scale-110 transition-transform">
            {item.icon}
          </span>
        </a>
      ))}
      {/* Theme toggle button below the menu, next to contact icon */}
      <div className="mt-2">
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
} 