export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type StackItem = {
  title: string;
  description: string;
  icon: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  tags: string[];
};

export type Education = {
  period: string;
  degree: string;
  school: string;
};

export type AwardTone = 'gold' | 'silver' | 'blue';

export type AwardItem = {
  icon: string;
  tag: string;
  tone: AwardTone;
  color: string;
  title: string;
  description: string;
  date: string;
  kind: string;
  sub: string;
  badge: string;
  certificateImage?: string;
};

export type ContactField = {
  icon: string;
  label: string;
  value: string;
};

export type InventionStoryBlock = {
  title: string;
  body: string;
};

export type SocialLink = {
  label: string;
  href: string;
};
