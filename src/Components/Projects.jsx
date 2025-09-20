import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import data from "../data/portfolio.json";

function Projects() {
  const projects = data.projects;
  const skills = data.skills;

  return (
    <section id="projects" className="py-12 max-w-4xl mx-auto px-6 space-y-10">
      <h2 className="text-3xl md:text-4xl font-serif text-center mb-8 relative inline-block">
        <span className="flex items-center justify-center gap-2">
          <Code className="w-6 h-6 text-[var(--text-color)]" />{" "}
          {/* Code icon styling */}
          Projects
        </span>
        <span className="block w-16 h-[2px] bg-[var(--text-color)] mx-auto mt-2"></span>
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="bg-[var(--bg-color)] border border-[var(--text-color)] rounded-lg shadow-sm p-4 flex flex-col w-full sm:w-[45%] md:w-[30%] cursor-pointer"
            whileHover={{ rotate: 2, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-md mb-3 w-full h-32 object-cover"
            />

            <h3 className="text-lg font-heading mb-1">{project.title}</h3>
            <p className="text-[var(--text-color)] text-sm mb-3">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-3">
              {project.techStack.map((tech, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-1 border border-[var(--text-color)] rounded-full px-2 py-1 text-xs whitespace-nowrap"
                  >
                    <span>{tech}</span>
                  </div>
                );
              })}
            </div>

            {/* Links */}
            <div className="flex justify-start mt-auto gap-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="button px-3 py-1 text-sm"
              >
                GitHub
              </a>

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-outline px-3 py-1 text-sm"
                >
                  Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
