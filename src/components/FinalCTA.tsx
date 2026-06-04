import { Container, Reveal, Button } from "./primitives";

export default function FinalCTA() {
  return (
    <section className="relative">
      {/* Full-bleed photo with solid dark scrim */}
      <img
        src="/images/cta-team.jpg"
        alt="A modern sales team at work"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-night/80" aria-hidden />

      <Container className="relative">
        <div className="max-w-2xl py-28 md:py-36">
          <Reveal>
            <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
              For sales teams
            </span>
            <span className="mt-3 block h-px w-10 bg-white/30" />
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-7 text-[2.6rem] font-semibold leading-[1.06] tracking-[-0.02em] text-white sm:text-[3.5rem]">
              Ready to automate your pipeline?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-white/65">
              Join 500+ sales teams scaling their outreach with Xyra CRM - and
              spend your time closing, not prospecting.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                href="https://xyra-crm.teknesisbrand.com/signup"
                variant="onDark"
              >
                Get started for free
              </Button>
              <Button href="#pricing" variant="onDarkOutline">
                View pricing
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/45">
              No credit card required · Free plan available forever
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
