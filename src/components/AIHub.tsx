import { ArrowRight } from "lucide-react";
import { Container, Reveal, Eyebrow } from "./primitives";

const ITEMS = [
  {
    kicker: "AI Video & Social",
    title: "Create short-form video from a script — then auto-post it.",
    desc: "Turn a few lines of text into ready-to-publish vertical and horizontal video with voiceover, then schedule to LinkedIn, Meta, X and TikTok at peak times.",
  },
  {
    kicker: "AI Voice Agents",
    title: "Outbound calls that listen, adapt, and log themselves.",
    desc: "Deploy AI voice agents for follow-ups and qualification, with real-time sentiment detection guiding the conversation and every outcome logged automatically.",
  },
  {
    kicker: "Predictive Lead Scoring",
    title: "Rank every lead 0–100 and know the next best action.",
    desc: "Xyra analyzes historical conversion behavior to score each contact and surface the single best next step — so your team always works the deals most likely to close.",
  },
];

export default function AIHub() {
  return (
    <section id="ai-hub" className="border-t border-line bg-bg-soft py-24 md:py-32">
      <Container>
        <Reveal>
          <Eyebrow>Premium AI Hub</Eyebrow>
        </Reveal>

        <Reveal delay={60}>
          <h2 className="mt-8 max-w-2xl text-[2.4rem] font-semibold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[3rem]">
            Beyond email — a complete AI workforce.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.kicker} delay={i * 90}>
              <div className="font-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-3">
                {item.kicker}
              </div>
              <span className="mt-3 block h-px w-10 bg-ink/25" />
              <h3 className="mt-6 text-[1.5rem] font-normal leading-snug tracking-[-0.01em] text-ink">
                {item.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-3">
                {item.desc}
              </p>
              <a
                href="#pricing"
                className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-ink underline-offset-4 hover:underline"
              >
                Learn more
                <ArrowRight size={15} />
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
