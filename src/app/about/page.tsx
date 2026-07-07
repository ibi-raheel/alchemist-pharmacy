import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container, Reveal, SectionHeading } from "@/components/ui";
import { Placeholder } from "@/components/Placeholder";
import { Team } from "@/components/Team";
import { Stats } from "@/components/Stats";
import { CtaBand } from "@/components/CtaBand";
import { ShieldIcon, ClockIcon, ChatIcon, CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Alchemist Pharmacy blends genuine medicine, qualified pharmacists and 30-minute home delivery to make healthcare in Lahore simpler and faster.",
};

const values = [
  {
    icon: ShieldIcon,
    title: "Safety first",
    body: "Every order is verified by a licensed pharmacist. We only dispense genuine, correctly-stored medicine.",
  },
  {
    icon: ClockIcon,
    title: "Respect your time",
    body: "Illness is stressful enough. Our whole model is built to get you sorted in 30 minutes, not hours.",
  },
  {
    icon: ChatIcon,
    title: "Always approachable",
    body: "A friendly pharmacist is one WhatsApp message away for any question, big or small.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="Healthcare that comes to your door"
        intro="Alchemist Pharmacy started with a simple belief: getting your medicine should be quick, genuine and kind. Today we deliver that across Lahore, one prescription at a time."
      />

      {/* Story + image */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                eyebrow="Why we exist"
                title="Built around people, not queues"
              />
              <div className="mt-5 space-y-4 text-[1.02rem] leading-relaxed text-ink-body">
                <p>
                  Too often, getting medicine means leaving a sick family member,
                  driving across town, and waiting in line. We thought it should
                  be the other way around — the pharmacy should come to you.
                </p>
                <p>
                  So we built a network of neighbourhood branches, each staffed by
                  qualified pharmacists and backed by fast local riders. You send a
                  photo of your prescription on WhatsApp; we check it, pack it, and
                  deliver it in about 30 minutes.
                </p>
                <p>
                  No apps to download, no forms to fill. Just a quick message to
                  people who know medicine and care about getting it right.
                </p>
              </div>
              <ul className="mt-7 space-y-3">
                {[
                  "Licensed pharmacists on every order",
                  "Genuine medicine, properly stored",
                  "Open 7 days a week, late into the night",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-[0.98rem] text-ink-body">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--brand-50)] text-[var(--brand-600)]">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <Placeholder
                label="Inside an Alchemist Pharmacy branch"
                ratio="4 / 3"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-8">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                as="article"
                delay={i * 90}
                className="rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--surface)] p-7 shadow-[var(--shadow-sm)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--brand-50)] text-[var(--brand-600)]">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-[1.15rem] font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-[0.94rem] leading-relaxed text-ink-muted">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <div className="pt-12">
        <Stats />
      </div>

      <Team />
      <CtaBand />
    </>
  );
}
