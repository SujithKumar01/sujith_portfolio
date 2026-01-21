"use client";

import { motion } from "framer-motion";
import AnimateSection from "./AnimateSection";

/* Container animation for staggered cards */
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* Individual card animation */
const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <AnimateSection>
      <section
        id="about"
        className="max-w-5xl mx-auto px-6 py-28"
      >
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="text-white">About</span>{" "}
          <span className="text-blue-500">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side – Text */}
          <div className="text-gray-400 text-lg leading-relaxed">
            <p className="mb-4">
              <span className="text-white font-medium">
                Machine Learning Engineer
              </span>{" "}
              focused on{" "}
              <span className="text-blue-400">
                Audio AI, data-driven systems, and real-world ML applications
              </span>.
            </p>

            <p className="mb-6">
              I have a strong foundation in{" "}
              <span className="text-white">
                Data Analytics and Machine Learning
              </span>, along with a Bachelor’s degree in{" "}
              <span className="text-white">
                Electronics and Communication Engineering
              </span>. I gained hands-on industry experience through internships
              and production-level ML work.
            </p>

            <p>
              I completed a{" "}
              <span className="text-white font-medium">
                7-month internship at Pinaca Technologies (Jan 2024 – Jul 2024)
              </span>{" "}
              and transitioned into a{" "}
              <span className="text-white font-medium">
                full-time Junior Machine Learning Engineer role
              </span>{" "}
              in August 2024. I am currently pursuing a{" "}
              <span className="text-blue-400">
                Master’s in Data Science at the University of Europe for Applied Sciences
                (2025 – 2027)
              </span>{" "}
              and am actively seeking opportunities to contribute to{" "}
              <span className="text-blue-400">
                innovative, data-driven teams
              </span>.
            </p>
          </div>

          {/* Right side – Animated Highlight Cards */}
          <motion.div
            className="space-y-6"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "🎙 Audio Machine Learning",
                desc: "Speaker diarization, noise reduction (GANs, DTLN), and speaker detection in real-world audio.",
              },
              {
                title: "⚙️ Production ML Systems",
                desc: "Large-scale batch processing, automation, MongoDB, and containerized pipelines.",
              },
              {
                title: "🔁 Continuous Improvement",
                desc: "Vector embeddings, false-positive reduction, and automated retraining workflows.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariant}
                whileHover={{ scale: 1.03 }}
                className="border border-white/10 rounded-xl p-6 bg-black/40
                           hover:border-blue-500/40 transition"
              >
                <h3 className="font-semibold text-blue-500 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </AnimateSection>
  );
}
