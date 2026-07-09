import { useState, useEffect } from 'react'

export function useCountdown(targetSeconds: number) {
  const [remaining, setRemaining] = useState(targetSeconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining((prev) => (prev > 0 ? prev - 1 : targetSeconds))
    }, 1000)

    return () => clearInterval(interval)
  }, [targetSeconds])

  const hours = Math.floor(remaining / 3600)
  const minutes = Math.floor((remaining % 3600) / 60)
  const seconds = remaining % 60

  return {
    remaining,
    display: `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`,
  }
}
