'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Tabs } from '@/components/ui/Tabs'
import { useStakeData } from '@/hooks/useStakeData'
import { useCountdown } from '@/hooks/useCountdown'
import { useWallet } from '@/hooks/useWallet'
import { validateAmount } from '@/lib/utils'
import { toast } from 'sonner'

export default function StakePage() {
  const { data: stakeData, loading } = useStakeData()
  const { display: countdownDisplay } = useCountdown(43200)
  const { balance, isConnected } = useWallet()
  const [amount, setAmount] = useState('')
  const [amountError, setAmountError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (loading || !stakeData) return <div className="p-6">Loading...</div>

  const handleStake = async () => {
    const error = validateAmount(amount, stakeData.yourBalance)
    if (error) {
      setAmountError(error)
      return
    }

    if (!isConnected) {
      toast.error('Please connect wallet first')
      return
    }

    setIsSubmitting(true)
    try {
      // Simulate contract call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success(`Successfully staked ${amount} HUMP`)
      setAmount('')
      setAmountError('')
    } catch (err) {
      toast.error('Staking failed')
    } finally {
      setIsSubmitting(false)
    }
  }

  const tabContent = [
    {
      label: 'Stake',
      value: 'stake',
      content: (
        <div className="space-y-4">
          <Input
            label="Amount"
            placeholder="Enter amount"
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value)
              setAmountError('')
            }}
            error={amountError}
            rightElement={
              <button
                onClick={() => setAmount(stakeData.yourBalance)}
                className="text-xs font-semibold text-accent-blue hover:text-blue-600"
              >
                MAX
              </button>
            }
          />
          <Button
            size="lg"
            onClick={handleStake}
            loading={isSubmitting}
            disabled={!isConnected}
          >
            {isConnected ? 'Stake HUMP' : 'Connect Wallet'}
          </Button>
        </div>
      ),
    },
    {
      label: 'Unstake',
      value: 'unstake',
      content: (
        <div className="space-y-4">
          <Input
            label="Amount"
            placeholder="Enter amount to unstake"
            type="number"
          />
          <Button size="lg" onClick={() => toast.success('Unstaked successfully')}>
            Unstake HUMP
          </Button>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Single Stake (3,3)</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Rebase in {countdownDisplay}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stake Form */}
        <div className="lg:col-span-2">
          <Card>
            <Tabs tabs={tabContent} />
          </Card>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card>
              <div className="space-y-1">
                <p className="text-xs text-gray-600 dark:text-gray-400">Your Balance</p>
                <p className="text-lg font-bold">{stakeData.yourBalance}</p>
              </div>
            </Card>
            <Card>
              <div className="space-y-1">
                <p className="text-xs text-gray-600 dark:text-gray-400">Your Staked Balance</p>
                <p className="text-lg font-bold">{stakeData.yourStaked}</p>
              </div>
            </Card>
            <Card>
              <div className="space-y-1">
                <p className="text-xs text-gray-600 dark:text-gray-400">Next Reward Amount</p>
                <p className="text-lg font-bold">{stakeData.nextRewardAmount}</p>
              </div>
            </Card>
            <Card>
              <div className="space-y-1">
                <p className="text-xs text-gray-600 dark:text-gray-400">Next Reward Yield</p>
                <p className="text-lg font-bold">{stakeData.nextRewardYield}</p>
              </div>
            </Card>
            <Card>
              <div className="space-y-1">
                <p className="text-xs text-gray-600 dark:text-gray-400">ROI (5 Day Rate)</p>
                <p className="text-lg font-bold text-accent-green">{stakeData.roi5Day}</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Panel Stats */}
        <div>
          <Card className="bg-dark-card text-white">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-400 mb-1">APY</p>
                <p className="text-4xl font-bold text-accent-blue">
                  {stakeData.apy}%
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Total Value Deposited</p>
                <p className="text-2xl font-bold">{stakeData.totalDeposited}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Current Index</p>
                <p className="text-lg font-bold">{stakeData.currentIndex}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Your Earnings / Day</p>
                <p className="text-xl font-bold text-accent-green mt-1">$0.00</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
