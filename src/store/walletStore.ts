import { create } from 'zustand'

interface WalletState {
  balance: string
  stakedBalance: string
  setBalance: (balance: string) => void
  setStakedBalance: (balance: string) => void
}

export const useWalletStore = create<WalletState>((set) => ({
  balance: '1000', // Mock balance
  stakedBalance: '500',
  setBalance: (balance) => set({ balance }),
  setStakedBalance: (stakedBalance) => set({ stakedBalance }),
}))
