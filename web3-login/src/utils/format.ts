export const shortenAddress = (address: string): string => {
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
}

export const formatBalance = (balance: string): string => {
  return parseFloat(balance).toFixed(4)
}