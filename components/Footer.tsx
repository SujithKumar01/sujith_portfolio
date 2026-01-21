export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
        <p>
          © {new Date().getFullYear()} Sujith Kumar. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/SujithKumar01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/thangella-sujith-kumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:sujithkumar0109@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
