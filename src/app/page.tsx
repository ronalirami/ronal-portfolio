export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, iam <span className="text-blue-600">Ronal Irami</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
        Front-End Developer passionate about building modern web applications
        with Next.js, React, and clean UI design.
      </p>

      <div className="flex gap-4">
        <a
          href="https://github.com/ronalirami"
          target="_blank"
          className="px-6 py-3 bg-black text-white rounded-lg hover:opacity-80 transition"
        >
          View GitHub
        </a>

        <a
          href="#projects"
          className="px-6 py-3 border border-black rounded-lg hover:bg-black hover:text-white transition"
        >
          View Projects
        </a>
      </div>
    </main>
  );
}
