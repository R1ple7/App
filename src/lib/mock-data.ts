export interface StakeDataType {
  apy: number
  totalDeposited: string
  currentIndex: string
  yourBalance: string
  yourStaked: string
  nextRewardAmount: string
  nextRewardYield: string
  roi5Day: string
  rebaseCountdown: number
}

export function getMockStakeData(): StakeDataType {
  return {
    apy: 257.9,
    totalDeposited: '$571,320',
    currentIndex: '1.99 HUMP',
    yourBalance: '1000 HUMP',
    yourStaked: '500 HUMP',
    nextRewardAmount: '0.25 HUMP',
    nextRewardYield: '3.75%',
    roi5Day: '5.378%',
    rebaseCountdown: 43200, // 12 hours
  }
}

export interface BondDataType {
  id: string
  token: string
  price: string
  roi: string
  purchased: string
  duration: string
}

export function getMockBondData(): BondDataType[] {
  return [
    {
      id: '1',
      token: 'BUSD',
      price: '$11.68',
      roi: '-78.09%',
      purchased: '$82,783',
      duration: '14 days',
    },
    {
      id: '2',
      token: 'BUSD',
      price: '$11.68',
      roi: '-78.09%',
      purchased: '$82,783',
      duration: '14 days',
    },
    {
      id: '3',
      token: 'BUSD',
      price: '$11.68',
      roi: '-78.09%',
      purchased: '$82,783',
      duration: '14 days',
    },
    {
      id: '4',
      token: 'BUSD',
      price: '$11.68',
      roi: '-78.09%',
      purchased: '$82,783',
      duration: '14 days',
    },
  ]
}

export interface DashboardMetrics {
  portfolioValue: string
  stakedPercentage: number
  bondedPercentage: number
  treasuryAssets: Array<{ name: string; value: string; percentage: number }>
}

export function getMockDashboardMetrics(): DashboardMetrics {
  return {
    portfolioValue: '$2,450,000',
    stakedPercentage: 65,
    bondedPercentage: 35,
    treasuryAssets: [
      { name: 'ETH', value: '$1,200,000', percentage: 45 },
      { name: 'BUSD', value: '$650,000', percentage: 25 },
      { name: 'DAI', value: '$600,000', percentage: 30 },
    ],
  }
}
