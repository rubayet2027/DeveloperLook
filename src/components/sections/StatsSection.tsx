'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: '200+', label: 'Industry award wins',  description: 'Recognised as the best in search, PR and content marketing' },
  { value: '£1Bn+', label: 'Revenue generated',   description: 'Tracked, attributed revenue for our clients' },
  { value: '350+', label: 'Campaigns delivered',   description: 'For brands across 20+ countries' },
  { value: '4',    label: 'Global offices',        description: 'Sheffield · Manchester · London · New York' },
]

export default function StatsSection() {
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
    <section ref={sectionRef} className="bg-grey-900 py-16 lg:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-grey-900 p-6 lg:p-10 xl:p-12"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionProperty: 'opacity, transform',
                transitionDuration: '600ms',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="text-mint text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm lg:text-base mb-1">{stat.label}</div>
              <div className="text-white/40 text-xs lg:text-sm font-light leading-relaxed">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
