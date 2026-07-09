import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Whale Loans - DeFi Staking & Bonding',
  description: 'Decentralized Finance Platform for HUMP Token',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-dark-bg text-black dark:text-white transition-colors">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
