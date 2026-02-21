export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/40 border-b border-zinc-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <h1 className="font-bold text-lg tracking-wide">
          Ronal.dev
        </h1>

        <div className="flex gap-6 text-sm text-zinc-300">
          <a href="#" className="hover:text-white transition">
            Home
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
