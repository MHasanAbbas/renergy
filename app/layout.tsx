import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Verdant Engineering | Premium B2B Engineering Services',
  description:
    'Verdant Engineering delivers premium engineering consultancy for oil & gas, cryogenic, refining, and industrial sectors across the Gulf.',
  keywords:
    'engineering consultancy, oil & gas, LNG, process engineering, technical safety, Oman, Middle East',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white">
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
