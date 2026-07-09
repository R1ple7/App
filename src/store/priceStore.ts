import { create } from 'zustand'

interface PriceStore {
  humpPrice: number
  setHumpPrice: (price: number) => void
}

export const usePriceStore = create<PriceStore>((set) => ({
  humpPrice: 8.43, // Mock price
  setHumpPrice: (price) => set({ humpPrice: price }),
}))
