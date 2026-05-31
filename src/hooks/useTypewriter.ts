import { useEffect, useState } from 'react';

export function useTypewriter(phrases: string[]) {
  const [text, setText] = useState('');

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout = 0;

    const tick = () => {
      const phrase = phrases[phraseIndex] ?? '';
      setText(phrase.slice(0, charIndex));

      if (!deleting) {
        if (charIndex < phrase.length) {
          charIndex += 1;
          timeout = window.setTimeout(tick, 85);
          return;
        }
        deleting = true;
        timeout = window.setTimeout(tick, 1500);
        return;
      }

      if (charIndex > 0) {
        charIndex -= 1;
        timeout = window.setTimeout(tick, 40);
        return;
      }

      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      timeout = window.setTimeout(tick, 320);
    };

    tick();

    return () => window.clearTimeout(timeout);
  }, [phrases]);

  return text;
}
