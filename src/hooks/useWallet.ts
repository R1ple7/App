import { useAccount, useBalance } from 'wagmi'
import { useEffect } from 'react'
import { useWalletStore } from '@/store/walletStore'

export function useWallet() {
  const { address, isConnected } = useAccount()
  const { data: balanceData } = useBalance({ address })
  const { setBalance } = useWalletStore()

  useEffect(() => {
    if (balanceData?.formatted) {
      setBalance(balanceData.formatted)
    }
  }, [balanceData, setBalance])

  return {
    address,
    isConnected,
    balance: balanceData?.formatted || '0',
  }
}
