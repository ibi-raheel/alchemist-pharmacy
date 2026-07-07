import { Button, Container } from "@/components/ui";
import { WhatsAppIcon, ClockIcon, ShieldIcon, CameraIcon, CheckIcon } from "@/components/icons";
import { waLink, site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24">
      {/* subtle grid texture instead of AI gradient blobs */}
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
      <div
        className="pointer-events-none absolute -top-24 right-1/2 h-[420px] w-[420px] translate-x-1/2 rounded-full opacity-[0.07] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--brand-500), transparent 70%)" }}
        aria-hidden
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <div>
            <span className="reveal is-visible inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3.5 py-1.5 text-[0.8rem] font-medium text-ink-body shadow-[var(--shadow-sm)]">
              <span className="flex h-2 w-2">
                <span className="h-2 w-2 rounded-full bg-[var(--brand-500)]" />
              </span>
              Now delivering across 5 branches in Lahore
            </span>

            <h1 className="mt-6 text-[clamp(2.4rem,6vw,4rem)] font-semibold leading-[1.04] text-ink">
              Your medicines,
              <br />
              <span className="text-[var(--brand-600)]">delivered in 30 minutes.</span>
            </h1>

            <p className="mt-6 max-w-xl text-[1.12rem] leading-relaxed text-ink-body">
              Snap a photo of your prescription, send it to us on WhatsApp, and a
              qualified pharmacist gets it to your door — fast, genuine, and hassle-free.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={waLink()} variant="whatsapp" external className="text-base px-7 py-4">
                <WhatsAppIcon className="h-5 w-5" />
                Send your prescription
              </Button>
              <Button href="/branches" variant="outline" className="text-base px-7 py-4">
                Find your nearest branch
              </Button>
            </div>

            {/* Trust markers */}
            <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[0.9rem] text-ink-body">
              <li className="flex items-center gap-2">
                <ClockIcon className="h-[18px] w-[18px] text-[var(--brand-600)]" />
                30-min delivery
              </li>
              <li className="flex items-center gap-2">
                <ShieldIcon className="h-[18px] w-[18px] text-[var(--brand-600)]" />
                100% genuine medicine
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-[18px] w-[18px] text-[var(--brand-600)]" />
                Qualified pharmacists
              </li>
            </ul>
          </div>

          {/* WhatsApp phone mockup */}
          <div className="relative mx-auto w-full max-w-[360px] lg:mx-0 lg:ml-auto">
            <PhoneMock />
          </div>
        </div>
      </Container>
    </section>
  );
}

function PhoneMock() {
  return (
    <div className="relative animate-float">
      {/* floating badge */}
      <div className="absolute -bottom-6 -left-5 z-20 hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 shadow-[var(--shadow-lg)] sm:block">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--brand-50)] text-[var(--brand-600)]">
            <ClockIcon className="h-5 w-5" />
          </span>
          <div>
            <p className="text-[0.7rem] uppercase tracking-wide text-ink-muted">Delivering in</p>
            <p className="font-[var(--font-display)] text-lg font-semibold text-ink">28:14</p>
          </div>
        </div>
      </div>

      {/* phone frame */}
      <div className="relative rounded-[2.4rem] border-[10px] border-[#0d2b25] bg-[#0d2b25] shadow-[var(--shadow-lg)]">
        <div className="overflow-hidden rounded-[1.7rem] bg-[#e6ddd3]">
          {/* WhatsApp top bar */}
          <div className="flex items-center gap-3 bg-[var(--wa-dark)] px-4 py-3 text-white">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-[0.9rem] font-semibold">Alchemist Pharmacy</p>
              <p className="text-[0.7rem] text-white/80">online</p>
            </div>
          </div>

          {/* chat area */}
          <div
            className="space-y-3 px-3.5 py-4"
            style={{
              backgroundImage:
                "radial-gradient(rgba(13,43,37,0.05) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          >
            {/* incoming */}
            <Bubble side="in">
              Hi 👋 Welcome to Alchemist Pharmacy. Send us your prescription and
              we&apos;ll deliver in 30 minutes.
            </Bubble>

            {/* outgoing: prescription photo */}
            <div className="flex justify-end">
              <div className="max-w-[78%] rounded-2xl rounded-tr-sm bg-[#d9fdd3] p-1.5 shadow-sm">
                <div className="flex items-center gap-2 rounded-xl bg-white/60 px-3 py-4">
                  <CameraIcon className="h-5 w-5 text-[var(--brand-700)]" />
                  <span className="text-[0.82rem] font-medium text-[var(--brand-900)]">
                    prescription.jpg
                  </span>
                </div>
                <p className="px-1.5 pt-1 text-right text-[0.65rem] text-[var(--brand-900)]/50">
                  12:04 ✓✓
                </p>
              </div>
            </div>

            {/* incoming confirm */}
            <Bubble side="in">
              Got it ✅ Your order is confirmed. A rider is on the way — ETA{" "}
              <b>30 min</b>.
            </Bubble>
          </div>

          {/* input bar */}
          <div className="flex items-center gap-2 bg-[#e6ddd3] px-3 py-2.5">
            <div className="flex-1 rounded-full bg-white px-4 py-2 text-[0.8rem] text-ink-muted">
              Type a message
            </div>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--wa)] text-white">
              <WhatsAppIcon className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble({ children, side }: { children: React.ReactNode; side: "in" | "out" }) {
  const isIn = side === "in";
  return (
    <div className={`flex ${isIn ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[80%] px-3.5 py-2 text-[0.82rem] leading-snug shadow-sm ${
          isIn
            ? "rounded-2xl rounded-tl-sm bg-white text-ink-body"
            : "rounded-2xl rounded-tr-sm bg-[#d9fdd3] text-[var(--brand-900)]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
