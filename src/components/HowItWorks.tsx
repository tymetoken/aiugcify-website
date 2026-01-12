'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Search, MousePointer, Video } from 'lucide-react'
import { STEPS } from '@/lib/constants'

const icons = [Search, MousePointer, Video]

export default function HowItWorks() {
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
          <h2 className="section-title mb-4">
            <span className="gradient-text">3 Clicks.</span> That's All It Takes.
          </h2>
          <p className="section-subtitle mx-auto">
            From product page to viral video in under 5 minutes.
            No editing skills required.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {STEPS.map((step, index) => {
              const Icon = icons[index]
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  className="relative"
                >
                  <div className="card-glow text-center h-full">
                    {/* Step Number */}
                    <div className="relative inline-block mb-6">
                      <div className="w-20 h-20 rounded-3xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
                        <Icon className="w-10 h-10 text-primary-400" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 text-white text-sm font-extrabold flex items-center justify-center shadow-lg shadow-accent/25">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
