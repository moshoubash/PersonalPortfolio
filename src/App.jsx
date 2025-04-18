import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Skills from "./Skills";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

function App() {
  return (
    <>
    <Navbar />
    <header className="header">
      <Hero />
    </header>
    <main>
      <Services />
      <Skills />
      <Projects />
      <Testimonials />
      <Footer />
    </main>
  </>
  )
}

export default App