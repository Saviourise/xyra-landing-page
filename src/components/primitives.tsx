import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

/* ── Container ─────────────────────────────────────────────────────────────
   Wide editorial column (matches the consulting reference's generous gutters). */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

/* ── Reveal on scroll ─────────────────────────────────────────────────────── */
export function Reveal({
  children,
  as,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
}) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ── Eyebrow label (uppercase + short rule, editorial style) ──────────────── */
export function Eyebrow({
  children,
  light = false,
  className = "",
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`inline-block ${className}`}>
      <span
        className={`font-ui text-[11px] font-semibold uppercase tracking-[0.22em] ${
          light ? "text-white/60" : "text-ink-3"
        }`}
      >
        {children}
      </span>
      <span
        className={`mt-2 block h-px w-10 ${light ? "bg-white/30" : "bg-ink/25"}`}
      />
    </div>
  );
}

/* ── Buttons ──────────────────────────────────────────────────────────────── */
type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "onDark" | "onDarkOutline";
  className?: string;
  full?: boolean;
};

export function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
  full = false,
}: ButtonProps) {
  const base =
    "font-ui inline-flex items-center justify-center gap-2 rounded-[3px] px-7 py-3.5 text-[14px] font-medium tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";
  const styles: Record<string, string> = {
    // black-dominant; violet only appears on hover as a subtle accent
    primary: "bg-ink text-white hover:bg-brand",
    outline: "border border-ink/20 text-ink hover:bg-ink hover:text-white",
    onDark: "bg-white text-ink hover:bg-brand hover:text-white",
    onDarkOutline:
      "border border-white/25 text-white hover:bg-white hover:text-ink",
  };
  return (
    <a
      href={href}
      className={`${base} ${styles[variant]} ${full ? "w-full" : ""} ${className}`}
    >
      {children}
    </a>
  );
}
