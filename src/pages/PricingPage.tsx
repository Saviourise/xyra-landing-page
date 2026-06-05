import Editorial from "../components/Editorial";
import PageHero from "../components/PageHero";
import Pricing from "../components/Pricing";
import PageCTA from "../components/PageCTA";
import StatStrip from "../components/StatStrip";
import { routes } from "../lib/routes";

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing"
        title="Straightforward plans for teams growing into AI-driven outreach."
        lead="Review the plans, then book a demo to see the right mix of prospecting, sequencing, reporting, and premium AI workflows for your team."
        image="/images/hero-2.jpg"
        primaryCta={{ label: "Book a demo", href: routes.demo }}
        secondaryCta={{ label: "Contact sales", href: routes.contact }}
      />

      <StatStrip
        stats={[
          { value: "Free", label: "Core CRM plan for teams getting organized around pipeline, contacts, and tasks." },
          { value: "Premium", label: "AI workflow layer for sourcing, personalization, automation, and richer analytics." },
          { value: "30 days", label: "Premium first month free so teams can validate fit before they commit." },
        ]}
      />

      <Pricing />

      <Editorial
        label="Buying support"
        heading="Procurement questions should not slow down rollout."
        lead="If you need security review support, internal buy-in material, or a more tailored walkthrough of the Premium plan, we can map the right setup before your team switches tools."
        body={[
          "We can align on seats, onboarding, data migration, admin structure, and the best starting motion for outbound or full-funnel teams.",
          "For larger teams, the dedicated sales conversation should also cover custom permissions, operational reporting, and the AI features you actually expect to use in the first 90 days.",
        ]}
      />

      <PageCTA
        image="/images/hero-2.jpg"
        eyebrow="Need a custom rollout?"
        title="We can scope the right plan and onboarding path with your team."
        lead="If you need a deeper pricing conversation, we will map seats, rollout steps, and admin expectations before you commit."
        primary={{ label: "Contact sales", href: routes.contact }}
      />
    </main>
  );
}
