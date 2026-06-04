import { Container, Reveal, Eyebrow } from "./primitives";

type EditorialProps = {
  id?: string;
  label: string;
  heading: string;
  lead: string;
  body: string[];
};

/* Two-column editorial block: short label + large light headline on the left,
   justified body copy on the right. Mirrors the consulting reference. */
export default function Editorial({
  id,
  label,
  heading,
  lead,
  body,
}: EditorialProps) {
  return (
    <section id={id} className="bg-white py-24 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[80px_minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
          <Reveal>
            <Eyebrow>{label}</Eyebrow>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="text-[2.4rem] font-semibold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[3rem]">
              {heading}
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-6">
              <p className="text-justify text-[19px] leading-relaxed text-ink">
                {lead}
              </p>
              {body.map((p, i) => (
                <p key={i} className="text-justify text-[15px] leading-relaxed text-ink-3">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
