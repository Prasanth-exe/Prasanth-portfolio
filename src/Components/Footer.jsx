import React from "react";
import { Linkedin, Github, Instagram } from "lucide-react";
import data from "../data/portfolio.json"; // Assuming the data file is in the same relative path

function Footer() {
  const { socials } = data.contact;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6">
      {" "}
      {/* Removed background color class */}
      <div className="max-w-7xl mx-auto">
        {/* Social Links */}
        <div className="flex justify-start items-center gap-6 mb-8">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="opacity-70 hover:opacity-100 transition" // Uses parent text color
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="opacity-70 hover:opacity-100 transition"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="opacity-70 hover:opacity-100 transition"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>

        {/* Large "Hire Me" Text */}
        <div className="mb-8">
          <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter">
            Hire Me!
          </h1>
        </div>

        {/* Divider uses text color with opacity for theme consistency */}
        <hr className="border-[var(--text-color)]/20 mb-6" />

        {/* Copyright */}
        <div className="text-center opacity-70 text-sm">
          <p>
            &copy; {currentYear} {data.name}-exe. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
