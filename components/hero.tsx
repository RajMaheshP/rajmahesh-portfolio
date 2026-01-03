"use client"

import { Mail, Github, Linkedin, Download } from "lucide-react"
import { ANIMATION_DELAYS, BUTTON_PRIMARY, BUTTON_SECONDARY, ICON_BUTTON } from "@/lib/styles"

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center max-w-4xl mx-auto">

        {/* Profile Image with gradient border */}
        <div className="mb-12 flex justify-center animate-fade-in-down">
          <div className="relative w-56 h-56 animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-1.5 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden">
                <img
                  src="/raj_profile.jpeg"
                  alt="Raj Mahesh Padarthi"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tagline Box */}
        <div
          className="mb-8 inline-block px-6 py-3 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur animate-fade-in-up"
          style={{ animationDelay: ANIMATION_DELAYS.delay1 }}
        >
          <p className="text-cyan-400 text-sm font-medium">Future Innovator</p>
        </div>

        {/* Name and Title */}
        <h1
          className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift"
          style={{ animationDelay: ANIMATION_DELAYS.delay2 }}
        >
          Raj Mahesh Padarthi
        </h1>

        <p
          className="text-xl md:text-2xl text-gray-300 mb-2 animate-fade-in-up"
          style={{ animationDelay: ANIMATION_DELAYS.delay3 }}
        >
          Aspiring Data Analyst | AI & ML Enthusiast
        </p>

        <p
          className="text-gray-400 mb-12 animate-fade-in-up"
          style={{ animationDelay: ANIMATION_DELAYS.delay4 }}
        >
          Parul University, Vadodara | Expected Graduation: 2026
        </p>

        {/* Action Buttons */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up"
          style={{ animationDelay: ANIMATION_DELAYS.delay5 }}
        >
          {/* Download Resume */}
          <a
            href="/Padarthi_Raj_Mahesh.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className={BUTTON_PRIMARY}
          >
            <Download size={20} />
            Download Resume
          </a>

          {/* Contact Me */}
          <a
            href="#contact"
            className={BUTTON_SECONDARY}
          >
            <Mail size={20} />
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div
          className="flex justify-center gap-4 mb-12 animate-fade-in-up"
          style={{ animationDelay: ANIMATION_DELAYS.delay6 }}
        >
          <a
            href="https://www.linkedin.com/in/rajmaheshpadarthi/"
            target="_blank"
            rel="noopener noreferrer"
            className={ICON_BUTTON}
          >
            <Linkedin size={24} className="text-cyan-400" />
          </a>

          <a
            href="https://github.com/RajMaheshP"
            target="_blank"
            rel="noopener noreferrer"
            className={ICON_BUTTON}
          >
            <Github size={24} className="text-purple-400" />
          </a>
        </div>

        {/* Explore Journey */}
        <div
          className="text-gray-400 text-sm animate-fade-in-up"
          style={{ animationDelay: ANIMATION_DELAYS.delay7 }}
        >
          <p className="mb-2">Explore Journey</p>
          <a href="#about" className="inline-block text-cyan-400 hover:text-cyan-300 transition animate-float">
            <Linkedin size={24} />
          </a>
        </div>

      </div>
    </section>
  )
}
