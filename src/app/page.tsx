import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black via-zinc-900 to-black text-white pt-24">
        
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
        <section id="projects" className="w-full max-w-6xl mt-32">
  <h2 className="text-3xl font-bold mb-12 text-center">
    My Projects
  </h2>

  <div className="grid md:grid-cols-2 gap-8">
    
    <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-blue-500 transition duration-300">
      <h3 className="text-xl font-semibold mb-4">
        Portfolio Website
      </h3>
      <p className="text-zinc-400 mb-4">
        Personal portfolio built with Next.js and TailwindCSS.
      </p>
      <a
        href="https://github.com/ronalirami"
        target="_blank"
        className="text-blue-400 hover:text-blue-300"
      >
        View Code →
      </a>
    </div>

    <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-blue-500 transition duration-300">
      <h3 className="text-xl font-semibold mb-4">
        Coming Soon
      </h3>
      <p className="text-zinc-400 mb-4">
        More awesome projects are on the way.
      </p>
    </div>

  </div>
</section>


      </main>
    </>
  );
}
