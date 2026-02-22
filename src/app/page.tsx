import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center text-center px-6 bg-gradient-to-b from-black via-zinc-900 to-black text-white pt-24">
        {/* HERO */}
        <section className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between min-h-[80vh] gap-12">
          {/* LEFT SIDE - TEXT */}
          <div className="text-left flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hi, I am{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Ronal Irami
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-xl mb-8">
              Front-End UI Specialist focused on crafting modern, visually
              appealing, and intuitive web interfaces.
            </p>
            
            {/* CONTACT */}
        <div className="w-full flex justify-center gap-6 mt-12 flex-wrap">
          <a href="mailto:your-email@example.com" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 transition rounded-lg">
            Email
          </a>
          <a href="https://github.com/ronalirami" target="_blank" className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 transition rounded-lg">
            GitHub
          </a>
          <a href="https://linkedin.com/in/ronalirami" target="_blank" className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 transition rounded-lg">
            LinkedIn
          </a>
        </div>
      
          </div>

          {/* RIGHT SIDE - PHOTO */}
          <div className="flex-1 flex justify-center">
            <img
              src="/profile.jpg"
              alt="Ronal Irami"
              className="w-72 h-72 object-cover rounded-2xl border border-zinc-800 shadow-lg animate-float animate-glow"
            />
          </div>
        </section>

        

        {/* ABOUT */}
        <section id="about" className="w-full max-w-5xl mt-32">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>

          <p className="text-zinc-400 leading-relaxed text-lg mb-10">
            I am Ronal Irami, a Front-End UI Specialist who focuses on crafting
            visually appealing and intuitive user interfaces. I enjoy
            transforming ideas into interactive digital experiences with clean
            layouts, balanced spacing, and smooth micro-interactions.
            <br />
            <br />
            My goal is to build interfaces that are not only functional, but
            also aesthetically refined and enjoyable to use. I continuously
            improve my design sense and frontend skills to create modern,
            high-quality web experiences.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <span className="px-4 py-2 bg-zinc-800 rounded-lg">Next.js</span>
            <span className="px-4 py-2 bg-zinc-800 rounded-lg">React</span>
            <span className="px-4 py-2 bg-zinc-800 rounded-lg">
              TailwindCSS
            </span>
            <span className="px-4 py-2 bg-zinc-800 rounded-lg">JavaScript</span>
            <span className="px-4 py-2 bg-zinc-800 rounded-lg">
              Git & GitHub
            </span>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="w-full max-w-6xl mt-32">
          <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-blue-500 transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Portfolio Website</h3>
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
              <h3 className="text-xl font-semibold mb-4">Coming Soon</h3>
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
