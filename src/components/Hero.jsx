// File: src/components/Hero.jsx
import React, { useState, useEffect } from "react";

export default function Hero() {
  const roles = ["Developer", "AIML Engineer", "Tech Enthusiast"];
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const current = roles[currentRole];
      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
        return;
      }
      const delta = isDeleting ? -1 : 1;
      setText(current.substring(0, text.length + delta));
      setTypingSpeed(isDeleting ? 50 : 150);
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, currentRole, isDeleting, roles, typingSpeed]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">Hi, I'm SYED</h1>
        <div className="h-12">
          <span className="text-2xl text-gray-900 dark:text-white">
            I'm a <span className="text-indigo-600 dark:text-indigo-300 font-semibold">{text}</span>
            <span className="animate-blink">|</span>
          </span>
        </div>
      </div>
    </section>
  );
}