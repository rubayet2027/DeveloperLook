import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rise at Seven | Award Winning Search-First Content Marketing Agency',
  description:
    'Rise at Seven is a search-first content marketing agency with offices in London, Sheffield, Manchester & New York that specialises in SEO, Digital PR, content marketing and Influencer.',
  keywords: 'SEO agency, digital PR, content marketing, influencer marketing, Rise at Seven',
  openGraph: {
    title: 'Rise at Seven | Award Winning Search-First Content Marketing Agency',
    description:
      'Rise at Seven is a search-first content marketing agency specialising in SEO, Digital PR, content marketing and Influencer.',
    url: 'https://riseatseven.com',
    siteName: 'Rise at Seven',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
