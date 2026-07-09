import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={cn(
        'font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2',
        // Variants
        variant === 'primary' &&
          'bg-accent-blue text-white hover:bg-blue-600 dark:hover:bg-blue-700',
        variant === 'secondary' &&
          'bg-gray-200 text-black hover:bg-gray-300 dark:bg-dark-border dark:text-white dark:hover:bg-dark-border/80',
        variant === 'outline' &&
          'border-2 border-gray-300 dark:border-dark-border text-black dark:text-white hover:bg-gray-50 dark:hover:bg-dark-card/50',
        // Sizes
        size === 'sm' && 'px-3 py-2 text-sm',
        size === 'md' && 'px-4 py-2.5 text-base',
        size === 'lg' && 'px-6 py-3 text-lg w-full',
        className
      )}
      {...props}
    >
      {loading && <span className="animate-spin">⏳</span>}
      {children}
    </button>
  )
}
