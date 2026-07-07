"use client";

import { useState } from "react";
import { WhatsAppIcon } from "./icons";
import { WHATSAPP_NUMBER } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [message, setMessage] = useState("");

  const composed = [
    `Hi Alchemist Pharmacy 👋`,
    name && `My name is ${name}.`,
    area && `I'm in ${area}.`,
    message && message,
    `(I'll attach a photo of my prescription.)`,
  ]
    .filter(Boolean)
    .join("\n");

  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(composed)}`;

  const field =
    "w-full rounded-xl border border-[var(--line-strong)] bg-[var(--surface)] px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-muted transition focus:border-[var(--brand-600)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-100)]";

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[var(--shadow-sm)] sm:p-8"
    >
      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-[0.85rem] font-medium text-ink" htmlFor="name">
            Your name
          </label>
          <input
            id="name"
            className={field}
            placeholder="e.g. Ayesha Khan"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-[0.85rem] font-medium text-ink" htmlFor="area">
            Your area
          </label>
          <input
            id="area"
            className={field}
            placeholder="e.g. Johar Town"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-[0.85rem] font-medium text-ink" htmlFor="message">
            How can we help?
          </label>
          <textarea
            id="message"
            rows={4}
            className={`${field} resize-none`}
            placeholder="Tell us what you need, or just say hi. You can attach your prescription in the chat."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[var(--wa)] px-6 py-3.5 font-semibold text-white shadow-[var(--shadow-md)] transition hover:brightness-105 active:scale-[0.98]"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Continue on WhatsApp
      </a>
      <p className="mt-3 text-center text-[0.78rem] text-ink-muted">
        This opens WhatsApp with your message ready — just add your prescription photo and send.
      </p>
    </form>
  );
}
