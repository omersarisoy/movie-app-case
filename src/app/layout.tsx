'use client'
import Header from '@/components/Header'
import { Providers } from '@/store/providers'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import "@/styles/customTheme.scss"


const inter = Inter({ subsets: ['latin'] })

 const metadata = {
  title: 'My Movie App',
  description: 'Generated by Ömer Sarısoy',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  const pathname = usePathname()
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <div className='container'>
           <Header type={pathname === '/'}/>
            {children}
          </div>
        </body>
      </html>
    </Providers>
  )
}
