// File: src/components/About.jsx
import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left side - Information */}
        <div className="flex-1 space-y-6">
        <h3>I'M SYED. SYED PEER</h3>
          <div>
            <p className="text-xl font-semibold text-indigo-600 dark:text-indigo-300 mb-2">Emerging AI/ML Enthusiast | Passionate Learner</p>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-4">As a dedicated AI/ML student, I am passionate about exploring the transformative potential of artificial intelligence.</p>
          </div>
          <p className="text-lg leading-7">
            I am a passionate developer who loves building modern and responsive web
            applications using technologies like React, Tailwind CSS, and more.
          </p>

          {/* Resume Button */}
          <a
            href="/Resume (2).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-500 text-white py-3 px-6 rounded-lg text-center hover:bg-indigo-600 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
            View Resume
          </a>
          {/* Social Icons - Update the href values with your real URLs */}
          <div className="flex gap-4 mt-6">
            <a href="https://github.com/syedpeer7/" target="_blank" rel="noopener noreferrer" title="GitHub" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 text-2xl">
              {/* GitHub */}
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.186 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.204 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/syed-peer-b01ab9265" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 text-2xl">
              {/* LinkedIn */}
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.28h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.599v5.597z"/></svg>
            </a>
            <a href="https://x.com/Syed_peer7777" target="_blank" rel="noopener noreferrer" title="X (Twitter)" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 text-2xl">
              {/* X (Twitter) */}
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M22.162 0h-4.327l-5.835 8.228-5.835-8.228h-4.327l8.228 11.616-8.228 11.616h4.327l5.835-8.228 5.835 8.228h4.327l-8.228-11.616z"/></svg>
            </a>
            <a href="https://www.instagram.com/_syed_7777" target="_blank" rel="noopener noreferrer" title="Instagram" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 text-2xl">
              {/* Instagram */}
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z"/></svg>
            </a>
          </div>
        </div>

        {/* Right side - Profile Picture */}
        <div className="flex-1 flex justify-center">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
            <img 
              src="/profile.jpg" 
              alt="Profile Picture" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}