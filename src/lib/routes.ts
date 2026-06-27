export const routes = {
  home: "/",
  features: "/features",
  process: "/process",
  pricing: "/pricing",
  faq: "/faq",
  caseStudies: "/case-studies",
  contact: "/contact",
  demo: "/book-demo",
  security: "/security",
  privacy: "/privacy",
  homeSection: (id: string) => `/#${id}`,
  featuresSection: (id: string) => `/features#${id}`,
} as const;
