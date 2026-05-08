'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    title: 'Pioneers',
    body: "We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search — and we will continue to do it.",
    body2: "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=600&q=80&auto=format&fit=crop',
    color: '#b8f0d8',
  },
  {
    title: 'Strategists',
    body: "Every campaign starts with deep research into search behaviour, audience intent, and competitive landscapes.",
    body2: 'Our strategies are built on data, refined by creativity, and measured by revenue impact.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&q=80&auto=format&fit=crop',
    color: '#e8a065',
  },
  {
    title: 'Creators',
    body: "From reactive PR moments to long-form editorial, we create content that earns attention and drives action.",
    body2: "The best content doesn't just rank — it resonates.",
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=600&q=80&auto=format&fit=crop',
    color: '#c8a8f0',
  },
]

export default function StackingCards() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const container = containerRef.current
    if (!container) return

    const cardEls = container.querySelectorAll<HTMLElement>('.stack-card')

    // Pin the container
    ScrollTrigger.create({
      trigger: container,
      start: 'top 15%',
      end: `+=${cards.length * 600}`,
      pin: true,
      pinSpacing: true,
    })

    // Animate each card: scale down + fade as it's scrolled past
    cardEls.forEach((card, i) => {
      if (i === cardEls.length - 1) return // Last card stays

      // Scale down as next card comes up
      gsap.to(card, {
        scale: 0.9,
        opacity: 0.3,
        scrollTrigger: {
          trigger: container,
          start: `top+=${i * 600} 15%`,
          end: `top+=${(i + 1) * 600} 15%`,
          scrub: 0.5,
        },
      })

      // Slide next card up from below
      const nextCard = cardEls[i + 1]
      if (nextCard) {
        gsap.from(nextCard, {
          yPercent: 40,
          scrollTrigger: {
            trigger: container,
            start: `top+=${i * 600} 15%`,
            end: `top+=${(i + 1) * 600} 15%`,
            scrub: 0.5,
          },
        })
      }
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="bg-site-bg py-16 lg:py-24 px-5 lg:px-10">
      <div className="max-w-[1440px] mx-auto">
        <motion.p
          className="text-center text-dark/60 text-sm font-medium tracking-wide mb-10 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Legacy In The Making
        </motion.p>

        <div className="relative flex justify-center" style={{ minHeight: '520px' }}>
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="stack-card absolute w-full max-w-[680px]"
              style={{ zIndex: i + 1 }}
            >
              {/* Colored edge peeking behind */}
              <div
                className="absolute -inset-1 rounded-[28px]"
                style={{ background: card.color, opacity: 0.5 }}
              />

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
          ))}
        </div>
      </div>
    </section>
  )
}
