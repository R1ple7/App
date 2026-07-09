import { useEffect, useState } from 'react'
import { getMockBondData } from '@/lib/mock-data'

interface BondData {
  token: string
  price: string
  roi: string
  purchased: string
  duration: string
}

export function useBondData() {
  const [data, setData] = useState<BondData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(getMockBondData())
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return { data, loading }
}
