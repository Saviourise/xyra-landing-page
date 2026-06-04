import { Fragment, useEffect, useRef } from "react";
import {
  Parallax,
  ParallaxLayer,
  type IParallax,
} from "@react-spring/parallax";
import { Check, ArrowDown } from "lucide-react";
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
    desc: "Describe your ideal customer in plain English and let Xyra translate intent into precise targeting parameters — no filters, no setup.",
    points: ["Plain-English brief", "AI intent parsing"],
  },
  {
    n: "02",
    img: "/images/step-fetch.jpg",
    title: "Fetch",
    desc: "Xyra sources prospects from Apollo.io and Hunter.io, de-duplicates them, and verifies every email before it ever reaches your CRM.",
    points: ["Verified lead sourcing", "0% bounce target"],
  },
  {
    n: "03",
    img: "/images/step-generate.jpg",
    title: "Generate",
    desc: "AI drafts 1-to-1 cold emails and social content from each lead's metadata — ready for you to review, edit, and queue into a sequence.",
    points: ["Personalized at scale", "Edit & approve"],
  },
  {
    n: "04",
    img: "/images/step-close.jpg",
    title: "Close",
    desc: "Campaigns launch on schedule while analytics track every open, click, and reply — so your team can focus on closing the deal.",
    points: ["Automated follow-ups", "Real-time analytics"],
  },
];

/* White overlay text shown on top of the full-bleed step image. */
function StepContent({ step }: { step: Step }) {
  return (
    <div className="max-w-lg">
      <div className="font-ui text-[11px] font-semibold uppercase tracking-[0.22em] text-white/65">
        Step {step.n}
      </div>
      <span className="mt-3 block h-px w-10 bg-white/35" />
      <h3 className="mt-6 text-[2.8rem] font-semibold leading-[1.02] tracking-[-0.02em] text-white sm:text-[3.4rem]">
        {step.title}
      </h3>
      <p className="mt-5 text-[17px] leading-relaxed text-white/75">
        {step.desc}
      </p>
      <ul className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
        {step.points.map((p) => (
          <li key={p} className="flex items-center gap-2.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/40 text-white">
              <Check size={12} strokeWidth={2.5} />
            </span>
            <span className="text-[14px] font-medium text-white/90">{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<IParallax>(null);

  /* Drive the parallax's internal scroll from the WINDOW scroll, so the effect
     scrubs naturally as you scroll the whole page (the section is pinned via
     position: sticky while its tall wrapper scrolls past). */
  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      const p = parallaxRef.current;
      const container = p?.container.current as HTMLElement | undefined;
      if (!section || !container) return;

      const range = section.offsetHeight - window.innerHeight;
      const scrolled = Math.min(
        Math.max(-section.getBoundingClientRect().top, 0),
        range,
      );
      const progress = range > 0 ? scrolled / range : 0;
      container.scrollTop =
        progress * (container.scrollHeight - container.clientHeight);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="process" className="bg-night">
      {/* ── Desktop: window-scroll-driven, pinned react-spring parallax ── */}
      <div
        ref={sectionRef}
        className="relative hidden lg:block"
        style={{ height: `${STEPS.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <Parallax pages={STEPS.length} ref={parallaxRef} className="parallax-pinned">
            {STEPS.map((step, i) => {
              const flip = i % 2 === 1;
              return (
                <Fragment key={step.n}>
                  {/* Full-bleed image, fills the whole section */}
                  <ParallaxLayer offset={i} speed={0}>
                    <img
                      src={step.img}
                      alt={step.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-night/65" aria-hidden />
                  </ParallaxLayer>

                  {/* Giant watermark number — drifts (deep layer) */}
                  <ParallaxLayer offset={i} speed={0.5} className="pointer-events-none">
                    <Container className="flex h-full items-center">
                      <span
                        className={`font-display select-none text-[26vw] font-bold leading-none text-white/[0.06] ${
                          flip ? "ml-auto" : ""
                        }`}
                      >
                        {step.n}
                      </span>
                    </Container>
                  </ParallaxLayer>

                  {/* Overlay text — drifts faster (foreground parallax) */}
                  <ParallaxLayer offset={i} speed={0.28}>
                    <Container
                      className={`flex h-full items-center ${
                        flip ? "justify-end text-left" : ""
                      }`}
                    >
                      <StepContent step={step} />
                    </Container>
                  </ParallaxLayer>
                </Fragment>
              );
            })}

            {/* Scroll cue on the first page */}
            <ParallaxLayer offset={0} speed={0.1} className="pointer-events-none">
              <div className="font-ui absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
                Scroll to explore
                <ArrowDown size={13} className="animate-bounce" />
              </div>
            </ParallaxLayer>
          </Parallax>
        </div>
      </div>

      {/* ── Mobile: stacked full-bleed step cards ── */}
      <div className="lg:hidden">
        <Container>
          <div className="pt-20 pb-8">
            <Reveal>
              <Eyebrow light>How it works</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="mt-8 text-[2rem] font-semibold leading-[1.1] text-white">
                From a sentence to a signed deal.
              </h2>
            </Reveal>
          </div>
        </Container>

        <div className="space-y-4 pb-16">
          {STEPS.map((step) => (
            <div key={step.n} className="relative min-h-[80vh] overflow-hidden">
              <img
                src={step.img}
                alt={step.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-night/65" aria-hidden />
              <Container className="relative flex min-h-[80vh] items-end py-12">
                <StepContent step={step} />
              </Container>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
