import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'


const injected = new InjectedConnector({
    supportedChainIds : [1,3,4,6,42,56,97,137,80001],
})

const walletconnect = new WalletConnectConnector({
    rpc :{
       1: `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
    5: `https://goerli.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
    },
     bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
})


export const connectors = {
  injected: {
    name: 'MetaMask',
    connector: injected,
  },
  walletconnect: {
    name: 'WalletConnect',
    connector: walletconnect,
  }
}