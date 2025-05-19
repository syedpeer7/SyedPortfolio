// File: src/components/Contact.jsx
import React, { useRef } from "react";

export default function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const message = messageRef.current.value;
    
    // Create email content
    const subject = `New Contact Form Message from ${name}`;
    const body = `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `;
    
    // Send email to your address
    window.location.href = `mailto:sdsyedpeer@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Let's discuss how we can work together</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Send me a message</h3>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 pl-12 border-2 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
                  ref={nameRef}
                  required
                />
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 pl-12 border-2 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
                  ref={emailRef}
                  required
                />
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full p-4 pl-12 border-2 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-300"
                  ref={phoneRef}
                  required
                />
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <textarea
                  placeholder="Your Message"
                  className="w-full p-4 pl-12 border-2 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-300 min-h-[150px]"
                  ref={messageRef}
                  required
                ></textarea>
                <div className="absolute top-4 left-4 flex items-start pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
              </div>

              <button
                type="submit"
                className="bg-indigo-600 text-white py-4 px-8 rounded-xl font-medium hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a href="mailto:sdsyedpeer@gmail.com" className="text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">sdsyedpeer@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <a href="tel:+919876543210" className="text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">+91 98765 43210</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-gray-800 dark:text-white">Porumamilla, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Connect with me</h3>
              <div className="flex gap-4 justify-center">
                <a href="https://github.com/syedpeer7/" target="_blank" rel="noopener noreferrer" title="GitHub" 
                   className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors duration-300">
                  <svg className="w-6 h-6 text-gray-700 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.186 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.204 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/syed-peer-b01ab9265" target="_blank" rel="noopener noreferrer" title="LinkedIn"
                   className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors duration-300">
                  <svg className="w-6 h-6 text-gray-700 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.28h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.599v5.597z"/>
                  </svg>
                </a>
                <a href="https://x.com/Syed_peer7777" target="_blank" rel="noopener noreferrer" title="X (Twitter)"
                   className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors duration-300">
                  <svg className="w-6 h-6 text-gray-700 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.162 0h-4.327l-5.835 8.228-5.835-8.228h-4.327l8.228 11.616-8.228 11.616h4.327l5.835-8.228 5.835 8.228h4.327l-8.228-11.616z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/_syed_7777" target="_blank" rel="noopener noreferrer" title="Instagram"
                   className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors duration-300">
                  <svg className="w-6 h-6 text-gray-700 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
