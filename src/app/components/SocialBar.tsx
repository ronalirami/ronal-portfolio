import React from "react";

export default function SocialBar() {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      <ul className="flex flex-col gap-3">
        <li>
          <a
            href="mailto:your-email@example.com"
            aria-label="Email"
            className="group flex items-center space-x-3"
          >
            <span className="w-10 h-10 flex items-center justify-center bg-blue-600/20 text-white rounded-full shadow-sm group-hover:bg-blue-500/30 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
                <path d="M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25v10.5A2.25 2.25 0 0119.5 19.5h-15A2.25 2.25 0 012.25 17.25V6.75zM4.5 6.75v.638l7.5 4.312 7.5-4.312V6.75" />
              </svg>
            </span>
            <span className="ml-2 text-sm text-zinc-300 opacity-0 group-hover:opacity-100 transition-all">
              Email
            </span>
          </a>
        </li>

        <li>
          <a
            href="tel:+6281234567890"
            aria-label="Phone"
            className="group flex items-center space-x-3"
          >
            <span className="w-10 h-10 flex items-center justify-center bg-green-600/20 text-white rounded-full shadow-sm group-hover:bg-green-500/30 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.89.76a1 1 0 011 1V20a1 1 0 01-1 1C10.5 21 3 13.5 3 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.36.27 2.68.76 3.89.15.36.05.78-.21 1.06l-2.42 2.42z" />
              </svg>
            </span>
            <span className="ml-2 text-sm text-zinc-300 opacity-0 group-hover:opacity-100 transition-all">
              Phone
            </span>
          </a>
        </li>

        <li>
          <a
            href="https://github.com/ronalirami"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="group flex items-center space-x-3"
          >
            <span className="w-10 h-10 flex items-center justify-center bg-zinc-800/20 text-white rounded-full shadow-sm group-hover:bg-zinc-700/30 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
                <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-1.9c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 .1 1.6.8 2 .8.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.4.7 1 .7 2v3c0 .3.2.6.8.5A12 12 0 0012 .5z" />
              </svg>
            </span>
            <span className="ml-2 text-sm text-zinc-300 opacity-0 group-hover:opacity-100 transition-all">
              GitHub
            </span>
          </a>
        </li>

        <li>
          <a
            href="https://linkedin.com/in/ronalirami"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="group flex items-center space-x-3"
          >
            <span className="w-10 h-10 flex items-center justify-center bg-blue-700/20 text-white rounded-full shadow-sm group-hover:bg-blue-600/30 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden>
                <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.4 4.4 5.5V21h-4v-5.2c0-1.2 0-2.7-1.7-2.7-1.7 0-2 1.4-2 2.6V21H9V9z" />
              </svg>
            </span>
            <span className="ml-2 text-sm text-zinc-300 opacity-0 group-hover:opacity-100 transition-all">
              LinkedIn
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
