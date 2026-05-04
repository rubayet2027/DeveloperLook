import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ClientsMarquee from '@/components/sections/ClientsMarquee'
import IntroSection from '@/components/sections/IntroSection'
import FeaturedWork from '@/components/sections/FeaturedWork'
import ServicesGrid from '@/components/sections/ServicesGrid'
import StackingCards from '@/components/sections/StackingCards'
import StatsSection from '@/components/sections/StatsSection'
import WhatsNew from '@/components/sections/WhatsNew'
import ContactTeaser from '@/components/sections/ContactTeaser'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ClientsMarquee />
      <IntroSection />
      <FeaturedWork />
      <ServicesGrid />
      <StackingCards />
      <StatsSection />
      <WhatsNew />
      <ContactTeaser />
      <Footer />
    </main>
  )
}
