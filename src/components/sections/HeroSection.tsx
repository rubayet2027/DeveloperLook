'use client'

import { useEffect, useState } from 'react'

const awards = [
  'UK Search Awards', 'Drum Awards', 'PRCA Digital Awards', 'European Search Awards',
  'UK Dev Awards', 'Brighton SEO', 'DADI Awards', 'Campaign Awards',
  'UK Search Awards', 'Drum Awards', 'PRCA Digital Awards', 'European Search Awards',
]

const stats = [
  { value: '200+', label: 'Award wins' },
  { value: '350+', label: 'Campaigns run' },
  { value: '4',    label: 'Global offices' },
]

const headline = ['We', 'Create', 'Category', 'Leaders']

export default function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-end bg-grey-900 overflow-hidden pb-10 pt-24 md:pt-28">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-grey-900/70 via-grey-900/20 to-grey-900/85" />
        <img
          src="https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5087.JPG?w=2500&h=1667&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.6975&fp-y=0.4777&dm=1753791050&s=6f9c4e427ec3afc2794ccb92f006af06"
          alt="Rise at Seven office"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Award chips marquee */}
      <div className="relative z-20 mb-8 lg:mb-12 marquee-wrap">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...awards, ...awards].map((award, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-3 py-1.5 text-xs font-medium text-white/80 whitespace-nowrap backdrop-blur-sm bg-white/5 flex-shrink-0 mx-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-mint flex-shrink-0" />
              {award}
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-20 px-4 md:px-6 lg:px-8 max-w-[1400px] mx-auto w-full">

        {/* Headline — each word in its own overflow:hidden wrapper */}
        <div className="mb-6 lg:mb-8">
          {headline.map((word, wi) => (
            <div key={wi} className="overflow-hidden leading-none">
              <h1
                className="block font-bold tracking-tight text-white leading-[0.92]"
                style={{
                  fontSize: 'clamp(3.8rem, 11.5vw, 9rem)',
                  transform: visible ? 'translateY(0)' : 'translateY(110%)',
                  opacity: visible ? 1 : 0,
                  transitionProperty: 'transform, opacity',
                  transitionDuration: '700ms',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: `${wi * 120}ms`,
                }}
              >
                {word === 'Category' ? (
                  <>{word}<span className="text-mint">.</span></>
                ) : word}
              </h1>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transitionProperty: 'opacity, transform',
            transitionDuration: '800ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '580ms',
          }}
        >
          {/* Description + CTAs */}
          <div className="max-w-xl">
            <p className="text-white/70 text-base lg:text-lg leading-relaxed font-light mb-6">
              A search-first creative agency driving demand, capturing demand, and converting
              it into revenue for the world&apos;s most ambitious brands.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/work"
                className="group inline-flex items-center gap-2 bg-white text-grey-900 font-semibold px-6 py-3 rounded-full hover:rounded-xl hover:bg-mint transition-all duration-300 text-sm"
              >
                See our work
                <svg className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
              <a
                href="/about"
                className="group inline-flex items-center gap-2 border border-white/40 text-white font-medium px-6 py-3 rounded-full hover:rounded-xl hover:border-white/70 transition-all duration-300 text-sm"
              >
                Our story
                <svg className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-6 lg:gap-10 flex-wrap">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl lg:text-4xl font-bold text-mint leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-xs lg:text-sm text-white/55 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-8 flex items-center gap-2 text-white/35 text-xs"
          style={{
            opacity: visible ? 1 : 0,
            transitionProperty: 'opacity',
            transitionDuration: '800ms',
            transitionDelay: '1000ms',
          }}
        >
          <span className="block w-px h-7 bg-white/20" />
          Scroll to explore
        </div>
      </div>
    </section>
  )
}
