'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

const caseStudies = [
  {
    id: 1,
    company: 'TechFlow Solutions',
    industry: 'B2B SaaS',
    challenge: 'Low conversion rates and high customer acquisition costs',
    solution: 'Implemented conversion-focused landing pages and refined PPC campaigns',
    results: {
      conversion: '+284%',
      cost: '-67%',
      revenue: '+$2.1M'
    },
    timeframe: '6 months',
    quote: '"Salt Digital transformed our entire growth strategy. The results speak for themselves."',
    author: 'Sarah Chen, CMO'
  },
  {
    id: 2,
    company: 'Local Dental Group',
    industry: 'Healthcare',
    challenge: 'Limited local visibility and appointment bookings',
    solution: 'Local SEO optimization and Google Ads management with reputation building',
    results: {
      visibility: '+340%',
      bookings: '+156%',
      reviews: '4.9★ avg'
    },
    timeframe: '4 months',
    quote: '"We went from struggling to find patients to having a 3-week waiting list."',
    author: 'Dr. Michael Torres, Practice Owner'
  },
  {
    id: 3,
    company: 'EcoHome Products',
    industry: 'E-commerce',
    challenge: 'Seasonal revenue dips and email list stagnation',
    solution: 'Year-round email marketing strategy with automated sequences and seasonal campaigns',
    results: {
      revenue: '+445%',
      list: '+12,000',
      retention: '+89%'
    },
    timeframe: '8 months',
    quote: '"Their email strategies alone doubled our lifetime customer value."',
    author: 'Jessica Park, Founder'
  }
]

export function CaseStudySlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const currentCase = caseStudies[currentSlide]

  return (
    <section className="py-24 bg-surface" id="case-studies">
      <Container>
        <div className="text-center mb-16">
          <SectionHeading accent className="mb-4">
            Real Results for Real Businesses
          </SectionHeading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't take our word for it. See how we've helped businesses like yours 
            achieve remarkable growth.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCase.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-bg rounded-2xl p-8 lg:p-12"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-secondary mb-2">
                      {currentCase.company}
                    </h3>
                    <p className="text-primary font-semibold">{currentCase.industry}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="font-semibold text-secondary mb-1">Challenge:</h4>
                      <p className="text-gray-600">{currentCase.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary mb-1">Solution:</h4>
                      <p className="text-gray-600">{currentCase.solution}</p>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-accent pl-4 mb-6">
                    <p className="text-lg italic text-gray-700">"{currentCase.quote}"</p>
                    <footer className="text-sm text-gray-600 mt-2">— {currentCase.author}</footer>
                  </blockquote>
                </div>

                <div className="bg-surface rounded-xl p-8 shadow-lg">
                  <h4 className="text-xl font-bold text-secondary mb-6 text-center">
                    Results in {currentCase.timeframe}
                  </h4>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {Object.entries(currentCase.results).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-3xl font-bold text-primary mb-1">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">
                          {key === 'cost' ? 'Cost Reduction' : 
                           key === 'visibility' ? 'Local Visibility' :
                           key === 'bookings' ? 'Appointment Bookings' :
                           key === 'list' ? 'Email Subscribers' :
                           key === 'retention' ? 'Customer Retention' :
                           key === 'reviews' ? 'Review Rating' :
                           key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mini Chart SVG */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <svg className="w-full h-20" viewBox="0 0 300 80">
                      <polyline
                        fill="none"
                        stroke="#005FCE"
                        strokeWidth="3"
                        points="0,60 50,45 100,35 150,20 200,15 250,10 300,5"
                      />
                      <circle cx="300" cy="5" r="4" fill="#34D399" />
                    </svg>
                    <p className="text-xs text-gray-500 text-center mt-2">Growth trajectory</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="secondary"
              size="sm"
              onClick={prevSlide}
              className="p-2"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </Button>
            
            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="secondary"
              size="sm"
              onClick={nextSlide}
              className="p-2"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
} 