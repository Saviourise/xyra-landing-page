import { Container, Reveal, Button } from "./primitives";

type PageCTAProps = {
  image: string;
  eyebrow: string;
  title: string;
  lead: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export default function PageCTA({
  image,
  eyebrow,
  title,
  lead,
  primary,
  secondary,
}: PageCTAProps) {
  return (
    <section className="relative overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-night/82" aria-hidden />
      <div className="absolute inset-0 bg-linear-to-t from-night/40 via-transparent to-transparent" aria-hidden />

      <Container className="relative">
        <div className="max-w-2xl py-28 md:py-36">
          <Reveal>
            <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
              {eyebrow}
            </span>
            <span className="mt-3 block h-px w-10 bg-white/30" />
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-7 text-[2.6rem] font-semibold leading-[1.06] tracking-[-0.02em] text-white sm:text-[3.5rem]">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-white/65">
              {lead}
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={primary.href} variant="onDark">
                {primary.label}
              </Button>
              {secondary && (
                <Button href={secondary.href} variant="onDarkOutline">
                  {secondary.label}
                </Button>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
