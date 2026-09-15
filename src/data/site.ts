import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "ArmorSim",
  brandMark: "ARM",
  gameName: "ArmorSim",
  domain: "armorsim.wiki",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://armorsim.wiki").replace(/\/$/, ""),
  description:
    "Reference hub for ArmorSim — terminal-ballistics simulation, NORMAL/ADVANCED/ULTRA solvers, armor materials, penetration mechanics, replay sharing, and the Early Access launch.",
  tagline: "Terminal-ballistics reference for ArmorSim: solvers, materials, penetration mechanics, and the EA launch.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "ArmorSim Wiki",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "ArmorSim on Steam",
      href: "https://store.steampowered.com/app/5159810/ArmorSim/",
      description: "Official Steam store page for ArmorSim (AppID 5159810) — release date, system requirements, screenshots, and store media.",
    },
    {
      label: "ArmorSim Steam Community Hub",
      href: "https://steamcommunity.com/app/5159810",
      description: "Steam Community Hub for ArmorSim — discussions, guides, and workshop links from the developer.",
    },
    {
      label: "SteamDB ArmorSim metadata",
      href: "https://steamdb.info/app/5159810/",
      description: "SteamDB metadata snapshot for ArmorSim AppID 5159810.",
    },
  ],
  disclaimer:
    "ArmorSim Wiki is an unofficial fan reference built from the official Steam store description and the Steam Community Hub. Facts come from the Steam store page and SteamDB on research date 2026-09-15; unannounced details are labeled as such.",
};
