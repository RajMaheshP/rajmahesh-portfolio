export const ANIMATION_DELAYS = {
  delay0: "0s",
  delay1: "0.1s",
  delay2: "0.2s",
  delay3: "0.3s",
  delay4: "0.4s",
  delay5: "0.5s",
  delay6: "0.6s",
  delay7: "0.7s",
}

export const getAnimationDelay = (index: number, multiplier = 0.1) => {
  return `${index * multiplier}s`
}

// Card styles
export const CARD_BASE = "bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 backdrop-blur"
export const CARD_HOVER = "hover:border-cyan-500/50 transition hover:scale-105 transform duration-300"
export const CARD_FULL = `${CARD_BASE} ${CARD_HOVER}`

// Button styles
export const BUTTON_PRIMARY =
  "px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-medium transition flex items-center gap-2 hover:scale-105 transform duration-200"
export const BUTTON_SECONDARY =
  "px-8 py-3 rounded-lg border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-medium transition flex items-center gap-2 hover:scale-105 transform duration-200"

// Icon button styles
export const ICON_BUTTON =
  "p-3 rounded-lg bg-slate-800/50 hover:bg-cyan-500/20 transition border border-slate-700 hover:border-cyan-500 hover:scale-110 transform duration-200"

// Text styles
export const HEADING_GRADIENT =
  "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-shift"
export const HEADING_CYAN = "text-cyan-400"
export const TEXT_GRAY = "text-gray-300"
export const TEXT_GRAY_LIGHT = "text-gray-400"

// Section styles
export const SECTION_CONTAINER = "py-20 px-4"
export const MAX_WIDTH_CONTAINER = "max-w-6xl mx-auto"
export const MAX_WIDTH_SMALL = "max-w-4xl mx-auto"

// Skill tag styles
export const SKILL_TAG =
  "px-4 py-2 rounded-lg bg-slate-700/50 text-gray-300 text-sm hover:bg-cyan-500/20 hover:text-cyan-400 transition hover:scale-110 transform duration-200 cursor-pointer"
export const TECH_TAG =
  "px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs hover:bg-cyan-500/40 transition cursor-pointer"
