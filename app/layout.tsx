import Footer from '@/app/components/footer'
import { Providers } from '@/app/providers'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Fintech Icons Argentina',
  description:
    'Colección de +400 iconos en formato SVG relacionados con el mundo fintech de Argentina. Acciones, CEDEARs, FCI, Bancos, Apps y más.',
  verification: { google: 'IazxHvdn6Xmn4iAmG0gElQx2mkF1hAleLYwdLBK_MS8' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen w-full items-start justify-center bg-zinc-100 text-black dark:bg-zinc-950 dark:text-white">
            {children}
          </div>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
