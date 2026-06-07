const CONTACT_EMAIL = "contact@teknesisbrand.com";

function createMailtoHref(subject: string, lines: string[]) {
  const body = lines.join("\n\n");
  const query = [
    `subject=${encodeURIComponent(subject)}`,
    `body=${encodeURIComponent(body)}`,
  ].join("&");

  return `mailto:${CONTACT_EMAIL}?${query}`;
}

export const contactLinks = {
  bookDemo: createMailtoHref("Book a demo", [
    "Hello Xyra Team,",
    "I hope this email finds you well.",
    "I recently came across Xyra and am interested in learning more about the platform and how it can support our business needs. I would appreciate the opportunity to schedule a demo to better understand its features, capabilities, and potential use cases.",
    "Please let me know your available dates and times for a demonstration. If there is any information you need from me beforehand, I would be happy to provide it.",
    "I look forward to hearing from you.",
    "Kind regards,",
    "[Your Name]",
    "[Company Name]",
    "[Job Title]",
  ]),
} as const;

export { CONTACT_EMAIL };
