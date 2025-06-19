'use client'

import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

export function CTASection() {
  const handleBookCall = () => {
    // In a real implementation, this would open a calendar booking widget
    window.open('https://calendly.com/salt-digital/strategy-call', '_blank')
  }

  const handleEmailContact = () => {
    window.location.href = 'mailto:hello@saltdigital.com?subject=Growth Strategy Inquiry'
  }

  return (
    <section className="py-24 bg-gradient-to-r from-primary to-primary-alt" id="cta-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <SectionHeading level="h2" className="text-white mb-6">
            Ready to Scale Faster?
          </SectionHeading>
          
          <p className="text-xl lg:text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
            Join 200+ growing businesses who've already transformed their marketing 
            and accelerated their growth with Salt Digital.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-50 font-bold"
              onClick={handleBookCall}
            >
              <PhoneIcon className="mr-2 h-5 w-5" />
              Book Your Free Strategy Call
            </Button>
            
            <Button
              variant="tertiary"
              size="lg"
              className="text-white hover:text-gray-200"
              onClick={handleEmailContact}
            >
              <EnvelopeIcon className="mr-2 h-5 w-5" />
              hello@saltdigital.com
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center"
          >
            <div className="space-y-2">
              <div className="text-3xl font-bold">90 Days</div>
              <div className="text-sm opacity-80">To measurable results</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">No Setup Fees</div>
              <div className="text-sm opacity-80">Start seeing results immediately</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">Senior Team</div>
              <div className="text-sm opacity-80">10+ years experience each</div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
} 