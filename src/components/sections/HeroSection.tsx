'use client'

import { motion } from 'framer-motion'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToResults = () => {
    document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-bg via-surface to-bg overflow-hidden">
      {/* Background SVG Waves */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 400C300 200 500 600 800 400C1000 250 1100 500 1200 300V800H0V400Z"
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#005FCE" />
              <stop offset="100%" stopColor="#2B79FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading level="h1" accent className="mb-6">
              Turn Clicks into Clients with Salt Digital.
            </SectionHeading>
          </motion.div>

          <motion.p
            className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We transform growing businesses into market leaders through data-driven 
            marketing strategies that deliver measurable results in 90 days or less.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" onClick={scrollToContact}>
              Book Your Strategy Call
              <ChevronRightIcon className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="secondary" size="lg" onClick={scrollToResults}>
              See Our Results
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  )
} 