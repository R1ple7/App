'use client'

import { Card } from '@/components/ui/Card'

export default function VaultsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Vaults</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Explore vault strategies
        </p>
      </div>

      <Card>
        <div className="h-96 flex items-center justify-center text-gray-500">
          <p className="text-center">
            🔨 Coming soon<br />
            <span className="text-sm">Advanced vault strategies</span>
          </p>
        </div>
      </Card>
    </div>
  )
}
