import type { ReactNode } from 'react';
import { motion, useReducedMotion, type HTMLMotionProps } from 'motion/react';

type ButtonLinkProps = HTMLMotionProps<'a'> & {
  children: ReactNode;
  variant?: 'primary' | 'ghost';
};

export function ButtonLink({ children, className = '', variant = 'primary', ...props }: ButtonLinkProps) {
  const reduceMotion = useReducedMotion();
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-ghost';

  return (
    <motion.a
      className={`${variantClass} label-caps rounded-full px-7 py-3.5 ${className}`}
      data-magnet
      transition={{ type: 'spring', stiffness: 420, damping: 24 }}
      whileHover={reduceMotion ? undefined : { y: -3, scale: 1.025 }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.a>
  );
}
