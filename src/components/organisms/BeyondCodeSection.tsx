import type { AwardItem } from '../../types/portfolio';
import { motion, useReducedMotion } from 'motion/react';
import { Icon } from '../atoms/Icon';
import { SectionLabel } from '../atoms/SectionLabel';
import { InventionCard } from '../molecules/InventionCard';

type BeyondCodeSectionProps = {
  activeIndex: number;
  items: AwardItem[];
  onNext: () => void;
  onPrevious: () => void;
  onSelect: (index: number) => void;
  trackRef: (node: HTMLDivElement | null) => void;
};

export function BeyondCodeSection({ activeIndex, items, onNext, onPrevious, onSelect, trackRef }: BeyondCodeSectionProps) {
  const reduceMotion = useReducedMotion();
  const galleryItems = items.filter((item) => Boolean(item.certificateImage));
  const activeItem = (galleryItems[activeIndex] ?? galleryItems[0])!;

  return (
    <section className="mx-auto max-w-container px-6 py-24 md:px-12 md:py-32" id="beyond">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4" data-reveal>
        <div>
          <SectionLabel>Beyond Code</SectionLabel>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">Inventions & recognition</h2>
        </div>
        <p className="max-w-sm text-ink-soft">The maker side of my work. Browse the documents below, pick a card or page through, and the matching certificate follows along.</p>
      </div>
      <div className="relative" id="inv-wrap">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div className="relative" key={item.title}>
              <InventionCard index={index} item={item} />
              {activeIndex === index ? (
                <motion.div
                  aria-hidden="true"
                  className="inv-focus-frame"
                  layoutId="invention-focus-frame"
                  style={{ '--hl': activeItem.color } as React.CSSProperties}
                  transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 520, damping: 38, mass: 0.65 }}
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <div className="ig" data-delay="120" data-reveal>
        <button aria-label="Previous document" className="ig-nav ig-prev" onClick={onPrevious} type="button">
          <Icon name="chevron_left" />
        </button>
        <div className="ig-track" ref={trackRef}>
          {galleryItems.map((item) => (
            <div className="ig-slide" key={item.title}>
              <div className="doc">
                <Certificate item={item} />
              </div>
            </div>
          ))}
        </div>
        <button aria-label="Next document" className="ig-nav ig-next" onClick={onNext} type="button">
          <Icon name="chevron_right" />
        </button>
        <p className="ig-cap" style={{ color: activeItem.color }}>
          {activeItem.title}
        </p>
        <div className="ig-dots">
          {galleryItems.map((item, index) => (
            <button
              aria-label={`Document ${index + 1}`}
              aria-current={activeIndex === index ? 'true' : undefined}
              className={`ig-dot ${activeIndex === index ? 'active' : ''}`}
              key={item.title}
              onClick={() => onSelect(index)}
              style={{ '--hl': activeItem.color } as React.CSSProperties}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Certificate({ item }: { item: AwardItem }) {
  if (item.certificateImage) {
    return <img alt={`${item.title} certificate`} loading="lazy" src={item.certificateImage} />;
  }

  return (
    <svg aria-labelledby={`certificate-${item.badge.toLowerCase()}-${item.title.replace(/\s+/g, '-').toLowerCase()}`} fontFamily="Fredoka, sans-serif" role="img" viewBox="0 0 820 580" xmlns="http://www.w3.org/2000/svg">
      <title id={`certificate-${item.badge.toLowerCase()}-${item.title.replace(/\s+/g, '-').toLowerCase()}`}>{item.title} certificate</title>
      <rect fill="#ffffff" height="580" width="820" />
      <rect fill="none" height="536" stroke={item.color} strokeWidth="2" width="776" x="22" y="22" />
      <rect fill="none" height="512" stroke={item.color} strokeOpacity=".35" width="752" x="34" y="34" />
      <text fill="#5a6570" fontSize="14" letterSpacing="6" textAnchor="middle" x="410" y="108">{`CERTIFICATE OF ${item.kind.toUpperCase()}`}</text>
      <line stroke={item.color} strokeWidth="2" x1="345" x2="475" y1="128" y2="128" />
      <text fill="#101418" fontFamily="Fredoka, sans-serif" fontSize="40" fontWeight="800" textAnchor="middle" x="410" y="200">{item.title}</text>
      <text fill="#5a6570" fontSize="16" textAnchor="middle" x="410" y="252">Awarded to</text>
      <text fill={item.color} fontFamily="Fredoka, sans-serif" fontSize="32" fontWeight="700" textAnchor="middle" x="410" y="300">Maryam Mahmoudi</text>
      <text fill="#5a6570" fontSize="14" textAnchor="middle" x="410" y="344">{item.sub}</text>
      <circle cx="410" cy="424" fill="none" r="42" stroke={item.color} strokeWidth="2" />
      <circle cx="410" cy="424" fill={item.color} fillOpacity=".12" r="32" />
      <text fill={item.color} fontSize="13" fontWeight="700" letterSpacing="1" textAnchor="middle" x="410" y="430">{item.badge}</text>
      <line stroke="#c9d0d8" x1="130" x2="310" y1="500" y2="500" />
      <text fill="#9aa5b1" fontSize="12" textAnchor="middle" x="220" y="522">{item.date}</text>
      <line stroke="#c9d0d8" x1="510" x2="690" y1="500" y2="500" />
      <text fill="#9aa5b1" fontSize="12" textAnchor="middle" x="600" y="522">Authorized Signature</text>
    </svg>
  );
}
