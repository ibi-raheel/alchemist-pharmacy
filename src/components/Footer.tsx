import Link from "next/link";
import { nav, branches, site, waLink, mapsLink } from "@/lib/site";
import { Logo, WhatsAppIcon, PhoneIcon, PinIcon } from "./icons";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--line)] bg-[var(--surface)]">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Brand + pitch */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--brand-50)] text-[var(--brand-700)]">
                <Logo className="h-6 w-6" />
              </span>
              <span className="leading-none">
                <span className="block font-[var(--font-display)] text-[1.05rem] font-semibold text-ink">
                  Alchemist
                </span>
                <span className="block text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink-muted">
                  Pharmacy
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-ink-muted">
              Genuine medicines, qualified pharmacists, and{" "}
              <span className="text-ink-body font-medium">30-minute home delivery</span>{" "}
              across Lahore. Send your prescription on WhatsApp and we handle the rest.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--wa)] px-5 py-2.5 text-[0.9rem] font-semibold text-white transition hover:brightness-105"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Order on WhatsApp
            </a>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-ink-muted">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.95rem] text-ink-body transition hover:text-[var(--brand-700)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-3">
              <a
                href={site.phoneTel}
                className="flex items-center gap-2 text-[0.95rem] text-ink-body transition hover:text-[var(--brand-700)]"
              >
                <PhoneIcon className="h-4 w-4 text-[var(--brand-600)]" />
                {site.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Branches */}
          <div>
            <h3 className="text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-ink-muted">
              Our branches
            </h3>
            <ul className="mt-5 space-y-3">
              {branches.map((b) => (
                <li key={b.slug}>
                  <a
                    href={mapsLink(b.mapsQuery)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-2 text-[0.95rem] text-ink-body transition hover:text-[var(--brand-700)]"
                  >
                    <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-600)]" />
                    <span>
                      <span className="font-medium">{b.name}</span>
                      <span className="block text-[0.85rem] text-ink-muted">
                        {b.landmark}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[var(--line)] pt-8 text-[0.85rem] text-ink-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Alchemist Pharmacy. All rights reserved.</p>
          <p>Lahore, Pakistan · Open 7 days a week</p>
        </div>
      </div>
    </footer>
  );
}
