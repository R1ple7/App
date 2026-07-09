'use client'

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/Card'
import { getMockDashboardMetrics } from '@/lib/mock-data'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

export default function DashboardPage() {
  const [metrics, setMetrics] = useState<any>(null)

  useEffect(() => {
    setMetrics(getMockDashboardMetrics())
  }, [])

  if (!metrics) return <div>Loading...</div>

  const portfolioData = [
    { name: 'Staked', value: metrics.stakedPercentage },
    { name: 'Bonded', value: metrics.bondedPercentage },
  ]

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Overview of your portfolio and assets
        </p>
      </div>

      {/* Main Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">Portfolio Value</p>
            <h2 className="text-2xl font-bold">{metrics.portfolioValue}</h2>
          </div>
        </Card>
        <Card>
          <div className="space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Earnings</p>
            <h2 className="text-2xl font-bold text-accent-green">$125,680</h2>
          </div>
        </Card>
        <Card>
          <div className="space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">APY</p>
            <h2 className="text-2xl font-bold text-accent-blue">257.9%</h2>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Portfolio Distribution */}
        <Card>
          <h3 className="font-bold mb-4">Portfolio Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={portfolioData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                dataKey="value"
              >
                <Cell fill="#0066FF" />
                <Cell fill="#10B981" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Treasury Assets */}
        <Card>
          <h3 className="font-bold mb-4">Treasury Assets</h3>
          <div className="space-y-3">
            {metrics.treasuryAssets.map((asset: any) => (
              <div key={asset.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{asset.name}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {asset.percentage}%
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-dark-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent-blue"
                    style={{ width: `${asset.percentage}%` }}
                  />
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {asset.value}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
