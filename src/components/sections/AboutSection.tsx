'use client'

import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const pillars = [
  {
    title: 'Data-First',
    description: 'Every decision backed by analytics and measurable outcomes'
  },
  {
    title: 'Radically Transparent',
    description: 'Real-time reporting and open communication every step of the way'
  },
  {
    title: 'ROI-Obsessed',
    description: 'Your success is our success—we only win when you win'
  },
  {
    title: 'Senior-Level Only',
    description: 'No junior staff, no account handoffs—only experienced professionals'
  }
]

export function AboutSection() {
  return (
    <section className="py-24 bg-surface" id="about">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeading accent className="mb-6">
              Why Growing Businesses Choose Salt Digital
            </SectionHeading>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                We're not your typical marketing agency. Founded by former Fortune 500 
                executives who got tired of seeing small businesses get burned by agencies 
                that over-promise and under-deliver.
              </p>
              
              <p>
                Our mission is simple: help ambitious business owners scale faster by 
                implementing the same growth strategies that billion-dollar companies use, 
                but tailored for businesses ready to break through to the next level.
              </p>
              
              <p>
                Every strategy we implement is designed to generate measurable results 
                within 90 days. No fluff, no vanity metrics—just profitable growth.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-secondary mb-8">
              Our Core Pillars
            </h3>
            
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-bg rounded-lg"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <CheckIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-gray-600">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
} 