"use client";

import { motion } from "framer-motion";
import AnimateSection from "./AnimateSection";

export default function Skills() {
  const skillGroups: [string, string[]][] = [
    [
      "Machine Learning & AI",
      [
        "Machine Learning",
        "Deep Learning",
        "Audio ML",
        "Speaker Diarization",
        "Noise Reduction",
        "NLP",
      ],
    ],
    [
      "Data & Backend",
      [
        "Python",
        "SQL",
        "MongoDB",
        "Batch Processing",
        "Automation",
      ],
    ],
    [
      "Systems & Tools",
      [
        "Docker",
        "Linux",
        "Git & GitHub",
        "ML Pipelines",
        "Deployment",
      ],
    ],
  ];

  return (
    <AnimateSection>
      <section id="skills" className="max-w-6xl mx-auto px-6 py-28">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map(([title, skills], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.04 }}
              className="border border-white/10 rounded-2xl p-6 bg-black/40
                         hover:border-blue-500/40 transition"
            >
              <h3 className="text-xl font-semibold text-blue-500 mb-4">
                {title}
              </h3>

              <ul className="text-gray-400 space-y-2">
                {skills.map((skill, j) => (
                  <li key={j}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </AnimateSection>
  );
}
