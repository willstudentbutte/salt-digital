import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { MetricsBar } from '@/components/sections/MetricsBar'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { CaseStudySlider } from '@/components/sections/CaseStudySlider'
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel'
import { AboutSection } from '@/components/sections/AboutSection'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { CTASection } from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MetricsBar />
      <ServicesGrid />
      <CaseStudySlider />
      <TestimonialsCarousel />
      <AboutSection />
      <FAQAccordion />
      <CTASection />
      <Footer />
    </main>
  )
} 