'use client'

import { motion } from 'framer-motion'

const blogPosts = [
  { id: 1, category: 'News', title: "Ryan McNamara Promoted to Global Operations Director", image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=800&q=90&auto=format&fit=crop', href: '/blog/global-operations-director' },
  { id: 2, category: 'Case Study', title: "How We Drove 340% Organic Growth for SIXT", image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&h=800&q=90&auto=format&fit=crop', href: '/blog/sixt-case-study' },
  { id: 3, category: 'Insights', title: 'The Future of Search: AI, LLMs and What It Means for Brands', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=800&q=90&auto=format&fit=crop', href: '/blog/future-of-search' },
  { id: 4, category: 'Digital PR', title: 'Creative Campaigns That Earned 10,000+ Links', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&q=80&auto=format&fit=crop', href: '/blog/digital-pr-campaigns' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const ease = [0.25, 0.1, 0, 1] as [number, number, number, number]
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export default function WhatsNew() {
  return (
    <section className="bg-site-bg py-16 lg:py-24 overflow-hidden">
      <div className="px-5 lg:px-10 max-w-[1440px] mx-auto">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <h2
            className="text-dark font-bold tracking-tight leading-[1.05] flex items-baseline gap-2 flex-wrap"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}
          >
            What&apos;s{' '}
            <span className="inline-block w-[38px] h-[38px] sm:w-[48px] sm:h-[48px] rounded-lg overflow-hidden align-middle">
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=200&q=80&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
            </span>
            {' '}New
          </h2>
          <motion.a
            href="/blog"
            className="group self-start sm:self-auto inline-flex items-center gap-2 bg-white text-dark font-semibold text-sm px-6 py-3 rounded-full border border-grey-200 hover:rounded-lg hover:bg-dark hover:text-white hover:border-dark transition-all duration-300 whitespace-nowrap"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore More
            <svg className="w-3 h-3 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="flex gap-4 px-5 lg:px-10 overflow-x-auto no-scrollbar pb-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {blogPosts.map((post) => (
          <motion.a
            key={post.id}
            href={post.href}
            className="group flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px] flex flex-col gap-4"
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-square bg-grey-100">
              <motion.img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease }}
              />
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-dark">
                  {post.category}
                </span>
              </div>
            </div>
            <h3 className="text-dark text-[1rem] font-semibold tracking-tight leading-snug group-hover:text-dark/60 transition-colors duration-200">
              {post.title}
            </h3>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}
