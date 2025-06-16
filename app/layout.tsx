import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TeeAI - AI-Powered Custom T-Shirt Design Platform',
  description: 'Create stunning custom t-shirts with AI-powered design tools. Upload images, add text, or use our AI suggestions for personalized apparel.',
  keywords: 'custom t-shirts, AI design, print on demand, personalized apparel, t-shirt printing',
  authors: [{ name: 'TeeAI Team' }],
  openGraph: {
    title: 'TeeAI - AI-Powered Custom T-Shirt Design',
    description: 'Create stunning custom t-shirts with AI-powered design tools',
    url: 'https://teeai.com',
    siteName: 'TeeAI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeeAI - AI-Powered Custom T-Shirt Design',
    description: 'Create stunning custom t-shirts with AI-powered design tools',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}