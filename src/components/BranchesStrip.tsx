import Link from "next/link";
import { Container, Reveal, SectionHeading } from "@/components/ui";
import { PinIcon, ClockIcon, ArrowIcon } from "@/components/icons";
import { branches, mapsLink } from "@/lib/site";

export function BranchesStrip({ showAll = false }: { showAll?: boolean }) {
  const list = showAll ? branches : branches.slice(0, 3);

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Find us"
            title="Five branches, always nearby"
            intro="Wherever you are in Lahore, there's an Alchemist close enough for 30-minute delivery."
          />
          {!showAll && (
            <Link
              href="/branches"
              className="group inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-[var(--brand-700)]"
            >
              View all branches
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((b, i) => (
            <Reveal
              key={b.slug}
              as="article"
              delay={i * 80}
              className="group flex flex-col rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--brand-50)] text-[var(--brand-600)]">
                <PinIcon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-[1.18rem] font-semibold text-ink">{b.name}</h3>
              <p className="mt-1.5 text-[0.92rem] text-ink-muted">{b.address}</p>
              <p className="mt-4 flex items-center gap-2 text-[0.85rem] text-ink-body">
                <ClockIcon className="h-4 w-4 text-[var(--brand-600)]" />
                {b.hours}
              </p>
              <a
                href={mapsLink(b.mapsQuery)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-[var(--brand-700)]"
              >
                Get directions
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
