'use client'
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useEffect } from "react";

export function WalletConnection() {
    const { publicKey, disconnect, connected, wallet } = useWallet()

    useEffect(() => {
        if (!publicKey) return
        console.log(`Connected to wallet ${publicKey.toBase58()}`)
    }, [publicKey])

    return (
        <div className="flex flex-col items-center gap-4">
            {
                connected ? (
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-sm font-medium text-gray-700">
                            Connected with {wallet?.adapter?.name}
                        </span>
                        <span className="text-xs font-mono bg-gray-100 p-2 rounded break-all text-center">
                            {publicKey?.toBase58()}
                        </span>
                        <button onClick={() => disconnect().catch(() => { })}
                            className="px-2 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                        >
                            Disconnected
                        </button>
                    </div>
                ) : (<WalletMultiButton
                    className="!bg-solana-purple hover:!bg-purple-700 !text-white !rounded-lg
                        !px-4 !py-2 !font-normal"/>)

            }
        </div>
    )
}