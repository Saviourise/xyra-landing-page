import { Container, Reveal, Eyebrow } from "./primitives";

const CASES = [
  {
    img: "/images/case-analytics.jpg",
    title: "Outbound at scale",
    desc: "How a B2B sales team replaced manual prospecting with AI sourcing - and verified 10,000 leads in a week.",
  },
  {
    img: "/images/case-growth.jpg",
    title: "From cold to closed",
    desc: "A growing tech firm used AI-personalized sequences to lift reply rates and shorten its sales cycle.",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <Reveal>
          <Eyebrow>Case studies</Eyebrow>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {CASES.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div
                className="group min-h-[300px] max-w-full relative block sm:aspect-4/3 overflow-hidden rounded-[3px]"
              >
                <img
                  src={c.img}
                  alt={c.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-night/55 transition-colors duration-300 group-hover:bg-night/65" aria-hidden />
                <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
                  <h3 className="text-[2rem] font-semibold tracking-[-0.01em] text-white">
                    {c.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-white/75">
                    {c.desc}
                  </p>
                  {/* <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-white">
                    View case study
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span> */}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
