import Editorial from "../components/Editorial";
import PageHero from "../components/PageHero";
import PageCTA from "../components/PageCTA";
import Process from "../components/Process";
import StatStrip from "../components/StatStrip";
import { Container } from "../components/primitives";
import { routes } from "../lib/routes";

export default function ProcessPage() {
  return (
    <main>
      <PageHero
        eyebrow="Process"
        title="A clearer path from ideal customer definition to launched outreach."
        lead="The Xyra process is designed to remove the repetitive work between targeting the right buyers and getting consistent, trackable outreach into market."
        image="/images/step-define.jpg"
        primaryCta={{ label: "Book a demo", href: routes.demo }}
        secondaryCta={{ label: "View features", href: routes.features }}
      />

      <StatStrip
        stats={[
          { value: "4", label: "Core stages from defining the target customer to closing with live campaign insight." },
          { value: "1", label: "Connected workflow instead of separate sourcing, writing, and follow-up tools." },
          { value: "Less", label: "Manual research, list cleaning, and repetitive drafting before launch." },
        ]}
      />

      <Editorial
        label="Workflow logic"
        heading="Each step is built to remove a common sales execution bottleneck."
        lead="Most teams do not lose time because they lack effort. They lose time because sourcing, validation, personalization, and follow-up all live in separate manual loops."
        body={[
          "Xyra compresses those loops into a single operating flow so teams can move from an ICP prompt to a launched sequence without rebuilding context at every stage.",
          "The result is not just speed. It is cleaner execution, better visibility, and a workflow the whole team can follow without depending on scattered spreadsheets or disconnected tools.",
        ]}
      />

      <Process />

      <section className="bg-white py-24 md:py-32">
        <Container>
          <div className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Define",
                desc: "Translate a plain-language description of the ideal customer into targeting criteria the system can execute.",
              },
              {
                title: "Fetch",
                desc: "Source and verify prospects so the list is usable before it reaches the campaign stage.",
              },
              {
                title: "Generate",
                desc: "Draft personalized outreach from lead and account context instead of writing every touch manually.",
              },
              {
                title: "Close",
                desc: "Run the campaign with follow-ups and analytics in place so the team can focus on active opportunities.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 sm:p-9">
                <div className="font-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-3">
                  {item.title}
                </div>
                <h2 className="mt-6 text-[1.55rem] font-semibold tracking-[-0.02em] text-ink">
                  {item.title} with less operational drag.
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-3">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <PageCTA
        image="/images/step-close.jpg"
        eyebrow="See the workflow live"
        title="If this matches how your team wants to work, the next step is a focused walkthrough."
        lead="We can show the full process from plain-language targeting through campaign launch and reporting."
        primary={{ label: "Book a demo", href: routes.demo }}
        secondary={{ label: "Contact sales", href: routes.contact }}
      />
    </main>
  );
}
