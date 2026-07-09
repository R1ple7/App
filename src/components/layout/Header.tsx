'use client'

import { useTheme } from '@/app/providers'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { usePriceStore } from '@/store/priceStore'

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const { humpPrice } = usePriceStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-dark-card border-b border-gray-200 dark:border-dark-border">
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        {/* Logo & Price */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-accent-blue flex items-center justify-center font-bold text-white">
              🐋
            </div>
            <span className="hidden sm:inline font-bold text-lg">Whale Loans</span>
          </div>
          <div className="hidden sm:block text-sm text-gray-600 dark:text-gray-400">
            1 HUMP = ${humpPrice.toFixed(2)}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-border transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Connect Wallet */}
          <ConnectButton />
        </div>
      </div>
    </header>
  )
}
