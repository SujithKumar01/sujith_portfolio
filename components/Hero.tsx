import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-3xl">

        {/* Profile Image */}
        <div className="flex justify-center mb-10">
          <Image
            src="/profile.jpg"
            alt="Sujith Kumar profile picture"
            width={240}
            height={240}
            className="rounded-full border-2 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-105 transition"
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          <span className="text-white">Machine Learning Engineer</span>
          <br />
          <span className="text-blue-500">
            Aspiring Data Scientist
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg md:text-xl mb-10">
          Building scalable ML pipelines for speaker identification,
          noise reduction, and real-world audio intelligence.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="#projects"
            className="bg-blue-500 text-white px-8 py-3 rounded-md font-semibold
            hover:bg-blue-600 hover:shadow-lg transition"
          >
            View Projects
          </a>

          <a
            href="/Sujith_Kumar_Resume.pdf"
            download
            className="border border-blue-500 text-blue-500 px-8 py-3 rounded-md
            hover:bg-blue-500 hover:text-white transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
