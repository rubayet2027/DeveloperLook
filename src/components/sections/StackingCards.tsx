'use client'

import { useEffect, useRef, useState } from 'react'

const cards = [
  {
    id: 1,
    eyebrow: 'The Rise Philosophy',
    title: 'We chase consumers, not algorithms.',
    body: 'Search is changing faster than ever. We build strategies around real human behaviour — the questions people ask, the content they share, and the brands they fall in love with.',
    bg: 'bg-mint',
    textColor: 'text-grey-900',
    badgeBg: 'bg-grey-900',
    badgeText: 'text-white',
    number: '01',
  },
  {
    id: 2,
    eyebrow: 'Demand Creation',
    title: 'We make you the answer before the question is asked.',
    body: 'Through Digital PR, social content and influencer, we put your brand into culture — so when people search, your name is the one they already trust.',
    bg: 'bg-orange',
    textColor: 'text-white',
    badgeBg: 'bg-white',
    badgeText: 'text-grey-900',
    number: '02',
  },
  {
    id: 3,
    eyebrow: 'Demand Capture',
    title: 'Own the moment when intent meets action.',
    body: 'With precision SEO and content optimisation, we ensure your brand appears first — in the moments that matter most in the buying journey.',
    bg: 'bg-grey-900',
    textColor: 'text-white',
    badgeBg: 'bg-mint',
    badgeText: 'text-grey-900',
    number: '03',
  },
  {
    id: 4,
    eyebrow: 'Demand Conversion',
    title: 'Traffic means nothing without revenue.',
    body: "We don't just drive visits. We connect search strategy to commercial outcomes — optimising every touchpoint from click to conversion.",
    bg: 'bg-purple',
    textColor: 'text-grey-900',
    badgeBg: 'bg-grey-900',
    badgeText: 'text-white',
    number: '04',
  },
]

export default function StackingCards() {
  const [activeCard, setActiveCard] = useState(0)
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-16 lg:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">

        <div className="mb-10 lg:mb-16">
          <p className="text-grey-300 text-xs font-semibold tracking-widest uppercase mb-3">How we work</p>
          <h2 className="text-grey-900 text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-tight max-w-2xl">
            The framework behind{' '}
            <span className="text-grey-300">every result</span>
          </h2>
        </div>

        {/* ── Desktop side nav + card ── */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          <div className="col-span-4 flex flex-col gap-1">
            {cards.map((card, i) => (
              <button
                key={card.id}
                onClick={() => setActiveCard(i)}
                className={`text-left flex items-center gap-4 px-4 py-4 rounded-xl transition-colors duration-200 ${
                  i === activeCard ? 'bg-grey-100' : 'hover:bg-grey-50'
                }`}
              >
                <span className={`text-5xl font-bold tracking-tight leading-none ${
                  i === activeCard ? 'text-grey-900' : 'text-grey-200'
                }`}>{card.number}</span>
                <div>
                  <div className={`text-[10px] uppercase tracking-widest font-semibold mb-0.5 ${
                    i === activeCard ? 'text-grey-400' : 'text-grey-200'
                  }`}>{card.eyebrow}</div>
                  <div className={`text-sm font-medium leading-snug ${
                    i === activeCard ? 'text-grey-900' : 'text-grey-300'
                  }`}>
                    {card.title.split(' ').slice(0, 5).join(' ')}…
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="col-span-8">
            {cards.map((card, i) => (
              <div
                key={card.id}
                className={`${card.bg} rounded-3xl p-10 xl:p-14`}
                style={{ display: i === activeCard ? 'block' : 'none' }}
              >
                <div className={`text-xs uppercase tracking-widest font-semibold mb-5 ${card.textColor} opacity-60`}>
                  {card.eyebrow}
                </div>
                <h3 className={`text-3xl xl:text-4xl 2xl:text-5xl font-semibold tracking-tight leading-tight mb-6 ${card.textColor}`}>
                  {card.title}
                </h3>
                <p className={`text-base lg:text-lg leading-relaxed font-light ${card.textColor} opacity-70`}>
                  {card.body}
                </p>
                <div className={`mt-10 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold ${card.badgeBg} ${card.badgeText}`}>
                  {card.number} / 04
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile: vertical stack ── */}
        <div className="lg:hidden flex flex-col gap-4">
          {cards.map((card, i) => (
            <div
              key={card.id}
              className={`${card.bg} rounded-2xl p-6 sm:p-8`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transitionProperty: 'opacity, transform',
                transitionDuration: '600ms',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className={`text-[10px] uppercase tracking-widest font-semibold mb-3 ${card.textColor} opacity-60`}>
                {card.eyebrow}
              </div>
              <h3 className={`text-2xl sm:text-3xl font-semibold tracking-tight leading-tight mb-4 ${card.textColor}`}>
                {card.title}
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed font-light ${card.textColor} opacity-70`}>
                {card.body}
              </p>
              <div className={`mt-6 inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold ${card.badgeBg} ${card.badgeText}`}>
                {card.number} / 04
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
