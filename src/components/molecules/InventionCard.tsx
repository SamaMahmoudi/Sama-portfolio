import type { AwardItem } from '../../types/portfolio';
import { motion, useReducedMotion } from 'motion/react';
import { Icon } from '../atoms/Icon';

const toneClasses = {
  gold: ['text-amber-500', 'bg-amber-50 text-amber-600'],
  silver: ['text-slate-400', 'bg-slate-100 text-slate-500'],
  blue: ['text-accent', 'bg-primary/10 text-accent'],
} as const;

type InventionCardProps = {
  item: AwardItem;
  index: number;
};

export function InventionCard({ item, index }: InventionCardProps) {
  const reduceMotion = useReducedMotion();
  const [iconClass, badgeClass] = toneClasses[item.tone];

  return (
    <motion.article
      className="inv-card card flex flex-col rounded-2xl p-7 text-left"
      data-reveal
      data-delay={index * 90}
      transition={{ type: 'spring', stiffness: 560, damping: 32, mass: 0.65 }}
      whileHover={reduceMotion ? undefined : { y: -3, scale: 1.006 }}
    >
      <div className="mb-5 flex items-start justify-between">
        <Icon name={item.icon} className={`text-3xl ${iconClass}`} />
        <span className={`label-caps rounded-full px-3 py-1.5 ${badgeClass}`}>{item.tag}</span>
      </div>
      <h3 className="font-display mb-2 text-lg font-bold">{item.title}</h3>
      <p className="text-[15px] leading-relaxed text-ink-soft">{item.description}</p>
      <div className="label-caps mt-auto pt-5 text-ink-soft/60">{item.date}</div>
    </motion.article>
  );
}
