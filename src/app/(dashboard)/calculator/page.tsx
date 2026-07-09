'use client'

import { Card } from '@/components/ui/Card'

export default function CalculatorPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Calculator</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Calculate your potential earnings
        </p>
      </div>

      <Card>
        <div className="h-96 flex items-center justify-center text-gray-500">
          <p className="text-center">
            🔨 Coming soon<br />
            <span className="text-sm">Calculate your stake rewards</span>
          </p>
        </div>
      </Card>
    </div>
  )
}
