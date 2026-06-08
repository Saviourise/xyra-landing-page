import { MapPin, Phone } from "lucide-react";
import PageHero from "../components/PageHero";
import { Container, Eyebrow, Reveal } from "../components/primitives";
import PageCTA from "../components/PageCTA";
import { routes } from "../lib/routes";

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Talk to the team behind Xyra."
        lead="Whether you want a product walkthrough, a pricing conversation, or help evaluating fit for your team, we can point you to the right next step quickly."
        image="/images/hero-3.jpg"
        primaryCta={{ label: "Book a demo", href: routes.demo }}
      />

      <section className="bg-white py-24 md:py-32">
        <Container>
          <div className="grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-2">
            {[
              {
                icon: Phone,
                title: "Call us",
                value: "Talk to sales",
                href: "tel:+2348135503632",
                desc: "Use this for direct sales conversations and urgent buying questions.",
              },
              {
                icon: MapPin,
                title: "Operating region",
                value: "Lagos, Nigeria",
                href: "#",
                desc: "We support remote demos and onboarding for distributed teams across regions.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 70} className="bg-white p-9 sm:p-10">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg-soft text-ink">
                  <item.icon size={18} />
                </span>
                <h2 className="mt-8 text-[1.7rem] font-semibold tracking-[-0.02em] text-ink">
                  {item.title}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-3">
                  {item.desc}
                </p>
                {item.href === "#" ? (
                  <div className="mt-8 text-[15px] font-semibold text-ink">{item.value}</div>
                ) : (
                  <a
                    href={item.href}
                    className="mt-8 inline-flex items-center rounded-[3px] border border-ink/15 px-4 py-2.5 text-[14px] font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
                  >
                    {item.value}
                  </a>
                )}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-bg-soft py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[80px_minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
            <Reveal>
              <Eyebrow>What happens next</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="text-[2.4rem] font-semibold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[3rem]">
                We keep the first conversation practical.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-6">
                <p className="text-[18px] leading-relaxed text-ink">
                  The goal is to understand your current sales motion, where manual work is slowing the team down, and which Xyra workflows are most relevant now.
                </p>
                <p className="text-[15px] leading-relaxed text-ink-3">
                  Expect a direct conversation around prospecting volume, current tools, workflow bottlenecks, deliverability concerns, reporting needs, and rollout requirements.
                </p>
                <p className="text-[15px] leading-relaxed text-ink-3">
                  If there is a fit, we can move straight into a tailored demo recommendation without dragging you through a long generic sequence.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <PageCTA
        image="/images/hero-3.jpg"
        eyebrow="Prefer a live walkthrough?"
        title="Book a focused demo instead of sending details back and forth."
        lead="We can keep the conversation practical and map the best path forward quickly."
        primary={{ label: "Book a demo", href: routes.demo }}
      />
    </main>
  );
}
