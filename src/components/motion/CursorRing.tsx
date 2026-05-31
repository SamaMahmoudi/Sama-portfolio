import { useEffect, useRef } from 'react';

export function CursorRing() {
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring || !window.matchMedia('(pointer:fine)').matches) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let frame = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mx = event.clientX;
      my = event.clientY;
    };

    const hoverTargets = Array.from(document.querySelectorAll('a, button, input, textarea, .card'));
    const handleEnter = () => ring.classList.add('hover');
    const handleLeave = () => ring.classList.remove('hover');

    const loop = () => {
      rx += (mx - rx) * 0.2;
      ry += (my - ry) * 0.2;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(loop);
    };

    hoverTargets.forEach((target) => {
      target.addEventListener('mouseenter', handleEnter);
      target.addEventListener('mouseleave', handleLeave);
    });
    window.addEventListener('mousemove', handleMouseMove);
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', handleMouseMove);
      hoverTargets.forEach((target) => {
        target.removeEventListener('mouseenter', handleEnter);
        target.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return <div className="cursor-ring" ref={ringRef} />;
}
