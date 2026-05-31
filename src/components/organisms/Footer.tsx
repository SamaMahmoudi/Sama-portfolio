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
          {links.map((link) => (
            <a className="nav-link" href={link.href} key={link.label} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined} target={link.href.startsWith('http') ? '_blank' : undefined}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
