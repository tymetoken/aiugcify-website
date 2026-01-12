'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Founder Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Founder Avatar */}
          <div className="relative inline-block mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent p-[2px]">
              <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
                <span className="text-3xl font-bold text-white">F</span>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">
              Founder
            </div>
          </div>

          <h3 className="font-display text-2xl font-bold text-white mb-4">
            Built by a Creator with{' '}
            <span className="gradient-text">295K+ TikTok Followers</span>
          </h3>

          <p className="text-white/60 text-lg leading-relaxed">
            "I was spending thousands on UGC creators for my dropshipping products.
            The videos were hit or miss, took forever to deliver, and drained my budget.
            So I built AI UGCify—the tool I wished existed. Now I create dozens of
            test videos for the cost of one traditional UGC video."
          </p>

          <div className="mt-6 flex items-center justify-center gap-4 text-white/40 text-sm">
            <span>@aiugcify</span>
            <span>•</span>
            <span>295K+ followers</span>
            <span>•</span>
            <span>100M+ views</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
