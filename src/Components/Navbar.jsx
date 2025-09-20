import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import githubLogo from "../assets/github.png";
import data from "../data/portfolio.json";

const navItems = ["Home", "About me", "Projects"];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  useEffect(() => {
    if (localStorage.theme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <nav className="sticky top-0 z-20 bg-transparent">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-lg md:text-xl font-logo">Prasanth.exe</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="nav-item hover:underline"
              >
                {item}
              </a>
            ))}

            {/* Resume Dropdown */}
            <div className="relative group nav-item">
              <div className="flex items-center gap-1 cursor-pointer hover:underline">
                Resume <ChevronDown size={16} />
              </div>
              <div
                className="
                  absolute top-full right-0 mt-2 w-45
                  flex flex-col rounded-md border border-[rgba(255,255,255,0.2)]
                  bg-[var(--bg-color)]/10 dark:bg-[var(--bg-color)]/10
                  backdrop-blur-md shadow-lg
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition-all duration-200
                  z-50"
              >
                {/* View Resume */}
                <a
                  href={data.resume} // keep the original Dropbox link with ?dl=0
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 hover:bg-[var(--text-color)]/10 rounded-md"
                >
                  View Resume
                </a>

                {/* Download Resume */}
                <a
                  href={data.resume.replace("?dl=0", "?dl=1")} // forces download
                  className="px-4 py-2 hover:bg-[var(--text-color)]/10 rounded-md"
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md flex items-center justify-center"
              style={{ color: "var(--text-color)" }}
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            <a
              href="https://github.com/Prasanth-exe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
              style={{ color: "var(--text-color)" }}
            >
              <img
                src={githubLogo}
                alt="GitHub"
                className="h-6 w-6"
                style={{ filter: darkMode ? "invert(1)" : "invert(0)" }}
              />
            </a>
          </div>

          {/* Mobile Menu Icons */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-md">
              {darkMode ? (
                <Sun size={22} color="var(--text-color)" />
              ) : (
                <Moon size={22} color="var(--text-color)" />
              )}
            </button>
            <a
              href="https://github.com/Prasanth-exe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img
                src={githubLogo}
                alt="GitHub"
                className="h-6 w-6"
                style={{ filter: darkMode ? "invert(1)" : "invert(0)" }}
              />
            </a>
            <div className="cursor-pointer" onClick={toggleNavbar}>
              <Menu size={28} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-30 backdrop-blur-md bg-black/60 flex flex-col items-center justify-center space-y-8 text-2xl font-body text-[var(--text-color)]">
          <button className="absolute top-6 right-6" onClick={closeNavbar}>
            <X size={32} />
          </button>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="nav-item hover:underline"
              onClick={closeNavbar}
            >
              {item}
            </a>
          ))}
          <div className="flex flex-col items-center space-y-4">
            {/* View Resume */}
            <a
              href={data.resume} // keep the original Dropbox link with ?dl=0
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 hover:bg-[var(--text-color)]/10 rounded-md"
            >
              View Resume
            </a>

            {/* Download Resume */}
            <a
              href={data.resume.replace("?dl=0", "?dl=1")} // forces download
              className="px-4 py-2 hover:bg-[var(--text-color)]/10 rounded-md"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
