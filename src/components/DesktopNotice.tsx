'use client'

import { Monitor } from 'lucide-react'

export default function DesktopNotice() {
  return (
    <section className="relative py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl px-6 py-4 flex items-center justify-center gap-3">
          <Monitor className="w-5 h-5 text-white/40 shrink-0" />
          <p className="text-center text-white/80 text-sm sm:text-base">
            <span className="font-semibold">Desktop Chrome browser required.</span>{' '}
            <span className="text-white/60">Browse products on your phone, generate on desktop, post from anywhere.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
