import {
  Calendar,
  LayoutDashboard,
  Search,
  Settings,
  ChartColumnStacked,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Routes, RouteNames } from "../../constants";

type NavItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};

const NavItems: NavItem[] = [
  {
    title: RouteNames.DASHBOARD,
    url: Routes.DASHBOARD,
    icon: LayoutDashboard,
  },
  {
    title: RouteNames.CALENDAR,
    url: Routes.CALENDAR,
    icon: Calendar,
  },
];

const NavToolItems: NavItem[] = [
  {
    title: RouteNames.ANALYTICS,
    url: Routes.ANALYTICS,
    icon: ChartColumnStacked,
  },
  {
    title: RouteNames.TEAM,
    url: Routes.TEAM,
    icon: Users,
  },
];

const NavFooterItems: NavItem[] = [
  {
    title: RouteNames.SEARCH,
    url: Routes.SEARCH,
    icon: Search,
  },
  {
    title: RouteNames.SETTINGS,
    url: Routes.SETTINGS,
    icon: Settings,
  },
];

export { NavItems, NavToolItems, NavFooterItems };
export type { NavItem };
