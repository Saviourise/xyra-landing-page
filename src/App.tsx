import { useEffect, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useAppLocation } from "./lib/navigation";
import { routes } from "./lib/routes";
import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import ProcessPage from "./pages/ProcessPage";
import PricingPage from "./pages/PricingPage";
import FAQPage from "./pages/FAQPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import ContactPage from "./pages/ContactPage";
import DemoPage from "./pages/DemoPage";
import SecurityPage from "./pages/SecurityPage";

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  if (!id) return false;
  const target = document.getElementById(id);
  if (!target) return false;
  requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  return true;
}

function resolvePage(pathname: string) {
  switch (pathname) {
    case routes.features:
      return <FeaturesPage />;
    case routes.process:
      return <ProcessPage />;
    case routes.pricing:
      return <PricingPage />;
    case routes.faq:
      return <FAQPage />;
    case routes.caseStudies:
      return <CaseStudiesPage />;
    case routes.contact:
      return <ContactPage />;
    case routes.demo:
      return <DemoPage />;
    case routes.security:
      return <SecurityPage />;
    case routes.home:
    default:
      return <HomePage />;
  }
}

export default function App() {
  const location = useAppLocation();
  const previousPathname = useRef(location.pathname);

  useEffect(() => {
    if (location.hash && scrollToHash(location.hash)) return;
    if (location.pathname !== previousPathname.current) {
      const root = document.documentElement;
      const previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      root.style.scrollBehavior = previousBehavior;
      previousPathname.current = location.pathname;
      return;
    }
    previousPathname.current = location.pathname;
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {resolvePage(location.pathname)}
      <Footer />
    </div>
  );
}
