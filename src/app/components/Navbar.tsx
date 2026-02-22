"use client";

import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/40 border-b border-zinc-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <h1 className="font-bold text-lg tracking-wide">Irami.dev</h1>

        <div className="flex gap-6 text-sm text-zinc-300 items-center">
          <a href="#" className="hover:text-white transition">
            Home
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <div className="relative" ref={ref}>
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-haspopup="menu"
              className="hover:text-white transition flex items-center gap-2"
            >
              Contact
              <svg
                className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-56 bg-zinc-900 border border-zinc-800 rounded-md shadow-lg py-2 z-50">
                <a
                  href="mailto:your-email@example.com"
                  className="block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-800 hover:text-white"
                >
                  Email
                </a>
                <a
                  href="tel:+6281234567890"
                  className="block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-800 hover:text-white"
                >
                  Phone
                </a>
                <a
                  href="https://github.com/ronalirami"
                  target="_blank"
                  rel="noreferrer"
                  className="block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-800 hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/ronalirami"
                  target="_blank"
                  rel="noreferrer"
                  className="block px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-800 hover:text-white"
                >
                  LinkedIn
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
