import type { Education, Experience } from '../../types/portfolio';
import { SectionLabel } from '../atoms/SectionLabel';
import { ExperienceCard } from '../molecules/ExperienceCard';

type WorkSectionProps = {
  experience: Experience;
  education: Education[];
};

export function WorkSection({ experience, education }: WorkSectionProps) {
  return (
    <section className="mx-auto max-w-container px-6 py-24 md:px-12 md:py-32" id="work">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4" data-reveal>
          <SectionLabel>Experience</SectionLabel>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Where I&apos;ve
            <br />
            been building
          </h2>
        </div>
        <div className="lg:col-span-8" data-delay="120" data-reveal>
          <ExperienceCard education={education} experience={experience} />
        </div>
      </div>
    </section>
  );
}
