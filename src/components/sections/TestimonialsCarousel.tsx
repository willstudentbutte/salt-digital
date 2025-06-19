'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const testimonials = [
  {
    id: 1,
    quote: "Salt Digital didn't just improve our marketing—they transformed our entire business. Our revenue increased 340% in just 8 months, and we're now the go-to choice in our market.",
    author: "Jennifer Martinez",
    role: "CEO, Urban Wellness Spa",
    company: "Urban Wellness"
  },
  {
    id: 2,
    quote: "The ROI we've seen is incredible. What used to cost us $200 per lead now costs $45, and the quality is significantly better. Salt Digital's data-driven approach is exactly what we needed.",
    author: "David Thompson",
    role: "Marketing Director, Home Solutions Plus",
    company: "Home Solutions Plus"
  },
  {
    id: 3,
    quote: "Working with Salt Digital feels like having a dedicated growth team without the overhead. They understand our industry and consistently deliver results that exceed our expectations.",
    author: "Rachel Kim",
    role: "Founder, TechStart Consulting",
    company: "TechStart"
  },
  {
    id: 4,
    quote: "In 6 months, we went from 3 new patients per month to 47. The local SEO and reputation management strategies Salt Digital implemented have completely changed our practice.",
    author: "Dr. Anthony Rivera",
    role: "Practice Owner, Rivera Family Dentistry",
    company: "Rivera Family Dentistry"
  },
  {
    id: 5,
    quote: "The email marketing campaigns alone generated $2.3M in additional revenue last year. Salt Digital's strategies are sophisticated yet easy to understand and implement.",
    author: "Lisa Chang",
    role: "E-commerce Manager, GreenLife Products",
    company: "GreenLife Products"
  }
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-24 bg-bg">
      <Container>
        <div className="text-center mb-16">
          <SectionHeading accent className="mb-4">
            What Our Clients Say
          </SectionHeading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real feedback from real businesses who've experienced transformational growth.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <blockquote className="text-2xl lg:text-3xl leading-relaxed text-gray-700 mb-8">
                "{currentTestimonial.quote}"
              </blockquote>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-alt rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  {currentTestimonial.author.split(' ').map(name => name[0]).join('')}
                </div>
                <div className="text-xl font-bold text-secondary">
                  {currentTestimonial.author}
                </div>
                <div className="text-gray-600">
                  {currentTestimonial.role}
                </div>
                <div className="text-primary font-semibold">
                  {currentTestimonial.company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
} 