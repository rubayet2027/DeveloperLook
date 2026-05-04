'use client'

import { useState } from 'react'

const projects = [
  {
    id: 1,
    client: 'SIXT',
    category: 'SEO + Digital PR',
    result: '+312% organic traffic',
    description: 'Drove massive organic growth for Europe\'s leading car rental brand through integrated SEO and Digital PR.',
    image: 'https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5087.JPG?w=900&h=600&q=90&auto=format&fit=crop&dm=1753791050&s=6f9c4e427ec3afc2794ccb92f006af06',
    color: '#B2F6E3',
  },
  {
    id: 2,
    client: 'Dojo',
    category: 'Content + SEO',
    result: '+180% keyword rankings',
    description: 'Transformed Dojo\'s content strategy to dominate payment solutions search results across the UK.',
    image: 'https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=900&h=600&q=90&auto=format&fit=crop&dm=1750846499&s=8c1a07d60970e114e350dc38945f6bad',
    color: '#CB7B3A',
  },
  {
    id: 3,
    client: 'Magnet Trade',
    category: 'Digital PR',
    result: '850+ press links',
    description: 'Award-winning Digital PR campaigns that earned national coverage and thousands of high-quality backlinks.',
    image: 'https://rise-atseven.transforms.svdcdn.com/production/images/3-copy.jpg?w=900&h=600&q=90&auto=format&fit=crop&dm=1776098692&s=7e87c1bafadd66b362a16649188663d6',
    color: '#60DCFB',
  },
  {
    id: 4,
    client: 'PrettyLittleThing',
    category: 'Influencer + Social',
    result: '42M+ reach',
    description: 'Integrated influencer and organic social strategy that built an unstoppable fashion community.',
    image: 'https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7827.jpg?w=900&h=600&q=90&auto=format&fit=crop&dm=1777514348&s=161c413ad12ef90895fad390f5521371',
    color: '#D8C4FD',
  },
]

export default function FeaturedWork() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = projects[activeIndex]

  return (
    <section className="bg-white py-16 lg:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-16">
          <div>
            <p className="text-grey-300 text-sm font-medium tracking-widest uppercase mb-3">Featured work</p>
            <h2 className="text-grey-900 text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-tight">
              Results that<br />
              <span className="text-grey-300">speak volumes</span>
            </h2>
          </div>
          <a
            href="/work"
            className="group self-start sm:self-auto inline-flex items-center gap-2 border border-grey-200 text-grey-900 font-medium px-5 py-2.5 rounded-full hover:rounded-xl hover:border-grey-900 transition-all duration-300 text-sm whitespace-nowrap"
          >
            All case studies
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          
          {/* Left: Project list */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {projects.map((project, i) => (
              <button
                key={project.id}
                onClick={() => setActiveIndex(i)}
                className={`group text-left p-5 lg:p-6 rounded-2xl border transition-all duration-300 ${
                  i === activeIndex
                    ? 'bg-grey-900 border-grey-900'
                    : 'bg-white border-grey-100 hover:border-grey-200 hover:bg-grey-100'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className={`text-xs font-medium uppercase tracking-widest mb-1.5 ${
                      i === activeIndex ? 'text-mint' : 'text-grey-300'
                    }`}>
                      {project.category}
                    </div>
                    <div className={`text-xl lg:text-2xl font-semibold tracking-tight ${
                      i === activeIndex ? 'text-white' : 'text-grey-900'
                    }`}>
                      {project.client}
                    </div>
                    <div className={`text-sm mt-1 font-medium ${
                      i === activeIndex ? 'text-mint' : 'text-grey-300'
                    }`}>
                      {project.result}
                    </div>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    i === activeIndex
                      ? 'border-mint bg-mint/10 text-mint'
                      : 'border-grey-200 text-grey-300 group-hover:border-grey-400'
                  }`}>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>

                {/* Expanded description */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  i === activeIndex ? 'max-h-24 mt-3 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-white/60 text-sm leading-relaxed">{project.description}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[16/10] bg-grey-100">
              {projects.map((project, i) => (
                <img
                  key={project.id}
                  src={project.image}
                  alt={project.client}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    i === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                />
              ))}
              
              {/* Overlay badge */}
              <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-10">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-grey-900 transition-colors duration-300"
                  style={{ background: active.color }}
                >
                  {active.client}
                </div>
                <div className="rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 text-xs font-medium text-white">
                  {active.category}
                </div>
              </div>

              {/* Result badge */}
              <div className="absolute bottom-4 left-4 z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-grey-900">
                  <span className="w-2 h-2 rounded-full bg-mint" />
                  {active.result}
                </div>
              </div>
            </div>

            {/* Mobile dots */}
            <div className="flex gap-2 justify-center mt-4 lg:hidden">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'bg-grey-900 w-6' : 'bg-grey-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
