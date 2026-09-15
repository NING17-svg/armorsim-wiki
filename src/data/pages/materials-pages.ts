import type { PageContent } from "@/types/content";

// Materials & Configuration cluster
export const armorMaterialsGuide: PageContent = {
  id: "fixed-armor-materials-guide-en-US",
  translationKey: "armor-materials-guide",
  locale: "en-US",
  routeKind: "fixed",
  slug: "armor-materials",
  url: "/armor-materials",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "ArmorSim Armor Materials",
  seoTitle: "ArmorSim Armor Materials: RHA, Ceramic, DU, Composite",
  metaDescription:
    "Compare the 14 ArmorSim armor materials: rolled homogeneous steel, ceramic with backing, depleted uranium, composite, spaced, layered, and reactive armor packs.",
  summary:
    "Compare ArmorSim armor materials (RHA steel, ceramic with backing, depleted uranium, composite, spaced, reactive) and how thickness/angle/material affect penetration outcome.",
  hero: {
    eyebrow: "Materials & Configuration",
    subtitle:
      "14 documented materials with MEASURED / DERIVED / FITTED / ASSUMED constants.",
    ctas: [
      { label: "Armor configurations", href: "/armor-configurations" },
      { label: "Penetration mechanics", href: "/penetration-mechanics" },
    ],
  },
  quickAnswer:
    "ArmorSim ships 14 armor materials covering rolled homogeneous steel (RHA), ceramic with backing, depleted uranium, composite, spaced, layered, reactive armor packs, shaped-charge defense, and additional layered/spaced variants. Material constants are tagged MEASURED / DERIVED / FITTED / ASSUMED. Plate thickness, angle, material, and spacing are all user-controlled; changing any one of these changes the penetration outcome.",
  keyFacts: [
    { label: "Material count", value: "14 documented entries" },
    { label: "Common materials", value: "RHA, ceramic with backing, DU, composite, spaced, reactive" },
    { label: "Constant tags", value: "MEASURED / DERIVED / FITTED / ASSUMED" },
    { label: "User controls", value: "Thickness, angle, material, spacing" },
  ],
  modules: [
    {
      id: "material-overview",
      type: "data-table",
      heading: "Material overview",
      columns: [
        { key: "material", label: "Material" },
        { key: "category", label: "Category" },
      ],
      rows: [
        { material: "Rolled Homogeneous Steel (RHA)", category: "Baseline steel" },
        { material: "Ceramic with backing", category: "Ceramic" },
        { material: "Depleted Uranium", category: "Heavy metal" },
        { material: "Composite", category: "Composite" },
        { material: "Spaced", category: "Spaced array" },
        { material: "Layered", category: "Multi-layer" },
        { material: "Reactive armor packs", category: "Reactive (ERA)" },
        { material: "Shaped-charge defense", category: "Specialized" },
      ],
    },
    {
      id: "thickness-angle",
      type: "prose",
      heading: "Thickness, angle, and spacing",
      body:
        "All three are user-controlled. Thickness changes how much material the penetrator has to traverse; angle changes the effective thickness and the ricochet probability; spacing separates plates so a penetrator loses energy between hits. Material alone is not enough — a thin plate of the strongest material may perform worse than a thick plate of a baseline material.",
    },
    {
      id: "material-constants",
      type: "callout",
      tone: "tip",
      title: "Material constants are tagged",
      body:
        "Each material constant is tagged MEASURED, DERIVED, FITTED, or ASSUMED. The tag tells you the provenance of the number — useful when comparing two ArmorSim solves against real-world test data.",
    },
    {
      id: "reactive-armor",
      type: "prose",
      heading: "Reactive armor packs",
      body:
        "Reactive armor packs require the ADVANCED solver to model correctly. NORMAL treats them as a single integrated plate. Pick ADVANCED whenever reactive packs are part of the configuration.",
      links: [
        { label: "Solver modes comparison", href: "/solver-modes" },
        { label: "Armor configurations", href: "/armor-configurations" },
      ],
    },
    {
      id: "shaped-charge-defense",
      type: "prose",
      heading: "Shaped-charge defense",
      body:
        "Shaped-charge defense is one of the 14 materials; it is designed to disrupt shaped-charge jets at normal incidence. Place it at a distance from the base armor so the jet has time to destabilize before hitting the primary plate.",
    },
  ],
  faqIds: ["materials-count", "best-material", "rha-baseline"],
  relatedPageIds: ["fixed-armor-configurations-en-US", "fixed-solver-modes-comparison-en-US", "fixed-penetration-mechanics-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};

export const penetratorsAmmoGuide: PageContent = {
  id: "fixed-penetrators-ammo-guide-en-US",
  translationKey: "penetrators-ammo-guide",
  locale: "en-US",
  routeKind: "fixed",
  slug: "ammunition",
  url: "/ammunition",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "ArmorSim Ammunition Guide",
  seoTitle: "ArmorSim Ammunition: American, Soviet, German Service Rounds",
  metaDescription:
    "Compare ArmorSim ammunition across American, Soviet/Russian, and German service families plus four custom penetrator cores in the Early Access scene editor.",
  summary:
    "Compare ArmorSim American, Soviet/Russian, and German service ammunition and custom penetrator cores for early-EA builds.",
  hero: {
    eyebrow: "Materials & Configuration",
    subtitle:
      "American, Soviet/Russian, and German service ammunition plus four custom penetrator cores.",
    ctas: [
      { label: "Penetration mechanics", href: "/penetration-mechanics" },
      { label: "Armor configurations", href: "/armor-configurations" },
    ],
  },
  quickAnswer:
    "ArmorSim's penetrator picker groups rounds into three national service families — American, Soviet/Russian, and German — plus four custom penetrator cores. Each service family covers the documented service ammunition; the four custom cores let you configure a custom penetrator for early-EA builds. Pick a national service round for stable behavior; switch to a custom core when you need a specific geometry that the service families don't cover.",
  keyFacts: [
    { label: "Service families", value: "American, Soviet/Russian, German" },
    { label: "Custom penetrator cores", value: "4 documented cores" },
    { label: "Coverage", value: "Documented service ammunition in each family" },
    { label: "Best for beginners", value: "National service rounds" },
  ],
  modules: [
    {
      id: "service-families",
      type: "prose",
      heading: "Service families",
      body:
        "The three national service families cover American, Soviet/Russian, and German service ammunition. Pick a national round when you want stable, documented behavior — every round in a family shares similar physics assumptions and the round descriptions reflect real-world service use.",
    },
    {
      id: "custom-cores",
      type: "comparison",
      heading: "Custom penetrator cores",
      options: [
        {
          name: "Core 1",
          summary: "Custom penetrator configuration slot 1.",
          bestFor: "Custom geometry testing in EA.",
        },
        {
          name: "Core 2",
          summary: "Custom penetrator configuration slot 2.",
          bestFor: "Custom geometry testing in EA.",
        },
        {
          name: "Core 3",
          summary: "Custom penetrator configuration slot 3.",
          bestFor: "Custom geometry testing in EA.",
        },
        {
          name: "Core 4",
          summary: "Custom penetrator configuration slot 4.",
          bestFor: "Custom geometry testing in EA.",
        },
      ],
    },
    {
      id: "picking-a-penetrator",
      type: "prose",
      heading: "Picking a penetrator",
      body:
        "For a first run, pick any round from a national service family — the documented service rounds behave predictably across the three solvers. Switch to a custom penetrator core when the service families don't cover the geometry you want to test; custom cores are the only way to define a unique penetrator shape in early EA.",
      links: [
        { label: "Beginner guide", href: "/beginners-guide" },
        { label: "Penetration mechanics", href: "/penetration-mechanics" },
      ],
    },
  ],
  faqIds: ["ammunition-families", "custom-core-count", "best-beginner-round"],
  relatedPageIds: ["fixed-armor-materials-guide-en-US", "fixed-penetration-mechanics-en-US", "fixed-armor-configurations-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};

export const armorConfigurations: PageContent = {
  id: "fixed-armor-configurations-en-US",
  translationKey: "armor-configurations",
  locale: "en-US",
  routeKind: "fixed",
  slug: "armor-configurations",
  url: "/armor-configurations",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "ArmorSim Armor Configurations",
  seoTitle: "ArmorSim Armor Configurations: Layered, Spaced, Reactive",
  metaDescription:
    "Build ArmorSim armor configurations in the scene editor: layered stacks, spaced arrays, ceramic with backing, reactive armor packs, and shaped-charge defense.",
  summary:
    "Build layered/spaced armor stacks, reactive armor packs, ceramic with backing, and shaped-charge defense in ArmorSim's scene editor.",
  hero: {
    eyebrow: "Materials & Configuration",
    subtitle:
      "Layered stacks, spaced arrays, reactive packs, ceramic with backing, shaped-charge defense — all in the free-form scene editor.",
    ctas: [
      { label: "Armor materials", href: "/armor-materials" },
      { label: "Penetration mechanics", href: "/penetration-mechanics" },
    ],
  },
  quickAnswer:
    "ArmorSim's scene editor lets you combine the 14 materials into layered stacks, spaced arrays, reactive armor packs, ceramic with backing, and shaped-charge defense. Reactive armor packs require the ADVANCED solver. The free-form editor accepts any combination; changes to thickness, angle, material, or spacing produce different penetration outputs under all three solvers.",
  keyFacts: [
    { label: "Editor", value: "Free-form scene editor" },
    { label: "Configuration patterns", value: "Layered, spaced, reactive, ceramic, shaped-charge" },
    { label: "Reactive solver", value: "ADVANCED required for reactive packs" },
    { label: "User controls", value: "Thickness, angle, material, spacing per plate" },
  ],
  modules: [
    {
      id: "layered-stacks",
      type: "prose",
      heading: "Layered stacks",
      body:
        "A layered stack places two or more plates in series. The solver treats each layer as a discrete event; ADVANCED tracks per-layer energy accounting, which is useful when comparing two multi-plate configurations.",
    },
    {
      id: "spaced-arrays",
      type: "prose",
      heading: "Spaced arrays",
      body:
        "Spaced arrays separate plates with empty space. The gap gives the penetrator room to yaw, deform, or shed velocity before hitting the next plate. Spaced arrays are sensitive to plate spacing — too close and they act as one plate, too far and the configuration wastes material.",
    },
    {
      id: "reactive-packs",
      type: "prose",
      heading: "Reactive armor packs",
      body:
        "Reactive armor packs use the reactive armor material from the 14-material set. They require the ADVANCED solver to model correctly; NORMAL treats them as a single integrated plate, which produces misleading outputs.",
      links: [{ label: "Solver modes comparison", href: "/solver-modes" }],
    },
    {
      id: "ceramic-with-backing",
      type: "prose",
      heading: "Ceramic with backing",
      body:
        "Ceramic with backing pairs a ceramic face plate with a ductile backing layer. The ceramic breaks up the penetrator; the backing catches fragments. Ceramic with backing is one of the documented 14 materials and is modeled correctly under all three solvers.",
    },
    {
      id: "shaped-charge-defense",
      type: "prose",
      heading: "Shaped-charge defense",
      body:
        "Shaped-charge defense is configured as a dedicated defense layer for shaped-charge jets at normal incidence. Place it at a distance from the base armor so the jet has time to destabilize before hitting the primary plate.",
    },
  ],
  faqIds: ["reactive-solver", "best-spaced-array", "shaped-charge-incidence"],
  relatedPageIds: ["fixed-armor-materials-guide-en-US", "fixed-solver-modes-comparison-en-US", "fixed-penetration-mechanics-en-US", "fixed-first-test-recipes-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};

export const firstTestRecipes: PageContent = {
  id: "fixed-first-test-recipes-en-US",
  translationKey: "first-test-recipes",
  locale: "en-US",
  routeKind: "fixed",
  slug: "first-test-recipes",
  url: "/first-test-recipes",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "ArmorSim First-Test Recipes by Configuration",
  seoTitle: "ArmorSim First-Test Recipes: Solver, Material, Penetrator, Output",
  metaDescription:
    "One recipe per named ArmorSim configuration: required solver, material pairing, penetrator family, and the output to read first for layered, spaced, reactive, ceramic, and shaped-charge setups.",
  summary:
    "Run a meaningful first solve for each of the five named ArmorSim configurations without cross-referencing four separate pages.",
  hero: {
    eyebrow: "Materials & Configuration",
    subtitle:
      "Solver, material, penetrator, and first output for layered, spaced, reactive, ceramic, and shaped-charge armor.",
    ctas: [
      { label: "Armor configurations", href: "/armor-configurations" },
      { label: "Solver modes", href: "/solver-modes" },
    ],
  },
  quickAnswer:
    "Pick the solver, material, and penetrator from the recipe that matches the configuration you want to test, then read the listed output first. Layered, spaced, and ceramic setups can start on NORMAL; reactive armor packs must use ADVANCED or the output is misleading; shaped-charge defense is built at normal incidence and reads the per-layer ballistic limit. Thickness, angle, and spacing are not fixed by the recipe — they are the test variables you adjust to answer your specific question.",
  keyFacts: [
    { label: "Configurations covered", value: "Layered, spaced, reactive, ceramic, shaped-charge" },
    { label: "Required solver for reactive", value: "ADVANCED (NORMAL produces misleading outputs)" },
    { label: "Penetrator family", value: "National service round (American, Soviet/Russian, or German)" },
    { label: "First output to read", value: "Listed per configuration; residual velocity is the default" },
  ],
  modules: [
    {
      id: "recipe-summary",
      type: "data-table",
      heading: "Recipe summary",
      columns: [
        { key: "configuration", label: "Configuration" },
        { key: "solver", label: "Solver" },
        { key: "material", label: "Material pairing" },
        { key: "penetrator", label: "Penetrator family" },
        { key: "output", label: "First output to read" },
      ],
      rows: [
        {
          configuration: "Layered stack",
          solver: "NORMAL or ADVANCED",
          material: "Two or more RHA plates in series",
          penetrator: "Any national service round",
          output: "Ballistic limit",
        },
        {
          configuration: "Spaced array",
          solver: "NORMAL or ADVANCED",
          material: "Two RHA plates separated by an air gap",
          penetrator: "Any national service round",
          output: "Residual velocity",
        },
        {
          configuration: "Reactive armor packs",
          solver: "ADVANCED required",
          material: "RHA back plate plus reactive pack layer",
          penetrator: "Service HEAT round or custom core",
          output: "Per-layer ballistic limit",
        },
        {
          configuration: "Ceramic with backing",
          solver: "NORMAL, ADVANCED, or ULTRA",
          material: "Ceramic face plate over ductile backing",
          penetrator: "Any national service round",
          output: "Plug ejection",
        },
        {
          configuration: "Shaped-charge defense",
          solver: "ADVANCED or ULTRA",
          material: "Shaped-charge defense material in front of RHA",
          penetrator: "Service HEAT round at normal incidence",
          output: "Per-layer ballistic limit and residual velocity",
        },
      ],
    },
    {
      id: "variables-callout",
      type: "callout",
      tone: "tip",
      title: "Thickness, angle, and spacing are your test variables",
      body:
        "Every recipe below lists a starting configuration. Thickness, angle, and spacing are not part of the recipe — they are the variables you adjust to answer the question you actually want to ask. Change one at a time and re-run before changing another.",
    },
    {
      id: "recipe-layered",
      type: "prose",
      heading: "Recipe: layered stack",
      body:
        "Place two or more plates in series with no air gap between them. Start with RHA steel so the result is comparable to the baseline single-plate solve from the beginner's guide. Use a national service round so the penetrator behaves predictably. NORMAL is acceptable for two-plate stacks; switch to ADVANCED if you add a third plate or mix materials, because per-layer energy accounting only shows up on ADVANCED. Read the ballistic limit first; that is the velocity at which the stack is expected to perforate. Residual velocity and plug ejection are the secondary checks for stack effectiveness.",
      links: [
        { label: "Beginner guide", href: "/beginners-guide" },
        { label: "Penetration mechanics", href: "/penetration-mechanics" },
      ],
    },
    {
      id: "recipe-spaced",
      type: "prose",
      heading: "Recipe: spaced array",
      body:
        "Place two RHA plates with an air gap between them. The gap is the variable — start with a small gap (close enough that the stack still acts as a single thick plate) and a larger gap (far enough that the penetrator loses velocity between hits) to see the spaced-armor effect. NORMAL is fine for the first run; switch to ADVANCED if you want per-layer energy accounting. Residual velocity is the output that shows whether the gap helped: a lower residual velocity than the equivalent thickness solid plate means the spacing is doing useful work.",
      links: [{ label: "Armor configurations", href: "/armor-configurations" }],
    },
    {
      id: "recipe-reactive",
      type: "callout",
      tone: "caution",
      title: "Reactive armor recipe — ADVANCED is required",
      body:
        "Place the reactive pack layer over an RHA back plate. Pick a service HEAT round or a custom core that approximates a shaped-charge jet. ADVANCED is required — NORMAL treats the reactive pack as a single integrated plate and the residual velocity output is misleading. Read the per-layer ballistic limit first; ADVANCED exposes the energy absorbed by the reactive pack separately from the RHA plate. If you only get one number, residual velocity after the full stack is the single-field check.",
    },
    {
      id: "recipe-ceramic",
      type: "prose",
      heading: "Recipe: ceramic with backing",
      body:
        "Place a ceramic face plate over a ductile backing layer (the documented ceramic-with-backing material handles both layers). Pick any national service round; ceramic with backing is modeled correctly under all three solvers. NORMAL is enough to read the baseline ceramic effect. Plug ejection is the output to watch first — ceramic breaks up the penetrator and the backing catches fragments, so the presence of plug ejection means the ceramic is doing its job. Fragmentation and spall are the secondary reads.",
      links: [
        { label: "Armor materials", href: "/armor-materials" },
        { label: "Penetration mechanics", href: "/penetration-mechanics" },
      ],
    },
    {
      id: "recipe-shaped-charge",
      type: "prose",
      heading: "Recipe: shaped-charge defense",
      body:
        "Place the shaped-charge defense material in front of an RHA plate with enough spacing that the jet has time to destabilize before hitting the primary plate. Pick a service HEAT round and build the test at normal incidence first — off-normal angles are an experiment, not a first test. ADVANCED is the safe minimum; ULTRA is appropriate if you want continuum-grade physics on the jet interaction. Read the per-layer ballistic limit first and then the residual velocity after the full stack — together they tell you whether the defense layer disrupted the jet.",
      links: [{ label: "Armor configurations", href: "/armor-configurations" }],
    },
    {
      id: "after-the-first-solve",
      type: "prose",
      heading: "After the first solve",
      body:
        "Once the first solve runs cleanly, change one variable at a time and re-run. Increase thickness, change the angle, widen or tighten the spacing, or swap the penetrator to a different national service family. When the differences stop surprising you, move to ADVANCED for any configuration that still reads as a single plate on NORMAL, and reserve ULTRA for shaped-charge or continuum-grade questions where CPU time is acceptable.",
      links: [
        { label: "Solver modes", href: "/solver-modes" },
        { label: "Penetration mechanics", href: "/penetration-mechanics" },
      ],
    },
  ],
  faqIds: ["reactive-solver", "recipe-first-output", "recipe-variables", "spaced-gap-effect", "ceramic-plug-ejection"],
  relatedPageIds: [
    "fixed-armor-configurations-en-US",
    "fixed-beginners-guide-en-US",
    "fixed-solver-modes-comparison-en-US",
    "fixed-armor-materials-guide-en-US",
  ],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};

export const replaySharing: PageContent = {
  id: "fixed-replay-sharing-en-US",
  translationKey: "replay-sharing",
  locale: "en-US",
  routeKind: "fixed",
  slug: "replay-sharing",
  url: "/replay-sharing",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "ArmorSim Replay Sharing",
  seoTitle: "ArmorSim Replay: Save and Share Solve Files on Steam",
  metaDescription:
    "Save and share an ArmorSim replay file. A full ULTRA run stays around a couple of MB, with slow-motion playback and a free orbit camera on Steam and Discord.",
  summary:
    "Save, share, and replay ArmorSim solve files including small ULTRA runs and couple-of-MB replay files.",
  hero: {
    eyebrow: "Materials & Configuration",
    subtitle:
      "Slow-motion playback, free orbit camera, replay file size on the order of a couple of MB for a full ULTRA run.",
    ctas: [
      { label: "Gameplay overview", href: "/gameplay" },
      { label: "Discord community", href: "/discord" },
    ],
  },
  quickAnswer:
    "ArmorSim saves each solve as a replay file. A full ULTRA run is on the order of a couple of MB, small enough to post on the Steam Community Hub or the official Discord. The slow-motion viewer plays the event with a free orbit camera, so the recipient can replay the solve from any angle.",
  keyFacts: [
    { label: "File size", value: "Couple of MB per full ULTRA run" },
    { label: "Camera", value: "Free orbit in slow-motion viewer" },
    { label: "Where to share", value: "Steam Community Hub, Discord" },
    { label: "Format", value: "Native ArmorSim replay" },
  ],
  modules: [
    {
      id: "save-replay",
      type: "prose",
      heading: "Saving a replay",
      body:
        "After a solve, ArmorSim writes a replay file. The file size depends on the solver tier and the duration of the event; a full ULTRA run is on the order of a couple of MB, which is small enough to attach to a forum post or a Discord message.",
    },
    {
      id: "playback",
      type: "prose",
      heading: "Slow-motion playback",
      body:
        "The slow-motion viewer plays the solve with a free orbit camera. Use the orbit controls to confirm what the numbers say — for example, a high residual velocity should match a clean perforation in the visual playback.",
    },
    {
      id: "where-to-share",
      type: "prose",
      heading: "Where to share",
      body:
        "Post replay files on the Steam Community Hub discussion boards for AppID 5159810, or in the verified official Discord (linked from the Steam store sidebar). Both channels accept small file attachments.",
      links: [
        { label: "Steam Community Hub", href: "https://steamcommunity.com/app/5159810" },
        { label: "Discord community", href: "/discord" },
      ],
    },
  ],
  faqIds: ["replay-size", "replay-format", "share-channel"],
  relatedPageIds: ["fixed-gameplay-overview-en-US", "fixed-discord-community-en-US", "wiki"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};
