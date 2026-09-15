import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  // Site identity FAQs
  {
    id: "what-is-this-site",
    question: "What is ArmorSim Wiki?",
    answer:
      "ArmorSim Wiki is an unofficial fan reference hub for ArmorSim (Steam AppID 5159810), the terminal-ballistics sandbox by Galimov Dynamics. It is built from the live Steam store description and the Community Hub; every fact is dated and re-verified.",
    pageIds: ["home", "faq", "about"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "is-official",
    question: "Is this an official ArmorSim website?",
    answer:
      "No. This site is an unofficial fan reference. Official facts come from the Steam store page for AppID 5159810 and the developer Galimov Dynamics' communications, both linked from the home page.",
    pageIds: ["home", "faq", "about"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "internal",
  },

  // Home page FAQs
  {
    id: "wiki-exists",
    question: "Does ArmorSim have a wiki?",
    answer:
      "No third-party ArmorSim wiki is established as of 2026-09-15. The Steam Community Hub discussion boards currently serve as the FAQ surface until a community wiki forms.",
    pageIds: ["home", "wiki"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "release-date-confirmed",
    question: "Is the ArmorSim release date confirmed?",
    answer:
      "Yes. The live Steam store page for AppID 5159810 lists Early Access on 2026-09-16 as of 2026-09-15. No publisher change has been announced.",
    pageIds: ["home", "fixed-release-date-status-en-US", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "first-solver",
    question: "Which solver should a new ArmorSim player pick first?",
    answer:
      "Pick NORMAL on the first run. NORMAL uses Alekseevskii–Tate erosion, Recht–Ipson residual velocity, Rosenberg ricochet, and Grady fragmentation. Move to ADVANCED when you start building layered, spaced, or reactive stacks, and reserve ULTRA for continuum-grade physics.",
    pageIds: ["home", "fixed-beginners-guide-en-US", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Release date
  {
    id: "release-timezone",
    question: "What if my local timezone already shows 2026-09-16?",
    answer:
      "Steam dates are written in UTC by default. If your local clock has already crossed midnight on 2026-09-16, you can install right away; the store will not gate the download.",
    pageIds: ["fixed-release-date-status-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "release-delayed",
    question: "Has the ArmorSim release date been delayed?",
    answer:
      "No delay has been announced. The only conflicting figure in circulation is the 2026-09-07 figure in the cached G2A news spotlight, which is recorded as a research-date discrepancy.",
    pageIds: ["fixed-release-date-status-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "leave-ea-2027",
    question: "Will ArmorSim leave Early Access in 2027?",
    answer:
      "The store description states a planned EA duration of roughly twelve months, which would put the 1.0 release sometime after mid-2027. The exact 1.0 date is not announced.",
    pageIds: ["fixed-release-date-status-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Demo
  {
    id: "demo-available",
    question: "Is there an ArmorSim demo on Steam?",
    answer:
      "No. As of 2026-09-15 the live Steam store page for AppID 5159810 has no demo, trial, or Playtest entry, and SteamDB does not list a separate demo depot under the same AppID.",
    pageIds: ["fixed-demo-status-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "demo-follow",
    question: "How do I follow ArmorSim for a future demo?",
    answer:
      "Wishlist the game on Steam, follow the Community Hub, and join the Discord linked from the Steam sidebar. Steam notifies wishlist users the moment a Playtest goes live.",
    pageIds: ["fixed-demo-status-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "free-trial",
    question: "Can I try ArmorSim before buying?",
    answer:
      "Not through an official channel. The only supported evaluation path is to read the store description, follow the Community Hub, and buy the Early Access build on launch day if you decide to commit.",
    pageIds: ["fixed-demo-status-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Price
  {
    id: "price-source",
    question: "Where should I check the ArmorSim price?",
    answer:
      "Use the live Steam store sidebar for AppID 5159810. Re-open the store page on launch day to confirm the price at the moment of purchase.",
    pageIds: ["fixed-price-editions-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "price-changes",
    question: "Will the ArmorSim price change after launch?",
    answer:
      "The developer has not announced post-launch pricing changes as of 2026-09-15. Any change will appear on the Steam store sidebar.",
    pageIds: ["fixed-price-editions-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "launch-discount",
    question: "Is there a launch-day ArmorSim discount?",
    answer:
      "No launch-day discount has been announced as of 2026-09-15. Any discount that is added will appear on the Steam store sidebar.",
    pageIds: ["fixed-price-editions-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // System requirements
  {
    id: "ultra-cores",
    question: "Do more CPU cores make ArmorSim ULTRA mode faster?",
    answer:
      "Yes. ULTRA runs an axisymmetric Lagrangian continuum solver with Johnson–Cook plasticity, which scales with physical cores. A six-core or eight-core desktop reduces ULTRA solve times noticeably compared to a quad-core minimum-spec machine.",
    pageIds: ["fixed-system-requirements-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "min-spec-runs-ultra",
    question: "Can a minimum-spec CPU run ULTRA mode?",
    answer:
      "Yes. ULTRA is CPU-bound and will run on the minimum-spec Intel Core i5-4460 / AMD Ryzen 3 1200, but each solve will take longer than on a modern multi-core CPU.",
    pageIds: ["fixed-system-requirements-en-US", "fixed-solver-modes-comparison-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "recommended-specs",
    question: "What are the recommended ArmorSim specs?",
    answer:
      "The Steam store page lists only minimum specifications as of 2026-09-15. Recommended specs are not announced; plan around the ULTRA CPU scaling note.",
    pageIds: ["fixed-system-requirements-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Gameplay
  {
    id: "gameplay-summary",
    question: "What is the ArmorSim gameplay loop?",
    answer:
      "Open the scene editor, place armor plates with thickness/angle/material/spacing, pick a penetrator from a service family or custom core, choose a solver (NORMAL/ADVANCED/ULTRA), fire, and read the seven penetration outputs in the slow-motion viewer.",
    pageIds: ["fixed-gameplay-overview-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-animated",
    question: "Is ArmorSim animated or calculated?",
    answer:
      "ArmorSim is a tank-ballistics sandbox where penetration is calculated rather than animated. The slow-motion viewer plays the calculated event so you can compare numbers to visuals.",
    pageIds: ["fixed-gameplay-overview-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "platforms",
    question: "Which platforms is ArmorSim on?",
    answer:
      "ArmorSim targets Windows 10 64-bit on Steam at the research date. Console versions are not announced.",
    pageIds: ["fixed-gameplay-overview-en-US", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Beginners
  {
    id: "best-beginner-plate",
    question: "What is a good first plate for an ArmorSim beginner?",
    answer:
      "Start with RHA steel at default thickness and angle. RHA is the documented baseline material; once you can read the seven outputs for RHA you can compare other materials against it.",
    pageIds: ["fixed-beginners-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "first-penetrator",
    question: "Which penetrator should a beginner pick first?",
    answer:
      "Pick any national service round (American, Soviet/Russian, or German) on the first run. National rounds give consistent behavior so you can isolate the effect of plate variables.",
    pageIds: ["fixed-beginners-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Solver
  {
    id: "solver-default",
    question: "Which ArmorSim solver is the default?",
    answer:
      "NORMAL is the entry-tier solver and is recommended for the first run. It uses Alekseevskii–Tate erosion, Recht–Ipson residual velocity, Rosenberg ricochet, and Grady fragmentation.",
    pageIds: ["fixed-solver-modes-comparison-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "solver-difference",
    question: "What is the difference between NORMAL, ADVANCED, and ULTRA?",
    answer:
      "NORMAL covers erosion, residual velocity, ricochet, and fragmentation. ADVANCED adds layered/spaced arrays, reactive armor packs, and per-layer energy accounting. ULTRA adds an axisymmetric Lagrangian continuum solver with Johnson–Cook plasticity and is limited in Early Access.",
    pageIds: ["fixed-solver-modes-comparison-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "ultra-ea-limit",
    question: "Is ULTRA mode limited in Early Access?",
    answer:
      "Yes. ULTRA runs an axisymmetric Lagrangian continuum solver with Johnson–Cook plasticity and is described as limited in Early Access. Expect narrower configuration support and longer solve times until EA evolves.",
    pageIds: ["fixed-solver-modes-comparison-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Penetration mechanics
  {
    id: "seven-outputs",
    question: "What are the seven ArmorSim penetration outputs?",
    answer:
      "Each solve outputs ballistic limit, residual velocity, ricochet, fragmentation, plug ejection, spall, and petalling. Together they describe whether the penetrator perforated and how the plate responded.",
    pageIds: ["fixed-penetration-mechanics-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "ricochet-meaning",
    question: "What does ricochet mean in ArmorSim?",
    answer:
      "Ricochet means the round deflected off the plate rather than penetrating. NORMAL uses the Rosenberg ricochet model to predict deflection; steeper angles and harder materials increase ricochet probability.",
    pageIds: ["fixed-penetration-mechanics-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "spall-meaning",
    question: "What does spall mean in ArmorSim?",
    answer:
      "Spall means small fragments flew off the back face of the plate during the penetration event. It is one of the seven outputs and is useful for evaluating behind-armor hazards.",
    pageIds: ["fixed-penetration-mechanics-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Armor materials
  {
    id: "materials-count",
    question: "How many armor materials does ArmorSim have?",
    answer:
      "The store description documents fourteen armor materials, including RHA steel, ceramic with backing, depleted uranium, composite, spaced, layered, reactive armor packs, and shaped-charge defense.",
    pageIds: ["fixed-armor-materials-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "best-material",
    question: "Which ArmorSim armor material should I use first?",
    answer:
      "Use RHA steel as the baseline. RHA is documented and predictable; once you can compare RHA outputs to the beginner's guide, swap in ceramic with backing to see the layered physics.",
    pageIds: ["fixed-armor-materials-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "rha-baseline",
    question: "Is RHA the baseline ArmorSim material?",
    answer:
      "Yes. Rolled Homogeneous Armour (RHA) steel is the documented baseline material in ArmorSim and the natural starting point for any first-run solve.",
    pageIds: ["fixed-armor-materials-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Ammunition
  {
    id: "ammunition-families",
    question: "Which service ammunition families are in ArmorSim?",
    answer:
      "ArmorSim ships three national service ammunition families: American, Soviet/Russian, and German. Each family has its own documented penetrator roster.",
    pageIds: ["fixed-penetrators-ammo-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "custom-core-count",
    question: "How many custom penetrator cores does ArmorSim have?",
    answer:
      "Four custom penetrator cores are documented. They let you build a custom core configuration beyond the three national service families.",
    pageIds: ["fixed-penetrators-ammo-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "best-beginner-round",
    question: "Which ArmorSim ammunition is best for a beginner?",
    answer:
      "Pick any service round from your preferred national family. National service rounds give consistent behavior so beginners can isolate the effect of plate variables before exploring custom cores.",
    pageIds: ["fixed-penetrators-ammo-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Armor configurations
  {
    id: "reactive-solver",
    question: "Which solver handles reactive armor packs?",
    answer:
      "ADVANCED supports reactive armor packs and per-layer energy accounting. Use ADVANCED — not NORMAL — when the stack includes reactive armor packs or spaced arrays.",
    pageIds: ["fixed-armor-configurations-en-US", "fixed-first-test-recipes-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "best-spaced-array",
    question: "What is a good first spaced-armor configuration?",
    answer:
      "Start with two RHA plates separated by an air gap. Spacing alone changes the penetration outcome, so a two-plate spaced array is the cleanest way to read the effect before adding ceramic or reactive layers.",
    pageIds: ["fixed-armor-configurations-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "shaped-charge-incidence",
    question: "Are shaped charges modeled at normal incidence?",
    answer:
      "Yes. ArmorSim models shaped-charge jets at normal incidence in the scene editor. Build the defense at normal incidence first, then experiment with off-normal angles.",
    pageIds: ["fixed-armor-configurations-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // First-test recipes
  {
    id: "recipe-first-output",
    question: "Which ArmorSim output should I read first for a new configuration?",
    answer:
      "Residual velocity is the default first read across configurations. Ballistic limit is the better first read for a layered stack or a shaped-charge defense; plug ejection is the better first read for ceramic with backing; per-layer ballistic limit is the better first read when reactive packs are involved.",
    pageIds: ["fixed-first-test-recipes-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "recipe-variables",
    question: "Are thickness, angle, and spacing part of an ArmorSim recipe?",
    answer:
      "No. A recipe names the configuration, the solver, the material pairing, and the penetrator family. Thickness, angle, and spacing are the test variables you adjust to answer the specific question you are asking — change one at a time and re-run.",
    pageIds: ["fixed-first-test-recipes-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "spaced-gap-effect",
    question: "How does the gap change a spaced-armor test?",
    answer:
      "A wider gap lets the penetrator lose velocity between hits; a tighter gap makes the stack behave more like a single thick plate. Residual velocity is the output that shows the gap is doing useful work — a lower residual velocity than the equivalent solid plate means the spacing is helping.",
    pageIds: ["fixed-first-test-recipes-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "ceramic-plug-ejection",
    question: "Why is plug ejection the first read for ceramic with backing?",
    answer:
      "Ceramic breaks up the penetrator and the backing catches fragments. Plug ejection is the output that shows the ceramic is doing its job — its presence means the face plate disrupted the round and the backing layer expelled a disc-shaped piece.",
    pageIds: ["fixed-first-test-recipes-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Replay sharing
  {
    id: "replay-size",
    question: "How big is an ArmorSim replay file?",
    answer:
      "A full ULTRA run replay file is on the order of a couple of MB — small enough to post on the Steam Community Hub or the official Discord.",
    pageIds: ["fixed-replay-sharing-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "replay-format",
    question: "What format is an ArmorSim replay file?",
    answer:
      "Replays are saved by the slow-motion viewer and can be opened inside ArmorSim. Use the free orbit camera in the viewer to inspect any frame.",
    pageIds: ["fixed-replay-sharing-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "share-channel",
    question: "Where should I share an ArmorSim replay?",
    answer:
      "Share on the Steam Community Hub discussion boards for AppID 5159810, or on the official Discord linked from the Steam sidebar. Both surfaces are reachable from the home page.",
    pageIds: ["fixed-replay-sharing-en-US", "fixed-discord-community-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Discord
  {
    id: "discord-official",
    question: "Is there an official ArmorSim Discord?",
    answer:
      "Yes. The official Discord is linked from the Steam store sidebar for AppID 5159810. Always re-verify the invite against the Steam sidebar before joining, because third-party mirrors can drift.",
    pageIds: ["fixed-discord-community-en-US"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "discord-credentials",
    question: "Does the ArmorSim Discord require credentials?",
    answer:
      "Joining the Discord only requires the invite link. The developer does not require accounts or codes to join as of 2026-09-15.",
    pageIds: ["fixed-discord-community-en-US"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "discord-vs-community-hub",
    question: "Should I use Discord or the Steam Community Hub?",
    answer:
      "Use both. Discord is fastest for announcements and direct developer replies; the Community Hub is best for long-form discussion, replay sharing, and search-indexed threads.",
    pageIds: ["fixed-discord-community-en-US"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // Wiki / FAQ
  {
    id: "faq-where",
    question: "Where is the current ArmorSim FAQ?",
    answer:
      "Until a third-party wiki is established, the Steam Community Hub discussion boards serve as the current FAQ surface for ArmorSim. The developer and players post answers there.",
    pageIds: ["wiki"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "wiki-launch",
    question: "Will ArmorSim get a wiki when it leaves Early Access?",
    answer:
      "A third-party wiki is not announced as of 2026-09-15. Re-check this page after each major EA milestone; the wiki surface typically forms once the EA build stabilizes.",
    pageIds: ["wiki"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
];
