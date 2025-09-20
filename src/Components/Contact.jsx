import React from "react";
import { Mail, Phone } from "lucide-react";
import data from "../data/portfolio.json";

function Contact() {
  const { email, phone } = data.contact;

  return (
    <section id="contact" className="py-12 max-w-4xl mx-auto px-6">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-8 relative inline-block">
          Get In Touch
          <span className="block w-16 h-[2px] bg-[var(--text-color)] mx-auto mt-2"></span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-10 mt-8">
        {/* Left Side: Contact Info */}
        <div className="w-full md:w-1/3 space-y-4">
          <h3 className="text-xl font-semibold">Contact Details</h3>
          <div className="flex items-center gap-3 p-3 border border-[var(--text-color)]/20 rounded-lg">
            <Mail className="h-5 w-5 text-[var(--accent-color)]" />
            <a href={`mailto:${email}`} className="hover:underline">
              {email}
            </a>
          </div>
          <div className="flex items-center gap-3 p-3 border border-[var(--text-color)]/20 rounded-lg">
            <Phone className="h-5 w-5 text-[var(--accent-color)]" />
            <a href={`tel:${phone}`} className="hover:underline">
              {phone}
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <form
          action="https://formspree.io/f/YOUR_UNIQUE_ID" // IMPORTANT: Replace with your Formspree ID
          method="POST"
          className="flex flex-col gap-4 w-full md:w-2/3"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="border border-[var(--text-color)]/50 rounded-lg px-4 py-2 text-[var(--text-color)] bg-transparent focus:outline-none focus:ring-1 focus:ring-[var(--text-color)]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border border-[var(--text-color)]/50 rounded-lg px-4 py-2 text-[var(--text-color)] bg-transparent focus:outline-none focus:ring-1 focus:ring-[var(--text-color)]"
          />
          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            required
            className="border border-[var(--text-color)]/50 rounded-lg px-4 py-2 text-[var(--text-color)] bg-transparent focus:outline-none focus:ring-1 focus:ring-[var(--text-color)]"
          ></textarea>
          <button
            type="submit"
            className="bg-[var(--text-color)] text-[var(--bg-color)] rounded-lg px-4 py-2 font-bold hover:bg-opacity-80 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
