export function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export function formatAddress(address: string | undefined) {
  if (!address) return ''
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export function formatCurrency(value: number | string) {
  const num = typeof value === 'string' ? parseFloat(value) : value
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(num)
}

export function formatPercentage(value: number) {
  return `${value.toFixed(2)}%`
}

export function validateAmount(amount: string, max: string) {
  const numAmount = parseFloat(amount)
  const numMax = parseFloat(max)

  if (isNaN(numAmount) || numAmount <= 0) {
    return 'Amount must be greater than 0'
  }

  if (numAmount > numMax) {
    return 'Amount exceeds balance'
  }

  return null
}
