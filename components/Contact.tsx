"use client";

import AnimateSection from "./AnimateSection";

export default function Contact() {
  return (
    <AnimateSection>
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-28 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Get in Touch
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          I’m open to Machine Learning Engineer roles, internships,
          and collaborations in applied AI and audio intelligence.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="mailto:sujithkumar0109@gmail.com"
            className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:scale-105 transition"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 px-8 py-3 rounded-md hover:border-white transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 px-8 py-3 rounded-md hover:border-white transition"
          >
            GitHub
          </a>
        </div>
      </section>
    </AnimateSection>
  );
}
