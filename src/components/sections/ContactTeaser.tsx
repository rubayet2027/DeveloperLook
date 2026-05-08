'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'

export default function ContactTeaser() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  // GSAP horizontal marquee for background text
  useGSAP(() => {
    const track = marqueeRef.current
    if (!track) return
    const first = track.children[0] as HTMLElement
    if (!first) return
    const w = first.offsetWidth

    gsap.to(track, {
      x: -w,
      duration: 40,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x: number) => parseFloat(String(x)) % w),
      },
    })
  }, { scope: marqueeRef })

  return (
    <section className="bg-site-bg py-20 lg:py-32 px-5 lg:px-10 overflow-hidden relative">
      {/* Background marquee text */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">
        <div ref={marqueeRef} className="flex whitespace-nowrap">
          {[0, 1, 2].map((set) => (
            <div key={set} className="flex-shrink-0 flex items-center">
              <span
                className="mx-8 text-dark/[0.04] font-bold tracking-tight select-none"
                style={{ fontSize: 'clamp(8rem, 20vw, 18rem)' }}
              >
                Rise at Seven
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-[1440px] mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] as [number, number, number, number] }}
      >
        <h2
          className="text-dark font-bold tracking-tight leading-[1.0] mb-6"
          style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)' }}
        >
          Ready to Rise at Seven?
        </h2>
        <p className="text-dark/60 text-base sm:text-lg mb-10 max-w-xl mx-auto">
          Let&apos;s build a strategy that drives real, measurable growth for your brand.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <motion.a
            href="/contact"
            className="group inline-flex items-center gap-2 bg-dark text-white font-semibold text-sm px-8 py-4 rounded-full hover:rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
            <svg className="w-3 h-3 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </motion.a>
          <motion.a
            href="/work"
            className="group inline-flex items-center gap-2 bg-white text-dark font-semibold text-sm px-8 py-4 rounded-full border border-grey-200 hover:rounded-lg hover:bg-dark hover:text-white hover:border-dark transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Work
            <svg className="w-3 h-3 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
