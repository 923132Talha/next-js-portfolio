import Hero from "./components/main/Hero";
import Skills from "./components/main/Skills";
import Projects from "./components/main/Projects"
import Contact from "./components/main/Contact"
import Footer from "./components/main/Footer"
import Experience from "./components/main/Experience";
import About from "./components/main/About"

export default function Home() {
  return (
    <main className="relative w-full">
      <video
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
      >
        <source src="/" type="video/mp4" />
      </video>
=
      <div className="relative z-10 flex flex-col gap-20">
        <Hero />
        <Skills />
        <About/>
        <Experience/>
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
