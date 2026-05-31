import { useCallback, useState } from 'react';
import { awards, contactFields, education, experience, inventionStory, marqueeItems, navItems, socialLinks, stackItems } from '../content/portfolio';
import { PortfolioTemplate } from '../components/templates/PortfolioTemplate';
import { useActiveSection } from '../hooks/useActiveSection';
import { useDeckParallax } from '../hooks/useDeckParallax';
import { useDocumentGallery } from '../hooks/useDocumentGallery';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useTypewriter } from '../hooks/useTypewriter';
import { sendContactEmail } from '../services/contact-email';

const typewriterPhrases = ['View My Work', 'Say Hello', 'See My Projects', "Let's Talk"];
const observedSectionIds = ['about', 'stack', 'work', 'beyond', 'contact'];

export function PortfolioPage() {
  const [sending, setSending] = useState(false);
  const [contactStatus, setContactStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [contactMessage, setContactMessage] = useState('');
  const activeSectionId = useActiveSection(observedSectionIds);
  const { compact } = useScrollProgress();
  const gallery = useDocumentGallery(awards.filter((item) => Boolean(item.certificateImage)).length);
  const setDeckRef = useDeckParallax();
  const typewriterText = useTypewriter(typewriterPhrases);

  useRevealOnScroll();

  const handleContactSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const formElement = event.currentTarget;

    setContactStatus('idle');
    setContactMessage('');
    setSending(true);

    const result = await sendContactEmail({
      user_name: String(form.get('name') ?? '').trim(),
      user_email: String(form.get('email') ?? '').trim(),
      message: String(form.get('message') ?? '').trim(),
    });

    setSending(false);

    if (result.success) {
      setContactStatus('success');
      setContactMessage('Thank you. Your message has been sent.');
      formElement.reset();
      return;
    }

    setContactStatus('error');
    setContactMessage(result.error);
  }, []);

  return (
    <PortfolioTemplate
      activeSectionId={activeSectionId}
      awards={awards}
      compactNav={compact}
      contactFields={contactFields}
      education={education}
      experience={experience}
      gallery={gallery}
      inventionStory={inventionStory}
      marqueeItems={marqueeItems}
      navItems={navItems}
      onContactSubmit={handleContactSubmit}
      sending={sending}
      contactStatus={contactStatus}
      contactStatusMessage={contactMessage}
      setDeckRef={setDeckRef}
      socialLinks={socialLinks}
      stackItems={stackItems}
      typewriterText={typewriterText}
    />
  );
}
