'use client'

import { useEffect, useRef, useState } from 'react'

const cards = [
  {
    title: 'Pioneers',
    body: "We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search — and we will continue to do it.",
    body2: "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=600&q=80&auto=format&fit=crop',
    stackColor: '#b8f0d8',
  },
  {
    title: 'Strategists',
    body: "Every campaign starts with deep research into search behaviour, audience intent, and competitive landscapes. We engineer outcomes, not guesses.",
    body2: 'Our strategies are built on data, refined by creativity, and measured by revenue impact.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&q=80&auto=format&fit=crop',
    stackColor: '#e8a065',
  },
  {
    title: 'Creators',
    body: "From reactive PR moments to long-form editorial, we create content that earns attention and drives action across every platform.",
    body2: "The best content doesn't just rank — it resonates.",
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=600&q=80&auto=format&fit=crop',
    stackColor: '#c8a8f0',
  },
]

export default function StackingCards() {
  const [visible, setVisible] = useState(false)
  const [activeCard, setActiveCard] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const sectionHeight = ref.current.offsetHeight
      const scrollInSection = -rect.top
      const progress = Math.max(0, Math.min(1, scrollInSection / (sectionHeight - window.innerHeight)))
      const idx = Math.min(cards.length - 1, Math.floor(progress * cards.length))
      setActiveCard(idx)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={ref} className="bg-site-bg py-16 lg:py-24 px-5 lg:px-10" style={{ minHeight: `${cards.length * 40}vh` }}>
      <div className="max-w-[1440px] mx-auto">
        <p
          className="text-center text-dark/60 text-sm font-medium tracking-wide mb-10 lg:mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transitionProperty: 'opacity',
            transitionDuration: '600ms',
          }}
        >
          Legacy In The Making
        </p>

        <div className="relative flex justify-center" style={{ minHeight: '520px' }}>
          {cards.map((card, i) => {
            const offset = i - activeCard
            if (offset < 0) return null
            return (
              <div
                key={card.title}
                className="absolute w-full max-w-[680px]"
                style={{
                  transform: offset === 0
                    ? 'translateY(0) scale(1)'
                    : `translateY(${offset * 20}px) scale(${1 - offset * 0.04})`,
                  zIndex: cards.length - offset,
                  opacity: offset > 2 ? 0 : 1,
                  transitionProperty: 'transform, opacity',
                  transitionDuration: '600ms',
                  transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
                }}
              >
                {offset > 0 && (
                  <div
                    className="absolute inset-0 rounded-[24px]"
                    style={{
                      background: card.stackColor,
                      transform: 'rotate(-2deg) scale(1.02)',
                      zIndex: -1,
                    }}
                  />
                )}
                <div className="relative bg-dark rounded-[24px] p-8 sm:p-10 lg:p-14 text-center">
                  <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] mx-auto mb-6 rounded-2xl overflow-hidden">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
                    {card.title}
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-4">
                    {card.body}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed max-w-lg mx-auto">
                    {card.body2}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
