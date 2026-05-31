import { useEffect } from 'react';

export function useRevealOnScroll() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          element.style.transitionDelay = `${element.dataset.delay ?? 0}ms`;
          element.classList.add('in');
          observer.unobserve(element);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}
