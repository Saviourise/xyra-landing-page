import { Mail, Phone } from "lucide-react";
import { FOOTER_LINKS } from "../content/site";
import { AppLink } from "../lib/navigation";
import { routes } from "../lib/routes";
import { Button, Container } from "./primitives";

export default function Footer() {
  return (
    <>
      <section className="bg-night">
        <Container>
          <div className="flex flex-col gap-10 py-20 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="text-[2.6rem] font-semibold tracking-[-0.02em] text-white sm:text-[3.4rem]">
              Connect with us
            </h2>
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
              <a
                href="tel:+2348135503632"
                className="flex items-center gap-3 text-white/80 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20">
                  <Phone size={15} />
                </span>
                <span className="text-[15px] underline underline-offset-4">
                  Talk to sales
                </span>
              </a>
              <a
                href={routes.contact}
                className="flex items-center gap-3 text-white/80 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20">
                  <Mail size={15} />
                </span>
                <span className="text-[15px] underline underline-offset-4">
                  Send an email
                </span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <footer className="bg-night-2">
        <Container>
          <div className="grid gap-12 py-16 lg:grid-cols-[1.5fr_2fr_auto]">
            <div className="max-w-xs">
              <img
                src="/logo-white.png"
                alt="Xyra CRM"
                className="h-8 w-auto"
                width={120}
                height={32}
              />
              <p className="mt-5 text-[15px] text-white/55">
                Scale your outreach. Zero manual effort.
              </p>
            </div>

            <div>
              <div className="font-ui text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
                Pages
              </div>
              <span className="mt-2 block h-px w-10 bg-white/25" />
              <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3">
                {FOOTER_LINKS.map((link) => (
                  <AppLink
                    key={link.label}
                    href={link.href}
                    className="text-[15px] text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </AppLink>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start gap-8">
              <Button href={routes.demo} variant="onDark">
                Book a demo
              </Button>
            </div>
          </div>

          <div className="border-t border-night-line py-8 text-center">
            <p className="text-[12px] uppercase tracking-[0.18em] text-white/40">
              © {new Date().getFullYear()} Xyra CRM. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
}
