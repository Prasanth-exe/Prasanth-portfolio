import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import githubLogo from "../assets/github.png";

const navItems = ["Home", "About me", "Projects", "Contact"];

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

  // Load saved theme
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
          {/* Logo (smaller on mobile) */}
          <div className="text-lg md:text-xl font-logo">Prasanth.exe</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:underline"
              >
                {item}
              </a>
            ))}

            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="p-2 rounded-md">
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>

            {/* GitHub Icon */}
            <a
              href="https://github.com/Prasanth-exe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img src={githubLogo} alt="GitHub" className="h-6 w-6" />
            </a>
          </div>

          {/* Mobile Menu Row: Theme + GitHub + Hamburger */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Theme Toggle (always visible) */}
            <button onClick={toggleTheme} className="p-2 rounded-md">
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>

            {/* GitHub Icon (header on mobile) */}
            <a
              href="https://github.com/Prasanth-exe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img src={githubLogo} alt="GitHub" className="h-6 w-6" />
            </a>

            {/* Hamburger */}
            <div className="cursor-pointer" onClick={toggleNavbar}>
              <Menu size={28} />
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-30 backdrop-blur-md bg-black/60 flex flex-col items-center justify-center space-y-8 text-color text-2xl font-body">
          {/* Close Button */}
          <button className="absolute top-6 right-6" onClick={closeNavbar}>
            <X size={32} />
          </button>

          {/* Menu Links */}
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:underline"
              onClick={closeNavbar}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
