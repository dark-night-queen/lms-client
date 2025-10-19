// code dependencies
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// core components
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// constants
import { NavItem } from "./constants";

// driver code
interface NavContentProps
  extends React.ComponentPropsWithoutRef<typeof SidebarGroup> {
  items: NavItem[];
}

const NavMenuContent = ({ items }: { items: NavItem[] }) => {
  const pathname = usePathname();

  return (
    <SidebarGroupContent>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild isActive={pathname === item.url}>
              <Link href={item.url}>
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  );
};

export const NavContent = ({ items, ...props }: NavContentProps) => {
  return (
    <SidebarGroup {...props}>
      <NavMenuContent items={items} />
    </SidebarGroup>
  );
};

interface NavContentWithLabelProps extends NavContentProps {
  label: string;
}

export const NavContentWithLabel = ({
  label,
  items,
  ...props
}: NavContentWithLabelProps) => {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <NavMenuContent items={items} />
    </SidebarGroup>
  );
};
