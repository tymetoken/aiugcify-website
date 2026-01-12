import type { Metadata } from 'next'
import { DM_Sans, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://aiugcify.com'),
  title: 'AI UGCify - Turn Any Product Page Into a Viral TikTok Video',
  description: 'Generate AI-powered UGC-style marketing videos from TikTok Shop product pages in minutes. Stop paying $300+ per video. Create viral content with one click.',
  keywords: ['UGC', 'TikTok Shop', 'AI video', 'marketing video', 'product video', 'Chrome extension', 'content creator', 'ecommerce'],
  authors: [{ name: 'AI UGCify' }],
  creator: 'AI UGCify',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aiugcify.com',
    siteName: 'AI UGCify',
    title: 'AI UGCify - Turn Any Product Page Into a Viral TikTok Video',
    description: 'Generate AI-powered UGC-style marketing videos from TikTok Shop product pages in minutes. Stop paying $300+ per video.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI UGCify - AI-Powered UGC Video Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI UGCify - Turn Any Product Page Into a Viral TikTok Video',
    description: 'Generate AI-powered UGC-style marketing videos from TikTok Shop product pages in minutes.',
    images: ['/og-image.png'],
    creator: '@aiugcify',
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${plusJakarta.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
