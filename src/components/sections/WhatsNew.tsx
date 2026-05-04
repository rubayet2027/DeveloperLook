'use client'

import { useEffect, useRef, useState } from 'react'

const blogPosts = [
  {
    id: 1,
    category: 'News',
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    author: { name: 'Carrie Rose' },
    readTime: '2 mins',
    image: 'https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg?w=800&h=800&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1777514348&s=161c413ad12ef90895fad390f5521371',
    href: '/blog/global-operations-director-promotion',
  },
  {
    id: 2,
    category: 'Food/Hospitality',
    title: "Coney's Chooses Rise at Seven for Demand-Led Search Strategy",
    author: { name: 'Stephen Kenwright' },
    readTime: '3 mins',
    image: 'https://rise-atseven.transforms.svdcdn.com/production/images/3-copy.jpg?w=800&h=800&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1776098692&s=7e87c1bafadd66b362a16649188663d6',
    href: '/blog/coneys-chooses-riseatseven',
  },
  {
    id: 3,
    category: 'SEO',
    title: 'How to Build a Search Strategy That Actually Drives Revenue in 2025',
    author: { name: 'Carrie Rose' },
    readTime: '6 mins',
    image: 'https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=800&h=800&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846499&s=8c1a07d60970e114e350dc38945f6bad',
    href: '/blog/search-strategy-revenue',
  },
  {
    id: 4,
    category: 'Digital PR',
    title: 'The 5 Digital PR Tactics That Earned 10,000 Links in 2024',
    author: { name: 'Stephen Kenwright' },
    readTime: '5 mins',
    image: 'https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5087.JPG?w=800&h=800&q=80&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1753791050&s=6f9c4e427ec3afc2794ccb92f006af06',
    href: '/blog/digital-pr-tactics-2024',
  },
]

export default function WhatsNew() {
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
    <section ref={sectionRef} className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="px-4 md:px-6 lg:px-8 max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 lg:mb-12">
          <div>
            <p className="text-grey-300 text-xs font-semibold tracking-widest uppercase mb-3">Latest thinking</p>
            <h2 className="text-grey-900 text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-tight flex items-end gap-3 flex-wrap">
              What&apos;s{' '}
              <span className="relative">New</span>
              {/* Inline thumbnail — signature R@7 move */}
              <span
                className="inline-block overflow-hidden align-bottom mb-1"
                style={{ width: '52px', height: '52px', borderRadius: '12px' }}
              >
                <img
                  src="https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=200&h=200&q=80&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846499"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </span>
            </h2>
          </div>
          <a
            href="/blog"
            className="group self-start sm:self-auto inline-flex items-center gap-2 border border-grey-200 text-grey-900 font-medium px-5 py-2.5 rounded-full hover:rounded-xl hover:bg-grey-900 hover:text-white hover:border-grey-900 transition-all duration-300 text-sm whitespace-nowrap"
          >
            Explore more thoughts
            <svg className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>

      {/* Horizontal scroll cards */}
      <div className="flex gap-4 px-4 md:px-6 lg:px-8 overflow-x-auto no-scrollbar pb-4">
        {blogPosts.map((post, i) => (
          <a
            key={post.id}
            href={post.href}
            className="group flex-shrink-0 w-[290px] sm:w-[340px] lg:w-[360px] flex flex-col gap-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(28px)',
              transitionProperty: 'opacity, transform',
              transitionDuration: '600ms',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: `${i * 90}ms`,
            }}
          >
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-square bg-grey-100">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-grey-900">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-grey-100 px-3 py-1.5 text-xs font-semibold text-grey-900">
                <svg className="w-3 h-3 text-grey-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z"/>
                </svg>
                {post.readTime}
              </span>
              <span className="inline-flex items-center rounded-full bg-grey-100 px-3 py-1.5 text-xs font-semibold text-grey-900">
                {post.author.name}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-grey-900 text-[1.05rem] font-semibold tracking-tight leading-snug group-hover:text-grey-500 transition-colors duration-200">
              {post.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  )
}
