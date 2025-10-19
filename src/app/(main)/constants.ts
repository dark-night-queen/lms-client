export const Routes = {
  DASHBOARD: "/",
  CALENDAR: "/calendar",
  ANALYTICS: "/analytics",
  TEAM: "/team",
  SEARCH: "/search",
  SETTINGS: "/settings",
};

export const RouteNames = {
  DASHBOARD: "Dashboard",
  CALENDAR: "Calendar",
  ANALYTICS: "Analytics",
  TEAM: "Team",
  SEARCH: "Search",
  SETTINGS: "Settings",
};

export function getRouteNameFromPathname(pathname: string): string | undefined {
  const normalized =
    pathname === "" || pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  for (const key of Object.keys(Routes) as (keyof typeof Routes)[]) {
    const route = Routes[key];
    // exact match or nested/dynamic (e.g. /team/123)
    if (
      route === normalized ||
      (route !== "/" && normalized.startsWith(route + "/"))
    ) {
      return RouteNames[key];
    }
  }
  return undefined;
}
