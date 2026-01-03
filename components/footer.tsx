"use client"

import { Code2, Zap, Linkedin, Github, Heart, Rocket } from "lucide-react"
import { FOOTER_TECH_SKILLS, FOOTER_LINKS, SOCIAL_LINKS, CONTACT_INFO } from "@/lib/constants"
import { ICON_BUTTON, ANIMATION_DELAYS } from "@/lib/styles"

export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-16 px-4 border-t border-slate-700/50 bg-slate-950/50 backdrop-blur"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Left Section - About */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                <Code2 size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Raj Mahesh Padarthi
                </h3>
                <p className="text-cyan-400 text-sm">
                  Computer Science & AI Student
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Passionate about creating digital experiences that bridge imagination
              and reality. Focused on learning, growth, and building practical
              technology-driven solutions.
            </p>

            <div className="flex gap-2 mt-4 flex-wrap">
              {FOOTER_TECH_SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-slate-800 text-gray-300 text-xs border border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: ANIMATION_DELAYS.delay1 }}
          >
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Zap size={20} className="text-cyan-400" />
              Quick Links
            </h4>

            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Let's Connect */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: ANIMATION_DELAYS.delay2 }}
          >
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Linkedin size={20} className="text-cyan-400" />
              Let&apos;s Connect
            </h4>

            <div className="space-y-3">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_INFO.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 text-sm hover:text-cyan-400 transition"
              >
                <span className="text-cyan-400 font-medium">Email:</span>{" "}
                {CONTACT_INFO.email}
              </a>

              <p className="text-gray-400 text-sm">
                <span className="text-cyan-400 font-medium">Location:</span>{" "}
                {CONTACT_INFO.location}
              </p>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="block text-gray-400 text-sm hover:text-cyan-400 transition"
              >
                <span className="text-cyan-400 font-medium">Phone:</span>{" "}
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Made with <Heart size={16} className="text-red-500 fill-red-500" /> by
            Raj Mahesh Padarthi © 2026
          </p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className={ICON_BUTTON}
            >
              <Github size={20} className="text-cyan-400" />
            </a>

            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={ICON_BUTTON}
            >
              <Linkedin size={20} className="text-purple-400" />
            </a>

            {/* Scroll to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Scroll to top"
              className="p-3 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 hover:scale-110 transform transition duration-200 fixed bottom-8 right-8"
            >
              <Rocket size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
