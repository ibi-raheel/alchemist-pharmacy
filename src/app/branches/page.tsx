import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container, Reveal, Button } from "@/components/ui";
import { BranchMap } from "@/components/BranchMap";
import { CtaBand } from "@/components/CtaBand";
import { StructuredData } from "@/components/StructuredData";
import { PinIcon, ClockIcon, ArrowIcon, WhatsAppIcon } from "@/components/icons";
import { branches, mapsLink, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Branches",
  description:
    "Alchemist Pharmacy branches across Lahore — G.T. Road, Thokar Niaz Baig, Allama Iqbal Town and Johar Town. 30-minute delivery from every location.",
};

export default function BranchesPage() {
  return (
    <>
      <StructuredData />
      <PageHero
        eyebrow="Find us"
        title="Five branches across Lahore"
        intro="Each branch is a fully-stocked pharmacy with qualified staff and its own delivery riders — so wherever you are, help is 30 minutes away."
      />

      <BranchMap />

      <section className="border-t border-[var(--line)] py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {branches.map((b, i) => (
              <Reveal
                key={b.slug}
                as="article"
                delay={i * 70}
                className="group flex flex-col rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--brand-50)] text-[var(--brand-600)]">
                    <PinIcon className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-[var(--brand-50)] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-wide text-[var(--brand-700)]">
                    Open now
                  </span>
                </div>
                <h2 className="mt-5 text-[1.25rem] font-semibold text-ink">{b.name}</h2>
                <p className="mt-1.5 flex-1 text-[0.92rem] leading-relaxed text-ink-muted">
                  {b.address}
                </p>
                <p className="mt-4 flex items-center gap-2 text-[0.85rem] text-ink-body">
                  <ClockIcon className="h-4 w-4 text-[var(--brand-600)]" />
                  {b.hours}
                </p>

                <div className="mt-6 flex items-center gap-2">
                  <a
                    href={mapsLink(b.mapsQuery)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-[var(--line-strong)] px-4 py-2.5 text-[0.85rem] font-semibold text-ink transition hover:border-[var(--brand-600)] hover:text-[var(--brand-700)]"
                  >
                    Directions
                    <ArrowIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={waLink(
                      `Hi Alchemist Pharmacy 👋 I'd like delivery from your ${b.name} branch. Here's my prescription:`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Order from ${b.name} on WhatsApp`}
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--wa)] text-white transition hover:brightness-105"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                  </a>
                </div>
              </Reveal>
            ))}

            {/* Franchise / new branch card */}
            <Reveal
              as="article"
              delay={branches.length * 70}
              className="flex flex-col justify-center rounded-[var(--radius-lg)] border border-dashed border-[var(--line-strong)] bg-[var(--surface-2)] p-6 text-center"
            >
              <h3 className="text-[1.1rem] font-semibold text-ink">
                Want Alchemist in your area?
              </h3>
              <p className="mt-2 text-[0.9rem] text-ink-muted">
                We&apos;re expanding across Lahore. Enquire about opening a franchise branch.
              </p>
              <div className="mt-5 flex justify-center">
                <Button href="/contact" variant="outline">
                  Franchise enquiry
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
