import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import React, { useRef, ReactNode } from 'react'

interface ScrollSectionProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'
  delay?: number
  className?: string
  parallax?: boolean
  stagger?: boolean
}

export default function ScrollSection({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '',
  parallax = false,
  stagger = false
}: ScrollSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-120px",
    amount: 0.3
  })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [50, -50])
  const parallaxScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1])

  const directionVariants = {
    up: {
      initial: { opacity: 0, y: 80, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 }
    },
    down: {
      initial: { opacity: 0, y: -80, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 }
    },
    left: {
      initial: { opacity: 0, x: 80, scale: 0.95 },
      animate: { opacity: 1, x: 0, scale: 1 }
    },
    right: {
      initial: { opacity: 0, x: -80, scale: 0.95 },
      animate: { opacity: 1, x: 0, scale: 1 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 }
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    }
  }

  const transition = {
    duration: 1.2,
    delay: delay,
    ease: [0.22, 1, 0.36, 1] as const, // Premium easing curve
  }

  const staggerTransition = {
    ...transition,
    staggerChildren: 0.1,
    delayChildren: delay
  }

  return (
    <motion.div
      ref={ref}
      initial={directionVariants[direction].initial}
      animate={isInView ? directionVariants[direction].animate : directionVariants[direction].initial}
      transition={stagger ? staggerTransition : transition}
      style={parallax ? { 
        y: parallaxY,
        scale: parallaxScale
      } : {}}
      className={className}
    >
      {stagger ? (
        React.Children.map(children, (child, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.8,
              delay: delay + (index * 0.15),
              ease: [0.22, 1, 0.36, 1] as const
            }}
          >
            {child}
          </motion.div>
        ))
      ) : (
        children
      )}
    </motion.div>
  )
}