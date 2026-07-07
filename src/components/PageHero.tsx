import { Container } from "@/components/ui";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--line)] py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
      <Container className="relative">
        <div className="max-w-2xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-4 text-[clamp(2.1rem,5vw,3.2rem)] font-semibold text-ink">
            {title}
          </h1>
          <p className="mt-5 text-[1.1rem] leading-relaxed text-ink-body">{intro}</p>
        </div>
      </Container>
    </section>
  );
}
