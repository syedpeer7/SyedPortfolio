import React from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C", "JavaScript"]
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Streamlit", "Flask", "Tailwind CSS"]
  },
  {
    title: "Database Systems",
    skills: ["NoSQL", "MongoDB"]
  },
  {
    title: "Data Science & Machine Learning",
    skills: ["TensorFlow", "Keras", "Pandas", "NumPy", "Natural Language Processing (NLP)", "Deep Learning", "OpenCV", "MediaPipe", "CNN"]
  },
  {
    title: "DevOps & Version Control",
    skills: ["Git", "GitHub", "Netlify", "Vercel", "Render"]
  },
  {
    title: "AI/LLM APIs and Tools",
    skills: ["Gemini API", "Stability API", "OpenAI", "OpenCV"]
  },
  {
    title: "AI Tools",
    skills: ["OpenAI","Claude","Gemini","Groq","Grok","Google AI Studios","Cursor","WindSurf","Github Copilot",]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 