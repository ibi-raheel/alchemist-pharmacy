import { waLink, site } from "@/lib/site";
import { WhatsAppIcon, PhoneIcon } from "./icons";

/**
 * Full-width sticky action bar shown only on mobile (< md).
 * On desktop the floating WhatsApp widget takes over instead.
 */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[55] md:hidden">
      <div className="border-t border-[var(--line)] bg-[var(--surface)]/95 px-3 py-2.5 shadow-[0_-6px_24px_-12px_rgba(12,61,52,0.25)] backdrop-blur-md [padding-bottom:calc(0.625rem+env(safe-area-inset-bottom))]">
        <div className="flex items-center gap-2.5">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--wa)] px-5 py-3.5 font-semibold text-white shadow-[var(--shadow-sm)] active:scale-[0.98]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Send prescription
          </a>
          <a
            href={site.phoneTel}
            aria-label={`Call ${site.phoneDisplay}`}
            className="grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full border border-[var(--line-strong)] bg-[var(--surface)] text-[var(--brand-700)] active:scale-[0.98]"
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
