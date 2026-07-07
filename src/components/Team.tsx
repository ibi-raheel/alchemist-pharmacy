import { Container, Reveal, SectionHeading } from "@/components/ui";
import { Placeholder } from "./Placeholder";

/**
 * Pharmacist team. Replace each <Placeholder /> with the real photo
 * (keep ratio "4 / 5") once photos arrive — no layout will shift.
 */
const team = [
  { name: "Pharmacist name", role: "Chief Pharmacist", branch: "G.T. Road" },
  { name: "Pharmacist name", role: "Pharmacist", branch: "Johar Town" },
  { name: "Pharmacist name", role: "Pharmacist", branch: "Allama Iqbal Town" },
  { name: "Pharmacist name", role: "Pharmacist", branch: "Thokar Niaz Baig" },
];

export function Team() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          center
          eyebrow="The people behind your prescription"
          title="Qualified pharmacists you can actually talk to"
          intro="Every order is checked by a licensed professional. Meet some of the team looking after your health."
        />

        <div className="mt-14 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={i} as="article" delay={i * 90} className="group">
              <div className="overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] transition-shadow duration-300 group-hover:shadow-[var(--shadow-md)]">
                <Placeholder label={`${m.role} — ${m.branch}`} ratio="4 / 5" rounded="0" />
              </div>
              <div className="mt-4">
                <p className="font-semibold text-ink">{m.name}</p>
                <p className="text-[0.88rem] text-[var(--brand-700)]">{m.role}</p>
                <p className="text-[0.82rem] text-ink-muted">{m.branch}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
