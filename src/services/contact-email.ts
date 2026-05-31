import emailjs from '@emailjs/browser';

export type ContactEmailPayload = {
  user_name: string;
  user_email: string;
  message: string;
};

type ContactEmailResult =
  | { success: true }
  | { success: false; error: string };

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
} as const;

export function isContactEmailConfigured() {
  return Boolean(emailConfig.serviceId && emailConfig.templateId && emailConfig.publicKey);
}

export function validateContactPayload(payload: ContactEmailPayload): string | null {
  if (!payload.user_name.trim()) return 'Please enter your name.';
  if (!/^\S+@\S+\.\S+$/.test(payload.user_email.trim())) return 'Please enter a valid email address.';
  if (payload.message.trim().length < 10) return 'Please write a message with at least 10 characters.';
  if (payload.message.length > 2000) return 'Please keep your message under 2000 characters.';

  return null;
}

export async function sendContactEmail(payload: ContactEmailPayload): Promise<ContactEmailResult> {
  if (!isContactEmailConfigured()) {
    return { success: false, error: 'Contact form is not configured yet.' };
  }

  const validationError = validateContactPayload(payload);
  if (validationError) return { success: false, error: validationError };

  try {
    await emailjs.send(emailConfig.serviceId, emailConfig.templateId, payload, {
      publicKey: emailConfig.publicKey,
      blockHeadless: true,
      limitRate: {
        id: 'sama-portfolio-contact',
        throttle: 10000,
      },
    });

    return { success: true };
  } catch {
    return { success: false, error: 'Message could not be sent. Please try again later.' };
  }
}
