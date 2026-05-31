import type { StackItem } from '../../types/portfolio';
import { SectionLabel } from '../atoms/SectionLabel';
import { StackCard } from '../molecules/StackCard';

type StackSectionProps = {
  items: StackItem[];
};

export function StackSection({ items }: StackSectionProps) {
  return (
    <section className="mx-auto max-w-container px-6 py-24 md:px-12 md:py-32" id="stack">
      <div className="mb-12" data-reveal>
        <SectionLabel>The Stack</SectionLabel>
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">Tools I work with daily</h2>
      </div>
      <div className="grid overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <StackCard index={index} item={item} key={item.title} />
        ))}
      </div>
    </section>
  );
}
