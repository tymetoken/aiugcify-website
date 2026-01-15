'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageCircle, Sparkles, TrendingUp } from 'lucide-react'

const OBJECTIONS = [
  {
    icon: MessageCircle,
    statement: "Your customers don't care if it's AI. They care if the product solves their problem.",
  },
  {
    icon: Sparkles,
    statement: 'The AI videos look and feel like real UGC. No robotic voices. No generic templates. Just authentic-looking product videos.',
  },
  {
    icon: TrendingUp,
    statement: 'The question isn\'t "Is it AI?" The question is "Does it sell?" And yes, it does.',
  },
] as const

export default function ObjectionHandling() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
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
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="text-white">But Wait...</span>
            <br />
            <span className="gradient-text">Won't Buyers Know It's AI?</span>
          </h2>
        </motion.div>

        {/* 3-column grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {OBJECTIONS.map((objection, index) => {
            const Icon = objection.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card h-full p-8">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 mb-6">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>

                  {/* Statement */}
                  <p className="text-white/80 text-base leading-relaxed">
                    {objection.statement}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
