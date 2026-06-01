import { avatarUrl } from '../../content/portfolio';
import type { SocialLink } from '../../types/portfolio';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useState } from 'react';
import { ButtonLink } from '../atoms/ButtonLink';
import { Icon } from '../atoms/Icon';

type HeroSectionProps = {
  typewriterText: string;
  deckRef: (node: HTMLDivElement | null) => void;
  socialLinks: SocialLink[];
};

export function HeroSection({ typewriterText, deckRef, socialLinks }: HeroSectionProps) {
  const [showTechIcons, setShowTechIcons] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const nameY = useTransform(scrollYProgress, [0, 0.28], reduceMotion ? [0, 0] : [0, -52]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.24], [1, 0.72]);
  const visualY = useTransform(scrollYProgress, [0, 0.32], reduceMotion ? [0, 0] : [0, 72]);
  const visualRotate = useTransform(scrollYProgress, [0, 0.32], reduceMotion ? [0, 0] : [0, -4]);
  const iconsY = useTransform(scrollYProgress, [0, 0.32], reduceMotion ? [0, 0] : [0, 28]);
  const heroLinks = socialLinks
    .filter((link) => ['linkedin', 'github', 'readcv', 'cv'].includes(link.label.toLowerCase()))
    .map((link) => ({
      ...link,
      href: link.href === '#' ? '#contact' : link.href,
      label: link.label.toLowerCase() === 'readcv' ? 'CV' : link.label,
    }));

  return (
    <section className="mx-auto max-w-container px-5 pb-16 pt-32 sm:px-6 md:px-12 md:pb-20 md:pt-44" id="hero">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div>
          <p className="label-line label-caps mb-7 text-accent" data-reveal>
            Frontend Developer · Amstelveen
          </p>
          <motion.h1
            className="hero-name font-name text-[clamp(3.1rem,7.4vw,6.4rem)] font-semibold leading-[0.96] tracking-[-0.045em]"
            data-delay="60"
            data-reveal
            style={{ opacity: nameOpacity, y: nameY }}
          >
            <span className="hero-name-line">Maryam</span>
            <br />
            <span className="hero-name-line hero-name-line-delayed">Mahmoudi</span>
          </motion.h1>
            <p className="mt-7 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg" data-delay="140" data-reveal>
            Junior frontend developer working in React, Next.js & TypeScript. I care about precise UI, accessible markup, and code that's a pleasure to maintain.
          </p>
          <div className="mt-9 flex flex-wrap gap-4" data-delay="220" data-reveal>
            <ButtonLink href="#work">View My Work</ButtonLink>
            <ButtonLink href="#contact" variant="ghost">
              Get in Touch
            </ButtonLink>
          </div>
          <div className="mt-5 flex flex-wrap gap-3" data-delay="280" data-reveal>
            {heroLinks.map((link) => {
              const isCvLink = link.label.toLowerCase() === 'cv' || link.href.toLowerCase().endsWith('.pdf');

              return (
                <a
                  className="btn-ghost inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold"
                  download={isCvLink ? 'Maryam-Mahmoudi-CV.pdf' : undefined}
                  href={link.href}
                  key={link.label}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
        <motion.div
          className="stage flex h-[380px] items-center justify-center sm:h-[460px] md:h-[480px]"
          data-delay="120"
          data-reveal
          onHoverEnd={() => setShowTechIcons(false)}
          onHoverStart={() => setShowTechIcons(true)}
          style={{ rotate: visualRotate, y: visualY }}
        >
          <div className="float">
            <div className="deck h-[330px] w-[min(100%,340px)] sm:h-[400px] sm:w-[420px]" ref={deckRef}>
              <div className="avatar">
                <img alt="Maryam Mahmoudi" src={avatarUrl} />
              </div>
              <motion.div
                aria-hidden="true"
                animate={showTechIcons ? 'show' : 'hide'}
                className="tech-icons"
                initial="hide"
                style={{ y: iconsY }}
                variants={{
                  hide: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: reduceMotion
                      ? { duration: 0 }
                      : { delayChildren: 0.03, staggerChildren: 0.08 },
                  },
                }}
              >
                <motion.span className="tech-icon tech-icon-js" title="JavaScript" variants={{ hide: { opacity: 0, y: 16, scale: 0.8 }, show: { opacity: 1, y: 0, scale: 1 } }}>
                  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="#f7df1e" height="48" rx="8" width="48" />
                    <path d="M18.2 37.4c.9 1.5 2.1 2.6 4.3 2.6 1.8 0 3-1 3-2.4 0-1.7-1.3-2.3-3.5-3.2l-1.2-.5c-3.4-1.5-5.7-3.4-5.7-7.4 0-3.7 2.8-6.5 7.2-6.5 3.1 0 5.4 1.1 7 3.9l-3.8 2.5c-.8-1.5-1.7-2.1-3.2-2.1s-2.4.9-2.4 2.1c0 1.5.9 2.1 3 3l1.2.5c4 1.7 6.2 3.5 6.2 7.6 0 4.3-3.4 6.7-8 6.7-4.4 0-7.2-2.1-8.6-4.9z" fill="#111"/>
                  </svg>
                </motion.span>
                <motion.span className="tech-icon tech-icon-ts" title="TypeScript" variants={{ hide: { opacity: 0, y: 16, scale: 0.8 }, show: { opacity: 1, y: 0, scale: 1 } }}>
                  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="#3178c6" height="48" rx="8" width="48" />
                    <path d="M10 16h22v4h-8v18h-6V20h-8zm24.4 17.4c1.2 1.9 2.9 3 5.2 3 2.2 0 3.5-1.1 3.5-2.6 0-1.8-1.4-2.4-3.8-3.5l-1.3-.6c-3.6-1.5-6-3.4-6-7.3 0-3.6 2.7-6.4 7.1-6.4 3.1 0 5.3 1.1 6.9 3.9l-3.8 2.4c-.8-1.4-1.7-2-3.1-2-1.4 0-2.3.9-2.3 2 0 1.4.9 2 3.1 2.9l1.3.6c4.2 1.8 6.5 3.7 6.5 7.8 0 4.5-3.5 6.9-8.2 6.9-4.6 0-7.5-2.2-9-5z" fill="#fff"/>
                  </svg>
                </motion.span>
                <motion.span className="tech-icon tech-icon-react" title="React" variants={{ hide: { opacity: 0, y: 16, scale: 0.8 }, show: { opacity: 1, y: 0, scale: 1 } }}>
                  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" fill="#61dafb" r="4.4"/>
                    <g fill="none" stroke="#61dafb" strokeWidth="3">
                      <ellipse cx="32" cy="32" rx="23" ry="9.5"/>
                      <ellipse cx="32" cy="32" rx="23" ry="9.5" transform="rotate(60 32 32)"/>
                      <ellipse cx="32" cy="32" rx="23" ry="9.5" transform="rotate(120 32 32)"/>
                    </g>
                  </svg>
                </motion.span>
              </motion.div>
              <div className="panel editor">
                <div className="bar">
                  <span className="dot bg-[#ff5f57]" />
                  <span className="dot bg-[#febc2e]" />
                  <span className="dot bg-[#28c840]" />
                  <span className="ml-2 font-mono text-[11px] text-[#5b6b86]">Hero.tsx</span>
                </div>
                <div className="body">
                  <span className="ln"><span className="c-key">export function</span> <span className="c-fn">Hero</span>() {'{'}</span>
                  <span className="ln">  <span className="c-key">return</span> (</span>
                  <span className="ln">    <span className="c-mut">&lt;</span><span className="c-tag">section</span> <span className="c-attr">className</span>=<span className="c-str">&quot;hero&quot;</span><span className="c-mut">&gt;</span></span>
                  <span className="ln">      <span className="c-mut">&lt;</span><span className="c-tag">h1</span><span className="c-mut">&gt;</span><span className="c-txt">Hello, I&apos;m Maryam</span><span className="c-mut">&lt;/</span><span className="c-tag">h1</span><span className="c-mut">&gt;</span></span>
                  <span className="ln">      <span className="c-mut">&lt;</span><span className="c-tag">Button</span> <span className="c-attr">intent</span>=<span className="c-str">&quot;primary&quot;</span><span className="c-mut">&gt;</span></span>
                  <span className="ln">        <span className="c-txt">{typewriterText}</span><span className="caret" /></span>
                  <span className="ln">      <span className="c-mut">&lt;/</span><span className="c-tag">Button</span><span className="c-mut">&gt;</span></span>
                  <span className="ln">    <span className="c-mut">&lt;/</span><span className="c-tag">section</span><span className="c-mut">&gt;</span></span>
                  <span className="ln">  )</span>
                  <span className="ln">{'}'}</span>
                </div>
              </div>
              <div className="panel preview">
                <div className="url">
                  <Icon name="lock" className="text-[16px] text-[#9aa5b1]" />
                  <span className="bubble" />
                </div>
                <div className="content">
                  <p className="label-caps mb-3 text-accent [font-size:10px]">Live Preview</p>
                  <h3 className="font-display mb-3 text-xl font-bold leading-tight">Hello, I&apos;m&nbsp;Maryam</h3>
                  <button className="btn-primary rounded-full px-4 py-2 text-[13px] font-semibold" type="button">
                    View My Work
                  </button>
                  <div className="mt-4 flex gap-1.5">
                    <span className="h-1.5 w-8 rounded-full bg-primary" />
                    <span className="h-1.5 w-3 rounded-full bg-line" />
                    <span className="h-1.5 w-3 rounded-full bg-line" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
