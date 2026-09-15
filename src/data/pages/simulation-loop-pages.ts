import type { PageContent } from "@/types/content";

// Simulation Loop cluster
export const gameplayOverview: PageContent = {
  id: "fixed-gameplay-overview-en-US",
  translationKey: "gameplay-overview",
  locale: "en-US",
  routeKind: "fixed",
  slug: "gameplay",
  url: "/gameplay",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "ArmorSim Gameplay: The Terminal-Ballistics Loop Explained",
  seoTitle: "ArmorSim Gameplay: The Terminal-Ballistics Loop Explained",
  metaDescription:
    "Learn how ArmorSim gameplay works: scene editor plate placement, NORMAL/ADVANCED/ULTRA solvers, real-time penetration output, and shareable slow-motion replay files.",
  summary:
    "Understand what ArmorSim's terminal-ballistics simulation loop actually involves before buying.",
  hero: {
    eyebrow: "Simulation Loop",
    subtitle:
      "Place a plate, set thickness, angle, material and spacing, pick a penetrator, fire, read the solve.",
    ctas: [
      { label: "Beginner guide", href: "/beginners-guide" },
      { label: "Solver modes", href: "/solver-modes" },
    ],
  },
  quickAnswer:
    "ArmorSim gameplay centers on a free-form scene editor where you place armor plates, set their thickness, angle, material, and spacing, choose a penetrator from the American, Soviet/Russian, or German service ammunition families or a custom penetrator core, and fire. The simulation runs against NORMAL, ADVANCED, or ULTRA solvers and produces penetration outputs (ballistic limit, residual velocity, ricochet, fragmentation, plug ejection, spall, petalling) that you can replay in slow motion and share as a small replay file.",
  keyFacts: [
    { label: "Editor", value: "Free-form scene editor" },
    { label: "Solver choices", value: "NORMAL / ADVANCED / ULTRA" },
    { label: "Output units", value: "Ballistic limit, residual velocity, ricochet, fragmentation, plug, spall, petalling" },
    { label: "Replay", value: "Slow-motion viewer, shareable replay files" },
  ],
  modules: [
    {
      id: "loop-summary",
      type: "prose",
      heading: "Game loop summary",
      body:
        "Each run begins in the scene editor. You build the armor stack from plates you control, set thickness/angle/material/spacing, select a penetrator from the American, Soviet/Russian, or German service-ammunition families or a custom penetrator core, and pick a solver. The solver then computes the penetration event and outputs a numeric ballistic limit, residual velocity, ricochet, fragmentation, plug ejection, spall, and petalling summary. The slow-motion viewer plays the event so you can compare the calculated outcome to the visuals.",
    },
    {
      id: "scene-editor",
      type: "prose",
      heading: "Scene editor overview",
      body:
        "The scene editor is free-form: plates are placed in 3D space with thickness, angle, material, and spacing all under your control. The documented material set has fourteen entries (RHA steel, ceramic with backing, depleted uranium, composite, spaced, layered, reactive armor packs, shaped-charge defense, and additional layered/spaced variants). The penetrator picker mirrors the three service families plus four custom penetrator cores, so a beginner can pick any national service round and an experienced user can build a custom core configuration.",
    },
    {
      id: "solver-output",
      type: "prose",
      heading: "Solver choices and outputs",
      body:
        "NORMAL, ADVANCED, and ULTRA are three tiers that differ in physics fidelity. NORMAL uses Alekseevskii–Tate erosion, Recht–Ipson residual velocity, Rosenberg ricochet, and Grady fragmentation. ADVANCED adds layered/spaced arrays, reactive armor packs, and per-layer energy accounting. ULTRA adds an axisymmetric Lagrangian continuum solver with Johnson–Cook plasticity and is limited in EA.",
      links: [
        { label: "Solver modes comparison", href: "/solver-modes" },
        { label: "Penetration mechanics", href: "/penetration-mechanics" },
      ],
    },
    {
      id: "fixed-replay-sharing-en-US",
      type: "prose",
      heading: "Replay sharing",
      body:
        "After a solve, the slow-motion viewer lets you orbit the camera freely. The replay file size for a full ULTRA run is on the order of a couple of MB, small enough to post on the Steam Community Hub or the official Discord.",
      links: [{ label: "Replay sharing", href: "/replay-sharing" }],
    },
  ],
  faqIds: ["gameplay-summary", "is-animated", "platforms"],
  relatedPageIds: ["fixed-beginners-guide-en-US", "fixed-solver-modes-comparison-en-US", "fixed-armor-materials-guide-en-US", "fixed-penetrators-ammo-guide-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};

export const beginnersGuide: PageContent = {
  id: "fixed-beginners-guide-en-US",
  translationKey: "beginners-guide",
  locale: "en-US",
  routeKind: "fixed",
  slug: "beginners-guide",
  url: "/beginners-guide",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "ArmorSim Beginner Guide",
  seoTitle: "ArmorSim Beginner Guide: Place Plates, Pick a Penetrator",
  metaDescription:
    "A step-by-step ArmorSim beginner guide for first-time players: open the scene editor, set plate properties, pick a penetrator, run NORMAL, and read the solve result.",
  summary:
    "Learn how to place plates, pick a penetrator, run a solver, and read residual velocity / ricochet / spall output as a first-time ArmorSim user.",
  hero: {
    eyebrow: "Simulation Loop",
    subtitle:
      "Open the scene editor, add a plate, set its properties, pick a penetrator, fire, read the solve.",
    ctas: [
      { label: "Solver modes", href: "/solver-modes" },
      { label: "Penetration mechanics", href: "/penetration-mechanics" },
    ],
  },
  quickAnswer:
    "As a first-time ArmorSim user, open the scene editor, add a plate, set its thickness, angle, material, and spacing, pick a penetrator from any national service family, choose the NORMAL solver, and fire. Read the ballistic limit, residual velocity, ricochet, fragmentation, plug, spall, and petalling fields from the result panel to understand what happened. Each output is explained in the penetration mechanics glossary.",
  keyFacts: [
    { label: "First solver", value: "NORMAL" },
    { label: "Step 1", value: "Open scene editor" },
    { label: "Step 2", value: "Add a plate, set thickness/angle/material/spacing" },
    { label: "Step 3", value: "Pick a penetrator from a national service family" },
    { label: "Step 4", value: "Read ballistic limit + residual velocity + outputs" },
  ],
  modules: [
    {
      id: "first-steps",
      type: "steps",
      heading: "First-run steps",
      items: [
        {
          title: "Open the scene editor",
          body: "Launch ArmorSim into the scene editor. The editor loads with an empty 3D space.",
        },
        {
          title: "Add a plate",
          body: "Drop a single armor plate into the scene. Start with RHA steel for a familiar baseline.",
        },
        {
          title: "Set plate properties",
          body: "Configure thickness, angle, material, and spacing. The defaults are reasonable, but changing thickness or angle dramatically affects the solve.",
        },
        {
          title: "Pick a penetrator",
          body: "Choose a penetrator from the American, Soviet/Russian, or German service family. National rounds are the easiest way to read consistent behavior.",
        },
        {
          title: "Choose NORMAL solver",
          body: "Use NORMAL on the first run. NORMAL uses Alekseevskii–Tate erosion, Recht–Ipson residual velocity, Rosenberg ricochet, and Grady fragmentation.",
        },
        {
          title: "Fire and read the solve",
          body: "Fire. The result panel shows ballistic limit, residual velocity, ricochet, fragmentation, plug ejection, spall, and petalling. Each output is defined in the penetration mechanics glossary.",
          doneCondition: "Result panel shows all seven outputs.",
        },
      ],
    },
    {
      id: "interpret-output",
      type: "prose",
      heading: "How to read the result",
      body:
        "Ballistic limit is the velocity at which the penetrator is expected to perforate; residual velocity is what remains after the plate. Ricochet means the round deflected, fragmentation means the plate broke apart, plug ejection means a disc-shaped piece of plate exited, spall means small fragments flew off the back face, and petalling describes the plate bending outward. These outputs are explained term-by-term on the penetration mechanics page.",
      links: [{ label: "Penetration mechanics glossary", href: "/penetration-mechanics" }],
    },
    {
      id: "next-steps",
      type: "prose",
      heading: "After your first solve",
      body:
        "Once the first solve runs cleanly, change one variable at a time: increase thickness, change the angle, switch material from RHA to ceramic with backing, or pick a heavier penetrator. Re-run NORMAL after each change to compare outputs. When the differences stop surprising you, move to ADVANCED (layered/spaced arrays, reactive packs) and finally ULTRA.",
      links: [
        { label: "Solver modes comparison", href: "/solver-modes" },
        { label: "Armor materials guide", href: "/armor-materials" },
      ],
    },
  ],
  faqIds: ["first-solver", "best-beginner-plate", "first-penetrator"],
  relatedPageIds: ["fixed-gameplay-overview-en-US", "fixed-solver-modes-comparison-en-US", "fixed-penetration-mechanics-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};

export const solverModesComparison: PageContent = {
  id: "fixed-solver-modes-comparison-en-US",
  translationKey: "solver-modes-comparison",
  locale: "en-US",
  routeKind: "fixed",
  slug: "solver-modes",
  url: "/solver-modes",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "ArmorSim Solver Modes Compared",
  seoTitle: "ArmorSim Solver Modes: NORMAL, ADVANCED, and ULTRA Compared",
  metaDescription:
    "Compare ArmorSim solver modes: NORMAL uses Alekseevskii-Tate and Recht-Ipson physics; ADVANCED adds reactive packs; ULTRA is CPU-bound and limited in Early Access.",
  summary:
    "Understand when to use ArmorSim NORMAL, ADVANCED, and ULTRA solvers, what physics each adds, and how ULTRA CPU scaling changes solve time.",
  hero: {
    eyebrow: "Simulation Loop",
    subtitle:
      "NORMAL for fast iteration, ADVANCED for layered/reactive stacks, ULTRA for continuum physics — limited in EA.",
    ctas: [
      { label: "System requirements", href: "/system-requirements" },
      { label: "Gameplay overview", href: "/gameplay" },
    ],
  },
  quickAnswer:
    "ArmorSim ships three solvers: NORMAL, ADVANCED, and ULTRA. NORMAL uses Alekseevskii–Tate erosion, Recht–Ipson residual velocity, Rosenberg ricochet, and Grady fragmentation. ADVANCED adds layered/spaced arrays, reactive armor packs, and per-layer energy accounting. ULTRA runs an axisymmetric Lagrangian continuum solver with Johnson–Cook plasticity; it is CPU-bound (more physical cores mean shorter solve times) and is limited in Early Access.",
  keyFacts: [
    { label: "NORMAL", value: "Alekseevskii–Tate + Recht–Ipson + Rosenberg + Grady" },
    { label: "ADVANCED", value: "Adds layered/spaced, reactive packs, per-layer energy" },
    { label: "ULTRA", value: "Axisymmetric Lagrangian + Johnson–Cook plasticity" },
    { label: "ULTRA in EA", value: "Limited in Early Access" },
  ],
  modules: [
    {
      id: "normal-solver",
      type: "prose",
      heading: "NORMAL solver",
      body:
        "NORMAL is the entry-tier solver and the right choice for quick iteration. It uses Alekseevskii–Tate erosion to model mass loss along the penetrator, Recht–Ipson residual velocity to estimate remaining velocity after the plate, Rosenberg ricochet for deflection prediction, and Grady fragmentation to model plate breakup. The model is fast, deterministic, and stable across runs.",
    },
    {
      id: "advanced-solver",
      type: "prose",
      heading: "ADVANCED solver",
      body:
        "ADVANCED adds layered/spaced array support, reactive armor pack interactions, and per-layer energy accounting. Choose ADVANCED when the armor stack mixes ceramic with backing, layered plates, or reactive armor packs — physics that NORMAL treats as a single integrated plate.",
    },
    {
      id: "ultra-solver",
      type: "callout",
      tone: "caution",
      title: "ULTRA mode is limited in EA",
      body:
        "ULTRA runs an axisymmetric Lagrangian continuum solver with Johnson–Cook plasticity. It is the most physically faithful tier but is limited in Early Access and is CPU-bound — more physical cores mean shorter solve times.",
    },
    {
      id: "solver-comparison-table",
      type: "comparison",
      heading: "When to pick each solver",
      options: [
        {
          name: "NORMAL",
          summary: "Fast, deterministic erosion/ricochet/fragmentation physics.",
          bestFor: "Quick iteration, baseline single-plate solves.",
        },
        {
          name: "ADVANCED",
          summary: "Adds layered/spaced arrays, reactive packs, per-layer energy.",
          bestFor: "Multi-layer or reactive armor stacks.",
        },
        {
          name: "ULTRA",
          summary: "Axisymmetric Lagrangian continuum with Johnson–Cook plasticity.",
          bestFor: "Continuum-grade physics; limited in EA; CPU-bound.",
        },
      ],
    },
    {
      id: "ultra-cpu-scaling",
      type: "prose",
      heading: "ULTRA CPU scaling",
      body:
        "ULTRA scales with physical core count. A six-core or eight-core desktop cuts ULTRA solve times noticeably compared to a quad-core minimum-spec machine. If you only intend to use NORMAL and ADVANCED, the minimum-spec CPU is the gating check; if you intend to run ULTRA repeatedly, prioritize physical core count.",
      links: [{ label: "System requirements", href: "/system-requirements" }],
    },
  ],
  faqIds: ["solver-default", "solver-difference", "ultra-ea-limit"],
  relatedPageIds: ["fixed-system-requirements-en-US", "fixed-gameplay-overview-en-US", "fixed-beginners-guide-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};

export const penetrationMechanics: PageContent = {
  id: "fixed-penetration-mechanics-en-US",
  translationKey: "penetration-mechanics",
  locale: "en-US",
  routeKind: "fixed",
  slug: "penetration-mechanics",
  url: "/penetration-mechanics",
  pageType: "wiki",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "ArmorSim Penetration Mechanics Explained",
  seoTitle: "ArmorSim Penetration Mechanics: Ballistic Limit and Spall",
  metaDescription:
    "Read ArmorSim penetration mechanics outputs: ballistic limit, residual velocity, ricochet, fragmentation, plug ejection, spall, petalling, and slow-motion playback.",
  summary:
    "Learn what ballistic limit, residual velocity, ricochet, fragmentation, plug ejection, spall, and petalling mean in ArmorSim outputs.",
  hero: {
    eyebrow: "Simulation Loop",
    subtitle:
      "Decoded: ballistic limit, residual velocity, ricochet, fragmentation, plug, spall, petalling.",
    ctas: [
      { label: "Beginner guide", href: "/beginners-guide" },
      { label: "Armor configurations", href: "/armor-configurations" },
    ],
  },
  quickAnswer:
    "ArmorSim outputs seven penetration events per solve: ballistic limit, residual velocity, ricochet, fragmentation, plug ejection, spall, and petalling. Ballistic limit is the velocity at which the penetrator is expected to perforate; residual velocity is what remains after the plate; ricochet means the round deflected; fragmentation means the plate broke apart; plug ejection means a disc-shaped piece of plate exited; spall means small fragments flew off the back face; petalling describes the plate bending outward.",
  keyFacts: [
    { label: "Outputs per solve", value: "7 penetration events" },
    { label: "Ballistic limit", value: "Velocity at which perforation is expected" },
    { label: "Residual velocity", value: "Velocity remaining after the plate" },
    { label: "Visual playback", value: "Slow-motion viewer" },
  ],
  modules: [
    {
      id: "ballistic-limit",
      type: "prose",
      heading: "Ballistic limit",
      body:
        "Ballistic limit is the velocity at which the penetrator is expected to perforate the plate. A round below the ballistic limit is expected to stop; a round above it is expected to perforate. The exact value depends on plate thickness, angle, material, and penetrator geometry.",
    },
    {
      id: "residual-velocity",
      type: "prose",
      heading: "Residual velocity",
      body:
        "Residual velocity is the velocity remaining in the penetrator after the plate. NORMAL uses the Recht–Ipson residual-velocity model to estimate this value. Residual velocity is the standard way to compare two configurations against each other.",
    },
    {
      id: "ricochet",
      type: "prose",
      heading: "Ricochet",
      body:
        "Ricochet means the round deflected off the plate rather than penetrating. NORMAL uses the Rosenberg ricochet model to predict whether the geometry will ricochet. Steeper angles and harder materials increase ricochet probability.",
    },
    {
      id: "fragmentation",
      type: "prose",
      heading: "Fragmentation",
      body:
        "Fragmentation means the plate broke apart into discrete pieces during the penetration event. NORMAL uses the Grady fragmentation model. The fragmentation output is qualitative — it tells you the plate broke, not how many fragments flew off.",
    },
    {
      id: "outputs-table",
      type: "data-table",
      heading: "Output glossary",
      columns: [
        { key: "term", label: "Term" },
        { key: "meaning", label: "Meaning" },
      ],
      rows: [
        { term: "Ballistic limit", meaning: "Velocity at which perforation is expected." },
        { term: "Residual velocity", meaning: "Velocity remaining in the penetrator after the plate." },
        { term: "Ricochet", meaning: "Round deflected off the plate." },
        { term: "Fragmentation", meaning: "Plate broke apart during the event." },
        { term: "Plug ejection", meaning: "Disc-shaped piece of plate exited." },
        { term: "Spall", meaning: "Small fragments flew off the back face." },
        { term: "Petalling", meaning: "Plate bent outward." },
      ],
    },
    {
      id: "playback",
      type: "prose",
      heading: "Slow-motion playback",
      body:
        "Every output is paired with a slow-motion viewer that plays the penetration event with a free orbit camera. Use the viewer to confirm what the numbers say — for example, a high residual velocity should match a clean perforation in the visual playback.",
    },
  ],
  faqIds: ["seven-outputs", "ricochet-meaning", "spall-meaning"],
  relatedPageIds: ["fixed-beginners-guide-en-US", "fixed-armor-materials-guide-en-US", "fixed-armor-configurations-en-US"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-15",
};
