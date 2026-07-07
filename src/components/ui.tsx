"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Logo } from "./icons";

/* ---------- Container ---------- */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container-x ${className}`}>{children}</div>;
}

/* ---------- Button ---------- */
type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "whatsapp" | "outline" | "ghost";
  className?: string;
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 px-6 py-3 text-[0.95rem] active:scale-[0.98] focus-visible:outline-2";

const variants: Record<string, string> = {
  primary:
    "bg-[var(--brand-600)] text-white shadow-[var(--shadow-md)] hover:bg-[var(--brand-700)] hover:shadow-[var(--shadow-lg)]",
  whatsapp:
    "bg-[var(--wa)] text-white shadow-[var(--shadow-md)] hover:brightness-105 hover:shadow-[var(--shadow-lg)]",
  outline:
    "border border-[var(--line-strong)] bg-[var(--surface)] text-ink hover:border-[var(--brand-600)] hover:text-[var(--brand-700)]",
  ghost: "text-ink-body hover:text-[var(--brand-700)]",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/* ---------- Reveal on scroll ---------- */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Component = Tag as React.ElementType;
  return (
    <Component
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

/* ---------- Section heading ---------- */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
      <h2 className="text-[clamp(1.75rem,4vw,2.6rem)] font-semibold mt-3">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-muted">
          {intro}
        </p>
      )}
    </div>
  );
}

/* ---------- Wordmark ---------- */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group ${className}`}
      aria-label="Alchemist Pharmacy — home"
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--brand-50)] text-[var(--brand-700)] transition-colors group-hover:bg-[var(--brand-100)]">
        <Logo className="h-6 w-6" />
      </span>
      <span className="leading-none">
        <span className="block font-[var(--font-display)] text-[1.05rem] font-700 font-semibold tracking-tight text-ink">
          Alchemist
        </span>
        <span className="block text-[0.72rem] font-medium uppercase tracking-[0.16em] text-ink-muted">
          Pharmacy
        </span>
      </span>
    </Link>
  );
}
