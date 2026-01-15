'use client'

import { motion } from 'framer-motion'
import { Sparkles, Gift } from 'lucide-react'
import { CHROME_STORE_URL } from '@/lib/constants'

// UGC video examples in 9:16 format
const UGC_VIDEOS = [
  '/ugc-videos/ugc-1.webm',
  '/ugc-videos/ugc-2.webm',
  '/ugc-videos/ugc-3.webm',
  '/ugc-videos/ugc-4.webm',
  '/ugc-videos/ugc-5.webm',
  '/ugc-videos/ugc-6.webm',
  '/ugc-videos/ugc-7.webm',
  '/ugc-videos/ugc-8.webm',
  '/ugc-videos/ugc-9.webm',
  '/ugc-videos/ugc-10.webm',
]

export default function Hero() {
  const duplicatedVideos = [...UGC_VIDEOS, ...UGC_VIDEOS]

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px] animate-pulse-slow delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.05] border border-white/[0.08] rounded-full mb-8"
          >
            <Gift className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-white/80">Start with <span className="text-accent">2 FREE</span> video credits</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">Stop Paying $300 Per Video.</span>
            <br />
            <span className="gradient-text">Create Professional UGC in 5 Minutes.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10"
          >
            The Chrome extension TikTok Shop sellers use to create unlimited UGC videos
            at 1/100th the cost of hiring creators. Test more products. Scale what works.
            Keep your profits.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col items-center justify-center gap-4 mb-8"
          >
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29L1.931 5.47zm13.387 2.166l-3.953 6.848a5.454 5.454 0 0 1 0 6.892L15.318 14.5A11.967 11.967 0 0 0 24 12c0-.685-.057-1.357-.168-2.014H12.736l2.582-4.35z" />
              </svg>
              Install Free — Get 2 Videos on Us
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/40 text-sm"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>2 free videos included</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Videos ready in under 5 min</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* UGC Carousel */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .carousel-track {
          animation: scroll 60s linear infinite;
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative w-full mt-12 pb-8"
      >
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="carousel-track flex gap-4 sm:gap-6 w-fit">
          {duplicatedVideos.map((video, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[140px] sm:w-[180px] lg:w-[200px]"
            >
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.06] shadow-xl">
                <div className="absolute inset-0 rounded-2xl border-4 border-black/20 pointer-events-none z-10" />
                <video
                  src={video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
