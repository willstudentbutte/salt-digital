import { ReactNode } from 'react'
import clsx from 'clsx'

interface SectionHeadingProps {
  children: ReactNode
  level?: 'h1' | 'h2' | 'h3'
  accent?: boolean
  className?: string
}

export function SectionHeading({ 
  children, 
  level = 'h2', 
  accent = false, 
  className 
}: SectionHeadingProps) {
  const Component = level
  
  const baseClasses = 'font-bold text-secondary'
  const levelClasses = {
    h1: 'text-5xl lg:text-6xl leading-tight',
    h2: 'text-4xl lg:text-5xl leading-tight',
    h3: 'text-2xl lg:text-3xl leading-tight',
  }

  return (
    <div className={clsx('relative', className)}>
      <Component className={clsx(baseClasses, levelClasses[level])}>
        {children}
      </Component>
      {accent && (
        <div 
          className="absolute -bottom-2 left-0 h-1 w-20 bg-gradient-to-r from-accent to-primary animate-shimmer"
          style={{
            backgroundSize: '200% 100%',
            backgroundImage: 'linear-gradient(90deg, #34D399, #005FCE, #34D399)',
          }}
        />
      )}
    </div>
  )
} 