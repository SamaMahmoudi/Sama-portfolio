import type { InventionStoryBlock } from '../../types/portfolio';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';
import { SectionLabel } from '../atoms/SectionLabel';

type InventionsStorySectionProps = {
  blocks: InventionStoryBlock[];
};

export function InventionsStorySection({ blocks }: InventionsStorySectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 28, restDelta: 0.001 });
  const titleY = useTransform(smoothProgress, [0, 1], reduceMotion ? [0, 0] : [34, -34]);
  const firstCardX = useTransform(smoothProgress, [0, 1], reduceMotion ? [0, 0] : [-18, 18]);
  const firstCardY = useTransform(smoothProgress, [0, 1], reduceMotion ? [0, 0] : [24, -24]);
  const secondCardX = useTransform(smoothProgress, [0, 1], reduceMotion ? [0, 0] : [18, -18]);
  const secondCardY = useTransform(smoothProgress, [0, 1], reduceMotion ? [0, 0] : [12, -18]);
  const orbOneX = useTransform(smoothProgress, [0, 1], reduceMotion ? [0, 0] : [-42, 42]);
  const orbOneY = useTransform(smoothProgress, [0, 1], reduceMotion ? [0, 0] : [42, -42]);
  const orbTwoX = useTransform(smoothProgress, [0, 1], reduceMotion ? [0, 0] : [36, -36]);
  const orbTwoY = useTransform(smoothProgress, [0, 1], reduceMotion ? [0, 0] : [-28, 36]);

  return (
    <section className="inventions-story relative mx-auto max-w-container overflow-hidden px-6 py-20 md:px-12 md:py-28" id="inventions-story" ref={sectionRef}>
      <motion.div
        aria-hidden="true"
        className="inventions-orb inventions-orb-one"
        style={{ x: orbOneX, y: orbOneY }}
      />
      <motion.div
        aria-hidden="true"
        className="inventions-orb inventions-orb-two"
        style={{ x: orbTwoX, y: orbTwoY }}
      />
      <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
        <motion.div
          className="relative z-10 lg:col-span-4"
          data-reveal
          style={{ y: titleY }}
        >
          <SectionLabel>Inventions</SectionLabel>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Ideas I keep
            <br />
            building on
          </h2>
        </motion.div>
        <div className="relative z-10 grid gap-5 lg:col-span-8" data-delay="120" data-reveal>
          {blocks.map((block, index) => (
            <motion.article
              className="inventions-story-card card rounded-2xl p-7 md:p-8"
              key={block.title}
              style={{ x: index === 0 ? firstCardX : secondCardX, y: index === 0 ? firstCardY : secondCardY }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              whileHover={reduceMotion ? undefined : { scale: 1.015, y: -8 }}
            >
              <h3 className="font-display mb-3 text-2xl font-semibold text-ink">{block.title}</h3>
              <p className="text-lg leading-relaxed text-ink-soft">{block.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
