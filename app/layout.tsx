import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/lib/theme-context'

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
  title: 'William Peoch - Développeur Full Stack',
  description: 'Portfolio de William Peoch, développeur full stack passionné par les technologies modernes et l\'innovation.',
  keywords: ['développeur', 'full stack', 'React', 'Next.js', 'TypeScript', 'Node.js', 'portfolio'],
  authors: [{ name: 'William Peoch' }],
  creator: 'William Peoch',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://williampeoch.dev',
    title: 'William Peoch - Développeur Full Stack',
    description: 'Portfolio de William Peoch, développeur full stack passionné par les technologies modernes et l\'innovation.',
    siteName: 'William Peoch Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'William Peoch - Développeur Full Stack',
    description: 'Portfolio de William Peoch, développeur full stack passionné par les technologies modernes et l\'innovation.',
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
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider
          defaultTheme="system"
          storageKey="portfolio-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
