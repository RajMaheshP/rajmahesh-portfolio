"use client"
import { HEADING_GRADIENT, SECTION_CONTAINER, MAX_WIDTH_SMALL, ANIMATION_DELAYS } from "@/lib/styles"

export default function About() {
  const paragraphs = [
    "I'm Raj Mahesh Padarthi, a passionate Computer Science and AI student at Parul University with expertise in Python, Data Analytics, Power BI, Front-End Development, and Machine Learning. I have worked on impactful projects like AI Translator, E-Commerce website, and AI-based Smart Waste Management System. I thrive in hackathons, coding clubs, and team collaborations.",
    "With a strong foundation in Data Structures and Algorithms, Machine Learning, Database Management Systems, Operating Systems, and Computer Networks, I'm committed to building innovative solutions that solve real-world problems.",
    "My journey in tech is shaped by a deep curiosity and commitment to continuous improvement. I strive to blend creativity with functionality, ensuring that every application I build is intuitive, efficient, and impactful.",
  ]

  return (
    <section id="about" className={SECTION_CONTAINER}>
      <div className={MAX_WIDTH_SMALL}>
        <h2 className={`text-5xl md:text-6xl font-bold mb-12 ${HEADING_GRADIENT}`}>About Me</h2>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          {paragraphs.map((para, idx) => (
            <p
              key={idx}
              className="animate-fade-in-up"
              style={{ animationDelay: ANIMATION_DELAYS[`delay${idx + 1}` as keyof typeof ANIMATION_DELAYS] }}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
