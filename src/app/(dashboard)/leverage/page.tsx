'use client'

import { Card } from '@/components/ui/Card'

export default function LeveragePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Leverage</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Leverage your positions
        </p>
      </div>

      <Card>
        <div className="h-96 flex items-center justify-center text-gray-500">
          <p className="text-center">
            🔨 Coming soon<br />
            <span className="text-sm">Leverage trading tools</span>
          </p>
        </div>
      </Card>
    </div>
  )
}
