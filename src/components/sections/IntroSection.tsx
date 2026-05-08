'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}
const ease = [0.25, 0.1, 0, 1] as [number, number, number, number]
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
}

export default function IntroSection() {
  return (
    <motion.section
      className="bg-site-bg py-20 lg:py-32 px-5 lg:px-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        {/* Left body text */}
        <motion.div variants={fadeUp}>
          <p className="text-dark/70 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-lg">
            A global team of search-first content marketers engineering semantic
            relevancy &amp; category signals for both the internet and people
          </p>
        </motion.div>

        {/* Right headline + CTAs */}
        <motion.div variants={fadeUp}>
          <h2
            className="text-dark font-bold tracking-tight leading-[1.05] mb-8"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}
          >
            Driving Demand &amp;{' '}
            <span className="relative inline-flex items-baseline gap-2">
              Discovery
              <span className="inline-block w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-lg overflow-hidden align-middle flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&q=80&auto=format&fit=crop"
                  alt="" className="w-full h-full object-cover"
                />
              </span>
            </span>
          </h2>
          <div className="flex flex-wrap gap-3">
            <motion.a
              href="/about"
              className="group inline-flex items-center gap-2 bg-white text-dark font-semibold text-sm px-6 py-3 rounded-full border border-grey-200 hover:rounded-lg hover:bg-dark hover:text-white hover:border-dark transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Our Story
              <svg className="w-3 h-3 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </motion.a>
            <a href="/services" className="group inline-flex items-center gap-2 text-dark font-semibold text-sm px-6 py-3 hover:opacity-70 transition-opacity duration-200">
              Our Services
              <svg className="w-3 h-3 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
