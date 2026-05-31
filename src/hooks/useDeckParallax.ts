import { useCallback, useEffect, useRef } from 'react';

export function useDeckParallax() {
  const deckRef = useRef<HTMLDivElement | null>(null);

  const setDeckRef = useCallback((node: HTMLDivElement | null) => {
    deckRef.current = node;
  }, []);

  useEffect(() => {
    const deck = deckRef.current;
    if (!deck || !window.matchMedia('(pointer:fine)').matches) return;

    const stage = deck.closest('.stage');
    if (!stage) return;

    const handleMouseMove = (event: Event) => {
      const mouseEvent = event as MouseEvent;
      const rect = stage.getBoundingClientRect();
      const px = (mouseEvent.clientX - rect.left) / rect.width - 0.5;
      const py = (mouseEvent.clientY - rect.top) / rect.height - 0.5;
      deck.style.transform = `rotateY(${px * 14}deg) rotateX(${-py * 12}deg)`;
    };

    const handleMouseLeave = () => {
      deck.style.transform = '';
    };

    stage.addEventListener('mousemove', handleMouseMove);
    stage.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      stage.removeEventListener('mousemove', handleMouseMove);
      stage.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return setDeckRef;
}
