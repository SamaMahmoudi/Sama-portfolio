import { AboutSection } from '../organisms/AboutSection';
import { BeyondCodeSection } from '../organisms/BeyondCodeSection';
import { ContactSection } from '../organisms/ContactSection';
import { Footer } from '../organisms/Footer';
import { HeroSection } from '../organisms/HeroSection';
import { InventionsStorySection } from '../organisms/InventionsStorySection';
import { Marquee } from '../organisms/Marquee';
import { Navigation } from '../organisms/Navigation';
import { StackSection } from '../organisms/StackSection';
import { WorkSection } from '../organisms/WorkSection';
import { MotionSection } from '../motion/MotionSection';
import { CursorRing } from '../motion/CursorRing';
import { ScrollProgressBar } from '../motion/ScrollProgressBar';
import type { AwardItem, ContactField, Education, Experience, InventionStoryBlock, NavItem, SocialLink, StackItem } from '../../types/portfolio';

type PortfolioTemplateProps = {
  activeSectionId: string;
  awards: AwardItem[];
  compactNav: boolean;
  contactFields: ContactField[];
  contactStatus: 'idle' | 'success' | 'error';
  contactStatusMessage: string;
  education: Education[];
  experience: Experience;
  gallery: {
    activeIndex: number;
    next: () => void;
    previous: () => void;
    goTo: (index: number) => void;
    setTrackRef: (node: HTMLDivElement | null) => void;
  };
  inventionStory: InventionStoryBlock[];
  marqueeItems: string[];
  navItems: NavItem[];
  onContactSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  sending: boolean;
  setDeckRef: (node: HTMLDivElement | null) => void;
  socialLinks: SocialLink[];
  stackItems: StackItem[];
  typewriterText: string;
};

export function PortfolioTemplate(props: PortfolioTemplateProps) {
  return (
    <>
      <div className="backdrop" />
      <div className="grid-bg" />
      <ScrollProgressBar />
      <CursorRing />
      <Navigation activeId={props.activeSectionId} compact={props.compactNav} items={props.navItems} />
      <main>
        <HeroSection deckRef={props.setDeckRef} socialLinks={props.socialLinks} typewriterText={props.typewriterText} />
        <Marquee items={props.marqueeItems} />
        <MotionSection>
          <AboutSection />
        </MotionSection>
        <MotionSection>
          <StackSection items={props.stackItems} />
        </MotionSection>
        <MotionSection>
          <WorkSection education={props.education} experience={props.experience} />
        </MotionSection>
        <MotionSection>
          <InventionsStorySection blocks={props.inventionStory} />
        </MotionSection>
        <MotionSection>
          <BeyondCodeSection
            activeIndex={props.gallery.activeIndex}
            items={props.awards}
            onNext={props.gallery.next}
            onPrevious={props.gallery.previous}
            onSelect={props.gallery.goTo}
            trackRef={props.gallery.setTrackRef}
          />
        </MotionSection>
        <MotionSection>
          <ContactSection
            fields={props.contactFields}
            onSubmit={props.onContactSubmit}
            sending={props.sending}
            status={props.contactStatus}
            statusMessage={props.contactStatusMessage}
          />
        </MotionSection>
      </main>
      <Footer links={props.socialLinks} />
    </>
  );
}
