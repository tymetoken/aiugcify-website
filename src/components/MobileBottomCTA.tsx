'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CHROME_STORE_URL } from '@/lib/constants'

export default function MobileBottomCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show after scrolling past hero section (roughly 500px)
      if (currentScrollY > 500) {
        // Hide when scrolling down, show when scrolling up
        if (currentScrollY < lastScrollY) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      } else {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          {/* Gradient fade at top */}
          <div className="absolute -top-8 left-0 right-0 h-8 bg-gradient-to-t from-dark to-transparent pointer-events-none" />

          {/* CTA Bar */}
          <div className="bg-dark/95 backdrop-blur-lg border-t border-white/10 px-4 py-3 safe-area-pb">
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center text-base py-3.5"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29L1.931 5.47zm13.387 2.166l-3.953 6.848a5.454 5.454 0 0 1 0 6.892L15.318 14.5A11.967 11.967 0 0 0 24 12c0-.685-.057-1.357-.168-2.014H12.736l2.582-4.35z" />
              </svg>
              Install Free — 2 Videos on Us
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
