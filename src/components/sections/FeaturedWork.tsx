'use client'

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { name: 'SIXT', years: '2023-2025', tag: 'Car rental', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200&h=900&q=85&auto=format&fit=crop' },
  { name: 'Dojo - B2B', years: '2021-2025', tag: 'Card Machines', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=900&q=85&auto=format&fit=crop' },
  { name: 'Magnet Trade', years: '2023-2024', tag: 'Kitchens', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=900&q=85&auto=format&fit=crop' },
  { name: 'Lebara', years: '2023-2025', tag: 'Esims', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=900&q=85&auto=format&fit=crop' },
  { name: 'JD Sports', years: '2022-2025', tag: 'Trainers', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1200&h=900&q=85&auto=format&fit=crop' },
]

export default function FeaturedWork() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  // GSAP ScrollTrigger: pin the section and scrub through projects
  useGSAP(() => {
    const section = containerRef.current
    if (!section) return

    // Entrance animation
    gsap.from(section.querySelector('.fw-card'), {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })

    // Pin + scrub through projects
    ScrollTrigger.create({
      trigger: section,
      start: 'top 10%',
      end: `+=${projects.length * 400}`,
      pin: true,
      pinSpacing: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const idx = Math.min(
          projects.length - 1,
          Math.floor(self.progress * projects.length)
        )
        setActive(idx)
      },
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="bg-site-bg px-5 lg:px-10 py-4 lg:py-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="fw-card bg-dark rounded-[24px] lg:rounded-[32px] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[650px]">

            {/* Left: Project list */}
            <div className="p-8 lg:p-12 xl:p-16 flex flex-col justify-between">
              <p className="text-white/50 text-sm font-medium mb-8 italic">Featured Work</p>
              <div className="flex-1 flex flex-col justify-center gap-1">
                {projects.map((project, i) => (
                  <button key={project.name} onClick={() => setActive(i)} className="text-left">
                    <div className="flex items-baseline gap-3 py-1">
                      <span
                        className={`font-bold tracking-tight leading-none transition-all duration-500 ${
                          i === active ? 'text-white scale-100' : 'text-white/20 scale-[0.98]'
                        }`}
                        style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)', transformOrigin: 'left' }}
                      >
                        {project.name}
                      </span>
                      <span className={`text-xs font-medium transition-all duration-500 ${i === active ? 'text-white/50 opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                        [{project.years}]
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex gap-2 mt-8">
                {projects.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${i === active ? 'bg-white w-6' : 'bg-white/20 w-2'}`} />
                ))}
              </div>
            </div>

            {/* Right: Images with GSAP crossfade */}
            <div className="relative p-4 lg:p-6">
              {projects.map((project, i) => (
                <motion.div
                  key={project.name}
                  className="absolute inset-4 lg:inset-6 rounded-[16px] lg:rounded-[20px] overflow-hidden"
                  initial={false}
                  animate={{
                    opacity: i === active ? 1 : 0,
                    scale: i === active ? 1 : 0.92,
                  }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] as [number, number, number, number] }}
                >
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium text-dark">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                    {project.tag}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8 lg:mt-12">
          <a href="/work"
            className="group inline-flex items-center gap-2 bg-white text-dark font-semibold text-sm px-7 py-3.5 rounded-full border border-grey-200 hover:rounded-lg hover:bg-dark hover:text-white hover:border-dark transition-all duration-300">
            Explore Our Work
            <svg className="w-3 h-3 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
