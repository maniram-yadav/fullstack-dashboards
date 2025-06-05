import { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { ethers } from 'ethers'
import { connectors } from '../utils/connectors'
 
export const useWallet = () => {
    const {connector, account, provider, chainId } = useWeb3React()
    const [balance, setBalance] = useState<string>('0')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    
        
    const connect = async (connectorkey: string) => {
        try {
            setIsLoading(true)
            setError(null)
            
            await connector.activate(connectors[connectorkey as keyof typeof connectors].connector)
        } catch (err) {
            setError('Failed to connect wallet')
            console.error(err)
        } finally {
            setIsLoading(false)
        }
    }


    const disconnect = () => {
        try {
            // connector.deactivate()
        } catch (err) {
            setError('Failed to disconnect wallet')
            console.error(err)
        }
    }

    useEffect(() => {
        const fetchBalance = async () => {
            if (account && provider) {
                try {
                    const balance = await provider.getBalance(account)
                    setBalance(ethers.formatEther(balance.toBigInt()))
                } catch (err) {
                    setError('Failed to fetch balance')
                    console.error(err)
                }
            }
        }

        fetchBalance()
    }, [account, provider, chainId])

    return {
        connect,
        disconnect,
        account,
        balance,
        isLoading,
        error,
        chainId,
    }
}