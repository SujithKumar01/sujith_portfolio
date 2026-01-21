import { experience } from "@/data/experience";
import AnimateSection from "./AnimateSection";

export default function Experience() {
  return (
    <AnimateSection>
      <section id="experience" className="max-w-5xl mx-auto px-6 py-28">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Experience
        </h2>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div key={index} className="relative border-l border-white/10 pl-8">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-500" />

              <h3 className="text-xl font-semibold text-blue-500">
                {exp.role}
              </h3>
              <p className="text-gray-400 mb-3">
                {exp.company} • {exp.period}
              </p>

              <ul className="list-disc ml-5 text-gray-400 space-y-2">
                {exp.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </AnimateSection>
  );
}
