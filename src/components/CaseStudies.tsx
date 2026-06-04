import { CASE_STUDIES } from "../content/site";
import { AppLink } from "../lib/navigation";
import { routes } from "../lib/routes";
import { Container, Reveal, Eyebrow } from "./primitives";
import { ArrowRight } from "lucide-react";

export default function CaseStudies() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <Reveal>
          <Eyebrow>Case studies</Eyebrow>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {CASE_STUDIES.map((study, i) => (
            <Reveal key={study.id} delay={i * 100}>
              <AppLink
                href={`${routes.caseStudies}#${study.id}`}
                className="group relative block min-h-[300px] max-w-full overflow-hidden rounded-[3px] sm:aspect-4/3"
              >
                <img
                  src={study.img}
                  alt={study.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-night/55 transition-colors duration-300 group-hover:bg-night/65" aria-hidden />
                <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
                  <h3 className="text-[2rem] font-semibold tracking-[-0.01em] text-white">
                    {study.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-white/75">
                    {study.desc}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-white">
                    Read more
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>

                </div>
              </AppLink>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
