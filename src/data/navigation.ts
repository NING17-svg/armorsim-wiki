import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  // Simulation Loop cluster
  { href: "/gameplay", labels: { "en-US": "Game" } },
  // Materials & Configuration cluster
  { href: "/armor-materials", labels: { "en-US": "Materials & Configuration" } },
  // Launch & Status cluster
  { href: "/release-date", labels: { "en-US": "Launch & Status" } },
  // Community cluster
  { href: "/discord", labels: { "en-US": "Community" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/wiki", labels: { "en-US": "Wiki & FAQ" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}
