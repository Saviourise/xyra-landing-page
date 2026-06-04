import { Check } from "lucide-react";
import { Container, Reveal, Eyebrow, Button } from "./primitives";

const CARDS = [
  {
    title: "AI Lead Generation",
    desc: "Describe your ideal customer in plain English. Xyra sources, verifies, and loads a ready-to-work prospect list — no filters, no spreadsheets.",
    subLabel: "Outreach services",
    items: [
      "Natural-language lead sourcing",
      "Built-in email verification",
      "AI-personalized cold emails",
      "Up to 2,000 sends per campaign",
    ],
  },
  {
    title: "AI Marketing Hub",
    desc: "A premium AI workforce for your whole funnel — generate content and video, automate social, and let AI score every lead and place every call.",
    subLabel: "Premium services",
    items: [
      "AI video & social content",
      "AI voice agents for follow-ups",
      "Predictive lead scoring (0–100)",
      "Auto-scheduling & analytics",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white pb-24 md:pb-32">
      <Container>
        <Reveal>
          <Eyebrow>Services</Eyebrow>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
          {CARDS.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 100}
              className="bg-white p-9 sm:p-12"
            >
              <h3 className="text-[2rem] font-semibold tracking-[-0.01em] text-ink">
                {card.title}
              </h3>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-3">
                {card.desc}
              </p>

              <div className="mt-10 font-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-3">
                {card.subLabel}
              </div>
              <ul className="mt-6 space-y-4">
                {card.items.map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink">
                      <Check size={13} strokeWidth={2.5} />
                    </span>
                    <span className="text-[15px] text-ink-2">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10">
          <Button href="#process">Read more</Button>
        </Reveal>
      </Container>
    </section>
  );
}
