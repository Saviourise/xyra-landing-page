import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";
import StatStrip from "../components/StatStrip";
import { Button, Container, Eyebrow, Reveal } from "../components/primitives";
import { contactLinks } from "../lib/contact";

export default function DemoPage() {
  return (
    <main>
      <PageHero
        eyebrow="Book a demo"
        title="See the workflow from plain-language targeting to launched outreach."
        lead="A Xyra demo should show the operational path your team actually cares about: sourcing, verification, personalization, follow-up logic, reporting, and the admin controls around it."
        image="/images/cta-team.jpg"
        primaryCta={{ label: "Book a demo", href: contactLinks.bookDemo }}
      />

      <StatStrip
        stats={[
          { value: "30 min", label: "Typical guided walkthrough focused on your current workflow and team shape." },
          { value: "Live", label: "Product-led view of sourcing, personalization, sequencing, reporting, and governance." },
          { value: "Tailored", label: "Configured around your ICP, outreach model, and rollout questions." },
        ]}
      />

      <section className="bg-white py-24 md:py-32">
        <Container>
          <div className="grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-3">
            {[
              {
                title: "Current workflow review",
                desc: "We map where prospecting, enrichment, outreach, follow-up, and pipeline handoff are creating drag today.",
              },
              {
                title: "Relevant feature walkthrough",
                desc: "We focus on the Xyra flows that actually matter for your team rather than showing every screen in the product.",
              },
              {
                title: "Rollout discussion",
                desc: "We cover adoption path, team setup, permissions, reporting needs, and what the first 30 days should look like.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 70} className="bg-white p-9 sm:p-10">
                <h2 className="text-[1.7rem] font-semibold tracking-[-0.02em] text-ink">
                  {item.title}
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-ink-3">
                  {item.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-bg-soft py-24 md:py-32">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-14">
          <div>
            <Reveal>
              <Eyebrow>Demo prep</Eyebrow>
              <h2 className="mt-7 text-[2.4rem] font-semibold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[3rem]">
                Bring the details that shape the recommendation.
              </h2>
            </Reveal>
            <Reveal delay={80} className="mt-8 space-y-4">
              {[
                "Your target customer profile and average deal motion.",
                "How the team currently finds and works leads.",
                "The channels you rely on today and where conversion friction sits.",
                "Any security, reporting, or admin requirements that affect rollout.",
              ].map((point) => (
                <p key={point} className="text-[15px] leading-relaxed text-ink-2">
                  {point}
                </p>
              ))}
            </Reveal>
          </div>

          <Reveal delay={120} className="border border-line bg-white p-9 sm:p-10">
            <div className="font-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-3">
              Ready to schedule?
            </div>
            <h3 className="mt-5 text-[2rem] font-semibold tracking-[-0.02em] text-ink">
              Start with a quick contact conversation.
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-3">
              We will use that to route you into the right product conversation and make sure the demo is scoped correctly.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <Button href={contactLinks.bookDemo}>Book a demo</Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <PageCTA
        image="/images/cta-team.jpg"
        eyebrow="Ready to talk it through?"
        title="If the workflow fits, we can tighten the demo around your current motion."
        lead="Use this as the entry point for a more tailored conversation with sales."
        primary={{ label: "Book a demo", href: contactLinks.bookDemo }}
      />
    </main>
  );
}
