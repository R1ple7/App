'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
  LayoutDashboard,
  Coins,
  TrendingUp,
  Calculator,
  Vault,
  Zap,
  Lightbulb,
  BookOpen,
  Menu,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Coins, label: 'Stake', href: '/stake' },
  { icon: TrendingUp, label: 'Bond', href: '/bond' },
  { icon: Calculator, label: 'Calculator', href: '/calculator' },
  { icon: Vault, label: 'Vaults', href: '/vaults' },
  { icon: Zap, label: 'Leverage', href: '/leverage' },
  { icon: Lightbulb, label: 'Flash Mint', href: '/flash-mint' },
  { icon: BookOpen, label: 'Docs', href: '/docs' },
]

export function Sidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-dark-card border border-dark-border"
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 h-screen w-64 bg-white dark:bg-dark-card border-r border-gray-200 dark:border-dark-border p-6 overflow-y-auto transition-transform md:translate-x-0 md:sticky md:top-0 z-40',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Logo */}
        <div className="mb-8 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent-blue flex items-center justify-center font-bold text-white text-lg">
            🐋
          </div>
          <h1 className="font-bold text-xl">Whale Loans</h1>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navItems.map(({ icon: Icon, label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-xl transition-colors',
                pathname === href
                  ? 'bg-accent-blue text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-border'
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{label}</span>
            </Link>
          ))}
        </nav>

        {/* Footer Info */}
        <div className="absolute bottom-6 left-6 right-6 space-y-2 text-xs text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-green"></span>
            KYC Verified
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-green"></span>
            MCN Ventures
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}
