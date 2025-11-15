import type { Metadata } from 'next'
import { Work_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'

const workSans = Work_Sans({ 
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "William Peoc'h – Medical AI & Bioinformatics",
  description: "Portfolio of William Peoc'h, MSc Bioinformatics student focusing on medical AI, representation learning, and multimodal learning for biomedical data.",
  keywords: ['medical ai', 'bioinformatics', 'representation learning', 'multimodal learning', 'william peoc\'h', 'portfolio'],
  authors: [{ name: "William Peoc'h" }],
  creator: "William Peoc'h",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://williampeoch.me',
    title: "William Peoc'h – Medical AI & Bioinformatics",
    description: "Portfolio of William Peoc'h, MSc Bioinformatics student focusing on medical AI, representation learning, and multimodal learning for biomedical data.",
    siteName: "William Peoc'h Portfolio",
  },
  twitter: {
    card: 'summary_large_image',
    title: "William Peoc'h – Medical AI & Bioinformatics",
    description: "Portfolio of William Peoc'h, MSc Bioinformatics student focusing on medical AI, representation learning, and multimodal learning for biomedical data.",
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
      <body className={`${workSans.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
