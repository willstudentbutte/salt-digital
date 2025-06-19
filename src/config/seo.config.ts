import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  titleTemplate: '%s | Salt Digital',
  defaultTitle: 'Salt Digital - Growth Marketing Agency That Delivers Results',
  description: 'Transform your business with data-driven marketing strategies. We help growing businesses scale faster with proven systems that deliver measurable results in 90 days.',
  canonical: 'https://saltdigital.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saltdigital.com',
    siteName: 'Salt Digital',
    title: 'Salt Digital - Growth Marketing Agency That Delivers Results',
    description: 'Transform your business with data-driven marketing strategies. We help growing businesses scale faster with proven systems that deliver measurable results in 90 days.',
    images: [
      {
        url: 'https://saltdigital.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Salt Digital - Growth Marketing Agency',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@salt_digital',
    site: '@salt_digital',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'robots',
      content: 'index,follow',
    },
    {
      name: 'googlebot',
      content: 'index,follow',
    },
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
}

export default config 