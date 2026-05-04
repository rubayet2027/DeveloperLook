'use client'

import { useEffect, useRef, useState } from 'react'

const phrase = 'Ready to RiseAtSeven?'

export default function ContactTeaser() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-grey-900 py-20 lg:py-32 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Soft glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full bg-mint/5 blur-3xl" />
      </div>

      <div className="relative max-w-[1440px] mx-auto text-center">

        {/* Headline */}
        <div
          className="mb-8 lg:mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transitionProperty: 'opacity, transform',
            transitionDuration: '800ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <h2
            className="font-bold text-white tracking-tight leading-none"
            style={{ fontSize: 'clamp(2.4rem, 8vw, 7.5rem)' }}
          >
            {phrase.split('').map((char, i) => {
              const isRiseR = char === 'R' && i > 8
              return (
                <span
                  key={i}
                  style={{ color: isRiseR ? '#B2F6E3' : 'white' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              )
            })}
          </h2>
        </div>

        {/* Subtext */}
        <p
          className="text-white/50 text-base lg:text-xl font-light max-w-xl mx-auto mb-10 lg:mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transitionProperty: 'opacity, transform',
            transitionDuration: '700ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '150ms',
          }}
        >
          Let&apos;s build a strategy that drives real, measurable growth for your brand.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transitionProperty: 'opacity, transform',
            transitionDuration: '700ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '250ms',
          }}
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-2.5 bg-mint text-grey-900 font-bold text-base px-8 py-4 rounded-full hover:rounded-xl hover:bg-white transition-all duration-300"
          >
            Start a project
            <svg className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
          <a
            href="/work"
            className="group inline-flex items-center gap-2.5 border border-white/30 text-white font-medium text-base px-8 py-4 rounded-full hover:rounded-xl hover:border-white/60 transition-all duration-300"
          >
            See our work
            <svg className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

        {/* Offices */}
        <div
          className="mt-14 lg:mt-20 flex flex-wrap justify-center gap-x-4 gap-y-2"
          style={{
            opacity: visible ? 0.45 : 0,
            transitionProperty: 'opacity',
            transitionDuration: '700ms',
            transitionDelay: '350ms',
          }}
        >
          {['Sheffield', 'Manchester', 'London', 'New York'].map((city) => (
            <span key={city} className="inline-flex items-center gap-2 text-white text-sm font-light">
              <span className="w-1 h-1 rounded-full bg-mint" />
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
