import Hero from "../components/Hero";
import LogoStrip from "../components/LogoStrip";
import Editorial from "../components/Editorial";
import Services from "../components/Services";
import Process from "../components/Process";
import CaseStudies from "../components/CaseStudies";
import AIHub from "../components/AIHub";
import FAQSection from "../components/FAQSection";
import Pricing from "../components/Pricing";
import FinalCTA from "../components/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <LogoStrip />

      <Editorial
        id="about"
        label="About"
        heading="The AI sales engine for modern teams."
        lead="Xyra CRM unifies prospecting, outreach, and pipeline in one professional workspace - so your team can stop wrestling spreadsheets and start having conversations that close."
        body={[
          "Describe your ideal customer in plain English and Xyra sources, verifies, and personalizes outreach automatically. Every lead is enriched, scored, and routed into a pipeline your whole team can see.",
          "Grounded in clean data and measurable results, Xyra is built to scale with you - from your first campaign to thousands of conversations a month, without adding a single manual step.",
        ]}
      />

      <Services />
      <Process />

      <Editorial
        id="security"
        label="Trust"
        heading="Enterprise-grade security by design."
        lead="Your data and your prospects' data is protected at every layer. Encryption, authentication, and compliance are built in, not bolted on."
        body={[
          "All data is encrypted in transit and at rest with AES-256. Access is governed by role-based permissions, two-factor authentication, and single sign-on, with full audit trails on every action.",
          "Outbound sending is authenticated with DKIM, SPF, and DMARC and rate-limited to protect deliverability, while built-in unsubscribe management keeps every campaign GDPR and CAN-SPAM compliant.",
        ]}
      />

      <CaseStudies />
      <AIHub />
      <Pricing />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
