import type { Metadata } from 'next'
import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { Suspense } from 'react'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: {
    default: 'Dyreverden',
    template: '%s | Dyreverden',
  },
  description: 'Utforsk dyrearter og lær mer om dyr og deres bevaringsstatus.',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="no" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body>
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
