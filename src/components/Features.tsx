'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Brain, Video, Edit, History, CreditCard } from 'lucide-react'
import { FEATURES } from '@/lib/constants'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Brain,
  Video,
  Edit,
  History,
  CreditCard,
}

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            Everything You Need to Create{' '}
            <span className="gradient-text">Viral Videos</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Powerful features that make professional video creation effortless
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon]
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="card-glow h-full hover:scale-[1.02] transition-transform duration-300">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.06] text-primary-400 mb-4 group-hover:scale-105 group-hover:border-white/10 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/[0.05] border border-white/[0.08] rounded-full">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white/70 font-semibold">New features added weekly</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
