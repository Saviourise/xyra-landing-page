import { ChevronDown } from "lucide-react";
import { FAQS } from "../content/site";
import { AppLink } from "../lib/navigation";
import { routes } from "../lib/routes";
import { Button, Container, Eyebrow, Reveal } from "./primitives";

type FAQSectionProps = {
  title?: string;
  lead?: string;
  compact?: boolean;
};

export default function FAQSection({
  title = "Frequently asked questions",
  lead = "Answers to the questions teams usually ask before they decide whether to start with Xyra.",
  compact = false,
}: FAQSectionProps) {
  return (
    <section className={compact ? "bg-bg-soft py-24 md:py-32" : "bg-white py-24 md:py-32"}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[80px_minmax(0,1fr)] lg:gap-10">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="max-w-2xl text-[2.4rem] font-semibold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[3rem]">
                {title}
              </h2>
              <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink-3">
                {lead}
              </p>
            </Reveal>

            <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line">
              {FAQS.map((item, index) => (
                <Reveal
                  key={item.question}
                  delay={index * 50}
                  className="bg-white p-0"
                >
                  <details className="group p-8 sm:p-9">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                      <span className="text-left text-[1.1rem] font-semibold tracking-[-0.01em] text-ink sm:text-[1.25rem]">
                        {item.question}
                      </span>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-bg-soft text-ink transition-transform duration-200 group-open:rotate-180">
                        <ChevronDown size={16} />
                      </span>
                    </summary>
                    <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-3">
                      {item.answer}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>


          </div>
        </div>
      </Container>
    </section>
  );
}
