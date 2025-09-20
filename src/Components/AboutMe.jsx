import React from "react";
import { BookOpen, Briefcase, Code, FileText } from "lucide-react";
import data from "../data/portfolio.json";

function About() {
  const { bio, frontendSkills, languages, lookingFor } = data.about;
  const education = data.education;

  return (
    <section
      id="about-me"
      className="mt-8 md:mt-12 py-12 max-w-4xl mx-auto px-6 space-y-10"
    >
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-center relative inline-block mx-auto">
        About Me
        <span className="block w-12 h-[2px] bg-[var(--text-color)] mx-auto mt-2"></span>
      </h2>

      {/* Bio */}
      <div className="space-y-6 text-center">
        <p className="text-[var(--text-color)] leading-relaxed max-w-2xl mx-auto">
          {bio}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {frontendSkills.map((skill, i) => (
            <div key={i} className="skill-button">
              <Code size={18} />
              <span>{skill}</span>
            </div>
          ))}

          {languages.map((lang, i) => (
            <div key={i} className="skill-button">
              <FileText size={18} />
              <span>{lang}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="space-y-4">
        <h3 className="text-2xl font-serif tracking-wide flex items-center gap-2">
          <BookOpen size={20} /> Education
        </h3>
        <div className="space-y-3 pl-4 border-l-4 border-solid border-[var(--text-color)]">
          {education.map((edu, i) => (
            <div key={i} className="ml-2">
              <p className="font-medium">
                {edu.degree} — {edu.institution}{" "}
                <span className="text-sm">({edu.duration})</span>
              </p>
              <p className="text-sm text-gray secondary-color">
                <span className="font-bold">Coursework: </span>
                {edu.coursework.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Opportunities */}
      <div className="space-y-2">
        <h3 className="text-2xl font-serif tracking-wide flex items-center gap-2">
          <Briefcase size={20} /> Looking for Opportunities
        </h3>
        <p className="leading-relaxed">{lookingFor}</p>
      </div>
    </section>
  );
}

export default About;
