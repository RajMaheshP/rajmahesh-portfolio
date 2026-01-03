"use client"

import { Mail, User, MessageSquare } from "lucide-react"
import {
  SECTION_CONTAINER,
  MAX_WIDTH_SMALL,
  HEADING_GRADIENT,
  CARD_FULL,
} from "@/lib/styles"

export default function Contact() {
  return (
    <section id="contact" className={SECTION_CONTAINER}>
      <div className={MAX_WIDTH_SMALL}>
        <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${HEADING_GRADIENT}`}>
          Contact Me
        </h2>

        <p className="text-gray-400 mb-10">
          Feel free to reach out for internships, collaborations, or opportunities.
        </p>

        <form
          action="https://mail.google.com/mail/?view=cm&fs=1&to=rajmaheshpadarthi3@gmail.com"
          target="_blank"
          className={`${CARD_FULL} space-y-6`}
        >
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Your Name
            </label>
            <div className="relative">
              <User size={18} className="absolute left-3 top-3 text-cyan-400" />
              <input
                type="text"
                required
                placeholder="Enter your name"
                className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Your Email
            </label>
            <div className="relative">
              <Mail size={18} className="absolute left-3 top-3 text-cyan-400" />
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Message
            </label>
            <div className="relative">
              <MessageSquare
                size={18}
                className="absolute left-3 top-3 text-cyan-400"
              />
              <textarea
                rows={5}
                required
                placeholder="Write your message..."
                className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-cyan-500 text-black font-medium rounded-lg hover:bg-cyan-400 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
