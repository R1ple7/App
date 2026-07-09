// Smart contract addresses & ABIs

export const CONTRACTS = {
  HUMP_TOKEN: process.env.NEXT_PUBLIC_HUMP_TOKEN_ADDRESS || '',
  STAKING: process.env.NEXT_PUBLIC_STAKING_CONTRACT || '',
  BOND: process.env.NEXT_PUBLIC_BOND_CONTRACT || '',
}

// Simplified ABIs (placeholder)
export const STAKING_ABI = [
  {
    name: 'stake',
    inputs: [{ name: 'amount', type: 'uint256' }],
    outputs: [],
  },
  {
    name: 'unstake',
    inputs: [{ name: 'amount', type: 'uint256' }],
    outputs: [],
  },
] as const

export const BOND_ABI = [
  {
    name: 'bond',
    inputs: [{ name: 'amount', type: 'uint256' }],
    outputs: [],
  },
] as const
