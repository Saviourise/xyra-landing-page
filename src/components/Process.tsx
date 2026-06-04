import { useEffect, useRef, useState } from "react";
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

const CROSSFADE = 0.62;
const LAST_INDEX = STEPS.length - 1;
/** One unit per step (0→4 for 4 steps) so the last step gets its own scroll band before exit */
const STEP_FLOAT_MAX = STEPS.length;
const LAST_STEP_HOLD_PAGES = 0.1;
const EXIT_PAGES = 1;
/** Slight extra hold on the last step, then one viewport for the slide-out to the next section. */
const SCROLL_PAGES = STEP_FLOAT_MAX + LAST_STEP_HOLD_PAGES + EXIT_PAGES;

const easeInOut = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/**
 * Overlapping ramps so adjacent steps are never both at opacity 0.
 */
function stepOpacity(stepFloat: number, index: number): number {
  if (index === 0) {
    if (stepFloat >= 1 + CROSSFADE / 2) return 0;
    if (stepFloat <= 1 - CROSSFADE / 2) return 1;
    const t = (stepFloat - (1 - CROSSFADE / 2)) / CROSSFADE;
    return 1 - easeInOut(t);
  }

  if (index === LAST_INDEX) {
    if (stepFloat <= index - CROSSFADE / 2) return 0;
    if (stepFloat >= index + CROSSFADE / 2) return 1;
    const t = (stepFloat - (index - CROSSFADE / 2)) / CROSSFADE;
    return easeInOut(t);
  }

  const center = index + 0.5;
  const halfWindow = 0.5 + CROSSFADE / 2;
  const dist = Math.abs(stepFloat - center);
  if (dist >= halfWindow) return 0;

  const holdRadius = 0.5 - CROSSFADE / 2;
  if (holdRadius > 0 && dist <= holdRadius) return 1;

  const fade = (dist - holdRadius) / (halfWindow - holdRadius);
  return easeInOut(1 - fade);
}

const PARALLAX_CAP = 8;

function parallaxY(stepFloat: number, index: number, speed: number): number {
  const local = stepFloat - (index + 0.5);
  const half = 0.5 + CROSSFADE / 2;
  if (Math.abs(local) > half) return 0;
  const raw = local * speed * 1.4;
  return Math.max(-PARALLAX_CAP, Math.min(PARALLAX_CAP, raw));
}

function stepScale(stepFloat: number, index: number): number {
  const opacity = stepOpacity(stepFloat, index);
  return 1.08 + (1 - opacity) * 0.04;
}

type ScrollScene = {
  stepFloat: number;
  /** Slides with section top on enter, section bottom on exit (mirror behaviour) */
  panelTop: number;
  panelOpacity: number;
  visible: boolean;
};

function measureScene(section: HTMLElement): ScrollScene {
  const rect = section.getBoundingClientRect();
  const vh = window.innerHeight;

  if (rect.bottom <= 0 || rect.top >= vh) {
    return { stepFloat: 0, panelTop: 0, panelOpacity: 0, visible: false };
  }

  if (rect.top > 0) {
    return { stepFloat: 0, panelTop: rect.top, panelOpacity: 1, visible: true };
  }

  const scrolled = Math.max(-rect.top, 0);
  /* Last viewport is slide-out only; parallax 0→4 finishes one vh earlier */
  const parallaxScroll = Math.max(STEP_FLOAT_MAX * vh, 1);
  const stepFloat = Math.min(
    (scrolled / parallaxScroll) * STEP_FLOAT_MAX,
    STEP_FLOAT_MAX,
  );
  const panelTop = Math.min(0, rect.bottom - vh);
  const exitProgress = Math.min(Math.max(-panelTop / vh, 0), 1);
  const panelOpacity = 1 - easeInOut(exitProgress);

  return { stepFloat, panelTop, panelOpacity, visible: true };
}

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
  const [scene, setScene] = useState<ScrollScene>({
    stepFloat: 0,
    panelTop: 0,
    panelOpacity: 0,
    visible: false,
  });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const section = sectionRef.current;
      if (!section) return;
      setScene(measureScene(section));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const { stepFloat, panelTop, panelOpacity, visible } = scene;
  const activeIndex = Math.min(
    Math.max(Math.floor(stepFloat + 0.2), 0),
    LAST_INDEX,
  );
  const isEntering = panelTop > 0;
  const isExiting = panelTop < 0;
  const showScrollCue =
    stepFloat < 0.35 && panelTop === 0 && !isEntering && !isExiting;

  return (
    <section id="process" className="relative bg-night">
      {/* Tall track — desktop only */}
      <div
        ref={sectionRef}
        className="relative hidden bg-night lg:block"
        style={{ height: `${SCROLL_PAGES * 100}vh` }}
        aria-hidden
      />

      {/* Panel mirrors section top on enter, section bottom on exit */}
      <div
        className="pointer-events-none fixed inset-x-0 z-20 hidden h-screen overflow-hidden bg-night lg:block"
        style={{
          top: panelTop,
          opacity: panelOpacity,
          visibility: visible ? "visible" : "hidden",
        }}
        aria-hidden={!visible}
      >
        {STEPS.map((step, i) => {
          const flip = i % 2 === 1;
          const opacity = reducedMotion
            ? i === activeIndex
              ? 1
              : 0
            : stepOpacity(stepFloat, i);

          const imgY = parallaxY(stepFloat, i, 12);
          const numY = parallaxY(stepFloat, i, 6);
          const textY = parallaxY(stepFloat, i, 20);
          const scale = stepScale(stepFloat, i);

          return (
            <div
              key={step.n}
              className="absolute inset-0"
              style={{
                opacity,
                zIndex: Math.round(opacity * 20) + i,
                willChange: "opacity, transform",
                pointerEvents: opacity > 0.5 ? "auto" : "none",
              }}
              aria-hidden={opacity < 0.5}
            >
              <div className="absolute inset-0 overflow-hidden bg-night">
                <div
                  className="absolute left-0 w-full h-[130%] top-[-15%]"
                  style={{
                    transform: `translate3d(0, ${imgY}vh, 0) scale(${scale})`,
                  }}
                >
                  <img
                    src={step.img}
                    alt={i === activeIndex ? step.title : ""}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-night/65" />
              </div>

              <div
                className="absolute inset-0"
                style={{ transform: `translate3d(0, ${numY}vh, 0)` }}
              >
                <Container className="flex h-full items-center">
                  <span
                    className={`font-display select-none text-[26vw] font-bold leading-none text-white/6 ${flip ? "ml-auto" : ""
                      }`}
                  >
                    {step.n}
                  </span>
                </Container>
              </div>

              <div
                className="absolute inset-0"
                style={{ transform: `translate3d(0, ${textY}vh, 0)` }}
              >
                <Container
                  className={`flex h-full items-center ${flip ? "justify-end text-left" : ""
                    }`}
                >
                  <StepContent step={step} />
                </Container>
              </div>
            </div>
          );
        })}

        {showScrollCue && !reducedMotion && (
          <div className="font-ui pointer-events-none absolute bottom-10 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
            Scroll to explore
            <ArrowDown size={13} className="animate-bounce" />
          </div>
        )}

        <div
          className="pointer-events-none absolute right-8 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 xl:flex"
          aria-hidden
        >
          {STEPS.map((step, i) => (
            <span
              key={step.n}
              className={`h-8 w-px origin-center transition-[transform,background-color] duration-200 ${i === activeIndex
                ? "scale-y-100 bg-white/80"
                : "scale-y-[0.35] bg-white/25"
                }`}
            />
          ))}
        </div>
      </div>

      {/* ── Mobile: stacked full-bleed step cards ── */}
      <div className="bg-night lg:hidden">
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
