import type { StackItem } from '../../types/portfolio';
import { motion, useReducedMotion } from 'motion/react';
import { Icon } from '../atoms/Icon';

type StackCardProps = {
  item: StackItem;
  index: number;
};

export function StackCard({ item, index }: StackCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="group bg-surface p-8 transition-colors hover:bg-bg"
      data-reveal
      data-delay={index * 110}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      whileHover={reduceMotion ? undefined : { y: -8, scale: 1.015 }}
    >
      <Icon name={item.icon} className="mb-5 block text-3xl text-accent" />
      <h3 className="font-display mb-2 text-lg font-bold">{item.title}</h3>
      <p className="text-[15px] leading-relaxed text-ink-soft">{item.description}</p>
    </motion.div>
  );
}
