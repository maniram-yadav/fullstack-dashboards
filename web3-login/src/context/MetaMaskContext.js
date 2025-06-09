"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';

const MetaMaskContext = createContext({
  isConnected: false,
  account: null,
  balance: null,
  connectWallet: () => {},
  disconnectWallet: () => {},
  provider: null,
});

export const MetaMaskProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const checkConnection = async () => {
      const provider = await detectEthereumProvider();
      
      if (provider) {
        setProvider(provider);
        
        // Check if user is already connected
        const accounts = await provider.request({ method: 'eth_accounts' });
        
        if (accounts.length > 0) {
          await handleConnection(accounts[0], provider);
        }
        
        provider.on('accountsChanged', handleAccountsChanged);
        provider.on('chainChanged', () => window.location.reload());
      }
    };
    
    checkConnection();
    
    return () => {
      if (window && provider) {
        // provider.removeListener('accountsChanged', handleAccountsChanged);
        // provider.removeListener('chainChanged', () => window.location.reload());
      }
    };
  }, []);

  const handleAccountsChanged = (accounts) => {
    if (accounts.length === 0) {
      // MetaMask is locked or the user has disconnected all accounts
      disconnectWallet();
    } else {
      handleConnection(accounts[0], provider);
    }
  };

  const handleConnection = async (account, provider) => {
    setAccount(account);
    setIsConnected(true);
    
    // Get balance
    const web3Provider = new ethers.BrowserProvider(provider);
    const balance = await web3Provider.getBalance(account);
    setBalance(ethers.formatEther(balance));
  };

  const connectWallet = async () => {
    try {
      if (!provider) {
        alert('MetaMask is not installed. Please install it to use this feature.');
        return;
      }
      
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      await handleConnection(accounts[0], provider);
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setBalance(null);
    setIsConnected(false);
    // provider.web3Provider.disconnectWallet();
    window.localStorage.clear();
    

  };

  return (
    <MetaMaskContext.Provider
      value={{
        isConnected,
        account,
        balance,
        connectWallet,
        disconnectWallet,
        provider,
      }}
    >
      {children}
    </MetaMaskContext.Provider>
  );
};

export const useMetaMask = () => useContext(MetaMaskContext);