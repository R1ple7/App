'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'
import { Input } from '@/components/ui/Input'
import { Table } from '@/components/ui/Table'
import { useBondData } from '@/hooks/useBondData'
import { toast } from 'sonner'
import { AlertCircle } from 'lucide-react'

export default function BondPage() {
  const { data: bondData, loading } = useBondData()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [bondAmount, setBondAmount] = useState('')
  const [selectedBond, setSelectedBond] = useState<any>(null)

  if (loading) return <div className="p-6">Loading...</div>

  const handleBond = (bond: any) => {
    setSelectedBond(bond)
    setIsModalOpen(true)
  }

  const handleBondSubmit = () => {
    if (!bondAmount) {
      toast.error('Please enter an amount')
      return
    }
    toast.success(`Bonded ${bondAmount} successfully!`)
    setIsModalOpen(false)
    setBondAmount('')
  }

  const columns = [
    { key: 'token', label: 'Token' },
    { key: 'price', label: 'Price' },
    { key: 'roi', label: 'ROI' },
    { key: 'purchased', label: 'Purchased' },
    { key: 'duration', label: 'Duration' },
    { key: 'action', label: 'Action' },
  ]

  const tableData = bondData.map((bond) => ({
    token: bond.token,
    price: bond.price,
    roi: bond.roi,
    purchased: bond.purchased,
    duration: bond.duration,
    action: (
      <Button
        size="sm"
        onClick={() => handleBond(bond)}
        className="whitespace-nowrap"
      >
        Bond
      </Button>
    ),
  }))

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Bond (4,4)</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Manage your bonds
        </p>
      </div>

      {/* Treasury Balance */}
      <Card>
        <div className="space-y-2">
          <p className="text-sm text-gray-600 dark:text-gray-400">Treasury Balance</p>
          <h2 className="text-3xl font-bold">$328,928</h2>
        </div>
      </Card>

      {/* Bonds Table */}
      <Card>
        <Table columns={columns} data={tableData} />
      </Card>

      {/* Important Info */}
      <Card className="border-accent-yellow/50 bg-accent-yellow/5 dark:bg-accent-yellow/5">
        <div className="flex gap-3">
          <AlertCircle className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold mb-1">Important</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              New bonds are auto-staked and vesting is linear. Please verify vesting schedule before bonding.
            </p>
          </div>
        </div>
      </Card>

      {/* Bond Modal */}
      <Modal
        isOpen={isModalOpen}
        title={`Bond ${selectedBond?.token}`}
        onClose={() => {
          setIsModalOpen(false)
          setBondAmount('')
        }}
        size="md"
      >
        <div className="space-y-4">
          <Input
            label="Amount"
            placeholder="Enter amount"
            type="number"
            value={bondAmount}
            onChange={(e) => setBondAmount(e.target.value)}
          />
          <div className="bg-gray-100 dark:bg-dark-border p-3 rounded-lg space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Vesting Period</span>
              <span className="font-semibold">14 days</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Slippage</span>
              <span className="font-semibold">0.5%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">You will receive</span>
              <span className="font-semibold text-accent-green">~{bondAmount || '0'} HUMP</span>
            </div>
          </div>
          <Button size="lg" onClick={handleBondSubmit}>
            Confirm Bond
          </Button>
        </div>
      </Modal>
    </div>
  )
}
