'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'

gsap.registerPlugin()

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}
const ease = [0.25, 0.1, 0, 1] as [number, number, number, number]
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  // GSAP character-reveal on headline
  useGSAP(() => {
    const chars = heroRef.current?.querySelectorAll('.hero-char')
    if (!chars) return

    gsap.from(chars, {
      yPercent: 120,
      opacity: 0,
      duration: 0.9,
      ease: 'power4.out',
      stagger: 0.03,
      delay: 0.5,
    })
  }, { scope: heroRef })

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center bg-dark overflow-hidden">
      {/* Blurred background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=2500&h=1667&q=80&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'blur(20px) brightness(0.7)', transform: 'scale(1.1)' }}
        />
        <div className="absolute inset-0 bg-dark/40" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-5 max-w-[1200px] mx-auto pt-32 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Awards */}
        <motion.div variants={fadeUp} className="mb-8">
          <p className="text-white/60 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-4">
            #1 Most Recommended Content Marketing Agency
          </p>
          <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
            {['Global Search Awards', 'The Drum', 'UK Social Media Awards', 'Content Awards'].map((award) => (
              <div key={award} className="flex items-center gap-1.5 opacity-50">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z"/></svg>
                <span className="text-white/50 text-[10px] font-medium whitespace-nowrap">{award}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main headline — GSAP character reveal */}
        <div className="mb-6">
          {['We Create', 'Category Leaders'].map((line, li) => (
            <div key={li} className="overflow-hidden whitespace-nowrap">
              <h1
                className="font-bold text-white tracking-tight leading-[0.95]"
                style={{ fontSize: 'clamp(3rem, 10vw, 8.5rem)' }}
              >
                {line === 'Category Leaders' ? (
                  <>
                    {'Category'.split('').map((c, i) => (
                      <span key={i} className="hero-char inline-block">{c}</span>
                    ))}
                    <span className="inline-block align-middle mx-2 sm:mx-4 rounded-xl overflow-hidden hero-char"
                      style={{ width: 'clamp(40px, 6vw, 90px)', height: 'clamp(40px, 6vw, 90px)' }}>
                      <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&h=200&q=80&auto=format&fit=crop"
                        alt="" className="w-full h-full object-cover" />
                    </span>
                    {' '}
                    {'Leaders'.split('').map((c, i) => (
                      <span key={`l${i}`} className="hero-char inline-block">{c}</span>
                    ))}
                  </>
                ) : (
                  line.split('').map((c, i) => (
                    <span key={i} className="hero-char inline-block">{c === ' ' ? '\u00A0' : c}</span>
                  ))
                )}
              </h1>
            </div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="text-white/70 text-base sm:text-lg lg:text-xl font-light italic tracking-wide"
        >
          on every searchable platform
        </motion.p>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        className="relative z-10 w-full px-5 lg:px-10 pb-8 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 max-w-[1440px] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2, ease }}
      >
        <p className="text-white/50 text-xs sm:text-sm font-light leading-relaxed max-w-md">
          Organic media planners creating, distributing &amp; optimising
          search-first content for SEO, Social, PR, Ai and LLM search
        </p>
        <p className="text-white text-xs sm:text-sm font-semibold text-right leading-relaxed">
          <span className="font-bold">4 Global Offices</span> serving<br/>
          UK, USA (New York) &amp; EU
        </p>
      </motion.div>
    </section>
  )
}
