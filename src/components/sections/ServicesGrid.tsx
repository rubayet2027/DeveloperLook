'use client'

import { useEffect, useRef, useState } from 'react'

const services = [
  {
    id: 1, title: 'SEO',
    description: 'Technical SEO, on-page optimisation and authority building that puts you at the top of search — and keeps you there.',
    href: '/services/seo',
    iconColor: '#B2F6E3',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />,
  },
  {
    id: 2, title: 'Digital PR',
    description: 'Award-winning campaigns that earn high-authority links and national press coverage. We make brands unmissable.',
    href: '/services/digital-pr',
    iconColor: '#CB7B3A',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />,
  },
  {
    id: 3, title: 'Organic Social',
    description: 'Community-building content strategies that grow engaged audiences and convert followers into loyal customers.',
    href: '/services/organic-social',
    iconColor: '#60DCFB',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />,
  },
  {
    id: 4, title: 'Influencer',
    description: 'Strategic influencer partnerships that put your brand in front of the right audiences with authentic, high-impact content.',
    href: '/services/influencer',
    iconColor: '#D8C4FD',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />,
  },
  {
    id: 5, title: 'Content Marketing',
    description: 'Data-led content strategy that answers the questions your audience is already searching for — at every stage of the funnel.',
    href: '/services/content-marketing',
    iconColor: '#B2F6E3',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />,
  },
  {
    id: 6, title: 'International',
    description: 'Global search strategies that help brands break into new markets and dominate search results in multiple languages.',
    href: '/services/international',
    iconColor: '#CB7B3A',
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />,
  },
]

export default function ServicesGrid() {
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
    <section ref={sectionRef} className="bg-grey-100 py-16 lg:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-14">
          <div>
            <p className="text-grey-300 text-xs font-semibold tracking-widest uppercase mb-3">Our services</p>
            <h2 className="text-grey-900 text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-tight">
              Everything you need<br />
              <span className="text-grey-300">to dominate search</span>
            </h2>
          </div>
          <a
            href="/services"
            className="group self-start sm:self-auto inline-flex items-center gap-2 bg-grey-900 text-white font-semibold px-5 py-2.5 rounded-full hover:rounded-xl hover:bg-mint hover:text-grey-900 transition-all duration-300 text-sm whitespace-nowrap"
          >
            All services
            <svg className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <a
              key={service.id}
              href={service.href}
              className="group relative bg-white rounded-2xl p-6 lg:p-8 border border-grey-100 hover:border-transparent overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transitionProperty: 'opacity, transform, box-shadow, border-color',
                transitionDuration: '600ms',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: `${i * 70}ms`,
              }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${service.iconColor}20` }}
              >
                <svg className="w-5.5 h-5.5" fill="none" stroke={service.iconColor} viewBox="0 0 24 24">
                  {service.icon}
                </svg>
              </div>

              <h3 className="text-xl lg:text-2xl font-semibold tracking-tight text-grey-900 mb-3">
                {service.title}
              </h3>
              <p className="text-sm lg:text-base leading-relaxed font-light text-grey-300 mb-6">
                {service.description}
              </p>

              <div className="flex items-center gap-1.5 text-sm font-medium text-grey-300 group-hover:text-grey-900 transition-colors duration-200">
                Learn more
                <svg className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>

              {/* Hover: coloured bottom border accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: service.iconColor }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
