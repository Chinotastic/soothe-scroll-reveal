import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ScrollSectionProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  className?: string
}

export default function ScrollSection({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '' 
}: ScrollSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const directionOffset = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directionOffset[direction]
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        x: 0 
      } : {}}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}