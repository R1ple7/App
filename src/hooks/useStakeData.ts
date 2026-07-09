import { useEffect, useState } from 'react'
import { getMockStakeData } from '@/lib/mock-data'

interface StakeData {
  apy: number
  totalDeposited: string
  currentIndex: string
  yourBalance: string
  yourStaked: string
  nextRewardAmount: string
  nextRewardYield: string
  roi5Day: string
  rebaseCountdown: number
}

export function useStakeData() {
  const [data, setData] = useState<StakeData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setData(getMockStakeData())
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return { data, loading }
}
