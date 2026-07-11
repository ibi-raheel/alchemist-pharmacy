"use client";

import { useMemo, useState } from "react";
import { Container, Reveal } from "@/components/ui";
import { PinIcon, ClockIcon, WhatsAppIcon, CheckIcon, ChatIcon } from "@/components/icons";
import { findDeliveryArea, deliveryAreas, waLink } from "@/lib/site";

export function DeliveryChecker() {
  const [query, setQuery] = useState("");
  const [checked, setChecked] = useState(false);

  const result = useMemo(() => findDeliveryArea(query), [query]);
  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return deliveryAreas
      .filter((a) => a.name.toLowerCase().includes(q))
      .slice(0, 4);
  }, [query]);

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-7 shadow-[var(--shadow-md)] sm:p-10">
          <div
            className="pointer-events-none absolute inset-0 bg-grid opacity-70"
            aria-hidden
          />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            {/* Copy */}
            <div>
              <span className="eyebrow">Delivery check</span>
              <h2 className="mt-3 text-[clamp(1.6rem,3.5vw,2.3rem)] font-semibold text-ink">
                Do we deliver to your area?
              </h2>
              <p className="mt-3 max-w-md text-[1.02rem] leading-relaxed text-ink-muted">
                Type your neighbourhood and we&apos;ll tell you the nearest branch and how
                fast we can reach you.
              </p>
            </div>

            {/* Input + result */}
            <div>
              <label htmlFor="area-check" className="sr-only">
                Your area
              </label>
              <div className="flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[var(--surface)] p-1.5 shadow-[var(--shadow-sm)] focus-within:border-[var(--brand-600)] focus-within:ring-2 focus-within:ring-[var(--brand-100)]">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--brand-50)] text-[var(--brand-600)]">
                  <PinIcon className="h-5 w-5" />
                </span>
                <input
                  id="area-check"
                  type="text"
                  autoComplete="off"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setChecked(true);
                  }}
                  placeholder="e.g. Johar Town, Model Town…"
                  className="min-w-0 flex-1 bg-transparent px-1 text-[1rem] text-ink outline-none placeholder:text-ink-muted"
                />
              </div>

              {/* Quick suggestions */}
              {!checked && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Johar Town", "Thokar Niaz Baig", "Iqbal Town", "Model Town"].map(
                    (a) => (
                      <button
                        key={a}
                        type="button"
                        onClick={() => {
                          setQuery(a);
                          setChecked(true);
                        }}
                        className="rounded-full border border-[var(--line)] bg-[var(--surface-2)] px-3 py-1.5 text-[0.82rem] text-ink-body transition hover:border-[var(--brand-600)] hover:text-[var(--brand-700)]"
                      >
                        {a}
                      </button>
                    ),
                  )}
                </div>
              )}

              {/* Result */}
              <div aria-live="polite" className="mt-4">
                {checked && query.trim().length >= 2 && result && (
                  <div className="animate-[rise_0.3s_ease] rounded-2xl border border-[var(--brand-100)] bg-[var(--brand-50)] p-4">
                    <p className="flex items-center gap-2 font-semibold text-[var(--brand-900)]">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--brand-600)] text-white">
                        <CheckIcon className="h-4 w-4" />
                      </span>
                      Yes — we deliver to {result.name}!
                    </p>
                    <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 pl-8 text-[0.9rem] text-ink-body">
                      <span className="flex items-center gap-1.5">
                        <PinIcon className="h-4 w-4 text-[var(--brand-600)]" />
                        Nearest: {result.branch.name}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <ClockIcon className="h-4 w-4 text-[var(--brand-600)]" />
                        ~30 min
                      </span>
                    </p>
                    <a
                      href={waLink(
                        `Hi Alchemist Pharmacy 👋 I'm in ${result.name} and I'd like 30-minute delivery from your ${result.branch.name} branch. Here's my prescription:`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 ml-8 inline-flex items-center gap-2 rounded-full bg-[var(--wa)] px-5 py-2.5 text-[0.9rem] font-semibold text-white transition hover:brightness-105"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      Order now
                    </a>
                  </div>
                )}

                {checked && query.trim().length >= 2 && !result && (
                  <div className="animate-[rise_0.3s_ease] rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] p-4">
                    <p className="font-medium text-ink">
                      We may still reach you — let&apos;s check together.
                    </p>
                    <p className="mt-1 text-[0.9rem] text-ink-muted">
                      Message us your exact location and we&apos;ll confirm delivery time
                      right away.
                    </p>
                    {suggestions.length > 0 && (
                      <p className="mt-2 text-[0.82rem] text-ink-muted">
                        Did you mean:{" "}
                        {suggestions.map((s, i) => (
                          <button
                            key={s.name}
                            type="button"
                            onClick={() => setQuery(s.name)}
                            className="font-medium text-[var(--brand-700)] underline-offset-2 hover:underline"
                          >
                            {s.name}
                            {i < suggestions.length - 1 ? ", " : ""}
                          </button>
                        ))}
                        ?
                      </p>
                    )}
                    <a
                      href={waLink(
                        `Hi Alchemist Pharmacy 👋 I'm in ${query.trim()}. Do you deliver to my area?`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-5 py-2.5 text-[0.9rem] font-semibold text-ink transition hover:border-[var(--brand-600)] hover:text-[var(--brand-700)]"
                    >
                      <ChatIcon className="h-4 w-4 text-[var(--brand-600)]" />
                      Ask on WhatsApp
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
