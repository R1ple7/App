'use client'

import { Card } from '@/components/ui/Card'
import { BookOpen } from 'lucide-react'

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Documentation</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Learn about Whale Loans
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card hover className="group">
          <div className="flex gap-3">
            <BookOpen className="w-6 h-6 text-accent-blue group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="font-bold">Getting Started</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Learn the basics of staking and bonding
              </p>
            </div>
          </div>
        </Card>
        <Card hover className="group">
          <div className="flex gap-3">
            <BookOpen className="w-6 h-6 text-accent-blue group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="font-bold">Smart Contracts</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Understand how our contracts work
              </p>
            </div>
          </div>
        </Card>
        <Card hover className="group">
          <div className="flex gap-3">
            <BookOpen className="w-6 h-6 text-accent-blue group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="font-bold">Security</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Learn about our security measures
              </p>
            </div>
          </div>
        </Card>
        <Card hover className="group">
          <div className="flex gap-3">
            <BookOpen className="w-6 h-6 text-accent-blue group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="font-bold">FAQ</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Frequently asked questions
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
