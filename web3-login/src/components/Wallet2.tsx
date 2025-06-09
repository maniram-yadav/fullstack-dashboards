'use client'

import { useState } from 'react'
import { ethers,BrowserProvider } from 'ethers'
import Modal from './Modal'

export default function Wallet() {
  const [account, setAccount] = useState<string | null>(null)
  const [balance, setBalance] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  // const [provider, setProvider] = useState<any>();
  

 
  const connectWallet = async () => {
     const isMetaMaskInstalled = () => typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'

     
    if (!isMetaMaskInstalled()) {
      alert('MetaMask not detected. Please install it first.')
      return
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum)
      // setProvider(prd)
      
      const accounts: string[] = await provider.send('eth_requestAccounts', [])

      if (!accounts || accounts.length === 0) {
        alert('No accounts selected.')
        return
      }

      const selectedAccount = accounts[0] // selected by user in popup
      setAccount(selectedAccount)

      const balanceBigInt = await provider.getBalance(selectedAccount)
      setBalance(ethers.formatEther(balanceBigInt))

      setIsModalOpen(false) // close modal on success
    } catch (error: any) {
      console.error('Connection Error:', error)
      if (error.code === 4001) {
        alert('Connection request rejected by user.')
      }
    }
  }

  const disconnectWallet = () => {
    setAccount(null);
    setBalance(null);
    window.localStorage.clear();
    // provider.web3Provider.disconnectWallet();
    
    
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      {!account ? (
        <>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-lg transition"
          >
            Login
          </button>

          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h2 className="text-xl font-semibold mb-4 text-center">
              Sign in with MetaMask
            </h2>
            <button
              onClick={connectWallet}
              className="w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold"
            >
              Sign in with MetaMask
            </button>
          </Modal>
        </>
      ) : (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md text-center">
          <h2 className="text-xl font-semibold mb-4">Wallet Profile</h2>
          <p className="mb-2 break-all">
            <span className="font-bold">Address:</span> <br /> {account}
          </p>
          <p className="mb-4">
            <span className="font-bold">Balance:</span> {balance} ETH
          </p>
          <button
            onClick={disconnectWallet}
            className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  )
}
