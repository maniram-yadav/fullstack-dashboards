'use client'
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { useEffect,useState } from "react";
import { getBalance,requestAirdrop } from "@/utils/solana";
import Link from "next/link";

export default function Accountpage(){
    const {publicKey} = useWallet()
    const [balance,setBalance] = useState<number|null>(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState<string|null>(null)
    const [airdropStatus,setAirdropStatus] = useState<string|null>(null)
    
    useEffect(()=>{
        if (!publicKey) return
        const fetchbalance = async () => {
  try{
                setLoading(true)
                const balance = await getBalance(publicKey)
                setBalance(balance)
                setError(null)

        } catch(err){
                console.log('Error fetching balance : ',err)
                setError('Failed to fetch balance')
        } finally{
            setLoading(false)
        }
        }
        fetchbalance()
      
    },[publicKey])

    const handleAirdrop = async () => {
        if (!publicKey) return
        try { 
            setLoading(true)
            setAirdropStatus('requesting Airdrop ...')
            await requestAirdrop(publicKey)
            setAirdropStatus('Airdrop completed. Updating balance ..')
            const newBalance = await getBalance(publicKey)
            setBalance(newBalance)
            setTimeout(()=>setAirdropStatus(null),3000)
        } catch(err){
                console.log('Error requesting airdrop : ',err)
                setAirdropStatus('Airdrop failed')
        } finally {
            setLoading(false)
        }
    }

    if(!publicKey) {
        return (
            <div className="min-h-screen flex items-center justify-content">
                <div className="text-center p-6 max-w-md bg-white rounded-xl shadow-lg">
                <h2 className="text-xl font-bold mb-4">Wallet not conected</h2>
                <p className="mb-4">Please connect to your wallet to view Balance</p>
                <Link href="/" 
                className="px-4 py-2 bg-solana-purple teext-white rounded-lg
                hover:bg-purple-700 transition">Go Home</Link>
                </div>
            </div>
        )

    }
    return (
  
    <main className="min-h-screen bg-gradient-to-b from-solana-purple/5 to-white py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Wallet Account</h1>
            <Link 
              href="/" 
              className="text-sm text-solana-purple hover:underline"
            >
              Back to Home
            </Link>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="font-semibold text-gray-700 mb-2">Public Key</h2>
              <p className="font-mono text-sm break-all bg-gray-100 p-2 rounded">
                {publicKey.toString()}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold text-gray-700">Balance</h2>
                {loading ? (
                  <span className="text-sm text-gray-500">Loading...</span>
                ) : (
                  <button
                    onClick={handleAirdrop}
                    disabled={loading}
                    className="cursor-pointer border-2 border-gray-200  text-sm bg-solana-green text-white px-3 py-1 
                    rounded bg-blue-400 hover:bg-green-600 disabled:opacity-50"
                  >
                    Request Airdrop
                  </button>
                )}
              </div>
              <div className="flex items-baseline space-x-2">
                {balance !== null ? (
                  <>
                    <span className="text-2xl font-bold">{balance.toFixed(4)}</span>
                    <span className="text-gray-500">SOL</span>
                  </>
                ) : (
                  <span className="text-gray-500">
                    {error || 'Balance not available'}
                  </span>
                )}
              </div>
              {airdropStatus && (
                <p className="text-xs mt-2 text-solana-purple">{airdropStatus}</p>
              )}
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="font-semibold text-gray-700 mb-2">Network</h2>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-solana-green mr-2"></div>
                <span>Devnet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    )
}