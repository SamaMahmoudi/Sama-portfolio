import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function MotionSection({ children, className = '', id }: MotionSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={className}
      id={id}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 42, scale: 0.985 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.18, margin: '0px 0px -80px 0px' }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
    >
      {children}
    </motion.section>
  );
}
