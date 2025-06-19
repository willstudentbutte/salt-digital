'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'

const metrics = [
  { value: '97%', label: 'Client Retention Rate' },
  { value: '$18M+', label: 'Ad Spend Managed' },
  { value: '4.9★', label: 'Clutch Rating' },
  { value: '156%', label: 'Average ROI Increase' },
]

export function MetricsBar() {
  return (
    <section className="py-16 bg-surface">
      <Container>
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary">
                {metric.value}
              </div>
              <div className="text-sm lg:text-base text-gray-600">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
} 