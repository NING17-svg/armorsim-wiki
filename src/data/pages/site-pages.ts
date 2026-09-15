import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const sitePages: PageContent[] = [
  {
    id: "faq",
    translationKey: "faq",
    locale: "en-US",
    routeKind: "fixed",
    slug: "faq",
    url: "/faq",
    pageType: "faq",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `${site.gameName} FAQ`,
    seoTitle: `${site.gameName} FAQ | Common Questions`,
    metaDescription:
      "Common ArmorSim wiki questions: launch status, EA roadmap, gameplay loop, materials, penetration outputs, and how the wiki is sourced.",
    summary:
      "Common launch, platform, gameplay, and wiki-scope questions answered with official Steam store facts.",
    hero: {
      eyebrow: "FAQ",
      subtitle:
        "Common launch, platform, gameplay, and wiki-scope questions answered with official Steam store facts.",
      ctas: [
        { label: "Release Info", href: "/release-date" },
        { label: "Contact", href: "/contact" },
      ],
    },
    quickAnswer:
      "ArmorSim Wiki answers common launch, platform, gameplay, and wiki-scope questions using facts from the live Steam store page and the Community Hub. Every answer on this page is dated to the research date and re-verified against the store.",
    keyFacts: [
      { label: "FAQ source", value: "Live Steam store page (AppID 5159810)" },
      { label: "Schema", value: "FAQ JSON-LD enabled" },
      { label: "Review", value: "Dated to research date 2026-09-15" },
    ],
    modules: [
      {
        id: "faq-scope",
        type: "prose",
        heading: "FAQ scope",
        body:
          "This page collects short answers to questions a new ArmorSim player or wiki reader is likely to ask. Longer explanations live on the dedicated pages linked below.",
      },
    ],
    faqIds: [
      "what-is-this-site",
      "is-official",
      "release-date-confirmed",
      "platforms",
    ],
    relatedPageIds: ["wiki", "guides", "fixed-release-date-status-en-US", "about"],
    schemaTypes: ["FAQPage", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-15",
  },
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `About ${site.name}`,
    seoTitle: `About ${site.name}`,
    metaDescription:
      "About ArmorSim Wiki: an unofficial fan reference built from the live Steam store page and the Community Hub, with facts dated to the research date.",
    summary:
      "What ArmorSim Wiki covers, how facts are sourced, and what readers should expect.",
    hero: {
      eyebrow: "About",
      subtitle:
        "An unofficial fan reference built from the live Steam store page and the Community Hub.",
      ctas: [{ label: "Contact", href: "/contact" }],
    },
    quickAnswer:
      `${site.name} is an unofficial fan reference hub for ArmorSim (Steam AppID 5159810). Every fact is dated, sourced to the Steam store page or the Community Hub, and re-verified against the live store.`,
    keyFacts: [
      { label: "Status", value: "Unofficial fan reference" },
      { label: "Editorial rule", value: "Live store page as source of truth" },
      { label: "Scope", value: "Launch, simulation loop, materials, community" },
    ],
    modules: [
      {
        id: "mission",
        type: "prose",
        heading: "Mission",
        body:
          "Help players find clear, well-structured information about ArmorSim without overclaiming facts the live store does not support.",
      },
      {
        id: "sourcing",
        type: "prose",
        heading: "Sourcing",
        body:
          "Facts are sourced from the live Steam store page for AppID 5159810, the SteamDB metadata snapshot, the Community Hub, and the developer Galimov Dynamics. Each page carries a research-date stamp.",
      },
    ],
    faqIds: ["what-is-this-site", "is-official"],
    relatedPageIds: ["contact", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-15",
  },
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Contact",
    seoTitle: `Contact | ${site.name}`,
    metaDescription:
      "How to send corrections, official source updates, and site feedback to ArmorSim Wiki.",
    summary:
      "Send corrections, source updates, and site feedback.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Send corrections, source updates, and site feedback.",
      ctas: [{ label: "Read About", href: "/about" }],
    },
    quickAnswer:
      "The fastest way to send a correction is to email the maintainer with a link to the official source. The Discord community (linked from the wiki) is the best place for ongoing questions.",
    keyFacts: [
      { label: "Primary use", value: "Corrections and feedback" },
      { label: "Best channel", value: "Email with official source link" },
      { label: "Response", value: "Acknowledged within EA milestones" },
    ],
    modules: [
      {
        id: "contact-method",
        type: "prose",
        heading: "Contact method",
        body:
          "Email is the primary channel for corrections. Always include a link to the official source so the change can be verified against the live Steam store page.",
      },
      {
        id: "corrections",
        type: "prose",
        heading: "Corrections",
        body:
          "Invite readers to send official source links when facts change. The wiki does not request private account information or game account credentials.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-15",
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Privacy Policy",
    seoTitle: `Privacy Policy | ${site.name}`,
    metaDescription:
      "Privacy policy for ArmorSim Wiki: GA4 analytics only when configured, no user accounts, no advertising cookies beyond the publisher-controlled AdSense placeholder.",
    summary:
      "How ArmorSim Wiki handles analytics, contact messages, and advertising.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "How ArmorSim Wiki handles analytics, contact messages, and advertising.",
      ctas: [{ label: "Terms", href: "/terms" }],
    },
    quickAnswer:
      "ArmorSim Wiki uses Google Analytics 4 only when configured by the site owner. No user accounts are required. Advertising placements are controlled by the publisher-level AdSense record on the ads.txt file; no third-party ad cookies run unless the operator enables Adsterra.",
    keyFacts: [
      { label: "Analytics", value: "GA4 only when configured" },
      { label: "Accounts", value: "No user accounts" },
      { label: "Ads", value: "Adsterra only when enabled by the operator" },
    ],
    modules: [
      {
        id: "data",
        type: "prose",
        heading: "Information we collect",
        body:
          "This site does not include accounts, comments, or payments. If GA4 is configured, analytics may collect aggregate usage information according to Google Analytics settings. If advertising is enabled, the third-party advertising provider may process technical request data and use cookies or similar technologies to deliver and measure ads.",
      },
      {
        id: "contact",
        type: "prose",
        heading: "Contact messages",
        body:
          "If a contact email is enabled, messages may include the information visitors choose to send. The wiki does not request sensitive personal information.",
      },
      {
        id: "updates",
        type: "prose",
        heading: "Policy updates",
        body:
          "This policy is updated when analytics, hosting, contact methods, advertising providers, or other data-collection behavior changes.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-15",
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Terms of Use",
    seoTitle: `Terms of Use | ${site.name}`,
    metaDescription:
      "Terms of use for ArmorSim Wiki: an unofficial fan reference built from the live Steam store page, with facts dated to the research date.",
    summary:
      "How to use ArmorSim Wiki and what to expect from this unofficial fan reference.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "How to use ArmorSim Wiki and what to expect from this unofficial fan reference.",
      ctas: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
    quickAnswer:
      "ArmorSim Wiki is an unofficial fan reference. Use it for orientation, then confirm the final purchase, platform, and release decisions with the live Steam store page.",
    keyFacts: [
      { label: "Use", value: "Informational reference" },
      { label: "Official status", value: "Unofficial fan site" },
      { label: "Source of truth", value: "Live Steam store page" },
    ],
    modules: [
      {
        id: "unofficial",
        type: "prose",
        heading: "Unofficial site",
        body:
          "This site is not affiliated with the game publisher, developer, platform holders, or trademark owners. It is built from publicly visible Steam store copy and the Community Hub.",
      },
      {
        id: "accuracy",
        type: "prose",
        heading: "Information accuracy",
        body:
          "Wiki facts may change as the developer updates the live Steam store page. Use the live store for final purchase, platform, and release decisions.",
      },
      {
        id: "acceptable-use",
        type: "prose",
        heading: "Acceptable use",
        body:
          "Do not misuse the site, scrape aggressively, interfere with service availability, or submit harmful content through any contact channel.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-15",
  },
];
