import { CameraIcon } from "./icons";

/**
 * Branded image placeholder. Sized to the FINAL image dimensions so there is
 * zero layout shift when the real pharmacist photo is dropped in.
 *
 * To replace: swap this component for a <Image /> at the same aspect ratio.
 */
export function Placeholder({
  label,
  ratio = "4 / 5",
  rounded = "var(--radius-lg)",
  className = "",
}: {
  label: string;
  ratio?: string;
  rounded?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-[var(--surface-2)] ${className}`}
      style={{ aspectRatio: ratio, borderRadius: rounded }}
      data-placeholder
    >
      {/* subtle diagonal hatch */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 11px, rgba(14,144,121,0.06) 11px, rgba(14,144,121,0.06) 12px)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--brand-50)] text-[var(--brand-600)]">
          <CameraIcon className="h-6 w-6" />
        </span>
        <span className="px-4 text-[0.82rem] font-medium text-ink-muted">
          {label}
        </span>
        <span className="text-[0.7rem] uppercase tracking-[0.14em] text-[var(--brand-600)]/70">
          Photo coming soon
        </span>
      </div>
    </div>
  );
}
