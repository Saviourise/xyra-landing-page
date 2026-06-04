import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { FEATURE_GROUPS } from "../content/site";
import { AppLink } from "../lib/navigation";
import { routes } from "../lib/routes";
import { Container, Button } from "./primitives";

const NAV = [
  { label: "Process", href: routes.process },
  { label: "Pricing", href: routes.pricing },
  { label: "FAQ", href: routes.faq },
  { label: "Contact", href: routes.contact },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onLight = scrolled || open || featuresOpen;

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
          <AppLink href={routes.home} aria-label="Xyra CRM home" className="flex items-center">
            <img
              src={onLight ? "/logo-dark.png" : "/logo-white.png"}
              alt="Xyra CRM"
              className="h-8 w-auto"
              width={120}
              height={32}
            />
          </AppLink>

          <nav className="hidden items-center gap-9 lg:flex">
            <div
              className="relative"
              onMouseEnter={() => setFeaturesOpen(true)}
              onMouseLeave={() => setFeaturesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setFeaturesOpen((v) => !v)}
                onFocus={() => setFeaturesOpen(true)}
                aria-expanded={featuresOpen}
                className={`font-ui inline-flex items-center gap-1.5 text-[14px] font-medium tracking-wide transition-colors ${
                  onLight ? "text-ink-2 hover:text-ink" : "text-white/80 hover:text-white"
                }`}
              >
                Features
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${featuresOpen ? "rotate-180" : ""}`}
                />
              </button>

              {featuresOpen && (
                <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4">
                  <div className="w-[760px] rounded-[6px] border border-line bg-white p-7 shadow-[0_30px_70px_-24px_rgba(17,24,39,0.35)]">
                    <div className="grid grid-cols-4 gap-x-6 gap-y-2">
                      {FEATURE_GROUPS.map((group) => (
                        <div key={group.title}>
                          <div className="font-ui mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3">
                            {group.title}
                          </div>
                          <ul className="space-y-1">
                            {group.items.map((item) => (
                              <li key={item.id}>
                                <AppLink
                                  href={item.href}
                                  onClick={() => setFeaturesOpen(false)}
                                  className="group flex items-center gap-2.5 rounded-[4px] px-2 py-2 transition-colors hover:bg-bg-soft"
                                >
                                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[4px] border border-line bg-bg-soft text-ink-2 transition-colors group-hover:border-ink group-hover:text-ink">
                                    <item.icon size={14} />
                                  </span>
                                  <span className="text-[13.5px] font-medium text-ink-2 transition-colors group-hover:text-ink">
                                    {item.label}
                                  </span>
                                </AppLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                      <p className="text-[13px] text-ink-3">
                        One platform for prospecting, outreach, and AI marketing.
                      </p>
                      <AppLink
                        href={routes.features}
                        onClick={() => setFeaturesOpen(false)}
                        className="font-ui text-[13px] font-semibold text-ink underline-offset-4 hover:underline"
                      >
                        Explore all features →
                      </AppLink>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {NAV.map((item) => (
              <AppLink
                key={item.label}
                href={item.href}
                className={`font-ui text-[14px] font-medium tracking-wide transition-colors ${
                  onLight ? "text-ink-2 hover:text-ink" : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </AppLink>
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
              Start free trial
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
        <div className="max-h-[80vh] overflow-y-auto border-t border-line bg-white lg:hidden">
          <Container className="py-5">
            <div className="font-ui mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3">
              Features
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {FEATURE_GROUPS.flatMap((group) => group.items).map((item) => (
                <AppLink
                  key={item.id}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-[4px] px-2 py-2 text-[14px] text-ink-2 hover:bg-bg-soft"
                >
                  <item.icon size={15} className="text-ink-3" />
                  {item.label}
                </AppLink>
              ))}
            </div>

            <nav className="mt-4 flex flex-col gap-1 border-t border-line pt-4">
              {NAV.map((item) => (
                <AppLink
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-ui rounded-[3px] px-2 py-3 text-[15px] font-medium text-ink-2 hover:bg-bg-soft hover:text-ink"
                >
                  {item.label}
                </AppLink>
              ))}
            </nav>

            <div className="mt-3 flex flex-col gap-2 border-t border-line pt-4">
              <Button
                href="https://xyra-crm.teknesisbrand.com/login"
                variant="outline"
                full
              >
                Login
              </Button>
              <Button href="https://xyra-crm.teknesisbrand.com/signup" full>
                Start free trial
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
