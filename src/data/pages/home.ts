import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home" },
  h1: "ArmorSim Wiki: Terminal-Ballistics Reference Hub",
  seoTitle: "ArmorSim Wiki: Terminal-Ballistics Reference Hub",
  metaDescription:
    "The ArmorSim wiki hub for the Steam Early Access terminal-ballistics sandbox by Galimov Dynamics: launch, system specs, simulation loop, and materials.",
  summary:
    "Survey the ArmorSim wiki, jump to the launch status, simulation loop, materials, and community pages from one hub.",
  hero: {
    eyebrow: "Unofficial reference wiki",
    subtitle: site.tagline,
    ctas: [
      { label: "Release date", href: "/release-date" },
      { label: "Gameplay overview", href: "/gameplay" },
      { label: "System requirements", href: "/system-requirements" },
    ],
  },
  quickAnswer:
    "The ArmorSim wiki is the launch reference hub for the Steam Early Access terminal-ballistics sandbox developed by Galimov Dynamics. It covers the 2026-09-16 Early Access launch, the scene editor and NORMAL/ADVANCED/ULTRA solvers, the 14 armor materials and four penetrator cores, and the official Discord and Community Hub. From this hub you can confirm the launch date, learn the simulation loop, check whether your PC meets the minimum system requirements, and join the community discussion boards.",
  keyFacts: [
    { label: "Launch", value: "Steam Early Access 2026-09-16" },
    { label: "Developer", value: "Galimov Dynamics" },
    { label: "Solvers", value: "NORMAL / ADVANCED / ULTRA" },
    { label: "Materials", value: "14 documented entries" },
  ],
  modules: [
    {
      id: "first-launch-actions",
      type: "entity-grid",
      heading: "First-launch actions",
      items: [
        {
          title: "Confirm launch date",
          summary: "Steam Early Access 2026-09-16, AppID 5159810.",
          href: "/release-date",
        },
        {
          title: "Walk into the scene editor",
          summary: "Place a plate, pick a penetrator, fire, read the solve.",
          href: "/beginners-guide",
        },
        {
          title: "Verify PC specs",
          summary: "Windows 10 64-bit, GTX 1050 / RX 560, ULTRA scales with cores.",
          href: "/system-requirements",
        },
        {
          title: "Join the Discord",
          summary: "Verified invite linked from the Steam sidebar.",
          href: "/discord",
        },
      ],
    },
    {
      id: "solver-overview",
      type: "comparison",
      heading: "How ArmorSim solves penetration",
      options: [
        {
          name: "NORMAL",
          summary: "Alekseevskii–Tate erosion, Recht–Ipson residual velocity, Rosenberg ricochet, Grady fragmentation.",
          bestFor: "Fast iteration.",
        },
        {
          name: "ADVANCED",
          summary: "Adds layered/spaced arrays, reactive packs, per-layer energy accounting.",
          bestFor: "Reactive armor stacks.",
        },
        {
          name: "ULTRA",
          summary: "Axisymmetric Lagrangian continuum with Johnson–Cook plasticity; limited in EA.",
          bestFor: "Continuum-grade physics.",
        },
      ],
    },
    {
      id: "launch-status",
      type: "entity-grid",
      heading: "Launch & Status cluster",
      items: [
        { title: "Release date", summary: "EA launch 2026-09-16.", href: "/release-date" },
        { title: "Demo", summary: "No demo announced as of 2026-09-15.", href: "/demo" },
        { title: "Price", summary: "Live Steam store price for the standard EA edition.", href: "/price" },
        { title: "System requirements", summary: "Windows 10 64-bit, GTX 1050 / RX 560.", href: "/system-requirements" },
      ],
    },
    {
      id: "simulation-loop",
      type: "entity-grid",
      heading: "Simulation Loop cluster",
      items: [
        { title: "Gameplay overview", summary: "Scene editor + three solvers.", href: "/gameplay" },
        { title: "Beginner guide", summary: "First run: plate, penetrator, fire, read outputs.", href: "/beginners-guide" },
        { title: "Solver modes", summary: "NORMAL vs ADVANCED vs ULTRA.", href: "/solver-modes" },
        { title: "Penetration mechanics", summary: "Seven penetration events decoded.", href: "/penetration-mechanics" },
      ],
    },
    {
      id: "materials",
      type: "entity-grid",
      heading: "Materials & Configuration cluster",
      items: [
        { title: "Armor materials", summary: "14 documented entries with constant tags.", href: "/armor-materials" },
        { title: "Ammunition", summary: "American, Soviet/Russian, German service rounds + 4 custom cores.", href: "/ammunition" },
        { title: "Armor configurations", summary: "Layered, spaced, reactive, ceramic, shaped-charge.", href: "/armor-configurations" },
        { title: "Replay sharing", summary: "Couple-of-MB ULTRA replay files.", href: "/replay-sharing" },
      ],
    },
    {
      id: "community",
      type: "entity-grid",
      heading: "Community cluster",
      items: [
        { title: "Discord", summary: "Verified invite from the Steam sidebar.", href: "/discord" },
        { title: "Wiki & FAQ", summary: "Community Hub as the current FAQ surface.", href: "/wiki" },
      ],
    },
  ],
  faqIds: ["wiki-exists", "release-date-confirmed", "first-solver"],
  relatedPageIds: [
    "fixed-release-date-status-en-US",
    "fixed-gameplay-overview-en-US",
    "fixed-system-requirements-en-US",
    "fixed-discord-community-en-US",
  ],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};
