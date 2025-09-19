import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const closeNavbar = () => setIsOpen(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Load saved theme
  useEffect(() => {
    if (localStorage.theme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Save theme
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <nav className="sticky top-0 z-20 bg-transparent-nav">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-logo">Prasanth | Frontend Dev</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="nav-link">
              About
            </a>
            <a href="#" className="nav-link">
              Projects
            </a>
            <a href="#" className="nav-link">
              Contact
            </a>

            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="p-2 rounded-md">
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>

            {/* GitHub Icon (Desktop only) */}
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              {/* Light mode logo */}
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub Light"
                className="h-6 w-6 dark:hidden"
              />
              {/* Dark mode logo */}
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                alt="GitHub Dark"
                className="h-6 w-6 hidden dark:block"
              />
            </a>
          </div>

          {/* Mobile Menu Button (hamburger only) */}
          <div className="md:hidden cursor-pointer" onClick={toggleNavbar}>
            <Menu size={28} />
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-30 backdrop-blur-md bg-black/60 flex flex-col items-center justify-center space-y-8 text-white text-2xl font-semibold">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white"
            onClick={closeNavbar}
          >
            <X size={32} />
          </button>

          {/* Menu Links */}
          <a href="#" className="nav-link" onClick={closeNavbar}>
            About
          </a>
          <a href="#" className="nav-link" onClick={closeNavbar}>
            Projects
          </a>
          <a href="#" className="nav-link" onClick={closeNavbar}>
            Contact
          </a>
          {/* 🚫 No GitHub icon here */}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
