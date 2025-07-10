import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from './components/layout/navbar'
import { Footer } from './components/layout/footer'
import localFont from 'next/font/local'
import SessionProviderWrapper from './components/SessionProviderWrapper'

const helveticaWorld = localFont({
  src: [
    {
      path: './fonts/HelveticaWorld-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaWorld-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/HelveticaWorld-Italic.ttf',
      weight: '400',
      style: 'italic',
    }
  ],
  variable: '--font-helvetica'
})

export const metadata: Metadata = {
  title: 'Neuma Labs',
  description: 'AI-powered solutions for your business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={helveticaWorld.variable}>
      <body className="font-helvetica bg-black text-white">
        <SessionProviderWrapper>
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </SessionProviderWrapper>
      </body>
    </html>
  )
} 