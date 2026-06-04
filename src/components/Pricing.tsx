import { Check } from "lucide-react";
import { Container, Reveal, Eyebrow, Button } from "./primitives";

const FREE = [
  "Up to 3 users",
  "Contacts, leads & tasks",
  "Single sales pipeline",
  "Activity timeline & notes",
  "CSV import & export",
  "Email & in-app reminders",
];

const PREMIUM = [
  "Everything in Free, plus:",
  "AI lead generation in natural language",
  "Cold outreach - up to 2,000 emails / campaign",
  "Automated multi-step follow-ups",
  "AI Marketing Hub: video, social & content",
  "Predictive lead scoring & next best action",
  "Multi-pipeline, full reports & integrations",
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-line bg-white py-24 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[80px_minmax(0,1fr)] lg:gap-10">
          <Reveal>
            <Eyebrow>Pricing</Eyebrow>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="max-w-xl text-[2.4rem] font-semibold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[3rem]">
                Simple, transparent pricing.
              </h2>
              <p className="mt-5 max-w-md text-[16px] leading-relaxed text-ink-3">
                Start free and upgrade when you're ready to put your outreach on
                autopilot. No hidden fees.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {/* Free */}
              <Reveal className="flex flex-col border border-line bg-white p-9">
                <h3 className="text-lg font-semibold text-ink">Free</h3>
                <p className="mt-2 text-sm text-ink-3">
                  For individuals and small teams getting organized.
                </p>
                <div className="mt-7 flex items-baseline gap-1">
                  <span className="text-5xl font-semibold tracking-tight text-ink">
                    ₦0
                  </span>
                  <span className="text-ink-3">/ month</span>
                </div>
                <Button
                  href="https://xyra-crm.teknesisbrand.com/signup"
                  variant="outline"
                  full
                  className="mt-8"
                >
                  Get started free
                </Button>
                <ul className="mt-8 space-y-3.5">
                  {FREE.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink">
                        <Check size={12} strokeWidth={2.5} />
                      </span>
                      <span className="text-[15px] text-ink-2">{f}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Premium */}
              <Reveal
                delay={100}
                className="relative flex flex-col bg-night p-9"
              >
                <span className="absolute right-7 top-9 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                  Most popular
                </span>
                <h3 className="text-lg font-semibold text-white">Premium</h3>
                <p className="mt-2 text-sm text-white/55">
                  The full AI sales engine for growing teams.
                </p>
                <div className="mt-7 flex items-baseline gap-1">
                  <span className="text-5xl font-semibold tracking-tight text-white">
                    ₦9,999
                  </span>
                  <span className="text-white/55">/ month</span>
                </div>
                <p className="font-ui mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[12px] font-medium text-white/85">
                  ✦ First month free — no card required
                </p>
                <Button
                  href="https://xyra-crm.teknesisbrand.com/signup"
                  variant="onDark"
                  full
                  className="mt-6"
                >
                  Start 1-month free trial
                </Button>
                <ul className="mt-8 space-y-3.5">
                  {PREMIUM.map((f, i) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          i === 0
                            ? "border border-white/25 text-white/60"
                            : "bg-white text-ink"
                        }`}
                      >
                        <Check size={12} strokeWidth={2.5} />
                      </span>
                      <span
                        className={`text-[15px] ${
                          i === 0 ? "font-semibold text-white/60" : "text-white/90"
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal
              delay={120}
              className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 sm:flex-row sm:items-center"
            >
              <p className="text-sm text-ink-3">
                <b className="text-ink">Pay-per-use AI credits</b> available for AI
                Video Generation and Voice Agents - only pay for what you consume.
              </p>
              <a
                href="https://xyra-crm.teknesisbrand.com/signup"
                className="shrink-0 text-sm font-semibold text-ink underline-offset-4 hover:underline"
              >
                Need SSO &amp; custom roles? Contact sales →
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
