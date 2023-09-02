import Header from '@/components/Header'
import { Providers } from '@/store/providers'
import "@/styles/customTheme.scss"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Movie App',
  description: 'Generated by Ömer Sarısoy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <div className='container'>
            <Header />
            {children}
            {/* <Footer/> */}
          </div>
        </body>
      </html>
    </Providers>
  )
}
