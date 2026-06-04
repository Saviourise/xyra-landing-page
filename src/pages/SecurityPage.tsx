import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";
import StatStrip from "../components/StatStrip";
import { Container, Eyebrow, Reveal } from "../components/primitives";
import { routes } from "../lib/routes";

export default function SecurityPage() {
  return (
    <main>
      <PageHero
        eyebrow="Security"
        title="Operational security designed into the sales workflow."
        lead="Xyra treats CRM data, outreach systems, permissions, and reporting access as a governance problem from day one, not a late-stage patch."
        image="/images/case-analytics.jpg"
        primaryCta={{ label: "Contact sales", href: routes.contact }}
        secondaryCta={{ label: "View pricing", href: routes.pricing }}
      />

      <StatStrip
        stats={[
          { value: "RBAC", label: "Role-based access for keeping the right data and workflows visible to the right users." },
          { value: "Auditability", label: "Action tracking that makes operational review and accountability easier." },
          { value: "Layered", label: "Controls across authentication, permissions, outbound compliance, and platform visibility." },
        ]}
      />

      <section className="bg-white py-24 md:py-32">
        <Container>
          <div className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
            {[
              {
                title: "Access and identity",
                desc: "Two-factor authentication, admin-controlled permissions, and single sign-on planning are part of how teams keep adoption secure as usage grows.",
              },
              {
                title: "Data protection",
                desc: "Prospect and customer data should be protected in transit and at rest, with visibility into who can access what and why.",
              },
              {
                title: "Outbound controls",
                desc: "Authentication and rate management matter because good deliverability and compliant communication are operational security issues too.",
              },
              {
                title: "Reporting and oversight",
                desc: "Shared visibility into actions, performance, and admin decisions reduces blind spots as more people use the system.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 70} className="bg-white p-9 sm:p-10">
                <h2 className="text-[1.8rem] font-semibold tracking-[-0.02em] text-ink">
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
        <Container>
          <div className="grid gap-12 lg:grid-cols-[80px_minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
            <Reveal>
              <Eyebrow>Review process</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="text-[2.4rem] font-semibold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[3rem]">
                Security conversations should be concrete, not vague.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-6">
                <p className="text-[18px] leading-relaxed text-ink">
                  If your team needs a deeper review, we can walk through access patterns, admin expectations, reporting needs, and the workflows that matter for your environment.
                </p>
                <p className="text-[15px] leading-relaxed text-ink-3">
                  That discussion is most useful when tied to real use cases: who will source leads, who can launch campaigns, who needs reporting access, and how oversight should work across the team.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <PageCTA
        image="/images/case-growth.jpg"
        eyebrow="Need a security review conversation?"
        title="We can walk your team through controls before rollout."
        lead="The goal is to keep the review concrete and tied to your actual use cases."
        primary={{ label: "Contact sales", href: routes.contact }}
        secondary={{ label: "View pricing", href: routes.pricing }}
      />
    </main>
  );
}
