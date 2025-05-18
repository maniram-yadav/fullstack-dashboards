import { Connection,PublicKey,LAMPORTS_PER_SOL, clusterApiUrl } from "@solana/web3.js";

export const  getBalance = async (publicKey : PublicKey) => {
    const connection = new Connection(clusterApiUrl('devnet'),'confirmed')
    const balance = await connection.getBalance(publicKey).then(value =>value);
    
    return balance/LAMPORTS_PER_SOL
}

export const requestAirdrop = async (publickey : PublicKey, amount:number = 1) =>{
    const connection = new Connection(clusterApiUrl('devnet'),'confirmed')
    const signature = await connection.requestAirdrop(
        publickey,amount*LAMPORTS_PER_SOL
    )
    await connection.confirmTransaction(signature)
    return signature
}