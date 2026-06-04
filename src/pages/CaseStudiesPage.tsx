import { CASE_STUDIES } from "../content/site";
import { routes } from "../lib/routes";
import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";
import StatStrip from "../components/StatStrip";
import { Container, Eyebrow, Reveal } from "../components/primitives";

export default function CaseStudiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Case studies"
        title="Examples of how teams use Xyra to replace repetitive sales operations."
        lead="These stories are built around the same pattern: less time spent assembling lists and follow-ups, more time spent in active conversations with qualified buyers."
        image="/images/case-growth.jpg"
        primaryCta={{ label: "Book a demo", href: routes.demo }}
        secondaryCta={{ label: "View features", href: routes.features }}
      />

      <StatStrip
        stats={[
          { value: "2", label: "Illustrative customer stories showing how Xyra helps teams move from research bottlenecks to execution." },
          { value: "10,000", label: "Verified leads produced in one week in the outbound scale example." },
          { value: "Faster", label: "List building, personalization, and pipeline prioritization when the workflow is consolidated." },
        ]}
      />

      {CASE_STUDIES.map((item, index) => (
        <section
          key={item.id}
          id={item.id}
          className={index % 2 === 0 ? "bg-white py-24 md:py-32" : "bg-bg-soft py-24 md:py-32"}
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-14">
              <Reveal>
                <div className="relative min-h-[340px] overflow-hidden rounded-[4px]">
                  <img src={item.img} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-night/30" aria-hidden />
                </div>
              </Reveal>

              <div>
                <Reveal>
                  <Eyebrow>Customer story</Eyebrow>
                  <h2 className="mt-7 text-[2.4rem] font-semibold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[3rem]">
                    {item.title}
                  </h2>
                  <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-3">
                    {item.desc}
                  </p>
                </Reveal>

                <Reveal delay={70} className="mt-10">
                  <div className="font-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-3">
                    Challenge
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
                    {item.challenge}
                  </p>
                </Reveal>

                <Reveal delay={140} className="mt-10">
                  <div className="font-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-3">
                    Approach
                  </div>
                  <ul className="mt-4 space-y-3">
                    {item.approach.map((point) => (
                      <li key={point} className="text-[15px] leading-relaxed text-ink-2">
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={210} className="mt-10">
                  <div className="font-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-3">
                    Outcome
                  </div>
                  <ul className="mt-4 space-y-3">
                    {item.outcomes.map((point) => (
                      <li key={point} className="text-[15px] leading-relaxed text-ink">
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <PageCTA
        image="/images/case-analytics.jpg"
        eyebrow="See your use case"
        title="We can walk through the workflow that matches your current sales motion."
        lead="If your team is replacing manual prospecting or trying to shorten follow-up cycles, we can show the relevant setup."
        primary={{ label: "Book a demo", href: routes.demo }}
      />
    </main>
  );
}
