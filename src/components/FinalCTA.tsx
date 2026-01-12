'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { CHROME_STORE_URL } from '@/lib/constants'

export default function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />

      {/* Animated Orbs */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.05] border border-white/[0.08] rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-white/80">Start creating today</span>
          </motion.div>

          {/* Headline */}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Stop Paying </span>
            <span className="gradient-text">$300</span>
            <br />
            <span className="text-white">for a Single Video</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10">
            Join 2,500+ TikTok Shop sellers who've already switched to AI-powered
            video creation. More content. Less cost. Better results.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-4 group"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29L1.931 5.47zm13.387 2.166l-3.953 6.848a5.454 5.454 0 0 1 0 6.892L15.318 14.5A11.967 11.967 0 0 0 24 12c0-.685-.057-1.357-.168-2.014H12.736l2.582-4.35z" />
              </svg>
              Add to Chrome — Free to Install
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Trust Line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-white/40 text-sm"
          >
            No credit card required • Install in 10 seconds • Start creating immediately
          </motion.p>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {/* Avatar Stack */}
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-dark bg-gradient-to-br from-primary/50 to-accent/50 flex items-center justify-center"
                >
                  <span className="text-white text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/60 text-sm">
                Rated 4.9/5 by 500+ sellers
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
