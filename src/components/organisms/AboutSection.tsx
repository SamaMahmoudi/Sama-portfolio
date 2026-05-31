import { SectionLabel } from '../atoms/SectionLabel';

export function AboutSection() {
  return (
    <section className="mx-auto max-w-container px-6 py-24 md:px-12 md:py-32" id="about">
      <div className="grid items-start gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5" data-reveal>
          <SectionLabel>About</SectionLabel>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Frontend first,
            <br />
            curious always.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-ink-soft lg:col-span-7" data-delay="120" data-reveal>
          <p>
            I&apos;m a junior frontend developer based in Amstelveen, building production interfaces with React, Next.js and TypeScript. My focus is the details that make a UI feel right: responsive layouts, accessible components, smooth interaction, and clean, testable code.
          </p>
          <p>Most people call me Sama, which is my nickname.</p>
          <p>
            Outside of the browser I&apos;m a maker at heart, with a handful of inventions and international awards to show for it. That same problem-solving instinct is what I bring to the frontend every day.
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-4 pt-4">
            <div><p className="label-caps mb-1 text-ink-soft/70">Based in</p><p className="font-medium text-ink">Amstelveen, NL</p></div>
            <div><p className="label-caps mb-1 text-ink-soft/70">Focus</p><p className="font-medium text-ink">React · UI Engineering</p></div>
            <div><p className="label-caps mb-1 text-ink-soft/70">Open to</p><p className="font-medium text-ink">Junior FE roles</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
