// File: src/components/Projects.jsx
import React from "react";
import "../index.css";
import "/src/components/flip.css"

const projects = [
  {
    title: "CNN-Based Image Compression Model",
    description: "Precision: 85% | Storage Optimization: 40%",
    tech: ["Python", "CNN", "OpenCV"],
    url: "https://github.com/syedpeer7/CNN_image_compression",
    image: "public/project1.png"
  },
  {
    title: "Live Google Form Response Dashboard",
    description: "Responsive UI | Real-time Visualization",
    tech: ["HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS"],
    url: "https://google-form-response-visualizer.lovable.app/",
    image: "public/project2.png"
  },
  {
    title: "Real-Time Student Distraction Detection System",
    description: "Real-time Analytics | Updates every 3s",
    tech: ["YOLOv8", "MediaPipe", "OpenCV", "Python", "Flask", "SQL"],
    url: "https://google-form-response-visualizer.lovable.app/",
    image: "public/project3.jpg"
  },
  {
    title: "Digital Art Gallery",
    description: "Generates art images | Displays Current Exhibition",
    tech: ["React", "Tailwind CSS", "JavaScript", "Stability AI"],
    url: "https://syedartimage.netlify.app/",
    image: "/project4.png"
  },
  {
    title: "Menu Template Designer",
    description: "Designs Menu Templates | Customizable",
    tech: [, "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    url: "https://restaurantmenudesigner.netlify.app/",
    image: "/project5.png"
  },
  {
    title: "HR Interview Portal",
    description: "Interview Portal with job description | resume analysis",
    tech: ["streamlit", "sentence-transformers", "torch", "PyPDF2", "SQLAlchemy"],
    url: "https://apphrinterview-ca9n2nbbfp4rjznvkwnidm.streamlit.app/",
    image: "/project6.png"
  },
  {
    title: "Website Mimic Generator",
    description: "Generates website mimics | Customizable",
    tech: ["React", "Axios", "CSS Modules", "Python", "Flask", "BeautifulSoup", "Selenium"],
    url: "https://github.com/syedpeer7/website-mimic-generator",
    image: "/project7.png"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="flip-card flex-grow">
              <div className="flip-card-inner">
                {/* Card Front with background image and project name */}
                <div
                  className="flip-card-front bg-gray-200 dark:bg-gray-700 text-white p-0 rounded-2xl shadow-lg flex flex-col justify-end relative overflow-hidden"
                  style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '200px' }}
                >
                  <div className="bg-black bg-opacity-60 p-6 rounded-b-2xl">
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">{project.title}</h3>
                  </div>
                </div>
                {/* Card Back with accuracy/percentages and technologies */}
                <div className="flip-card-back bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-6 rounded-2xl shadow-lg flex flex-col justify-center items-center">
                  <p className="mb-4 text-center font-semibold">{project.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-2">
                    {project.tech.map((tech, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-lg text-center hover:bg-indigo-600 transition-colors"
            >
              View Website
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}