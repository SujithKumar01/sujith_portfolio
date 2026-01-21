"use client";

import AnimateSection from "./AnimateSection";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <AnimateSection>
      <section id="projects" className="max-w-6xl mx-auto px-6 py-28">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Projects
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.02 }}
              className="border border-white/10 rounded-2xl p-8 bg-black/40 hover:border-blue-500/40 transition"
            >
              <h3 className="text-2xl font-semibold mb-3 text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 rounded-full
                    border border-blue-500/40 text-blue-400 bg-blue-500/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="list-disc ml-6 text-gray-400 space-y-2">
                {project.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </AnimateSection>
  );
}
