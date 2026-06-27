import PageCTA from "../components/PageCTA";
import PageHero from "../components/PageHero";
import StatStrip from "../components/StatStrip";
import { Container, Eyebrow, Reveal } from "../components/primitives";
import { routes } from "../lib/routes";

type PolicyBlock = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

type PolicySection = {
  id: string;
  title: string;
  lead: string;
  blocks: PolicyBlock[];
};

const lastUpdated = "June 27, 2026";

const policySections: PolicySection[] = [
  {
    id: "scope",
    title: "1. Scope and roles",
    lead:
      "This Privacy Policy explains how Xyra CRM collects, uses, shares, and protects personal information through this website, demo and sales conversations, and the Xyra CRM product.",
    blocks: [
      {
        paragraphs: [
          'In this policy, "Xyra", "we", "us", and "our" refer to Xyra CRM. "Customer" means an organization that evaluates, buys, or uses Xyra. "User" means a person who visits the website, requests a demo, contacts sales, or uses the platform.',
          "When we collect information through the website, contact flows, demo requests, billing discussions, or our own sales operations, we generally act as the organization responsible for that information. When a customer uses Xyra to manage its own contacts, leads, prospects, campaigns, or pipeline records, the customer generally decides why and how that information is processed, and Xyra processes it on the customer's behalf.",
        ],
      },
      {
        heading: "Customer responsibility",
        paragraphs: [
          "Customers are responsible for having a lawful basis to upload, sync, source, enrich, verify, score, contact, or otherwise process prospect, lead, customer, employee, or account data in Xyra. Customers are also responsible for honoring unsubscribe requests, suppression lists, consent requirements, internal policies, and applicable outreach rules.",
        ],
      },
    ],
  },
  {
    id: "information-collected",
    title: "2. Information we collect",
    lead:
      "The information we collect depends on how someone interacts with Xyra: browsing the site, requesting a demo, speaking with sales, using the CRM, or appearing in a customer's lead or contact records.",
    blocks: [
      {
        heading: "Website and demo request information",
        bullets: [
          "Company name, company email, phone number, industry, operating regions or countries, preferred demo date, CRM objectives, current lead management process, lead sources, support channels, and any extra context submitted through the demo form.",
          "Information shared in calls, contact conversations, product walkthroughs, pricing discussions, procurement reviews, security reviews, and support conversations.",
          "Basic technical information generated when the website loads, such as IP address, device type, browser, pages visited, referring page, approximate location, timestamps, and server logs.",
        ],
      },
      {
        heading: "Platform account and admin information",
        bullets: [
          "User profile details, login identifiers, organization details, roles, permissions, team membership, authentication settings, audit events, and admin actions.",
          "Billing, plan, seat, procurement, and onboarding information where needed to evaluate, provide, or manage the service.",
        ],
      },
      {
        heading: "CRM, pipeline, and outreach data",
        bullets: [
          "Contacts, companies, leads, accounts, notes, owners, tasks, reminders, deal stages, pipeline data, relationship mapping, source tracking, qualification status, and activity history.",
          "Campaign settings, outbound sequences, email templates, personalized message drafts, follow-up logic, delivery events, replies, unsubscribe status, suppression lists, and sender-health signals.",
          "Reports, dashboards, performance analytics, rep activity, forecasts, opportunity scores, next-step recommendations, and other operational insights generated from customer workflows.",
        ],
      },
      {
        heading: "AI and automation data",
        bullets: [
          "Ideal customer profile prompts, targeting criteria, lead metadata, enrichment fields, personalization inputs, generated copy, generated social or video briefs, lead scores, and workflow recommendations.",
          "Voice-agent configuration, call routing details, call notes, outcomes, qualification results, and summaries when voice workflows are enabled.",
          "Integration configuration, sync metadata, imported records, exported records, and connection status for tools a customer chooses to connect.",
        ],
      },
      {
        heading: "Third-party and public-source data",
        paragraphs: [
          "Xyra may help customers source, enrich, de-duplicate, or verify business contact data using customer-connected systems, public sources, and data providers. The current website describes prospect sourcing and email verification workflows that may involve providers such as Apollo.io and Hunter.io when configured.",
        ],
      },
      {
        heading: "Sensitive information",
        paragraphs: [
          "Xyra is designed for business CRM, sales, marketing, and outreach workflows. Users and customers should not submit sensitive personal information unless it is necessary, lawful, and covered by an appropriate written agreement.",
        ],
      },
    ],
  },
  {
    id: "uses",
    title: "3. How we use information",
    lead:
      "We use information to operate the website, respond to inquiries, prepare demos, provide the CRM platform, power automation, keep the service secure, and improve product performance.",
    blocks: [
      {
        heading: "Website, sales, and demo operations",
        bullets: [
          "Respond to demo requests, sales questions, pricing questions, procurement conversations, and security review requests.",
          "Prepare tailored walkthroughs based on a company's industry, regions, current tools, lead sources, support channels, CRM goals, and rollout needs.",
          "Send service, sales, onboarding, scheduling, and follow-up communications.",
        ],
      },
      {
        heading: "Product delivery",
        bullets: [
          "Provide contact, company, lead, pipeline, task, campaign, reporting, integration, security, and role-based access control features.",
          "Verify business email addresses, de-duplicate records, enrich account context, route leads, log activity, and maintain campaign and CRM history.",
          "Generate or support AI-assisted sourcing, personalization, content production, lead scoring, follow-up recommendations, voice-agent outcomes, and reporting.",
          "Sync data with customer-selected integrations and preserve workflow continuity across connected tools.",
        ],
      },
      {
        heading: "Security, reliability, and improvement",
        bullets: [
          "Authenticate users, administer access, monitor usage, detect abuse, investigate security events, debug errors, maintain audit visibility, and enforce customer settings.",
          "Improve website content, form flows, product functionality, deliverability, analytics, automation quality, and customer support.",
          "Comply with legal obligations, enforce agreements, protect rights, and prevent spam, fraud, unauthorized access, or misuse of the service.",
        ],
      },
    ],
  },
  {
    id: "legal-bases",
    title: "4. Legal bases for processing",
    lead:
      "Where privacy laws require a legal basis, we rely on the basis that matches the context and the relationship.",
    blocks: [
      {
        bullets: [
          "Contract: to provide the service, process demo requests, support customers, manage accounts, and perform agreements.",
          "Legitimate interests: to operate a B2B website and CRM service, respond to business inquiries, secure the platform, improve workflows, prevent misuse, and communicate about relevant products or services.",
          "Consent: where a law requires consent for certain communications, cookies, recordings, or optional processing.",
          "Legal obligation: where processing is needed for tax, accounting, compliance, dispute, security, regulatory, or legal-response purposes.",
          "Customer instructions: where Xyra processes customer CRM, prospect, campaign, integration, or analytics data on behalf of a customer.",
        ],
      },
    ],
  },
  {
    id: "ai",
    title: "5. AI, automation, and outreach",
    lead:
      "Xyra includes AI and automation features for prospect discovery, enrichment, personalization, content creation, scoring, voice workflows, follow-up sequences, and reporting.",
    blocks: [
      {
        paragraphs: [
          "AI outputs can be useful, but customers remain responsible for reviewing generated content, targeting choices, campaign settings, and outreach compliance before launching or relying on them. AI-generated drafts, scores, summaries, and recommendations may be inaccurate, incomplete, or require human review.",
          "Where Xyra uses AI service providers or automation providers, those providers may process prompts, CRM fields, lead metadata, campaign context, call notes, or generated outputs as needed to provide the requested workflow. We apply access controls and vendor controls designed to limit provider use to the relevant service purpose.",
        ],
      },
      {
        heading: "Outbound communications",
        paragraphs: [
          "Customers must use Xyra's outreach features in a lawful and respectful way, including using accurate sender information, honoring opt-outs, maintaining suppression lists, avoiding deceptive content, and following applicable email, phone, messaging, advertising, and data-protection rules.",
        ],
      },
    ],
  },
  {
    id: "cookies",
    title: "6. Cookies, logs, and website technologies",
    lead:
      "The current website is primarily a marketing and demo-request site. It does not currently include advertising pixels or analytics scripts.",
    blocks: [
      {
        bullets: [
          "The website may still generate standard server, hosting, security, and browser logs when pages are requested.",
          "The site loads fonts from Google Fonts, which means a visitor's browser may connect to Google to request font files.",
          "Demo request submissions are sent through Google Forms, so Google may process submitted form values and related technical data in order to provide that form service.",
          "If Xyra later adds analytics, advertising pixels, consent tools, or additional cookies, this policy should be updated to describe those tools and the available choices.",
        ],
      },
    ],
  },
  {
    id: "sharing",
    title: "7. How we share information",
    lead:
      "We do not sell personal information. We share information only where needed to operate Xyra, provide customer-selected workflows, comply with law, or protect the service.",
    blocks: [
      {
        bullets: [
          "Service providers that support hosting, forms, cloud infrastructure, storage, security, email delivery, communications, analytics, customer support, billing, scheduling, AI processing, voice workflows, enrichment, verification, and integrations.",
          "Customer-selected integrations and connected services when a customer authorizes Xyra to sync or send information to those tools.",
          "Customer administrators and authorized users based on the customer's roles, permissions, workspace settings, and audit controls.",
          "Professional advisers, auditors, insurers, and legal representatives where needed for business, compliance, or risk-management purposes.",
          "Authorities, regulators, courts, or third parties where disclosure is required by law, necessary to enforce agreements, or needed to protect Xyra, customers, users, prospects, or the public.",
          "A successor organization if Xyra is involved in a merger, acquisition, financing, restructuring, sale of assets, or similar corporate transaction.",
        ],
      },
    ],
  },
  {
    id: "retention",
    title: "8. Retention",
    lead:
      "We keep personal information for as long as needed for the purposes described in this policy, unless a longer period is required or permitted by law.",
    blocks: [
      {
        bullets: [
          "Demo and sales inquiry records are kept while evaluating fit, managing the sales relationship, supporting procurement, and maintaining reasonable business records.",
          "Customer account, CRM, campaign, integration, audit, and analytics data are generally kept for the life of the customer account and then deleted or returned according to the applicable agreement, product settings, and backup lifecycle.",
          "Security logs, access logs, error logs, and audit records may be kept for a limited period needed for security, investigation, compliance, and reliability.",
          "We may retain limited records after deletion where needed for legal claims, fraud prevention, financial records, enforcement, suppression lists, unsubscribe records, or compliance.",
        ],
      },
    ],
  },
  {
    id: "security",
    title: "9. Security",
    lead:
      "Xyra is built around CRM data, outreach workflows, reporting visibility, and admin controls, so security is treated as part of the product workflow.",
    blocks: [
      {
        bullets: [
          "Security controls may include encryption in transit and at rest, role-based access control, admin permissions, two-factor authentication, single sign-on planning, audit visibility, access reviews, monitoring, and rate or abuse controls.",
          "No system can be guaranteed to be completely secure. Customers and users should protect account credentials, configure permissions carefully, review connected integrations, and notify Xyra promptly about suspected unauthorized access.",
        ],
      },
    ],
  },
  {
    id: "international",
    title: "10. International processing",
    lead:
      "Xyra supports remote demos and distributed teams, and service providers may process information in countries other than where a user, prospect, or customer is located.",
    blocks: [
      {
        paragraphs: [
          "Where required, Xyra uses contractual, technical, and organizational safeguards designed to protect personal information when it is transferred or processed internationally. The privacy protections available in another country may differ from those in the country where the information was first collected.",
        ],
      },
    ],
  },
  {
    id: "rights",
    title: "11. Choices and rights",
    lead:
      "Depending on location and the type of information involved, individuals may have rights over their personal information.",
    blocks: [
      {
        bullets: [
          "Request access to, correction of, deletion of, or a copy of personal information.",
          "Object to or restrict certain processing, or request portability where applicable.",
          "Withdraw consent where processing is based on consent.",
          "Opt out of marketing communications and request that outreach stop where required by law.",
          "Ask a customer to update, delete, or restrict information that the customer controls in its Xyra workspace.",
        ],
      },
      {
        paragraphs: [
          "If Xyra receives a request about information controlled by a customer, we may refer the requester to that customer or help the customer respond according to the applicable agreement. Xyra may need to verify identity and request details before completing a privacy request.",
        ],
      },
    ],
  },
  {
    id: "children",
    title: "12. Children",
    lead:
      "Xyra is a business CRM and sales platform. It is not intended for children or for personal, household, or educational use by minors.",
    blocks: [
      {
        paragraphs: [
          "We do not knowingly collect personal information from children through the website or service. If we learn that a child has provided personal information directly to Xyra, we will take appropriate steps to delete it.",
        ],
      },
    ],
  },
  {
    id: "changes-contact",
    title: "13. Changes and contact",
    lead:
      "We may update this policy as the website, product, providers, features, legal requirements, or business operations change.",
    blocks: [
      {
        paragraphs: [
          `The "Last updated" date shows when this version was published. Material changes should be reflected on this page or communicated through another reasonable channel.`,
          "For privacy questions, demo-data questions, or requests related to this policy, use the contact page or call the sales number listed on the website. If the request concerns data controlled by a Xyra customer, contact that customer directly first.",
        ],
      },
    ],
  },
];

function PolicyBlockContent({ block }: { block: PolicyBlock }) {
  return (
    <div className="mt-7 first:mt-0">
      {block.heading ? (
        <h3 className="text-[1.35rem] font-semibold tracking-[-0.02em] text-ink">
          {block.heading}
        </h3>
      ) : null}

      {block.paragraphs ? (
        <div className={`${block.heading ? "mt-4" : ""} space-y-4`}>
          {block.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-[15px] leading-relaxed text-ink-2">
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}

      {block.bullets ? (
        <ul className={`${block.heading ? "mt-4" : ""} space-y-3 border-l border-line pl-5`}>
          {block.bullets.map((bullet) => (
            <li key={bullet} className="text-[15px] leading-relaxed text-ink-2">
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Privacy"
        title="Privacy practices for the website, demo flow, and CRM platform."
        lead="This policy maps Xyra's actual sales, CRM, AI outreach, reporting, integration, and security workflows to the personal information they may involve."
        image="/images/case-analytics.jpg"
        primaryCta={{ label: "Contact sales", href: routes.contact }}
        secondaryCta={{ label: "View security", href: routes.security }}
      />

      <StatStrip
        stats={[
          {
            value: "B2B",
            label: "Built for company CRM, sales, marketing, support, and outreach workflows.",
          },
          {
            value: "Google",
            label: "Demo requests submit through Google Forms and site fonts load from Google Fonts.",
          },
          {
            value: "No pixels",
            label: "No analytics script or advertising pixel is currently present on the website.",
          },
        ]}
      />

      <section className="bg-white py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
            <Reveal as="aside" className="h-fit lg:sticky lg:top-28">
              <Eyebrow>Contents</Eyebrow>
              <nav className="mt-7 space-y-1" aria-label="Privacy policy sections">
                {policySections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block border-l border-line px-4 py-2 text-[14px] font-medium text-ink-3 transition-colors hover:border-ink hover:text-ink"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>

              <div className="mt-8 border border-line bg-bg-soft p-5">
                <div className="font-ui text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-3">
                  Last updated
                </div>
                <p className="mt-3 text-[15px] font-semibold text-ink">
                  {lastUpdated}
                </p>
                <p className="mt-4 text-[13px] leading-relaxed text-ink-3">
                  Covers the website, demo requests, customer-controlled CRM
                  data, AI workflows, integrations, and security operations.
                </p>
              </div>
            </Reveal>

            <div className="space-y-16">
              {policySections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 border-b border-line pb-16 last:border-b-0 last:pb-0"
                >
                  <Reveal delay={Math.min(index * 35, 180)}>
                    <h2 className="text-[2rem] font-semibold leading-[1.12] tracking-[-0.02em] text-ink sm:text-[2.35rem]">
                      {section.title}
                    </h2>
                    <p className="mt-5 text-[17px] leading-relaxed text-ink">
                      {section.lead}
                    </p>
                    <div className="mt-8">
                      {section.blocks.map((block, blockIndex) => (
                        <PolicyBlockContent
                          key={`${section.id}-${block.heading ?? blockIndex}`}
                          block={block}
                        />
                      ))}
                    </div>
                  </Reveal>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <PageCTA
        image="/images/case-growth.jpg"
        eyebrow="Questions about data handling?"
        title="Talk through privacy and security requirements before rollout."
        lead="We can keep the conversation tied to the workflows, integrations, and controls your team expects to use."
        primary={{ label: "Contact sales", href: routes.contact }}
        secondary={{ label: "View security", href: routes.security }}
      />
    </main>
  );
}
