import { Container, Reveal, SectionHeading } from "@/components/ui";
import { CameraIcon, WhatsAppIcon, ScooterIcon } from "@/components/icons";

const steps = [
  {
    icon: CameraIcon,
    title: "Snap your prescription",
    body: "Take a clear photo of your doctor's prescription — or just tell us the medicines you need.",
  },
  {
    icon: WhatsAppIcon,
    title: "Send it on WhatsApp",
    body: "One tap opens a chat with your nearest branch. Send the photo and confirm your address.",
  },
  {
    icon: ScooterIcon,
    title: "Delivered in 30 minutes",
    body: "A pharmacist checks your order and a rider brings it to your door — genuine and sealed.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          center
          eyebrow="How it works"
          title="Medicine at your door in three simple steps"
          intro="No queues, no phone-tag, no waiting. From prescription to doorstep in half an hour."
        />

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* connecting line */}
          <div
            className="pointer-events-none absolute left-[16%] right-[16%] top-9 hidden h-px md:block"
            style={{
              background:
                "repeating-linear-gradient(to right, var(--line-strong) 0 8px, transparent 8px 16px)",
            }}
            aria-hidden
          />
          {steps.map((s, i) => (
            <Reveal
              key={s.title}
              as="article"
              delay={i * 120}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative grid h-[72px] w-[72px] place-items-center rounded-2xl border border-[var(--line)] bg-[var(--surface)] text-[var(--brand-600)] shadow-[var(--shadow-sm)]">
                <s.icon className="h-8 w-8" />
                <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-[var(--brand-600)] text-[0.8rem] font-semibold text-white shadow-[var(--shadow-sm)]">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-[1.2rem] font-semibold text-ink">{s.title}</h3>
              <p className="mt-2.5 max-w-xs text-[0.95rem] leading-relaxed text-ink-muted">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
