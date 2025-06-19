import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Salt Digital - Growth Marketing Agency That Delivers Results',
  description: 'Transform your business with data-driven marketing strategies. We help growing businesses scale faster with proven systems that deliver measurable results in 90 days.',
  keywords: 'growth marketing, digital marketing agency, lead generation, conversion optimization, ROI marketing',
  authors: [{ name: 'Salt Digital' }],
  creator: 'Salt Digital',
  publisher: 'Salt Digital',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Salt Digital - Growth Marketing Agency That Delivers Results',
    description: 'Transform your business with data-driven marketing strategies. We help growing businesses scale faster with proven systems that deliver measurable results in 90 days.',
    url: 'https://saltdigital.com',
    siteName: 'Salt Digital',
    images: [
      {
        url: 'https://saltdigital.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Salt Digital - Growth Marketing Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salt Digital - Growth Marketing Agency That Delivers Results',
    description: 'Transform your business with data-driven marketing strategies. We help growing businesses scale faster with proven systems that deliver measurable results in 90 days.',
    images: ['https://saltdigital.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-bg text-secondary`}>
        {children}
      </body>
    </html>
  )
} 