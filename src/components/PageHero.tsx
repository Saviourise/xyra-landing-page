import { Container, Button } from "./primitives";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function PageHero({
  eyebrow,
  title,
  lead,
  image,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-night pt-[76px]">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-r from-night via-night/82 to-night/45" aria-hidden />
      <div className="absolute inset-0 bg-linear-to-t from-night/35 via-transparent to-transparent" aria-hidden />

      <Container className="relative">
        <div className="max-w-3xl py-24 md:py-32 lg:py-36">
          <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
            {eyebrow}
          </span>
          <span className="mt-3 block h-px w-10 bg-white/30" />
          <h1 className="mt-7 max-w-2xl text-[2.9rem] font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-[3.7rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
            {lead}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              {primaryCta && (
                <Button href={primaryCta.href} variant="onDark">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="onDarkOutline">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
