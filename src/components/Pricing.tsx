'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Check, Sparkles, ChevronDown, Shield } from 'lucide-react'
import { SUBSCRIPTION_PLANS, ONE_TIME_PACKAGES, CHROME_STORE_URL } from '@/lib/constants'

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isYearly, setIsYearly] = useState(false)
  const [isOneTimeExpanded, setIsOneTimeExpanded] = useState(false)

  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent{' '}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Start creating viral UGC videos at a fraction of traditional costs
          </p>
        </motion.div>

        {/* Monthly/Yearly Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-white' : 'text-white/40'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-14 h-7 bg-white/10 rounded-full transition-colors duration-300 hover:bg-white/15"
          >
            <div
              className={`absolute top-1 w-5 h-5 bg-accent rounded-full transition-all duration-300 shadow-lg ${
                isYearly ? 'left-8' : 'left-1'
              }`}
            />
          </button>
          <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-white' : 'text-white/40'}`}>
            Yearly
          </span>
          <span className={`text-xs text-accent font-semibold bg-accent/10 px-2 py-0.5 rounded-full transition-opacity duration-200 ${isYearly ? 'opacity-100' : 'opacity-0'}`}>
            Save 16%
          </span>
        </motion.div>

        {/* Subscription Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {SUBSCRIPTION_PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                    <Sparkles className="w-3 h-3" />
                    POPULAR
                  </div>
                </div>
              )}

              <div
                className={`h-full rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-white/[0.08] to-white/[0.03] border-2 border-accent/30 shadow-xl shadow-accent/10'
                    : 'bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.12]'
                }`}
              >
                {/* Plan Name */}
                <h3 className="text-lg font-semibold text-white/80 mb-4">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-white">
                      ${isYearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice}
                    </span>
                    <span className="text-white/40 text-sm">/mo</span>
                  </div>
                  {isYearly && (
                    <p className="text-accent/80 text-sm mt-2">
                      ${plan.yearlyPrice}/year billed annually
                    </p>
                  )}
                  <p className="text-white/50 text-sm mt-1">
                    ~${plan.perVideo} per video
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/[0.06] mb-6" />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-white/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={CHROME_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 rounded-xl font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20 hover:-translate-y-0.5'
                      : 'bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/[0.08]'
                  }`}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* One-Time Packages Section - Expandable */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-2xl bg-white/[0.02] border border-white/[0.08] overflow-hidden"
        >
          {/* Expandable Header */}
          <button
            onClick={() => setIsOneTimeExpanded(!isOneTimeExpanded)}
            className="w-full px-8 py-5 flex items-center justify-between hover:bg-white/[0.02] transition-colors"
          >
            <div className="flex items-center gap-4">
              <h3 className="text-lg font-semibold text-white">One-Time Purchases</h3>
              <span className="text-xs text-white/40 bg-white/[0.06] px-3 py-1 rounded-full hidden sm:inline-block">
                No subscription
              </span>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-white/40 transition-transform duration-300 ${
                isOneTimeExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Expandable Content */}
          <motion.div
            initial={false}
            animate={{
              height: isOneTimeExpanded ? 'auto' : 0,
              opacity: isOneTimeExpanded ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 pt-2">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {ONE_TIME_PACKAGES.map((pkg, index) => (
                  <motion.div
                    key={pkg.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isOneTimeExpanded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="h-full rounded-2xl p-6 bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300">
                      {/* Package Name */}
                      <h4 className="text-base font-semibold text-white/80 mb-4">
                        {pkg.name}
                      </h4>

                      {/* Price */}
                      <div className="mb-5">
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-bold text-white">${pkg.price}</span>
                        </div>
                        <p className="text-white/50 text-sm mt-1">
                          ~${pkg.perVideo} per video
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-white/[0.06] mb-5" />

                      {/* Credits highlight */}
                      <div className="mb-5 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-white/70 text-sm font-medium">{pkg.credits} video credits</span>
                      </div>

                      {/* Features */}
                      <ul className="space-y-2.5 mb-6">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span className="text-white/60 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <a
                        href={CHROME_STORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-3 rounded-xl font-semibold text-sm text-center bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/[0.08] transition-all duration-300"
                      >
                        Buy Now
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/40 text-sm"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>Secure payment</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
          <span>Cancel anytime</span>
          <div className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
          <span>Instant access</span>
        </motion.div>
      </div>
    </section>
  )
}
