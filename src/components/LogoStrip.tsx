import { Container } from "./primitives";

const LOGOS = [
  "Fireflies.ai",
  "Otter.ai",
  "Claude.ai",
  "Google Workspace",
  "Microsoft 365",
  "WhatsApp",
  "Gmail",
  "Outlook",
  "Google meet",
  "OpenAI",
];

export default function LogoStrip() {
  return (
    <section className="border-b border-line bg-white py-10">
      <Container>
        <p className="font-ui text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-3">
          Powered by the tools your team already trusts
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {LOGOS.map((name) => (
            <span
              key={name}
              className="text-lg font-semibold tracking-tight text-ink/40 transition-colors hover:text-ink"
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
