import { Container, Reveal, SectionHeading } from "@/components/ui";
import { ShieldIcon, ClockIcon, PillIcon, ChatIcon } from "@/components/icons";

const features = [
  {
    icon: ShieldIcon,
    title: "100% genuine medicine",
    body: "Every medicine is sourced through verified suppliers and checked by a licensed pharmacist before it leaves the counter.",
  },
  {
    icon: ClockIcon,
    title: "30-minute delivery",
    body: "Five branches placed across Lahore means we're always close by — most orders arrive in half an hour or less.",
  },
  {
    icon: ChatIcon,
    title: "Talk to a real pharmacist",
    body: "Unsure about a dose or an interaction? Ask us right there on WhatsApp. Real advice from qualified staff.",
  },
  {
    icon: PillIcon,
    title: "Everything in one place",
    body: "Prescription medicines, everyday health essentials, baby care and more — order it all in a single chat.",
  },
];

export function Features() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Why Alchemist"
              title="A pharmacy that comes to you — without cutting corners"
              intro="Fast doesn't mean careless. We pair genuine medicine and qualified pharmacists with delivery that actually respects your time."
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal
                key={f.title}
                as="article"
                delay={i * 90}
                className="group rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-100)] hover:shadow-[var(--shadow-md)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--brand-50)] text-[var(--brand-600)] transition-colors group-hover:bg-[var(--brand-100)]">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-[1.12rem] font-semibold text-ink">{f.title}</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-ink-muted">{f.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
