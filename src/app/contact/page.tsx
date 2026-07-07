import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container, Reveal } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppIcon, PhoneIcon, ClockIcon, PinIcon } from "@/components/icons";
import { site, branches, waLink, mapsLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Alchemist Pharmacy. Order on WhatsApp, call us, or find your nearest branch in Lahore for 30-minute medicine delivery.",
};

export default function ContactPage() {
  const contactItems = [
    {
      icon: WhatsAppIcon,
      label: "WhatsApp",
      value: site.phoneDisplay,
      href: waLink(),
      accent: true,
    },
    {
      icon: PhoneIcon,
      label: "Call us",
      value: site.phoneDisplay,
      href: site.phoneTel,
    },
    {
      icon: ClockIcon,
      label: "Hours",
      value: "9:00 AM – 2:00 AM, every day",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We're a message away"
        intro="The fastest way to reach us is WhatsApp — send your prescription and we'll take it from there. Prefer to call or visit? Everything you need is below."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left: contact details */}
            <div>
              <div className="space-y-3">
                {contactItems.map((c) => {
                  const Inner = (
                    <div
                      className={`flex items-center gap-4 rounded-[var(--radius)] border p-5 transition ${
                        c.accent
                          ? "border-[var(--wa)]/30 bg-[var(--wa)]/[0.06]"
                          : "border-[var(--line)] bg-[var(--surface)]"
                      }`}
                    >
                      <span
                        className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${
                          c.accent
                            ? "bg-[var(--wa)] text-white"
                            : "bg-[var(--brand-50)] text-[var(--brand-600)]"
                        }`}
                      >
                        <c.icon className="h-6 w-6" />
                      </span>
                      <div>
                        <p className="text-[0.78rem] font-semibold uppercase tracking-wide text-ink-muted">
                          {c.label}
                        </p>
                        <p className="text-[1.05rem] font-medium text-ink">{c.value}</p>
                      </div>
                    </div>
                  );
                  return c.href ? (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {Inner}
                    </a>
                  ) : (
                    <div key={c.label}>{Inner}</div>
                  );
                })}
              </div>

              {/* Branch quick list */}
              <h2 className="mt-10 text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-ink-muted">
                Visit a branch
              </h2>
              <ul className="mt-4 space-y-2">
                {branches.map((b) => (
                  <li key={b.slug}>
                    <a
                      href={mapsLink(b.mapsQuery)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 transition hover:border-[var(--brand-100)]"
                    >
                      <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-600)]" />
                      <span>
                        <span className="block font-medium text-ink">{b.name}</span>
                        <span className="block text-[0.85rem] text-ink-muted">{b.address}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: form */}
            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
