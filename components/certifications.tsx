"use client"
import { CERTIFICATIONS } from "@/lib/constants"
import { CARD_FULL, HEADING_GRADIENT, SECTION_CONTAINER, MAX_WIDTH_SMALL, getAnimationDelay } from "@/lib/styles"

export default function Certifications() {
  return (
    <section id="certifications" className={SECTION_CONTAINER}>
      <div className={MAX_WIDTH_SMALL}>
        <h2 className={`text-5xl md:text-6xl font-bold mb-12 ${HEADING_GRADIENT}`}>Certifications</h2>
        <div className="space-y-4">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className={`${CARD_FULL} animate-fade-in-up`}
              style={{ animationDelay: getAnimationDelay(idx, 0.05) }}
            >
              <p className="text-gray-300">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
