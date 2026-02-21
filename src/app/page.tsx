export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Hi, I am{" "}
        <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Ronal Irami
        </span>
      </h1>

      <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-8">
        Front-End Developer passionate about building modern web applications
        with Next.js, React, and clean UI design.
      </p>

      <div className="flex gap-6">
        <a
          href="https://github.com/ronalirami"
          target="_blank"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition duration-300 shadow-lg"
        >
          View GitHub
        </a>

        <a
          href="#projects"
          className="px-6 py-3 border border-zinc-600 hover:bg-white hover:text-black rounded-lg transition duration-300"
        >
          View Projects
        </a>
      </div>
    </main>
  );
}
