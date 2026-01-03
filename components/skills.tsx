"use client"
import { SKILL_CATEGORIES } from "@/lib/constants"
import {
  CARD_FULL,
  HEADING_GRADIENT,
  HEADING_CYAN,
  SKILL_TAG,
  SECTION_CONTAINER,
  MAX_WIDTH_CONTAINER,
  getAnimationDelay,
} from "@/lib/styles"

export default function Skills() {
  return (
    <section id="skills" className={SECTION_CONTAINER}>
      <div className={MAX_WIDTH_CONTAINER}>
        <h2 className={`text-5xl md:text-6xl font-bold mb-12 ${HEADING_GRADIENT}`}>Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className={`${CARD_FULL} animate-fade-in-up`}
              style={{ animationDelay: getAnimationDelay(idx) }}
            >
              <h3 className={`text-xl font-bold ${HEADING_CYAN} mb-4`}>{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sidx) => (
                  <span key={sidx} className={SKILL_TAG}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
