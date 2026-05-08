'use client'

import { useEffect, useRef, useState } from 'react'

const services = [
  { name: 'Digital PR', href: '/services/digital-pr' },
  { name: 'Organic Social & Content', href: '/services/organic-social' },
  { name: 'Search & Growth Strategy', href: '/services/seo' },
  { name: 'Content Experience', href: '/services/content-experience' },
  { name: 'Data & Insights', href: '/services/data-insights' },
  { name: 'Onsite SEO', href: '/services/onsite-seo' },
]

export default function ServicesSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-site-bg pt-16 lg:pt-24 pb-0 overflow-hidden">
      <div className="px-5 lg:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-14">
          <h2
            className="text-dark font-bold tracking-tight leading-[1.05] flex items-baseline gap-3 flex-wrap"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}
          >
            Our{' '}
            <span className="inline-block w-[38px] h-[38px] sm:w-[48px] sm:h-[48px] rounded-lg overflow-hidden align-middle">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&q=80&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover"
              />
            </span>
            {' '}Services
          </h2>
          <a
            href="/services"
            className="group inline-flex items-center gap-2 bg-white text-dark font-semibold text-sm px-6 py-3 rounded-full border border-grey-200 hover:rounded-lg hover:bg-dark hover:text-white hover:border-dark transition-all duration-300 whitespace-nowrap self-start sm:self-auto"
          >
            View All Services
            <svg className="w-3 h-3 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20">
          {services.map((service, i) => (
            <a
              key={service.name}
              href={service.href}
              className="group block border-t border-dark/10 py-6 lg:py-8"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionProperty: 'opacity, transform',
                transitionDuration: '600ms',
                transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-dark font-bold tracking-tight group-hover:text-dark/60 transition-colors duration-200"
                  style={{ fontSize: 'clamp(1.3rem, 3vw, 2.2rem)' }}
                >
                  {service.name}
                </span>
                <svg
                  className="w-5 h-5 text-dark/30 group-hover:text-dark group-hover:rotate-45 transition-all duration-300 flex-shrink-0"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* "Chasing Consumers" marquee */}
      <div className="mt-16 lg:mt-24 py-8 lg:py-12 overflow-hidden">
        <div className="flex animate-marquee-slow whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="flex-shrink-0 mx-4 text-dark font-bold tracking-tight select-none flex items-center gap-4"
              style={{ fontSize: 'clamp(4rem, 12vw, 10rem)' }}
            >
              Chasing Consumers
              <span className="inline-block w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] lg:w-[90px] lg:h-[90px] rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=200&q=80&auto=format&fit=crop"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
