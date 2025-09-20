import React, { useEffect, useState } from "react";
import "../App.css";

function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    // Apply theme from localStorage
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setThemeLoaded(true);

    const timer = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!show || !themeLoaded) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <h1 className="text-3xl md:text-5xl font-extrabold font-logo tracking-tighter text-outline">
        Hello World!
      </h1>

      <div className="flex mt-4 space-x-3">
        <span className="w-4 h-4 bg-[var(--text-color)] rounded-full loading-dot1"></span>
        <span className="w-4 h-4 bg-[var(--text-color)] rounded-full loading-dot2"></span>
        <span className="w-4 h-4 bg-[var(--text-color)] rounded-full loading-dot3"></span>
      </div>
    </div>
  );
}

export default LoadingScreen;
