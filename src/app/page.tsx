'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
from 'next/navigation'

export default function Home() {
  useEffect(() => {
    window.location.href = '/dashboard'
  }, [])

  return null
}
