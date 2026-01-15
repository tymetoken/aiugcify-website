'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShieldCheck } from 'lucide-react'

export default function RiskReversal() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      {/* Animated Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Shield Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30 mb-8 glow-effect">
            <ShieldCheck className="w-10 h-10 text-accent" />
          </div>

          {/* Headline */}
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="gradient-text">Zero Risk Guarantee</span>
          </h2>

          {/* Body Copy */}
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            14-day money-back guarantee on all subscriptions. If your first 5 videos don't
            convert, we'll refund you—no questions asked.{' '}
            <span className="text-white font-semibold">You risk nothing.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
