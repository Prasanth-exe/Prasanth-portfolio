import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import LoadingScreen from "./Components/LoadingScreen";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <LoadingScreen />;
  return (
    <div className="relative">
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
