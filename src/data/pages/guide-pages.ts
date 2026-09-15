import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const guidePages: PageContent[] = [
  {
    id: "guides",
    translationKey: "guides",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides",
    url: "/guides",
    pageType: "guides",
    presentation: { shell: "hub" },
    h1: `${site.gameName} Guides`,
    seoTitle: `${site.gameName} Guides | Beginner Tips and Starter Help`,
    metaDescription:
      "Index of ArmorSim Wiki guides covering the simulation loop, materials and configuration, penetration mechanics, and replay sharing.",
    summary:
      "Index of ArmorSim Wiki guides, organized by the four launch clusters.",
    hero: {
      eyebrow: "Guides",
      subtitle:
        "Index of ArmorSim Wiki guides, organized by the four launch clusters.",
      ctas: [
        { label: "Open Wiki", href: "/wiki" },
        { label: "Release Info", href: "/release-date" },
      ],
    },
    quickAnswer:
      "ArmorSim Wiki guides cover the simulation loop, the three solvers (NORMAL / ADVANCED / ULTRA), the 14 armor materials, the four penetrator cores, and the replay-sharing workflow. Every guide is sourced from the live Steam store page.",
    keyFacts: [
      { label: "Guide depth", value: "Launch reference surface" },
      { label: "Source", value: "Live Steam store page (AppID 5159810)" },
      { label: "Last reviewed", value: "Research date 2026-09-15" },
    ],
    modules: [
      {
        id: "beginner",
        type: "prose",
        heading: "Beginner guide",
        body:
          "Start with the beginner's guide for the first run: open the scene editor, add a plate, set thickness/angle/material/spacing, pick a penetrator, run NORMAL, and read the seven penetration outputs.",
      },
      {
        id: "systems",
        type: "prose",
        heading: "Systems guide categories",
        body:
          "The four launch clusters — Launch & Status, Simulation Loop, Materials & Configuration, Community — group the fixed pages. Each cluster carries its own internal links and a research-date stamp.",
      },
      {
        id: "future-guides",
        type: "prose",
        heading: "Roadmap guides",
        body:
          "After each EA milestone, the wiki refreshes the relevant cluster pages and the home module grid to reflect the latest store description.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["wiki", "fixed-release-date-status-en-US"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-15",
  },
];
