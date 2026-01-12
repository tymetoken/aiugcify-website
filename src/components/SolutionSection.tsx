'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Play } from 'lucide-react'

export default function SolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="solution" className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-accent font-semibold mb-3 tracking-wide uppercase text-sm">The Solution</p>
          <h2 className="section-title mb-4">
            Meet <span className="gradient-text">AI UGCify</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Create unlimited, high-converting UGC videos in seconds—not days. No creators, no waiting, no guesswork.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Glow effect behind video */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-50" />

          {/* Video wrapper with aspect ratio */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.08] shadow-2xl">
            {/* Replace this with your actual video embed */}
            <video
              className="w-full h-full object-cover"
              controls
              poster="/demo-poster.jpg"
              preload="metadata"
            >
              <source src="/demo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay for when video isn't playing - optional */}
            {/*
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group cursor-pointer hover:bg-black/30 transition-colors">
              <div className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-accent/30">
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </div>
            </div>
            */}
          </div>

          {/* Caption */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-white/40 text-sm mt-4"
          >
            Watch how AI UGCify transforms your product into viral UGC content
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
