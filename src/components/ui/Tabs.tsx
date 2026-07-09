'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface Tab {
  label: string
  value: string
  content: ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultValue?: string
  onChange?: (value: string) => void
}

export function Tabs({ tabs, defaultValue, onChange }: TabsProps) {
  const [active, setActive] = useState(defaultValue || tabs[0].value)

  const handleChange = (value: string) => {
    setActive(value)
    onChange?.(value)
  }

  return (
    <div className="space-y-4">
      {/* Tab Buttons */}
      <div className="flex gap-2 border-b border-gray-200 dark:border-dark-border">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleChange(tab.value)}
            className={cn(
              'px-4 py-3 font-medium text-sm border-b-2 transition-colors',
              active === tab.value
                ? 'border-accent-blue text-accent-blue'
                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="pt-4">
        {tabs.find((tab) => tab.value === active)?.content}
      </div>
    </div>
  )
}
