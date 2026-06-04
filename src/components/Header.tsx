import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container, Button } from "./primitives";

const NAV = [
  { label: "Features", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "AI Hub", href: "#ai-hub" },
  { label: "Pricing", href: "#pricing" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onLight = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        onLight
          ? "border-b border-line bg-white"
          : "border-b border-white/10 bg-night/30 backdrop-blur-md"
      }`}
    >
      <Container>
        <div className="flex h-[76px] items-center justify-between">
          <a href="#top" aria-label="Xyra CRM home" className="flex items-center">
            <img
              src={onLight ? "/logo-dark.png" : "/logo-white.png"}
              alt="Xyra CRM"
              className="h-8 w-auto"
              width={120}
              height={32}
            />
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-ui text-[14px] font-medium tracking-wide transition-colors ${
                  onLight
                    ? "text-ink-2 hover:text-ink"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href="https://xyra-crm.teknesisbrand.com/login"
              className={`font-ui text-[14px] font-semibold tracking-wide transition-colors ${
                onLight ? "text-ink hover:text-brand" : "text-white hover:text-white/80"
              }`}
            >
              Login
            </a>
            <Button
              href="https://xyra-crm.teknesisbrand.com/signup"
              variant={onLight ? "primary" : "onDark"}
              className="px-6 py-2.5"
            >
              Get started
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-[3px] border lg:hidden ${
              onLight ? "border-line text-ink" : "border-white/30 text-white"
            }`}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <Container className="py-4">
            <nav className="flex flex-col gap-1">
              {NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-ui rounded-[3px] px-3 py-3 text-[15px] font-medium text-ink-2 hover:bg-bg-soft hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-line pt-4">
                <Button
                  href="https://xyra-crm.teknesisbrand.com/login"
                  variant="outline"
                  full
                >
                  Login
                </Button>
                <Button href="https://xyra-crm.teknesisbrand.com/signup" full>
                  Get started
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
