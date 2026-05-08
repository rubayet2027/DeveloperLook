'use client'

import { useState, useEffect, useRef } from 'react'

const projects = [
  {
    name: 'SIXT',
    years: '2023-2025',
    tag: 'Car rental',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200&h=900&q=85&auto=format&fit=crop',
  },
  {
    name: 'Dojo - B2B',
    years: '2021-2025',
    tag: 'Card Machines',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=900&q=85&auto=format&fit=crop',
  },
  {
    name: 'Magnet Trade - B2B',
    years: '2023-2024',
    tag: 'Kitchens',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=900&q=85&auto=format&fit=crop',
  },
  {
    name: 'Lebara',
    years: '2023-2025',
    tag: 'Esims',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=900&q=85&auto=format&fit=crop',
  },
  {
    name: 'JD Sports',
    years: '2022-2025',
    tag: 'Trainers',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1200&h=900&q=85&auto=format&fit=crop',
  },
]

export default function FeaturedWork() {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(p => (p + 1) % projects.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={sectionRef} className="bg-site-bg px-5 lg:px-10 py-4 lg:py-8">
      <div className="max-w-[1440px] mx-auto">
        <div
          className="bg-dark rounded-[24px] lg:rounded-[32px] overflow-hidden"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transitionProperty: 'opacity, transform',
            transitionDuration: '800ms',
            transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[650px]">
            <div className="p-8 lg:p-12 xl:p-16 flex flex-col justify-between">
              <p className="text-white/50 text-sm font-medium mb-8 italic">Featured Work</p>
              <div className="flex-1 flex flex-col justify-center gap-1">
                {projects.map((project, i) => (
                  <button
                    key={project.name}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className="text-left group"
                  >
                    <div className="flex items-baseline gap-3 py-1">
                      <span
                        className={`font-bold tracking-tight leading-none transition-colors duration-300 ${
                          i === active ? 'text-white' : 'text-white/20'
                        }`}
                        style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)' }}
                      >
                        {project.name}
                      </span>
                      <span
                        className={`text-xs font-medium transition-opacity duration-300 ${
                          i === active ? 'text-white/50 opacity-100' : 'opacity-0'
                        }`}
                      >
                        [{project.years}]
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex gap-2 mt-8">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active ? 'bg-white w-6' : 'bg-white/20 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="relative p-4 lg:p-6">
              {projects.map((project, i) => (
                <div
                  key={project.name}
                  className={`absolute inset-4 lg:inset-6 rounded-[16px] lg:rounded-[20px] overflow-hidden transition-all duration-700 ${
                    i === active ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium text-dark">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                    {project.tag}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8 lg:mt-12">
          <a
            href="/work"
            className="group inline-flex items-center gap-2 bg-white text-dark font-semibold text-sm px-7 py-3.5 rounded-full border border-grey-200 hover:rounded-lg hover:bg-dark hover:text-white hover:border-dark transition-all duration-300"
          >
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
