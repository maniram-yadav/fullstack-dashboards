import { WalletConnection } from "@/components/WalletConnection";
import { useWallet } from "@solana/wallet-adapter-react";

export default function Home(){
  const {publicKey} = useWallet()
  return (
    <main className="min-h-screen bg-gradient-to-b 
    from-solana-purple/5 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-6
      border border-gray-200">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Solana Wallet Connection
        </h1>
      <WalletConnection />
      {
        publicKey && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
            <h2 className="text-lg font-semibold mb-2">Wallet Information</h2>
            <div className="space-y-1">
                <p className="text-sm">
                  <span className="font-medium">Network:</span>devnet
                </p>
                <p className="text-sm">
                  <span className="font-medium">Wallet Adapter : {publicKey && 'Ready'}</span>
                </p>
            </div>
            </div>
        )}
        <div className="text-xs text-gray-500 text-center mt-8 space-y-1">
          <p>Supported wallets : phantom, Solfare, backpack</p>
          <p>Build with nextjs and tailwind css</p>
        </div>
      </div>
    </main>
  );
}