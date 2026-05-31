import type { Education, Experience } from '../../types/portfolio';
import { Badge } from '../atoms/Badge';
import { Icon } from '../atoms/Icon';

type ExperienceCardProps = {
  experience: Experience;
  education: Education[];
};

export function ExperienceCard({ experience, education }: ExperienceCardProps) {
  return (
    <>
      <div className="card rounded-2xl p-8 md:p-10">
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl font-bold">{experience.role}</h3>
            <p className="mt-1 font-medium text-accent">{experience.company}</p>
          </div>
          <Badge className="whitespace-nowrap bg-primary/10 text-accent">{experience.period}</Badge>
        </div>
        <ul className="space-y-3 text-ink-soft">
          {experience.highlights.map((highlight) => (
            <li className="flex gap-3" key={highlight}>
              <Icon name="check_circle" className="mt-0.5 text-[18px] text-primary" />
              {highlight}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-2 border-t border-line pt-6">
          {experience.tags.map((tag) => (
            <Badge className="bg-bg text-ink-soft" key={tag}>
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <div className="card mt-5 rounded-2xl p-8 md:p-10">
        <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl font-bold">Education</h3>
            <p className="mt-1 text-ink-soft">Foundations in marketing & management</p>
          </div>
        </div>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {education.map((item) => (
            <div key={item.degree}>
              <p className="label-caps mb-1 text-accent">{item.period}</p>
              <p className="font-medium">{item.degree}</p>
              <p className="text-sm text-ink-soft">{item.school}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
