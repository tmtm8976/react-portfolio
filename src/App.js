import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero/>
      <Projects/>
      <About/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
