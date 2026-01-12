'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { DollarSign, Clock, TrendingDown } from 'lucide-react'
import { PAIN_POINTS } from '@/lib/constants'

const icons = [DollarSign, Clock, TrendingDown]

export default function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            The <span className="text-white/60">UGC Problem</span> Every Seller Faces
          </h2>
          <p className="section-subtitle mx-auto">
            Traditional UGC is slow, expensive, and unpredictable.
            You deserve better.
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PAIN_POINTS.map((point, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={point.stat}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="card h-full text-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.06] text-white/60 mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Stat */}
                  <div className="font-display text-4xl lg:text-5xl font-bold text-white mb-2">
                    {point.stat}
                  </div>
                  <div className="text-white/40 text-sm uppercase tracking-wider mb-4">
                    {point.label}
                  </div>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Transition Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-white/60">
            There has to be a better way...
            <span className="text-accent font-semibold"> and there is.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
