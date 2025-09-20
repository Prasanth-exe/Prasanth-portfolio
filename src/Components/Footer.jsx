import React from "react";
import { Linkedin, Github, Instagram } from "lucide-react";
import data from "../data/portfolio.json";

function Footer() {
  const { socials } = data.contact;

  return (
    <footer className="pt-12 pb-4 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Social Heading */}
        <h3
          className="
    text-xl md:text-2xl font-serif font-semibold
    mb-4 text-[var(--text-color)]
    relative inline-block
    before:block before:absolute before:-bottom-1 before:left-0
    before:w-12 before:h-[2px] before:bg-[var(--text-color)]
    hover:scale-105 transform transition-all duration-200
  "
        >
          Connect with me
        </h3>

        {/* Social Links */}
        <div className="flex justify-start items-center gap-6 mb-8">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="opacity-70 hover:opacity-100 transform hover:scale-125 transition-all duration-200"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="opacity-70 hover:opacity-100 transform hover:scale-125 transition-all duration-200"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="opacity-70 hover:opacity-100 transform hover:scale-125 transition-all duration-200"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>

        {/* Large "Hire Me" Text */}
        <div className="mb-2">
          <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter text-outline">
            Hire Me!
          </h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
