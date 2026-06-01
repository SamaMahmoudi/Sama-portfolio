import type { AwardItem, ContactField, Education, Experience, InventionStoryBlock, NavItem, SocialLink, StackItem } from '../types/portfolio';

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Work', href: '#work' },
  { label: 'Beyond Code', href: '#beyond' },
  { label: 'Contact', href: '#contact' },
];

export const marqueeItems = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Playwright', 'Accessibility', 'Responsive UI', 'Clean Code'];

export const stackItems: StackItem[] = [
  { title: 'React', description: 'Component architecture, hooks, state management.', icon: 'code' },
  { title: 'Next.js', description: 'Routing, SSR/SSG and performance-first builds.', icon: 'bolt' },
  { title: 'TypeScript', description: 'Type-safe, self-documenting codebases.', icon: 'data_object' },
  { title: 'Tailwind CSS', description: 'Design-system-driven, responsive styling.', icon: 'palette' },
  { title: 'Playwright', description: 'End-to-end testing & reliable QA.', icon: 'verified' },
  { title: 'Git & Teamwork', description: 'Agile collaboration and clean version control.', icon: 'group' },
];

export const experience: Experience = {
  role: 'Intern / Junior Frontend Developer',
  company: 'NEOM & Partners Group',
  period: 'Nov 2024 to Present',
  highlights: [
    'Building high-performance B2B gift card and eSIM platforms.',
    'Working in a modern stack: React, Next.js, Tailwind CSS and TypeScript.',
    'Ensuring stability with rigorous end-to-end testing in Playwright.',
    'Collaborating in an agile team to ship seamless user experiences.',
  ],
  tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Playwright'],
};

export const education: Education[] = [
  { period: '2023 to Present', degree: 'M. of Marketing in Tourism, unfinished', school: 'University of Tehran' },
  { period: '2019 to 2023', degree: 'B. of Tourism Management', school: 'University of Shiraz' },
];

export const awards: AwardItem[] = [
  {
    icon: 'workspace_premium',
    tag: 'Gold Award',
    tone: 'gold',
    color: '#c8920a',
    title: 'Educational-Therapeutic Vest',
    description: 'Medical device for sensory therapy and cognitive development.',
    date: 'Geneva, 2022',
    kind: 'Achievement',
    sub: 'Gold Award · Geneva Int. Exhibition of Inventions',
    badge: 'GOLD',
    certificateImage: '/images/certificates/gold-medal-vest.jpg',
  },
  {
    icon: 'military_tech',
    tag: 'Silver Award',
    tone: 'silver',
    color: '#7c8694',
    title: 'Multi-layer Sleeping Bag',
    description: 'Awarded at Geneva for innovative textile engineering.',
    date: 'Geneva, 2021',
    kind: 'Achievement',
    sub: 'Silver Award · Geneva Int. Exhibition of Inventions',
    badge: 'SILVER',
    certificateImage: '/images/certificates/multi-layer-sleeping-bag-medal.jpg',
  },
  {
    icon: 'solar_power',
    tag: 'Silver Award',
    tone: 'silver',
    color: '#7c8694',
    title: 'Solar Baby Carrier Bag',
    description: 'Renewable energy in everyday mobility products.',
    date: 'Geneva, 2022',
    kind: 'Achievement',
    sub: 'Silver Award · Geneva Int. Exhibition of Inventions',
    badge: 'SILVER',
    certificateImage: '/images/certificates/solar-baby-medal.jpg',
  },
  {
    icon: 'verified',
    tag: 'Member',
    tone: 'blue',
    color: '#0091b8',
    title: 'IFIA Inventor Member',
    description: 'International Federation of Inventors recognition.',
    date: 'May 2021',
    kind: 'Membership',
    sub: 'International Federation of Inventors’ Associations',
    badge: 'IFIA',
    certificateImage: '/images/certificates/ifia-member.jpg',
  },
  {
    icon: 'masks',
    tag: 'Patented',
    tone: 'blue',
    color: '#0091b8',
    title: 'Pollution Filtering Mask',
    description: 'High-efficiency pollution filtering technology.',
    date: 'March 2021',
    kind: 'Patent',
    sub: 'Registered Patent · High-efficiency filtration',
    badge: 'PATENT',
  },
  {
    icon: 'bolt',
    tag: 'Patented',
    tone: 'blue',
    color: '#0091b8',
    title: 'Electric Motor Winding',
    description: 'Winding technique for efficiency and power delivery.',
    date: 'July 2021',
    kind: 'Patent',
    sub: 'Registered Patent · Efficiency & power delivery',
    badge: 'PATENT',
  },
];

export const inventionStory: InventionStoryBlock[] = [
  {
    title: 'About my inventions',
    body: 'I love creating new ideas and turning them into reality. I have spent years working on inventions, and that creative process is something I truly enjoy. My inventions led to IFIA awards and Iranian patents, including ideas like a multi-layer sleeping bag, an educational-therapeutic vest, a baby carrier with solar panel, and a pollution-filtering mask.',
  },
  {
    title: 'As a hobby',
    body: 'Inventing is not just something I did before, it is still one of my favorite hobbies. I enjoy thinking about problems, finding creative solutions, and building something useful from an idea. That is what makes inventing exciting for me: it combines creativity, problem-solving, and the feeling of making something real.',
  },
];

export const contactFields: ContactField[] = [
  { icon: 'location_on', label: 'Location', value: 'Amstelveen, Netherlands' },
  { icon: 'mail', label: 'Email', value: 'mahmoodi.sm76@gmail.com' },
];

export const contactEmail = 'mahmoodi.sm76@gmail.com';

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/maryam-mahmoudi-899aab382/' },
  { label: 'GitHub', href: 'https://github.com/SamaMahmoudi' },
  { label: 'CV', href: '/Maryam-Mahmoudi.pdf' },
];

export const avatarUrl = '/images/avatar.jpg';
