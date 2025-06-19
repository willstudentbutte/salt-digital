import { ReactNode } from 'react'
import clsx from 'clsx'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={clsx('mx-auto max-w-7xl px-6 lg:px-8', className)}>
      {children}
    </div>
  )
} 