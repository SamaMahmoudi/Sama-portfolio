type MarqueeProps = {
  items: string[];
};

export function Marquee({ items }: MarqueeProps) {
  const content = items.join(' · ') + ' ·';

  return (
    <div className="mt-[50px] overflow-hidden border-y border-line bg-white/50 py-5 md:mt-0">
      <div className="marquee font-display text-xl font-bold text-ink-soft/55 md:text-2xl">
        <span className="px-2">{content}</span>
        <span className="px-2">{content}</span>
      </div>
    </div>
  );
}
