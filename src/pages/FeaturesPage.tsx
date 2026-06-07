import { FEATURE_GROUPS } from "../content/site";
import { routes } from "../lib/routes";
import { Container, Reveal, Eyebrow } from "../components/primitives";
import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";
import StatStrip from "../components/StatStrip";

export default function FeaturesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Features"
        title="One sales workspace, from prospect discovery to revenue visibility."
        lead="Xyra combines core CRM workflows with AI-powered outreach, content production, scoring, reporting, and admin controls in a single operating system for modern sales teams."
        image="/images/hero.jpg"
        primaryCta={{ label: "Book a demo", href: routes.demo }}
      />

      <StatStrip
        stats={[
          { value: "15", label: "Core capabilities grouped across CRM, outreach, AI hub, and admin workflows." },
          { value: "1", label: "Connected workspace where sourcing, outreach, analytics, and permissions stay in sync." },
          { value: "0", label: "Manual spreadsheet hops needed to move from target account to launched campaign." },
        ]}
      />

      {FEATURE_GROUPS.map((group, groupIndex) => (
        <section
          key={group.id}
          id={group.id}
          className={groupIndex % 2 === 0 ? "bg-white py-24 md:py-32" : "bg-bg-soft py-24 md:py-32"}
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-[80px_minmax(0,1fr)] lg:gap-10">
              <Reveal>
                <Eyebrow>{group.title}</Eyebrow>
              </Reveal>

              <div>
                <Reveal>
                  <h2 className="max-w-3xl text-[2.3rem] font-semibold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[2.9rem]">
                    {group.intro}
                  </h2>
                </Reveal>

                <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 xl:grid-cols-3">
                  {group.items.map((item, itemIndex) => (
                    <Reveal
                      key={item.id}
                      delay={itemIndex * 70}
                      className="bg-white p-8 sm:p-9"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-[4px] border border-line bg-bg-soft text-ink">
                        <item.icon size={20} />
                      </span>
                      <h3 id={item.id} className="mt-8 text-[1.65rem] font-semibold tracking-[-0.02em] text-ink">
                        {item.label}
                      </h3>
                      <p className="mt-4 text-[15px] leading-relaxed text-ink-3">
                        {item.desc}
                      </p>
                      <ul className="mt-7 space-y-3">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="text-[14px] text-ink-2">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <PageCTA
        image="/images/hero-1.jpg"
        eyebrow="Explore the platform"
        title="Want to see how the full system fits your sales motion?"
        lead="We can show the exact mix of CRM, outreach, AI, and reporting workflows that matter for your team."
        primary={{ label: "Book a demo", href: routes.demo }}
        secondary={{ label: "View pricing", href: routes.pricing }}
      />
    </main>
  );
}
