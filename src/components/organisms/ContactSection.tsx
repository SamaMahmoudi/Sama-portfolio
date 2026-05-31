import type { ContactField } from '../../types/portfolio';
import { SectionLabel } from '../atoms/SectionLabel';
import { ContactDetail } from '../molecules/ContactDetail';

type ContactSectionProps = {
  fields: ContactField[];
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  sending: boolean;
  status: 'idle' | 'success' | 'error';
  statusMessage: string;
};

export function ContactSection({ fields, onSubmit, sending, status, statusMessage }: ContactSectionProps) {
  return (
    <section className="mx-auto max-w-container px-6 py-24 md:px-12 md:py-32" id="contact">
      <div className="card rounded-3xl p-8 md:p-14" data-reveal>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="font-display mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Let&apos;s build
              <br />
              something good.
            </h2>
            <p className="mb-10 max-w-md text-lg leading-relaxed text-ink-soft">Open to junior frontend roles and collaborations. Happy to chat about UI, React, or a project you have in mind.</p>
            <div className="space-y-5">
              {fields.map((field) => (
                <ContactDetail icon={field.icon} key={field.label} label={field.label} value={field.value} />
              ))}
            </div>
          </div>
          <form className="space-y-7" onSubmit={onSubmit}>
            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <label className="label-caps text-ink-soft/70" htmlFor="name">Name</label>
                <input className="field mt-2" id="name" name="name" placeholder="Your name" required type="text" />
              </div>
              <div>
                <label className="label-caps text-ink-soft/70" htmlFor="email">Email</label>
                <input className="field mt-2" id="email" name="email" placeholder="you@email.com" required type="email" />
              </div>
            </div>
            <div>
              <label className="label-caps text-ink-soft/70" htmlFor="message">Message</label>
              <textarea className="field mt-2 resize-none" id="message" name="message" placeholder="Tell me about your project…" required rows={4} />
            </div>
            <button aria-busy={sending} className="btn-primary label-caps w-full rounded-full py-4 disabled:cursor-not-allowed disabled:opacity-70" data-magnet disabled={sending} type="submit">
              {sending ? 'Sending Message…' : 'Send Message'}
            </button>
            {statusMessage ? (
              <p aria-live="polite" className={`text-sm ${status === 'success' ? 'text-accent' : 'text-red-600'}`}>
                {statusMessage}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
