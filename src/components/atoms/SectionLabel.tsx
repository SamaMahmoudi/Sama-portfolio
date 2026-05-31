type SectionLabelProps = {
  children: string;
  className?: string;
};

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return <p className={`label-line label-caps mb-6 text-accent ${className}`}>{children}</p>;
}
