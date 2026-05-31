import type { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className = '' }: BadgeProps) {
  return <span className={`label-caps rounded-full px-3 py-1.5 ${className}`}>{children}</span>;
}
