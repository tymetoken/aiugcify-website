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
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Perfect For:</span>
          </h2>
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
              >
                <div className="card card-glow h-full p-8 text-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 mb-6">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {customer.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm">
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
