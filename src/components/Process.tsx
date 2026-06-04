import { Parallax } from "react-scroll-parallax";
import { Check } from "lucide-react";
import { Container, Reveal, Eyebrow } from "./primitives";

type Step = {
  n: string;
  img: string;
  title: string;
  desc: string;
  points: string[];
};

const STEPS: Step[] = [
  {
    n: "01",
    img: "/images/step-define.jpg",
    title: "Define",
    desc: "Describe your ideal customer in plain English and let Xyra translate intent into precise targeting parameters - no filters, no setup.",
    points: ["Plain-English brief", "AI intent parsing"],
  },
  {
    n: "02",
    img: "/images/step-fetch.jpg",
    title: "Fetch",
    desc: "Xyra sources prospects from verified data sources, de-duplicates them, and verifies every email before it ever reaches your CRM.",
    points: ["Verified lead sourcing", "0% bounce target"],
  },
  {
    n: "03",
    img: "/images/step-generate.jpg",
    title: "Generate",
    desc: "AI drafts 1-to-1 cold emails and social content from each lead's metadata - ready for you to review, edit, and queue into a sequence.",
    points: ["Personalized at scale", "Edit & approve"],
  },
  {
    n: "04",
    img: "/images/step-close.jpg",
    title: "Close",
    desc: "Campaigns launch on schedule while analytics track every open, click, and reply - so your team can focus on closing the deal.",
    points: ["Automated follow-ups", "Real-time analytics"],
  },
];

export default function Process() {
  return (
    <section id="process" className="overflow-hidden border-t border-line bg-white py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>How it works</Eyebrow>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-8 text-[2.4rem] font-semibold leading-[1.08] text-ink sm:text-[3rem]">
              From a sentence to a signed deal.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-3">
              Four steps. One dashboard. Your outreach, fully on autopilot.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 space-y-24 md:space-y-32">
          {STEPS.map((step, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={step.n}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                {/* Image with parallax drift */}
                <div className={flip ? "lg:order-2" : ""}>
                  <div className="relative overflow-hidden rounded-[4px]">
                    <Parallax speed={i % 2 === 0 ? -8 : -4} className="will-change-transform">
                      <div className="relative aspect-4/3 w-full">
                        <img
                          src={step.img}
                          alt={step.title}
                          className="absolute inset-0 h-[112%] w-full translate-y-[-6%] object-cover"
                        />
                      </div>
                    </Parallax>
                    {/* large step number badge */}
                    <span className="font-display absolute left-5 top-4 text-[5rem] font-bold leading-none text-white/85 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
                      {step.n}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <Reveal className={flip ? "lg:order-1" : ""}>
                  <div className="font-ui text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-3">
                    Step {step.n}
                  </div>
                  <span className="mt-3 block h-px w-10 bg-ink/25" />
                  <h3 className="mt-6 text-[2rem] font-semibold tracking-[-0.01em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-md text-[16px] leading-relaxed text-ink-3">
                    {step.desc}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                    {step.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-ink/20 text-ink">
                          <Check size={12} strokeWidth={2.5} />
                        </span>
                        <span className="text-[14px] font-medium text-ink-2">
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
