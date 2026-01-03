"use client"
import { Code2, BookOpen, Zap, Cloud, Rocket } from "lucide-react"

export default function Stats() {
  const stats = [
    { label: "Project Built", value: "2", icon: Code2, color: "bg-gradient-to-br from-blue-500 to-cyan-500" },
    {
      label: "NPTEL Certification",
      value: "2",
      icon: BookOpen,
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    { label: "Year Learning", value: "3+", icon: Zap, color: "bg-gradient-to-br from-purple-500 to-pink-500" },
    { label: "AWS Learning Path", value: "1", icon: Cloud, color: "bg-gradient-to-br from-orange-500 to-red-500" },
    { label: "Internships", value: "1", icon: Rocket, color: "bg-gradient-to-br from-yellow-500 to-orange-500" },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div
              key={idx}
              className="flex flex-col items-center animate-fade-in-up"
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              <div
                className={`${stat.color} p-4 rounded-2xl mb-4 flex items-center justify-center hover:scale-110 transform transition duration-300 cursor-pointer`}
              >
                <Icon size={32} className="text-white" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-gray-400 text-sm text-center mt-2">{stat.label}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
