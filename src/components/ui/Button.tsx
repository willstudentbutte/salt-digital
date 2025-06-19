import { ButtonHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseClasses =
      'inline-flex items-center justify-center rounded font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

    const variants = {
      primary:
        'bg-gradient-to-r from-primary to-primary-alt text-white shadow hover:shadow-lg',
      secondary:
        'bg-surface text-secondary border border-gray-200 hover:bg-gray-50',
      tertiary: 'text-primary hover:text-primary-alt underline-offset-4 hover:underline',
    }

    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-11 px-8 py-2',
      lg: 'h-12 px-12 py-3 text-lg',
    }

    return (
      <motion.button
        ref={ref}
        className={clsx(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
        {...(props as any)}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button' 