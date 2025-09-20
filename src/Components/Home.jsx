import React from "react";
import { motion } from "framer-motion";
import data from "../data/portfolio.json";

function Home() {
  const name = data.name.split("");

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center px-6 pt-10 md:pt-20 min-h-[60vh] md:min-h-[80vh]"
    >
      {/* Intro line */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-base md:text-lg text-[var(--text-color)] mb-3"
      >
        Hi, my name is
      </motion.p>

      {/* Main Name with hover animation */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-logo mb-6 flex space-x-1"
      >
        {name.map((letter, i) => (
          <motion.span
            key={i}
            whileHover={{
              y: -8,
              rotate: -5,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="inline-block cursor-default"
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-xl md:text-2xl font-logo text-[var(--text-color)] mb-6"
      >
        {data.role}
      </motion.h2>

      {/* Short description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-2xl text-base md:text-lg text-[var(--text-color)] mb-10"
      >
        {data.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex space-x-4"
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="button"
        >
          View Projects
        </motion.a>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="button button-outline"
        >
          Contact Me
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Home;
