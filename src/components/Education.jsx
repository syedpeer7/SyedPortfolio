import React, { useEffect, useRef } from "react";
import "../index.css";
import "./education-timeline.css";

const educationData = [
  {
    year: "2026",
    degree: "B.Tech in Artificial Intelligence and Machine Learning",
    score: "CGPA: 8.7",
    description: "Currently pursuing B.Tech in AI & ML",
    emoji: "🎓"
  },
  {
    year: "2022",
    degree: "Intermediate (MPC)",
    score: "87.7%",
    description: "Completed Intermediate with Mathematics, Physics, and Chemistry",
    emoji: "📚"
  },
  {
    year: "2020",
    degree: "Secondary School Certificate (SSC)",
    score: "100%",
    description: "Completed Secondary School Education",
    emoji: "🏫"
  }
];

export default function Education() {
  const timelineRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && lineRef.current) {
            lineRef.current.classList.add("dotted-timeline-animate");
          }
        });
      },
      { threshold: 0.2 }
    );
    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }
    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <section id="education" className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          Education
        </h2>
        <div className="relative" ref={timelineRef}>
          {/* Dotted animated vertical line */}
          <div
            ref={lineRef}
            className="absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-1 dotted-timeline-bg z-0"
          ></div>
          {educationData.map((edu, index) => {
            const isCenter = index === 1;
            return (
              <div
                key={index}
                className={`timeline-item relative mb-12 ${
                  isCenter ? "mx-auto w-7/12" : index === 0 ? "ml-auto w-5/12" : "mr-auto w-5/12"
                }`}
              >
                {/* Timeline dot with emoji */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500 dark:bg-indigo-400 z-10 text-2xl shadow-lg border-4 border-white dark:border-gray-900">
                  {edu.emoji}
                </div>
                {/* Content */}
                <div className={`p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 ${
                  isCenter ? "mx-auto mt-8" : index === 0 ? "ml-12" : "mr-12"
                }`}>
                  <div className="text-indigo-500 dark:text-indigo-400 font-semibold mb-2">
                    {edu.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                    {edu.degree}
                  </h3>
                  <div className="text-lg font-semibold mb-2 text-indigo-600 dark:text-indigo-300">
                    {edu.score}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 