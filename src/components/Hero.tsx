import { ArrowDown, Sparkles } from "lucide-react";
import { AppLink } from "../lib/navigation";
import { routes } from "../lib/routes";
import { Container, Button } from "./primitives";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-night">
      <div className="absolute inset-0 lg:inset-y-0 lg:left-auto lg:right-0 lg:w-1/2">
        <HeroCarousel />
      </div>

      <div
        className="absolute inset-0 bg-linear-to-b from-transparent from-0% via-night/30 via-38% to-night to-100% lg:hidden"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2">
          <div className="flex min-h-screen flex-col justify-center pt-32 pb-16 lg:pr-12 lg:pt-40 lg:pb-24">
            <span className="font-ui mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[12px] font-medium tracking-wide text-white/85 backdrop-blur-sm">
              <Sparkles size={14} className="text-white" />
              1-month free trial on Premium - no card required
            </span>

            <h1 className="text-[2.9rem] font-semibold leading-[1.04] tracking-tight text-white sm:text-[3.6rem] lg:text-[4.1rem]">
              Scale your outreach.
              <br />
              Zero manual effort.
            </h1>

            <p className="mt-8 max-w-md text-[17px] leading-relaxed text-white/65">
              The AI-powered CRM that finds leads in plain English, verifies
              every email, and automates personalized cold outreach - all in one
              professional dashboard.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                href="https://xyra-crm.teknesisbrand.com/signup"
                variant="onDark"
              >
                Start 1-month free trial
              </Button>
              <Button href={routes.demo} variant="onDarkOutline">
                Book a demo
              </Button>
            </div>

            <AppLink
              href={routes.homeSection("about")}
              className="font-ui mt-16 hidden items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45 transition-colors hover:text-white lg:inline-flex"
            >
              Scroll down
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/25">
                <ArrowDown size={13} />
              </span>
            </AppLink>
          </div>

          <div className="hidden lg:block" aria-hidden />
        </div>
      </Container>
    </section>
  );
}
