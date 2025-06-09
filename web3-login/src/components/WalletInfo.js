"use client";

import { useMetaMask } from '@/context/MetaMaskContext';

const WalletInfo = () => {
  const { isConnected, account, balance, connectWallet, disconnectWallet,
    network,
    chainId,
  } = useMetaMask();

  const formatAddress = (address) => {
    if (!address) return '';
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center text-gray-800">MetaMask Login Demo</h1>

        {!isConnected ? (
          <button
            onClick={connectWallet}
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200"
          >
            Connect with MetaMask
          </button>
        ) : (
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-md">
              <h2 className="text-lg font-semibold text-gray-700">Wallet Information</h2>
              <div className="mt-2 space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Account:</span> {formatAddress(account)}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Balance:</span> {balance} ETH
                </p>
              </div>
            </div>

            <button
              onClick={disconnectWallet}
              className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition duration-200"
            >
              Disconnect Wallet
            </button>
          </div>
        )}

        {/* {typeof window !== 'undefined' || !window.ethereum && (
          <div className="mt-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
            <p>MetaMask is not installed. Please install the <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MetaMask extension</a> to use this feature.</p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default WalletInfo;