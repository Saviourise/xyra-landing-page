import {
  BarChart3,
  Building2,
  CheckSquare,
  Clapperboard,
  Columns3,
  Gauge,
  Lock,
  MailPlus,
  PhoneCall,
  Plug,
  Repeat2,
  Search,
  ShieldCheck,
  UserPlus,
  Users,
  type LucideIcon,
} from "lucide-react";
import { routes } from "../lib/routes";

export type FeatureItem = {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
  desc: string;
  bullets: string[];
};

export type FeatureGroup = {
  id: string;
  title: string;
  intro: string;
  items: FeatureItem[];
};

export const FEATURE_GROUPS: FeatureGroup[] = [
  {
    id: "crm-core",
    title: "CRM Core",
    intro:
      "A clean operational layer for contacts, accounts, pipeline execution, and team visibility.",
    items: [
      {
        id: "contacts",
        label: "Contacts",
        icon: Users,
        href: routes.featuresSection("contacts"),
        desc: "Keep every touchpoint, owner, note, and activity attached to the right buyer record.",
        bullets: ["Unified contact profiles", "Activity history", "Ownership controls"],
      },
      {
        id: "companies",
        label: "Companies",
        icon: Building2,
        href: routes.featuresSection("companies"),
        desc: "Group stakeholders by account so reps can sell with shared context across the buying committee.",
        bullets: ["Account-level records", "Relationship mapping", "Shared intelligence"],
      },
      {
        id: "leads",
        label: "Leads",
        icon: UserPlus,
        href: routes.featuresSection("leads"),
        desc: "Capture, qualify, and route leads before they move into the active deal pipeline.",
        bullets: ["Qualification workflow", "Source tracking", "Fast routing"],
      },
      {
        id: "pipeline",
        label: "Pipeline",
        icon: Columns3,
        href: routes.featuresSection("pipeline"),
        desc: "See every stage, blocker, and next step in a pipeline built for team-wide clarity.",
        bullets: ["Deal boards", "Stage movement", "Forecast visibility"],
      },
      {
        id: "tasks",
        label: "Tasks",
        icon: CheckSquare,
        href: routes.featuresSection("tasks"),
        desc: "Turn follow-ups into a reliable cadence with reminders, queues, and execution discipline.",
        bullets: ["Task queues", "Reminders", "Execution consistency"],
      },
    ],
  },
  {
    id: "ai-outreach",
    title: "AI Outreach",
    intro:
      "The sourcing, verification, personalization, and sequencing layer for outbound growth.",
    items: [
      {
        id: "ai-lead-generation",
        label: "AI Lead Generation",
        icon: Search,
        href: routes.featuresSection("ai-lead-generation"),
        desc: "Describe your ICP in plain English and turn it into a ready-to-work prospect list.",
        bullets: ["Natural-language sourcing", "ICP translation", "Fast list creation"],
      },
      {
        id: "cold-email-automation",
        label: "Cold Email Automation",
        icon: MailPlus,
        href: routes.featuresSection("cold-email-automation"),
        desc: "Launch personalized email campaigns without juggling spreadsheets or repetitive copywriting.",
        bullets: ["Personalized outreach", "Campaign orchestration", "Scale without drag"],
      },
      {
        id: "email-verification",
        label: "Email Verification",
        icon: ShieldCheck,
        href: routes.featuresSection("email-verification"),
        desc: "Validate addresses before launch so your sequences start with cleaner deliverable data.",
        bullets: ["Pre-send checks", "Lower bounce risk", "Better sender health"],
      },
      {
        id: "follow-up-sequences",
        label: "Follow-up Sequences",
        icon: Repeat2,
        href: routes.featuresSection("follow-up-sequences"),
        desc: "Keep momentum with timed multi-step follow-ups that adapt when prospects engage.",
        bullets: ["Sequence automation", "Reply-aware logic", "Cadence management"],
      },
    ],
  },
  {
    id: "ai-marketing-hub",
    title: "AI Marketing Hub",
    intro:
      "A premium AI layer for content production, voice-led qualification, and smarter prioritization.",
    items: [
      {
        id: "ai-video-social",
        label: "AI Video & Social",
        icon: Clapperboard,
        href: routes.featuresSection("ai-video-social"),
        desc: "Generate campaign-ready creative assets from a short brief and move faster across channels.",
        bullets: ["Script-to-video", "Content generation", "Publishing support"],
      },
      {
        id: "ai-voice-agents",
        label: "AI Voice Agents",
        icon: PhoneCall,
        href: routes.featuresSection("ai-voice-agents"),
        desc: "Run qualification and follow-up calls with agents that listen, adapt, and log outcomes.",
        bullets: ["Automated calling", "Outcome logging", "Qualification flows"],
      },
      {
        id: "predictive-lead-scoring",
        label: "Predictive Lead Scoring",
        icon: Gauge,
        href: routes.featuresSection("predictive-lead-scoring"),
        desc: "Prioritize the best-fit leads first and guide reps toward the next best action.",
        bullets: ["Opportunity ranking", "Next-step guidance", "Revenue focus"],
      },
    ],
  },
  {
    id: "insights-admin",
    title: "Insights & Admin",
    intro:
      "Reporting, integrations, and governance controls for teams scaling with confidence.",
    items: [
      {
        id: "reports-dashboards",
        label: "Reports & Dashboards",
        icon: BarChart3,
        href: routes.featuresSection("reports-dashboards"),
        desc: "Track campaigns, pipeline health, and rep performance from a single reporting layer.",
        bullets: ["Performance analytics", "Pipeline visibility", "Operational reporting"],
      },
      {
        id: "integrations",
        label: "Integrations",
        icon: Plug,
        href: routes.featuresSection("integrations"),
        desc: "Connect the rest of your sales stack so Xyra fits into the workflow your team already runs.",
        bullets: ["Connected systems", "Data sync", "Workflow continuity"],
      },
      {
        id: "security-rbac",
        label: "Security & RBAC",
        icon: Lock,
        href: routes.featuresSection("security-rbac"),
        desc: "Set permissions, control access, and keep a defensible audit trail around your data.",
        bullets: ["Role-based access", "Audit visibility", "Admin controls"],
      },
    ],
  },
];

export const CASE_STUDIES = [
  {
    id: "outbound-at-scale",
    img: "/images/case-analytics.jpg",
    title: "Outbound at scale",
    desc:
      "How a B2B sales team replaced manual prospecting with AI sourcing and verified 10,000 leads in a week.",
    challenge:
      "Manual prospect research, list cleaning, and repetitive outreach drafting were slowing down the team every week.",
    approach: [
      "Replaced manual list building with AI lead generation based on plain-language ICP prompts.",
      "Verified addresses before launch to protect deliverability and reduce wasted send volume.",
      "Moved outreach into shared automated sequences so follow-up execution stayed consistent.",
    ],
    outcomes: ["10,000 verified leads in one week", "Faster list-to-launch cycle", "Less manual work per rep"],
  },
  {
    id: "from-cold-to-closed",
    img: "/images/case-growth.jpg",
    title: "From cold to closed",
    desc:
      "A growing tech firm used AI-personalized sequences to lift reply rates and shorten its sales cycle.",
    challenge:
      "The team had strong offer-market fit, but inconsistent personalization and follow-up were limiting replies.",
    approach: [
      "Generated outreach from lead and account context instead of writing each touch from scratch.",
      "Introduced reply-aware sequences to keep outreach timely without adding operational overhead.",
      "Used scoring and reporting to focus effort on the deals most likely to move forward.",
    ],
    outcomes: ["Higher reply rates", "Shorter sales cycle", "Sharper prioritization across the pipeline"],
  },
];

export const FOOTER_LINKS = [
  { label: "Home", href: routes.home },
  { label: "Features", href: routes.features },
  { label: "Pricing", href: routes.pricing },
  { label: "Process", href: routes.process },
  { label: "FAQ", href: routes.faq },
  { label: "Security", href: routes.security },
  { label: "Case studies", href: routes.caseStudies },
];

export const FAQS = [
  {
    question: "How quickly can we book a demo?",
    answer:
      "Most teams can book a demo right away. Send the request and we will get back to you within two business days to line up the right conversation.",
  },
  {
    question: "Do we need to change our current sales process?",
    answer:
      "No. Xyra is designed to fit the workflow you already run and remove the manual steps around sourcing, verification, personalization, and follow-up.",
  },
  {
    question: "Can we use Xyra for outbound and pipeline tracking together?",
    answer:
      "Yes. The platform combines CRM, outreach, and analytics so teams can work from one system instead of stitching multiple tools together.",
  },
  {
    question: "How does email verification work?",
    answer:
      "Prospects are verified before campaigns launch, which helps keep bounce rates down and protects sender reputation.",
  },
  {
    question: "Is our data protected?",
    answer:
      "The platform is built with encryption, permissions, and audit visibility in mind. Security and access control are core parts of the product, not add-ons.",
  },
  {
    question: "Can we talk to someone before making a decision?",
    answer:
      "Yes. The contact and demo pages are there for teams that want to understand fit, pricing, or rollout details before they commit.",
  },
];
