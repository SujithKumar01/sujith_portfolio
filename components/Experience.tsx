"use client";

import { experience } from "@/data/experience";
import { motion } from "framer-motion";
import AnimateSection from "./AnimateSection";

export default function Experience() {
  return (
    <AnimateSection>
      <section id="experience" className="max-w-5xl mx-auto px-6 py-28">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Experience
        </h2>

        <div className="space-y-12">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative border-l border-white/10 pl-8"
            >
              {/* Timeline dot */}
              <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-blue-500" />

              {/* Role */}
              <h3 className="text-xl font-semibold text-blue-500">
                {exp.role}
              </h3>

              {/* Company & Period */}
              <p className="text-gray-400 mb-3">
                {exp.company} • {exp.period}
              </p>

              {/* Points */}
              <ul className="list-disc ml-5 text-gray-400 space-y-2">
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </AnimateSection>
  );
}
