"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import {
  Activity,
  Building2,
  KeySquare,
  LayoutDashboard,
  LockKeyhole,
  Settings2,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

type NavItem = {
  title: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  badge?: string;
  status?: "default" | "beta" | "soon";
};

type NavSection = {
  title: string;
  items: NavItem[];
};

const navSections: NavSection[] = [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard",
        href: "/",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    title: "Identity & Access",
    items: [
      { title: "Users", href: "/iam/users", icon: UsersRound, badge: "128" },
      { title: "Roles", href: "/iam/roles", icon: ShieldCheck },
      { title: "Policies", href: "/iam/policies", icon: LockKeyhole },
      { title: "Audit Logs", href: "/audit/logs", icon: Activity },
    ],
  },
  {
    title: "Organization",
    items: [
      { title: "Tenants", href: "/iam/tenants", icon: Building2, badge: "6" },
      {
        title: "API Tokens",
        href: "/iam/api-keys",
        icon: KeySquare,
        status: "beta",
      },
      { title: "Settings", href: "/settings/preferences", icon: Settings2 },
    ],
  },
];

export function AppSidebar() {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <Sidebar className="border-r">
      <SidebarHeader>
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm font-semibold tracking-tight hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          <span className="inline-flex size-8 items-center justify-center rounded-md bg-gradient-to-br from-primary/80 via-primary to-primary/70 text-sm font-bold text-primary-foreground">
            IW
          </span>
          <span className="flex flex-col">
            <span className="text-sm font-semibold">Identity Workspace</span>
            <span className="text-xs text-muted-foreground">Admin Portal</span>
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {navSections.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.href}
                      tooltip={item.title}
                    >
                      <Link href={item.href}>
                        <item.icon className="size-4" />
                        <span>{item.title}</span>
                        {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
                        {item.status === "beta" && (
                          <Badge variant="outline" className="ml-auto text-xs">
                            Beta
                          </Badge>
                        )}
                        {item.status === "soon" && (
                          <Badge variant="secondary" className="ml-auto text-xs">
                            Soon
                          </Badge>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <div className="flex items-center gap-3 rounded-md border bg-sidebar-accent/40 p-3">
          <Avatar className="size-10">
            <AvatarImage src="https://i.pravatar.cc/100?img=12" alt="Admin" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex flex-1 flex-col">
            <span className="text-sm font-medium text-sidebar-foreground">Jordan Daniels</span>
            <span className="text-xs text-muted-foreground">Principal IAM Admin</span>
          </div>
          <Badge variant="secondary" className="text-xs">
            Enterprise
          </Badge>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
