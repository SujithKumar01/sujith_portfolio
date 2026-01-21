"use client";

import { motion } from "framer-motion";
import AnimateSection from "./AnimateSection";

export default function Education() {
  const education = [
    {
      degree: "Master's in Data Science",
      institute: "University of Europe for Applied Sciences",
      period: "Sep 2025 – Aug 2027 (Expected)",
      location: "Potsdam, Germany",
      highlight: true,
    },
    {
      degree: "Data Analytics and Machine Learning",
      institute: "Imarticus Learning",
      period: "Nov 2022 – Aug 2023",
      location: "Hyderabad, India",
    },
    {
      degree: "Bachelor of Technology in Electronics & Communication Engineering",
      institute: "University College of Engineering Narasaraopet, JNTUK",
      period: "2018 – 2022",
      location: "Narasaraopet, India",
    },
  ];

  return (
    <AnimateSection>
      <section id="education" className="max-w-5xl mx-auto px-6 py-28">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className={`border rounded-2xl p-6 bg-black/40 transition
                ${
                  edu.highlight
                    ? "border-blue-500/50"
                    : "border-white/10 hover:border-blue-500/40"
                }`}
            >
              <h3 className="text-xl font-semibold text-blue-500 mb-1">
                {edu.degree}
              </h3>

              <p className="text-white font-medium">
                {edu.institute}
              </p>

              <p className="text-gray-400 mt-1">
                {edu.period}
              </p>

              <p className="text-gray-400 text-sm mt-1">
                {edu.location}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </AnimateSection>
  );
}
