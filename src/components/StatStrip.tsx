import { Container, Reveal } from "./primitives";

type Stat = {
  value: string;
  label: string;
};

export default function StatStrip({ stats }: { stats: Stat[] }) {
  return (
    <section className="border-y border-line bg-white">
      <Container>
        <div className="grid gap-px bg-line md:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 70}
              className="bg-white px-7 py-10 sm:px-10"
            >
              <div className="text-[2.2rem] font-semibold tracking-[-0.03em] text-ink">
                {stat.value}
              </div>
              <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-ink-3">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
