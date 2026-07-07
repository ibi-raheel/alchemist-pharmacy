"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon, CameraIcon, CloseIcon, ClockIcon } from "./icons";
import { waLink } from "@/lib/site";

export function WhatsAppWidget({
  phone,
  message,
}: {
  phone: string;
  message: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!mounted) return null;

  const link = waLink(message);

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      {/* Chat panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Order on WhatsApp"
          className="w-[min(92vw,340px)] origin-bottom-right overflow-hidden rounded-[22px] border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow-lg)] animate-[rise_0.28s_cubic-bezier(0.22,1,0.36,1)]"
        >
          {/* Header */}
          <div className="relative bg-[var(--wa-dark)] px-5 pb-8 pt-5 text-white">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
            >
              <CloseIcon className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white/15">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
              <div>
                <p className="font-semibold leading-tight">Alchemist Pharmacy</p>
                <p className="flex items-center gap-1.5 text-[0.78rem] text-white/85">
                  <span className="h-2 w-2 rounded-full bg-[#7ef0a6]" />
                  Typically replies in minutes
                </p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="px-5 pb-5 pt-0">
            {/* Chat bubble */}
            <div className="-mt-4 rounded-2xl rounded-tl-sm bg-[var(--surface-2)] p-4 text-[0.9rem] leading-relaxed text-ink-body shadow-[var(--shadow-sm)]">
              <p className="font-medium text-ink">Hi there 👋</p>
              <p className="mt-1">
                Send us a <span className="font-medium text-ink">photo of your prescription</span> and
                we&apos;ll deliver your medicines in{" "}
                <span className="font-semibold text-[var(--brand-700)]">30 minutes</span>.
              </p>
            </div>

            {/* Steps */}
            <ul className="mt-4 space-y-2 text-[0.82rem] text-ink-muted">
              <li className="flex items-center gap-2">
                <CameraIcon className="h-4 w-4 text-[var(--brand-600)]" />
                Snap your prescription
              </li>
              <li className="flex items-center gap-2">
                <WhatsAppIcon className="h-4 w-4 text-[var(--brand-600)]" />
                Send it to us on WhatsApp
              </li>
              <li className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4 text-[var(--brand-600)]" />
                Relax — we&apos;re on the way
              </li>
            </ul>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[var(--wa)] px-5 py-3.5 font-semibold text-white shadow-[var(--shadow-md)] transition hover:brightness-105 active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Start chat
            </a>
            <p className="mt-3 text-center text-[0.72rem] text-ink-muted">
              Opens WhatsApp · No app? Uses WhatsApp Web
            </p>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close WhatsApp chat" : "Order on WhatsApp"}
        aria-expanded={open}
        className={`group relative grid h-14 w-14 place-items-center rounded-full bg-[var(--wa)] text-white shadow-[var(--shadow-lg)] transition-transform duration-200 hover:scale-105 active:scale-95 sm:h-16 sm:w-16 ${
          open ? "" : "wa-pulse"
        }`}
        style={!open ? { animation: "wa-pulse 2.6s infinite" } : undefined}
      >
        {open ? (
          <CloseIcon className="h-6 w-6" />
        ) : (
          <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
        )}
        {!open && (
          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-[0.8rem] font-medium text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 lg:block">
            Order in 30 min
          </span>
        )}
      </button>
    </div>
  );
}
