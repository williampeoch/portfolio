import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'William Peoch - Full Stack Developer',
  description: 'Portfolio of William Peoch, full stack developer passionate about modern technologies and innovation.',
  keywords: ['developer', 'full stack', 'React', 'Next.js', 'TypeScript', 'Node.js', 'portfolio'],
  authors: [{ name: 'William Peoch' }],
  creator: 'William Peoch',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://williampeoch.dev',
    title: 'William Peoch - Full Stack Developer',
    description: 'Portfolio of William Peoch, full stack developer passionate about modern technologies and innovation.',
    siteName: 'William Peoch Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'William Peoch - Full Stack Developer',
    description: 'Portfolio of William Peoch, full stack developer passionate about modern technologies and innovation.',
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
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
