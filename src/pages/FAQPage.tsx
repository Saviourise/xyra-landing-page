import PageCTA from "../components/PageCTA";
import PageHero from "../components/PageHero";
import StatStrip from "../components/StatStrip";
import FAQSection from "../components/FAQSection";
import { routes } from "../lib/routes";

export default function FAQPage() {
  return (
    <main>
      <PageHero
        eyebrow="FAQ"
        title="Direct answers for teams evaluating Xyra."
        lead="Use this page to get quick clarity on onboarding, workflow fit, security, and what happens after you decide to move forward."
        image="/images/hero-1.jpg"
        primaryCta={{ label: "Contact sales", href: routes.contact }}
        secondaryCta={{ label: "Book a demo", href: routes.demo }}
      />

      <StatStrip
        stats={[
          { value: "6", label: "Core questions we hear most often from teams considering Xyra." },
          { value: "Quick", label: "A practical answer format so you can move from question to decision faster." },
          { value: "Clear", label: "No buried copy, no long detours, just the specifics people usually need." },
        ]}
      />

      <FAQSection
        compact
        title="Everything teams ask before they start."
        lead="If you need more detail after reading through these, the contact and demo pages are the next step."
      />

      <PageCTA
        image="/images/hero-2.jpg"
        eyebrow="Still have questions?"
        title="We can walk through the details with your team directly."
        lead="Use a live conversation to cover the specifics that matter for your rollout."
        primary={{ label: "Contact sales", href: routes.contact }}
        secondary={{ label: "Book a demo", href: routes.demo }}
      />
    </main>
  );
}
