'use client'

import { useState, useCallback } from 'react'
import Preloader from '@/components/layout/Preloader'
import Header from '@/components/layout/Header'
import HeroSection from '@/components/sections/HeroSection'
import ClientsMarquee from '@/components/sections/ClientsMarquee'
import IntroSection from '@/components/sections/IntroSection'
import FeaturedWork from '@/components/sections/FeaturedWork'
import ServicesSection from '@/components/sections/ServicesGrid'
import StackingCards from '@/components/sections/StackingCards'
import WhatsNew from '@/components/sections/WhatsNew'
import ContactTeaser from '@/components/sections/ContactTeaser'
import Footer from '@/components/layout/Footer'

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  const handleLoadComplete = useCallback(() => {
    setLoaded(true)
  }, [])

  return (
    <>
      {!loaded && <Preloader onComplete={handleLoadComplete} />}
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transitionProperty: 'opacity',
          transitionDuration: '600ms',
          transitionDelay: '100ms',
        }}
      >
        <Header />
        <main>
          <HeroSection />
          <ClientsMarquee />
          <IntroSection />
          <FeaturedWork />
          <ServicesSection />
          <StackingCards />
          <WhatsNew />
          <ContactTeaser />
        </main>
        <Footer />
      </div>
    </>
  )
}
