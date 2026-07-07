"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, waLink, site } from "@/lib/site";
import { Wordmark } from "./ui";
import { WhatsAppIcon, MenuIcon, CloseIcon } from "./icons";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--surface)]/85 backdrop-blur-md border-b border-[var(--line)] shadow-[var(--shadow-sm)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-[70px] items-center justify-between">
        <Wordmark />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-[0.93rem] font-medium transition-colors ${
                  active
                    ? "text-[var(--brand-700)]"
                    : "text-ink-body hover:text-[var(--brand-700)]"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-[var(--brand-600)]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--wa)] px-5 py-2.5 text-[0.9rem] font-semibold text-white shadow-[var(--shadow-sm)] transition-all hover:brightness-105 hover:shadow-[var(--shadow-md)] active:scale-[0.98]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Order now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-11 w-11 place-items-center rounded-xl border border-[var(--line)] bg-[var(--surface)] text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 top-[70px] z-40 bg-[var(--bg)] animate-[rise_0.25s_ease]">
          <nav className="container-x flex flex-col gap-1 pt-6">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-4 text-lg font-medium border-b border-[var(--line)] ${
                    active ? "text-[var(--brand-700)]" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--wa)] px-6 py-4 text-base font-semibold text-white shadow-[var(--shadow-md)]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Order on WhatsApp
            </a>
            <a
              href={site.phoneTel}
              className="mt-2 text-center text-ink-muted py-2"
            >
              or call {site.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
