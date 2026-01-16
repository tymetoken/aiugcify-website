'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { User, Users, Building2 } from 'lucide-react'

const IDEAL_CUSTOMERS = [
  {
    icon: User,
    title: 'TikTok Shop Sellers',
    description: 'Testing 10+ products/month',
  },
  {
    icon: Users,
    title: 'Affiliates',
    description: 'Promoting multiple products',
  },
  {
    icon: Building2,
    title: 'Agencies',
    description: 'Managing client TikTok Shop accounts',
  },
] as const

export default function WhoThisIsFor() {
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
            <span className="gradient-text">Perfect For:</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Built for creators who need to scale video production
          </p>
        </motion.div>

        {/* 3-column grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {IDEAL_CUSTOMERS.map((customer, index) => {
            const Icon = customer.icon
            return (
              <motion.div
                key={customer.title}
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

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {customer.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed text-base">
                    {customer.description}
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
