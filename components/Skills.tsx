import AnimateSection from "./AnimateSection";

export default function Skills() {
  return (
    <AnimateSection>
      <section id="skills" className="max-w-6xl mx-auto px-6 py-28">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            ["Machine Learning & AI", [
              "Machine Learning",
              "Deep Learning",
              "Audio ML",
              "Speaker Diarization",
              "Noise Reduction",
              "NLP",
            ]],
            ["Data & Backend", [
              "Python",
              "SQL",
              "MongoDB",
              "Batch Processing",
              "Automation",
            ]],
            ["Systems & Tools", [
              "Docker",
              "Linux",
              "Git & GitHub",
              "ML Pipelines",
              "Deployment",
            ]],
          ].map(([title, skills], i) => (
            <div key={i} className="border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-blue-500 mb-4">
                {title}
              </h3>
              <ul className="text-gray-400 space-y-2">
                {(skills as string[]).map((s, j) => (
                  <li key={j}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </AnimateSection>
  );
}
