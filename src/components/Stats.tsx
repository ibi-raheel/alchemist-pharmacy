import { Container, Reveal } from "@/components/ui";
import { CountUp } from "@/components/CountUp";
import { stats } from "@/lib/site";

export function Stats() {
  return (
    <section className="py-6">
      <Container>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--line)] shadow-[var(--shadow-sm)] md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className="bg-[var(--surface)] px-6 py-8 text-center"
            >
              <p className="font-[var(--font-display)] text-[2.4rem] font-semibold leading-none text-[var(--brand-600)]">
                <CountUp value={Number(s.value)} />
                <span className="text-[1.4rem] text-[var(--brand-500)]">{s.suffix}</span>
              </p>
              <p className="mt-2 text-[0.88rem] text-ink-muted">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
