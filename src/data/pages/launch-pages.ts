import type { PageContent } from "@/types/content";

// Launch & Status cluster
export const releaseDateStatus: PageContent = {
  id: "fixed-release-date-status-en-US",
  translationKey: "release-date-status",
  locale: "en-US",
  routeKind: "fixed",
  slug: "release-date",
  url: "/release-date",
  pageType: "release",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "ArmorSim Release Date and Early Access Status",
  seoTitle: "ArmorSim Release Date and Early Access Status (2026-09-16)",
  metaDescription:
    "Confirm the ArmorSim release date: Early Access on Steam is set for 2026-09-16. See the G2A date note and where the launch is announced.",
  summary:
    "Confirm when ArmorSim launches into Early Access and whether the launch date has shifted.",
  hero: {
    eyebrow: "Launch & Status",
    subtitle:
      "Live Steam store date for ArmorSim (AppID 5159810): 2026-09-16 Early Access.",
    ctas: [
      { label: "Gameplay overview", href: "/gameplay" },
      { label: "System requirements", href: "/system-requirements" },
    ],
  },
  quickAnswer:
    "The ArmorSim release date for Steam Early Access is 2026-09-16, as listed on the live Steam store page for AppID 5159810 at the time of writing on 2026-09-15. The planned Early Access duration is roughly twelve months, so the full 1.0 release is expected sometime after the EA window. Some third-party cached listings, including a G2A news spotlight, still show a 2026-09-07 date; treat that as a research-date discrepancy that the live Steam store supersedes.",
  keyFacts: [
    { label: "EA launch date", value: "2026-09-16 (Steam store, AppID 5159810)" },
    { label: "Developer", value: "Galimov Dynamics" },
    { label: "Publisher of record", value: "Timerlan Galimov" },
    { label: "Planned EA duration", value: "Roughly twelve months" },
  ],
  modules: [
    {
      id: "when-does-armorsim-release",
      type: "prose",
      heading: "When does ArmorSim release?",
      body:
        "The ArmorSim release date is 2026-09-16, per the live Steam store sidebar for AppID 5159810. The store page is updated by the developer, Galimov Dynamics (publisher of record: Timerlan Galimov). Because Steam store pages can be re-saved in any timezone, a buyer should re-open the store page the moment they are ready to install. The Early Access window is a real paid release, not a soft launch. The store description describes a sandbox with fourteen armor materials, four penetrator cores, and three solver tiers (NORMAL, ADVANCED, ULTRA) that is intended to evolve over roughly twelve months. That EA duration is the developer's stated plan; it is not a hard release date for version 1.0.",
    },
    {
      id: "early-access-meaning",
      type: "prose",
      heading: "What \"Early Access\" means for the ArmorSim launch",
      body:
        "Early Access on Steam means the game is purchased at a discount relative to the planned 1.0 price and that the buyer accepts a build that is still in active development. For ArmorSim, the practical consequences are: solver behaviors may change, the materials list and penetrator roster may expand, and ULTRA mode may be limited in early EA. Buyers who want a feature-frozen build should wait until the EA banner is removed from the Steam store page; buyers who want to shape the roadmap should join the Discord and the Community Hub discussion boards listed on the store sidebar. The store description lists what is in the EA build right now: the scene editor, the three solvers, the documented material set, the three service-ammunition families, the four penetrator cores, and the slow-motion replay workflow that exports a replay file measured in megabytes.",
    },
    {
      id: "date-stability",
      type: "prose",
      heading: "Is the ArmorSim release date stable?",
      body:
        "The 2026-09-16 date has been stable on the live Steam store page through the research window. No publisher announcement or Steam news post on the Community Hub has moved the date as of 2026-09-15. If the date shifts, the change will appear first on the Steam store sidebar, then on SteamDB's metadata snapshot for AppID 5159810, then on the developer's social channels linked from the sidebar. A cached G2A news spotlight still reports a 2026-09-07 Early Access start. That figure is a research-date discrepancy: the article was indexed before the developer finalized the live Steam date. Readers who only saw the G2A headline should ignore it and rely on the live store.",
    },
    {
      id: "where-announced",
      type: "prose",
      heading: "Where the launch date is announced first",
      body:
        "The launch date for ArmorSim is announced first on the live Steam store page (store.steampowered.com/app/5159810/ArmorSim/). The change is then mirrored on SteamDB (steamdb.info/app/5159810/), the Steam Community Hub (steamcommunity.com/app/5159810), and the developer Galimov Dynamics social channels linked from the sidebar. The order matters: if you only check one place, the live store sidebar is the source of truth.",
      links: [
        {
          label: "Steam store AppID 5159810",
          href: "https://store.steampowered.com/app/5159810/ArmorSim/",
          description: "Live Steam store page for ArmorSim.",
        },
        {
          label: "SteamDB AppID 5159810",
          href: "https://steamdb.info/app/5159810/",
          description: "Metadata snapshot for the Steam app.",
        },
      ],
    },
  ],
  faqIds: ["release-date-confirmed", "release-timezone", "release-delayed", "leave-ea-2027"],
  relatedPageIds: ["fixed-gameplay-overview-en-US", "fixed-price-editions-en-US", "fixed-system-requirements-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};

export const demoStatus: PageContent = {
  id: "fixed-demo-status-en-US",
  translationKey: "demo-status",
  locale: "en-US",
  routeKind: "fixed",
  slug: "demo",
  url: "/demo",
  pageType: "release",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Is There an ArmorSim Demo?",
  seoTitle: "Is There an ArmorSim Demo? Free Trial and Playtest Status",
  metaDescription:
    "No ArmorSim demo, free trial, or open playtest has been announced as of 2026-09-15. See where the developer would post a demo and how to follow Steam for updates.",
  summary:
    "Find whether ArmorSim has a demo, free trial, or open playtest.",
  hero: {
    eyebrow: "Launch & Status",
    subtitle:
      "No ArmorSim demo has been announced as of research date 2026-09-15.",
    ctas: [
      { label: "Release date", href: "/release-date" },
      { label: "Discord community", href: "/discord" },
    ],
  },
  quickAnswer:
    "No ArmorSim demo, free trial, or open playtest has been announced as of the research date 2026-09-15. The Steam store sidebar for AppID 5159810 does not list a demo or free trial, and the developer has not posted an open playtest announcement through the Community Hub or the social channels linked from the store sidebar.",
  keyFacts: [
    { label: "Demo status", value: "Not announced as of 2026-09-15" },
    { label: "Free trial", value: "Not announced as of 2026-09-15" },
    { label: "Playtest", value: "Not announced as of 2026-09-15" },
    { label: "Follow for updates", value: "Steam Community Hub + Discord" },
  ],
  modules: [
    {
      id: "no-demo-announced",
      type: "callout",
      tone: "unknown",
      title: "No demo announced",
      body:
        "The Steam store page for ArmorSim (AppID 5159810) does not list a demo, free trial, or open playtest as of 2026-09-15. The game ships straight into Early Access on 2026-09-16.",
    },
    {
      id: "how-to-follow",
      type: "prose",
      heading: "How to follow ArmorSim for a future demo",
      body:
        "Demo and playtest announcements appear first on the Steam Community Hub discussion boards for AppID 5159810, then on the developer's social channels linked from the store sidebar (Discord, TikTok, Telegram, Instagram). The Community Hub \"Announcements\" thread is the most reliable place to watch. The store page itself does not have a demo opt-in toggle in the sidebar at the research date.",
    },
    {
      id: "where-to-watch",
      type: "prose",
      heading: "Where to watch for future demo news",
      body:
        "If a demo is announced, the change will appear on the Steam store sidebar (which adds a \"Download Demo\" button), the SteamDB AppID 5159810 metadata, and the Community Hub. Treat any third-party listing that claims an ArmorSim demo as unconfirmed unless it matches one of those official surfaces.",
      links: [
        {
          label: "Steam Community Hub",
          href: "https://steamcommunity.com/app/5159810",
          description: "Discussion boards and developer posts.",
        },
        {
          label: "Discord community",
          href: "/discord",
          description: "Verified official Discord invite.",
        },
      ],
    },
  ],
  faqIds: ["demo-available", "demo-follow", "free-trial"],
  relatedPageIds: ["fixed-release-date-status-en-US", "fixed-discord-community-en-US", "wiki"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};

export const priceEditions: PageContent = {
  id: "fixed-price-editions-en-US",
  translationKey: "price-editions",
  locale: "en-US",
  routeKind: "fixed",
  slug: "price",
  url: "/price",
  pageType: "release",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "ArmorSim Price: Early Access Cost and Editions",
  seoTitle: "ArmorSim Price: Early Access Cost and Editions",
  metaDescription:
    "See the ArmorSim price, edition tiers, and Early Access cost on Steam. Use the live store page as the source of truth and learn where the price is announced first.",
  summary:
    "Check ArmorSim Early Access price, edition tiers, and any launch discount.",
  hero: {
    eyebrow: "Launch & Status",
    subtitle:
      "Live Steam store price for ArmorSim: see the store page for the current Early Access cost.",
    ctas: [
      { label: "Release date", href: "/release-date" },
      { label: "Demo status", href: "/demo" },
    ],
  },
  quickAnswer:
    "Use the live Steam store page for AppID 5159810 as the source of truth for the ArmorSim price. The store sidebar shows the Early Access price for the standard edition. ArmorSim does not advertise multiple edition tiers beyond the standard EA build; check the store page on the morning of 2026-09-16 if you want to confirm the launch-day price, because Steam store prices can change between windows.",
  keyFacts: [
    { label: "Edition at launch", value: "Standard Early Access build" },
    { label: "Source of truth", value: "Steam store sidebar" },
    { label: "Post-launch changes", value: "Not announced as of 2026-09-15" },
    { label: "Launch discount", value: "Not announced as of 2026-09-15" },
  ],
  modules: [
    {
      id: "price-source",
      type: "prose",
      heading: "Where the price is shown",
      body:
        "The ArmorSim price is shown on the Steam store sidebar for AppID 5159810, alongside the Add to Cart button. That sidebar is updated by the developer (Galimov Dynamics) and the publisher of record (Timerlan Galimov). Re-open the store page on launch day 2026-09-16 to confirm the price at the moment of purchase; Steam lets developers change prices across timezones and regional currencies.",
    },
    {
      id: "editions",
      type: "prose",
      heading: "Editions and tiers",
      body:
        "The Steam store page for ArmorSim lists a standard Early Access edition. There is no separate Deluxe or Premium tier advertised in the store sidebar or description at the research date. If a multi-edition release is announced later, the change will appear on the Steam store sidebar first and then be mirrored on SteamDB AppID 5159810 and the Community Hub.",
    },
    {
      id: "post-launch-pricing",
      type: "callout",
      tone: "unknown",
      title: "Post-launch pricing",
      body:
        "The developer has not announced post-launch pricing changes or launch-day discounts as of 2026-09-15. Any launch discount that is added will appear on the store sidebar.",
    },
  ],
  faqIds: ["price-source", "price-changes", "launch-discount"],
  relatedPageIds: ["fixed-release-date-status-en-US", "fixed-demo-status-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};

export const systemRequirements: PageContent = {
  id: "fixed-system-requirements-en-US",
  translationKey: "system-requirements",
  locale: "en-US",
  routeKind: "fixed",
  slug: "system-requirements",
  url: "/system-requirements",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "ArmorSim System Requirements",
  seoTitle: "ArmorSim System Requirements: Minimum, Recommended, ULTRA",
  metaDescription:
    "Official ArmorSim system requirements for Steam Early Access: Windows 10 64-bit, i5-4460 / Ryzen 3 1200, GTX 1050 / RX 560, and how ULTRA scales with CPU cores.",
  summary:
    "Verify whether my PC meets ArmorSim minimum/recommended specs and how ULTRA mode scales with CPU cores.",
  hero: {
    eyebrow: "Launch & Status",
    subtitle:
      "Windows 10 64-bit minimums, ULTRA mode is CPU-bound, more physical cores mean shorter solve times.",
    ctas: [
      { label: "Gameplay overview", href: "/gameplay" },
      { label: "Solver modes", href: "/solver-modes" },
    ],
  },
  quickAnswer:
    "ArmorSim targets Windows 10 64-bit. The Steam store minimum is an Intel Core i5-4460 or AMD Ryzen 3 1200 with a GeForce GTX 1050 or Radeon RX 560. The recommended tier is unspecified at the research date. ULTRA mode is CPU-bound: more physical cores mean shorter solve times, so a modern multi-core desktop cuts ULTRA runtimes significantly compared to a quad-core minimum-spec machine.",
  keyFacts: [
    { label: "OS", value: "Windows 10 64-bit" },
    { label: "CPU minimum", value: "Intel Core i5-4460 / AMD Ryzen 3 1200" },
    { label: "GPU minimum", value: "NVIDIA GeForce GTX 1050 / AMD Radeon RX 560" },
    { label: "ULTRA scaling", value: "More physical cores mean shorter solve times" },
  ],
  modules: [
    {
      id: "minimum-specs",
      type: "data-table",
      heading: "Minimum specifications",
      columns: [
        { key: "component", label: "Component" },
        { key: "spec", label: "Spec" },
      ],
      rows: [
        { component: "OS", spec: "Windows 10 64-bit" },
        { component: "Processor", spec: "Intel Core i5-4460 / AMD Ryzen 3 1200" },
        { component: "Graphics", spec: "NVIDIA GeForce GTX 1050 / AMD Radeon RX 560" },
        { component: "DirectX", spec: "Version 11" },
        { component: "Storage", spec: "TBA on Steam store" },
      ],
    },
    {
      id: "recommended-specs",
      type: "callout",
      tone: "unknown",
      title: "Recommended specifications",
      body:
        "The Steam store page lists only minimum specifications as of 2026-09-15. Recommended specs are not announced. Buyers should plan based on the ULTRA CPU scaling note below.",
    },
    {
      id: "ultra-cpu-scaling",
      type: "prose",
      heading: "ULTRA mode is CPU-bound",
      body:
        "The ULTRA solver runs an axisymmetric Lagrangian continuum solver with Johnson–Cook plasticity, which scales with CPU cores. A six-core or eight-core desktop reduces ULTRA solve times noticeably compared to a quad-core minimum-spec machine; a quad-core minimum-spec CPU will still run ULTRA, but each solve will take longer. If you only intend to use the NORMAL and ADVANCED solvers, the minimum-spec CPU is the gating check; if you intend to run ULTRA repeatedly, prioritize physical core count over graphics card upgrades.",
      links: [
        { label: "Solver modes comparison", href: "/solver-modes" },
        { label: "Gameplay overview", href: "/gameplay" },
      ],
    },
    {
      id: "platform-scope",
      type: "prose",
      heading: "Platform scope",
      body:
        "The Steam store listing for ArmorSim targets Windows only at the research date. Console versions are not announced.",
    },
  ],
  faqIds: ["ultra-cores", "min-spec-runs-ultra", "recommended-specs"],
  relatedPageIds: ["fixed-gameplay-overview-en-US", "fixed-solver-modes-comparison-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};
