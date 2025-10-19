import {
  Calendar,
  LayoutDashboard,
  Search,
  Settings,
  ChartColumnStacked,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type NavItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};

const NavItems: NavItem[] = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
];

const NavToolItems: NavItem[] = [
  {
    title: "Analytics",
    url: "#",
    icon: ChartColumnStacked,
  },
  {
    title: "Team",
    url: "#",
    icon: Users,
  },
];

const NavFooterItems: NavItem[] = [
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export { NavItems, NavToolItems, NavFooterItems };
export type { NavItem };
