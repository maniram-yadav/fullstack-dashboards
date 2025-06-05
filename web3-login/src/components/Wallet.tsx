'use client'
import { useEffect, useState } from "react";
import { ethers } from "ethers";

export default function Wallet() {

    const [account, setAccount] = useState<string | null>(null)
    const [balance, setBalance] = useState<string | null>(null)

    const isMetaMaskInstalled = () => typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'

    const connectWallet = async () => {
        if (!isMetaMaskInstalled()) {
            alert('metamask is not detecetd. Install it first')
            return
        }
        try {
            const provider = new ethers.BrowserProvider(window.ethereum)
            const accounts = await provider.send('eth_requestAccounts', [])
            const address = accounts[0]
            setAccount(address)
            const balanceBigInt = await provider.getBalance(address)
            setBalance(ethers.formatEther(balanceBigInt))
        } catch (error) {
            console.log('Connection error ', error)
        }
    }

    const disconnectWallet = () => {
        setAccount(null)
        setBalance(null)
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen
         bg-gray-900 text-white p-4">
            {!account ? (
                <button onClick={connectWallet} className="px-3 py-3 rounded-lg text-white bg-indigo-600
                hover:bg-indigo-700 size-max cursor-pointer">  Connect with MetaMask</button>
            ) :
                <div>
                    <button onClick={disconnectWallet} className=" mx-2 my-2 px-3 py-3 rounded-lg text-white bg-indigo-600
                hover:bg-indigo-700 size-max cursor-pointer float-right"> Logout</button>
                    <div>
                        {account}
                    </div>
                    <div>
                        {balance}
                    </div>
                </div>
            }
        </div>
    )
}