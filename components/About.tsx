"use client";

import AnimateSection from "./AnimateSection";

export default function About() {
  return (
    <AnimateSection>
      <section
        id="about"
        className="max-w-5xl mx-auto px-6 py-28"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="text-white">About</span>{" "}
          <span className="text-blue-500">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side – Text */}
          <div className="text-gray-400 text-lg leading-relaxed">
            <p className="mb-6">
              I’m a <span className="text-white font-medium">
                Machine Learning Engineer
              </span> with hands-on experience building
              production-grade systems for audio intelligence. My work focuses
              on solving real-world problems like speaker identification, noise
              reduction, and large-scale audio processing.
            </p>

            <p>
              At Pinaca Technologies, I work on end-to-end ML pipelines that
              handle lakhs of audio files. I design scalable workflows,
              optimize model performance, and automate retraining pipelines to
              improve accuracy over time.
            </p>
          </div>

          {/* Right side – Highlights */}
          <div className="space-y-6">
            <div className="border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold mb-2">
                🎙 Audio Machine Learning
              </h3>
              <p className="text-gray-400">
                Speaker diarization, noise reduction (GANs, DTLN),
                and speaker detection in real-world audio.
              </p>
            </div>

            <div className="border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold mb-2">
                ⚙️ Production ML Systems
              </h3>
              <p className="text-gray-400">
                Large-scale batch processing, automation, MongoDB,
                and containerized pipelines.
              </p>
            </div>

            <div className="border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold mb-2">
                🔁 Continuous Improvement
              </h3>
              <p className="text-gray-400">
                Vector embeddings, false-positive reduction,
                and automated retraining workflows.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimateSection>
  );
}
