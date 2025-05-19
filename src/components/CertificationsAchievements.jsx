import React from "react";

const certifications = [
  "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional – Oracle",
  "Artificial Intelligence Primer Certification – IBM",
  "Introduction to Machine Learning – Kaggle",
  "Introduction to Prompt Engineering – Cognitive Class.ai",
  "Generative AI Fundamentals – Databricks",
  "Career Essentials in Data Analysis – Microsoft and LinkedIn",
  "Google AI Essentials – Google",
  "Career Essentials in Generative AI – Microsoft and LinkedIn",
  "Finetuning Large Language Models! – DeepLearning.AI"
];

const achievements = [
  "Participated in 3 National-Level Hackathons: THE GRATE BENGALORU HACKATHON, IIT SRI CITY, NRIIT.",
  "Certificate of Appreciation for my active participation in organizing SUNRISE 2K25!",
  "Member of BIS standards club at NRIIT."
];

export default function CertificationsAchievements() {
  return (
    <section id="certifications" className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-700 dark:text-indigo-300">Certifications & Achievements</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300 flex items-center gap-2">
              <svg className="w-7 h-7 inline-block text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              Certifications
            </h3>
            <ul className="space-y-3">
              {certifications.map((cert, idx) => (
                <li key={idx} className="bg-white dark:bg-gray-700 rounded-lg shadow p-4 flex items-center gap-3">
                  <span className="text-indigo-500 dark:text-indigo-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="text-gray-800 dark:text-gray-100 text-base">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300 flex items-center gap-2">
              <svg className="w-7 h-7 inline-block text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Achievements
            </h3>
            <ul className="space-y-3">
              {achievements.map((ach, idx) => (
                <li key={idx} className="bg-white dark:bg-gray-700 rounded-lg shadow p-4 flex items-center gap-3">
                  <span className="text-yellow-500 dark:text-yellow-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                  </span>
                  <span className="text-gray-800 dark:text-gray-100 text-base">{ach}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 