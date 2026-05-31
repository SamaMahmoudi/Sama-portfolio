import { Icon } from '../atoms/Icon';

type ContactDetailProps = {
  icon: string;
  label: string;
  value: string;
};

export function ContactDetail({ icon, label, value }: ContactDetailProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-bg text-accent">
        <Icon name={icon} className="text-[20px]" />
      </div>
      <div>
        <p className="label-caps text-ink-soft/70">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}
