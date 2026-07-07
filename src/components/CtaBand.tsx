import { Container, Button } from "@/components/ui";
import { WhatsAppIcon, PhoneIcon } from "@/components/icons";
import { waLink, site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="py-8">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] bg-[var(--brand-900)] px-6 py-14 text-center sm:px-12 sm:py-20">
          {/* soft accent */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, var(--brand-500), transparent 45%), radial-gradient(circle at 85% 80%, var(--blue-500), transparent 45%)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-[clamp(1.8rem,4.5vw,2.8rem)] font-semibold text-white">
              Need your medicine now?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[1.05rem] leading-relaxed text-white/75">
              Send us a photo of your prescription on WhatsApp and we&apos;ll have it
              at your door in 30 minutes.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={waLink()} variant="whatsapp" external className="text-base px-7 py-4">
                <WhatsAppIcon className="h-5 w-5" />
                Order on WhatsApp
              </Button>
              <a
                href={site.phoneTel}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                <PhoneIcon className="h-5 w-5" />
                {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
