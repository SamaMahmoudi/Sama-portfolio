import { useCallback, useEffect, useRef, useState } from 'react';

export function useDocumentGallery(count: number) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const setTrackRef = useCallback((node: HTMLDivElement | null) => {
    trackRef.current = node;
  }, []);

  const goTo = useCallback((index: number) => {
    const nextIndex = Math.max(0, Math.min(count - 1, index));
    const track = trackRef.current;
    setActiveIndex(nextIndex);
    track?.scrollTo({ left: nextIndex * track.clientWidth, behavior: 'smooth' });
  }, [count]);

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const previous = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const width = track.clientWidth || 1;
        setActiveIndex(Math.max(0, Math.min(count - 1, Math.round(track.scrollLeft / width))));
      });
    };

    track.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener('scroll', handleScroll);
    };
  }, [count]);

  return { activeIndex, goTo, next, previous, setTrackRef };
}
