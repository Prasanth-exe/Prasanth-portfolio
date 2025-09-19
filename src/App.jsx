import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <About />
        <Projects />
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  );
}

export default App;
