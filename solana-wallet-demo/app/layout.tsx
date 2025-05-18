import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SolanaProvider } from '@/providers/WalletProvider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Solana Wallet Connection',
  description: 'Connect to Solana wallets with Next.js 15',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={inter.className}>
        <SolanaProvider>
          {children}
        </SolanaProvider>
      </body>
    </html>
  )
}