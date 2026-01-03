"use client"
import { ExternalLink } from "lucide-react"
import { PROJECTS } from "@/lib/constants"
import {
  CARD_FULL,
  HEADING_GRADIENT,
  TECH_TAG,
  SECTION_CONTAINER,
  MAX_WIDTH_CONTAINER,
  getAnimationDelay,
} from "@/lib/styles"

export default function Projects() {
  return (
    <section id="projects" className={SECTION_CONTAINER}>
      <div className={MAX_WIDTH_CONTAINER}>
        <h2 className={`text-5xl md:text-6xl font-bold mb-12 ${HEADING_GRADIENT}`}>Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className={`${CARD_FULL} animate-fade-in-up`}
              style={{ animationDelay: getAnimationDelay(idx) }}
            >
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, tidx) => (
                  <span key={tidx} className={TECH_TAG}>
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition hover:translate-x-1 transform duration-200"
              >
                View on GitHub <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
