import type { PageContent } from "@/types/content";

// Community cluster
export const discordCommunity: PageContent = {
  id: "fixed-discord-community-en-US",
  translationKey: "discord-community",
  locale: "en-US",
  routeKind: "fixed",
  slug: "discord",
  url: "/discord",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Official ArmorSim Discord",
  seoTitle: "Official ArmorSim Discord Server: Invite and Channels",
  metaDescription:
    "Find the official ArmorSim Discord server via the Steam store sidebar link and verify the invite against the official source as of 2026-09-15.",
  summary:
    "Join the official ArmorSim Discord community and verify its invite link.",
  hero: {
    eyebrow: "Community",
    subtitle:
      "Verified invite linked from the Steam store sidebar for AppID 5159810.",
    ctas: [
      { label: "Wiki & FAQ", href: "/wiki" },
      { label: "Release date", href: "/release-date" },
    ],
  },
  quickAnswer:
    "The official ArmorSim Discord invite is linked from the Steam store sidebar for AppID 5159810. Re-verify the invite link against the Steam store sidebar before joining, because third-party mirrors and search-result copies can drift. The Discord is the channel where the developer (Galimov Dynamics) posts early announcements and where players compare solve results.",
  keyFacts: [
    { label: "Invite source", value: "Steam store sidebar for AppID 5159810" },
    { label: "Verified", value: "Always re-verify against the Steam store sidebar" },
    { label: "Use", value: "Announcements, solve comparisons, EA discussion" },
    { label: "Research date", value: "2026-09-15" },
  ],
  modules: [
    {
      id: "verify-invite",
      type: "callout",
      tone: "tip",
      title: "Always verify the invite",
      body:
        "Before joining, re-verify the invite link against the Steam store sidebar for AppID 5159810. Third-party mirrors and search-result copies of the invite can drift; the Steam sidebar is the authoritative source.",
    },
    {
      id: "channels",
      type: "prose",
      heading: "Community channels",
      body:
        "The official Discord carries announcement channels, general discussion, replay sharing, and EA-specific channels. Treat any channel that asks for your Steam account credentials as a phishing attempt — the official Discord never requests credentials in DM.",
    },
    {
      id: "compare-with-community-hub",
      type: "prose",
      heading: "Compare with the Steam Community Hub",
      body:
        "The Steam Community Hub for AppID 5159810 is the second community surface. Use the Community Hub for long-form discussion and workshop-style posts; use the Discord for fast chat and developer Q&A.",
      links: [
        {
          label: "Steam Community Hub",
          href: "https://steamcommunity.com/app/5159810",
          description: "Discussion boards and developer posts.",
        },
        { label: "Steam store sidebar", href: "https://store.steampowered.com/app/5159810/ArmorSim/" },
      ],
    },
  ],
  faqIds: ["discord-official", "discord-credentials", "discord-vs-community-hub"],
  relatedPageIds: ["wiki", "fixed-replay-sharing-en-US", "fixed-release-date-status-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};

export const wikiFaq: PageContent = {
  id: "wiki",
  translationKey: "wiki-faq",
  locale: "en-US",
  routeKind: "fixed",
  slug: "wiki",
  url: "/wiki",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "Is There an ArmorSim Wiki?",
  seoTitle: "Is There an ArmorSim Wiki? Community FAQ Hub Status",
  metaDescription:
    "No third-party ArmorSim wiki exists yet. Steam Community Hub discussions are the FAQ surface today; see roadmap pointers and how the wiki is organized post-launch.",
  summary:
    "Find a community-maintained ArmorSim wiki, FAQ hub, and current Early Access questions.",
  hero: {
    eyebrow: "Community",
      subtitle:
      "No third-party wiki exists yet. Steam Community Hub discussions are the current FAQ surface.",
    ctas: [
      { label: "Discord community", href: "/discord" },
      { label: "Gameplay overview", href: "/gameplay" },
    ],
  },
  quickAnswer:
    "No third-party ArmorSim wiki has been established as of the research date 2026-09-15. The Steam Community Hub discussion boards for AppID 5159810 serve as the current FAQ surface. Once a community wiki is established, the developer will likely link to it from the Community Hub or the verified Discord.",
  keyFacts: [
    { label: "Third-party wiki", value: "Not established as of 2026-09-15" },
    { label: "Current FAQ surface", value: "Steam Community Hub discussion boards" },
    { label: "Roadmap pointers", value: "Discord announcements" },
    { label: "Update cadence", value: "Re-check at launch and after EA milestones" },
  ],
  modules: [
    {
      id: "no-wiki-yet",
      type: "callout",
      tone: "unknown",
      title: "No community wiki established",
      body:
        "No third-party ArmorSim wiki has been established as of the research date 2026-09-15. The Steam Community Hub discussion boards are the current FAQ surface.",
    },
    {
      id: "current-faq-surface",
      type: "prose",
      heading: "Current FAQ surface",
      body:
        "The Steam Community Hub for AppID 5159810 hosts discussion threads that function as the current FAQ. Search the Hub for your question before opening a new thread — the answer is often already pinned.",
      links: [
        {
          label: "Steam Community Hub",
          href: "https://steamcommunity.com/app/5159810",
          description: "Discussion boards for AppID 5159810.",
        },
      ],
    },
    {
      id: "roadmap-pointers",
      type: "prose",
      heading: "Roadmap and EA milestones",
      body:
        "EA roadmap milestones are not announced as of 2026-09-15. Watch the Discord announcement channels for the first roadmap post.",
      links: [{ label: "Discord community", href: "/discord" }],
    },
    {
      id: "how-organized",
      type: "prose",
      heading: "How this wiki is organized",
      body:
        "This ArmorSim wiki is organized around four clusters: Launch & Status (release-date, demo, price, system requirements), Simulation Loop (gameplay, beginner guide, solver modes, penetration mechanics), Materials & Configuration (armor materials, ammunition, armor configurations, replay sharing), and Community (Discord, FAQ). Each cluster links to its fixed pages with stable URL slugs.",
    },
  ],
  faqIds: ["wiki-exists", "faq-where", "wiki-launch"],
  relatedPageIds: ["fixed-discord-community-en-US", "fixed-gameplay-overview-en-US", "fixed-beginners-guide-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};
