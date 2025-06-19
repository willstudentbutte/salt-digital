'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const faqs = [
  {
    id: 1,
    question: "What's your pricing structure and are there any setup fees?",
    answer: "Our pricing is based on your current revenue and growth goals. Most clients invest between $3,500-$15,000 per month with no setup fees. We believe in earning our retainer through results, not upfront costs. During our strategy call, we'll provide a custom proposal based on your specific needs and budget."
  },
  {
    id: 2,
    question: "How quickly can we expect to see results?",
    answer: "While every business is different, our clients typically see initial improvements within 30 days and significant results within 90 days. We focus on quick wins early on while building long-term sustainable growth systems. Our onboarding process is designed to get you results as quickly as possible."
  },
  {
    id: 3,
    question: "Do you require long-term contracts?",
    answer: "We offer both 6-month and 12-month partnerships. Most clients choose 12 months because growth marketing requires consistent execution over time to compound results. However, we're confident in our work—if you're not completely satisfied after 90 days, we'll refund your investment."
  },
  {
    id: 4,
    question: "How often will we receive reports and what metrics do you track?",
    answer: "You'll have 24/7 access to your real-time dashboard showing all key metrics. We provide detailed monthly reports and weekly check-ins. We track revenue-focused metrics like customer acquisition cost, lifetime value, conversion rates, and ROI—not vanity metrics like impressions or clicks."
  },
  {
    id: 5,
    question: "What level of support can we expect and who will we work with?",
    answer: "You'll work directly with senior-level strategists (no account coordinators or junior staff). Your dedicated account manager has 10+ years of experience and direct access to our founder. We provide same-day response to urgent questions and weekly strategy calls to ensure alignment."
  }
]

export function FAQAccordion() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section className="py-24 bg-bg" id="faq">
      <Container>
        <div className="text-center mb-16">
          <SectionHeading accent className="mb-4">
            Frequently Asked Questions
          </SectionHeading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about our process, pricing, and partnerships.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-surface rounded-lg shadow"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-lg"
              >
                <h3 className="text-lg font-semibold text-secondary pr-8">
                  {faq.question}
                </h3>
                <ChevronDownIcon 
                  className={`h-5 w-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openItem === faq.id ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openItem === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
} 