'use client'

import { useEffect, useRef, useState } from 'react'

export default function IntroSection() {
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
    <section ref={sectionRef} className="bg-white py-20 lg:py-32 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* Left: Label */}
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-grey-200 px-4 py-2 text-sm font-medium text-grey-300">
              <span className="w-2 h-2 rounded-full bg-mint flex-shrink-0" />
              What we do
            </div>
          </div>

          {/* Right: Copy */}
          <div
            className="lg:col-span-9"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(32px)',
              transitionProperty: 'opacity, transform',
              transitionDuration: '900ms',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <p className="text-grey-900 text-2xl md:text-3xl lg:text-4xl xl:text-[2.8rem] font-medium leading-tight tracking-tight mb-8">
              We&apos;re a{' '}
              <span className="text-grey-300">search-first creative agency</span>{' '}
              that drives demand, captures it, and converts it into{' '}
              <span className="relative inline-block">
                revenue
                <svg className="absolute -bottom-1.5 left-0 w-full h-2" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="#B2F6E3" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
              {' '}for the world&apos;s most ambitious brands.
            </p>

            <p className="text-grey-300 text-base lg:text-lg leading-relaxed font-light mb-10 max-w-2xl">
              From Digital PR and SEO to Organic Social and Influencer, we build integrated
              search strategies that make brands impossible to ignore.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/about"
                className="group inline-flex items-center gap-2 bg-grey-900 text-white font-semibold px-6 py-3 rounded-full hover:rounded-xl hover:bg-mint hover:text-grey-900 transition-all duration-300 text-sm"
              >
                Our story
                <svg className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
              <a
                href="/services"
                className="group inline-flex items-center gap-2 border border-grey-200 text-grey-900 font-medium px-6 py-3 rounded-full hover:rounded-xl hover:border-grey-900 transition-all duration-300 text-sm"
              >
                Our services
                <svg className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
