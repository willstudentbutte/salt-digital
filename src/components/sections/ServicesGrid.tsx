'use client'

import { motion } from 'framer-motion'
import { 
  GlobeAltIcon, 
  UsersIcon, 
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  LinkIcon,
  UserGroupIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'

const services = [
  {
    icon: GlobeAltIcon,
    title: 'Custom Web Design',
    benefit: 'Build blazing-fast sites that convert.',
    href: '#contact',
  },
  {
    icon: UsersIcon,
    title: 'Social Media Management',
    benefit: 'Turn followers into superfans.',
    href: '#contact',
  },
  {
    icon: MagnifyingGlassIcon,
    title: 'Local SEO',
    benefit: 'Own your neighborhood search results.',
    href: '#contact',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Reputation Management',
    benefit: 'Protect and amplify your brand voice.',
    href: '#contact',
  },
  {
    icon: LinkIcon,
    title: 'Custom Backlink Campaigns',
    benefit: 'Earn authority with white-hat links.',
    href: '#contact',
  },
  {
    icon: UserGroupIcon,
    title: 'Lead Generation',
    benefit: 'Fill your pipeline with ready prospects.',
    href: '#contact',
  },
  {
    icon: EnvelopeIcon,
    title: 'Email Marketing',
    benefit: 'Nurture leads with data-driven flows.',
    href: '#contact',
  },
]

export function ServicesGrid() {
  return (
    <section className="py-24 bg-bg" id="services">
      <Container>
        <div className="text-center mb-16">
          <SectionHeading accent className="mb-4">
            Services That Scale Your Success
          </SectionHeading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From strategy to execution, we handle every aspect of your digital growth 
            so you can focus on what you do best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-surface p-8 rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{service.benefit}</p>
              
              <div className="flex items-center text-primary group-hover:text-primary-alt transition-colors">
                <span className="text-sm font-semibold">Learn more</span>
                <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
} 