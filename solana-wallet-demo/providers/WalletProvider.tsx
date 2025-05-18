'use client'

import {ReactNode , useMemo} from 'react'
import { ConnectionProvider, WalletProvider} from '@solana/wallet-adapter-react'
import {WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import {clusterApiUrl } from '@solana/web3.js'
import {  PhantomWalletAdapter,
  SolflareWalletAdapter,
  CoinbaseWalletAdapter,
} from '@solana/wallet-adapter-wallets'


export function SolanaProvider({children}:{children:ReactNode}){
    const endpoint = useMemo(()=>clusterApiUrl('devnet'),[])
    const wallets = useMemo(()=>[
        new PhantomWalletAdapter(),
        new SolflareWalletAdapter(),
        new CoinbaseWalletAdapter(),
    ],[]);

    return (
        <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets}>
                    <WalletModalProvider>{children}</WalletModalProvider>
                </WalletProvider>
        </ConnectionProvider>
    )
}