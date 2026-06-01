import type { SocialLink } from '../../types/portfolio';

type FooterProps = {
  links: SocialLink[];
};

export function Footer({ links }: FooterProps) {
  return (
    <footer className="border-t border-line py-14">
      <div className="mx-auto flex max-w-container flex-col items-center justify-between gap-5 px-6 text-center md:flex-row md:px-12 md:text-left">
        <div>
          <span className="font-display text-2xl font-extrabold tracking-tight">SAMA</span>
          <p className="mt-1 text-sm text-ink-soft">© 2024 Maryam Mahmoudi · Frontend Developer</p>
        </div>
        <div className="flex gap-7 text-sm">
          {links.map((link) => {
            const isExternal = link.href.startsWith('http');
            const isCvLink = link.label.toLowerCase() === 'cv' || link.href.toLowerCase().endsWith('.pdf');

            return (
              <a
                className="nav-link"
                download={isCvLink ? 'Maryam-Mahmoudi-CV.pdf' : undefined}
                href={link.href}
                key={link.label}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                target={isExternal ? '_blank' : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
