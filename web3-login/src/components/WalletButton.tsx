import React from 'react'

interface WalletButtonProps {
  name: string
  icon: string
  onClick: () => void
  disabled?: boolean
}

const WalletButton: React.FC<WalletButtonProps> = ({ name, icon, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center justify-between w-full p-4 mb-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <span className="font-medium">{name}</span>
      <img src={icon} alt={name} className="w-6 h-6" />
    </button>
  )
}

export default WalletButton