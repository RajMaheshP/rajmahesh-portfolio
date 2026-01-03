"use client"

import React from "react"

import Hero from "@/components/hero"
import Stats from "@/components/stats"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  opacity: number
  animationDelay: string
}

export default function Portfolio() {
  const PARTICLE_COUNT = 20

  // ✅ Start EMPTY (important for hydration)
  const [particles, setParticles] = React.useState<Particle[]>([])

  // ✅ Generate particles ONLY on client after mount
  React.useEffect(() => {
    const initialParticles: Particle[] = Array.from(
      { length: PARTICLE_COUNT },
      () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        opacity: Math.random() * 0.5 + 0.3,
        animationDelay: `${Math.random() * 5}s`,
      })
    )

    setParticles(initialParticles)
  }, [])

  // ✅ Animate particles
  React.useEffect(() => {
    if (particles.length === 0) return

    let frameId: number

    const animate = () => {
      setParticles(prev =>
        prev.map(p => {
          let x = p.x + p.vx
          let y = p.y + p.vy
          let vx = p.vx
          let vy = p.vy

          // Bounce off edges
          if (x < 0 || x > 100) vx = -vx
          if (y < 0 || y > 100) vy = -vy

          x = Math.max(0, Math.min(100, x))
          y = Math.max(0, Math.min(100, y))

          return { ...p, x, y, vx, vy }
        })
      )

      frameId = requestAnimationFrame(animate)
    }

    frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [particles.length])

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="rgba(0, 255, 255, 0.1)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Animated flowing lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <line
            x1="0"
            y1="0"
            x2="100%"
            y2="100%"
            stroke="rgba(0, 255, 255, 0.2)"
            strokeWidth="2"
            className="animate-line-flow"
          />
          <line
            x1="100%"
            y1="0"
            x2="0"
            y2="100%"
            stroke="rgba(168, 85, 247, 0.2)"
            strokeWidth="2"
            className="animate-line-flow-reverse"
          />
          <line
            x1="50%"
            y1="0"
            x2="50%"
            y2="100%"
            stroke="rgba(0, 255, 255, 0.15)"
            strokeWidth="1"
            className="animate-line-flow"
          />
          <line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke="rgba(168, 85, 247, 0.15)"
            strokeWidth="1"
            className="animate-line-flow-reverse"
          />
        </svg>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {particles.map((p, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-particle"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                opacity: p.opacity,
                animationDelay: p.animationDelay,
              }}
            />
          ))}
        </div>
      </div>

      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-blob-2" />
      </div>

      <div className="relative z-10">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
