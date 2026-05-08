'use client'

import { useEffect, useRef, useState } from 'react'

export default function ContactTeaser() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-site-bg py-20 lg:py-32 px-5 lg:px-10 overflow-hidden relative">
      {/* Background marquee text */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none">
        <div className="flex animate-marquee-slow whitespace-nowrap opacity-[0.04]">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="flex-shrink-0 mx-8 text-dark font-bold tracking-tight"
              style={{ fontSize: 'clamp(6rem, 18vw, 16rem)' }}
            >
              Rise at Seven
            </span>
          ))}
        </div>
      </div>

      <div
        className="relative max-w-[1440px] mx-auto text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(40px)',
          transitionProperty: 'opacity, transform',
          transitionDuration: '800ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <h2
          className="text-dark font-bold tracking-tight leading-[1.05] mb-8"
          style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)' }}
        >
          Ready to Rise<br className="sm:hidden" /> at Seven?
        </h2>

        <p className="text-dark/50 text-base lg:text-lg font-light max-w-xl mx-auto mb-10">
          Let&apos;s build a strategy that drives real, measurable growth for your brand.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact"
            className="group inline-flex items-center gap-2.5 bg-dark text-white font-bold text-base px-8 py-4 rounded-full hover:rounded-lg hover:bg-mint hover:text-dark transition-all duration-300"
          >
            Get In Touch
            <svg className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
          <a
            href="/work"
            className="group inline-flex items-center gap-2.5 bg-white text-dark font-semibold text-base px-8 py-4 rounded-full border border-grey-200 hover:rounded-lg hover:bg-dark hover:text-white hover:border-dark transition-all duration-300"
          >
            Explore Our Work
            <svg className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
