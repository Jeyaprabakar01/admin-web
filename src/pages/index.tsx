import { type ReactElement } from "react";
import type { NextPage } from "next";
import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  Shield,
  UserPlus,
} from "lucide-react";

import { AppLayout } from "@/components/layout/app-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  buildPermissionKey,
  formatRelativeTime,
  groupAuditEventsBySeverity,
  resolveRolePermissions,
  resolveUserPermissions,
  sortUsersByRecentActivity,
  summarizeTenants,
} from "@/lib/iam";
import type {
  IAMAuditEvent,
  IAMRole,
  IAMTenant,
  IAMUser,
} from "@/types/iam";

const permissions = {
  manageUsers: buildPermissionKey("users", "update"),
  inviteUsers: buildPermissionKey("users", "create"),
  suspendUsers: buildPermissionKey("users", "delete"),
  manageRoles: buildPermissionKey("roles", "update"),
  managePolicies: buildPermissionKey("policies", "update"),
  manageTenants: buildPermissionKey("tenants", "update"),
  manageApiTokens: buildPermissionKey("api-tokens", "create"),
  reviewAudit: buildPermissionKey("audit", "review"),
} as const;

const roles: IAMRole[] = [
  {
    id: "iam-admin",
    name: "IAM Administrator",
    description: "Full administrative access across all tenants.",
    level: 90,
    system: true,
    permissions: Object.values(permissions),
  },
  {
    id: "security-analyst",
    name: "Security Analyst",
    description: "Monitors audit events and manages policies.",
    level: 70,
    system: false,
    permissions: [
      permissions.managePolicies,
      permissions.reviewAudit,
      permissions.manageUsers,
    ],
  },
  {
    id: "tenant-owner",
    name: "Tenant Owner",
    description: "Manages tenant members and invitations.",
    level: 50,
    system: false,
    permissions: [
      permissions.manageUsers,
      permissions.inviteUsers,
      permissions.manageApiTokens,
    ],
  },
];

const users: IAMUser[] = [
  {
    id: "user-1",
    fullName: "Jordan Daniels",
    email: "jordan.daniels@example.com",
    status: "active",
    roles: ["iam-admin"],
    lastSeenAt: new Date().toISOString(),
    mfaEnabled: true,
    tenantId: "enterprise-hq",
  },
  {
    id: "user-2",
    fullName: "Priya Shah",
    email: "priya.shah@example.com",
    status: "active",
    roles: ["security-analyst"],
    lastSeenAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    mfaEnabled: true,
    tenantId: "europe-ops",
  },
  {
    id: "user-3",
    fullName: "Miguel Torres",
    email: "miguel.torres@example.com",
    status: "invited",
    roles: ["tenant-owner"],
    lastSeenAt: null,
    mfaEnabled: false,
    tenantId: "north-america",
  },
  {
    id: "user-4",
    fullName: "Alexis Martin",
    email: "alexis.martin@example.com",
    status: "suspended",
    roles: ["tenant-owner"],
    lastSeenAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    mfaEnabled: false,
    tenantId: "legacy-platforms",
  },
];

const tenants: IAMTenant[] = [
  {
    id: "enterprise-hq",
    name: "Enterprise HQ",
    status: "active",
    plan: "enterprise",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 365).toISOString(),
  },
  {
    id: "north-america",
    name: "North America",
    status: "pending",
    plan: "team",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 120).toISOString(),
  },
  {
    id: "europe-ops",
    name: "Europe Operations",
    status: "active",
    plan: "team",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 220).toISOString(),
  },
  {
    id: "legacy-platforms",
    name: "Legacy Platforms",
    status: "suspended",
    plan: "free",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 420).toISOString(),
  },
];

const auditEvents: IAMAuditEvent[] = [
  {
    id: "evt-1",
    action: "user.invited",
    target: "daniela.hsu@example.com",
    createdAt: new Date(Date.now() - 1000 * 60 * 20).toISOString(),
    severity: "low",
    actor: {
      id: "user-1",
      name: "Jordan Daniels",
      type: "user",
    },
    metadata: {
      tenantId: "enterprise-hq",
      roles: ["tenant-owner"],
    },
  },
  {
    id: "evt-2",
    action: "policy.updated",
    target: "Baseline password policy",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    severity: "medium",
    actor: {
      id: "user-2",
      name: "Priya Shah",
      type: "user",
    },
    metadata: {
      changeSet: ["minLength: 12 → 14", "added uppercase requirement"],
    },
  },
  {
    id: "evt-3",
    action: "tenant.suspended",
    target: "Legacy Platforms",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
    severity: "high",
    actor: {
      id: "system",
      name: "Risk Engine",
      type: "system",
    },
    metadata: {
      reason: "Exceeded failed login threshold",
    },
  },
];

const DashboardPage: NextPage = () => {
  const activeUsers = users.filter((user) => user.status === "active").length;
  const pendingInvites = users.filter((user) => user.status === "invited").length;
  const suspendedUsers = users.filter((user) => user.status === "suspended").length;

  const tenantSummary = summarizeTenants(tenants);
  const auditSeverity = groupAuditEventsBySeverity(auditEvents);
  const recentlyActiveUsers = sortUsersByRecentActivity(users).slice(0, 3);

  return (
    <div className="flex flex-col gap-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Active identities</CardTitle>
            <CardDescription>Users with successful login in the last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-semibold">{activeUsers}</span>
              <Badge variant="outline" className="text-xs">
                +8% vs last month
              </Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Pending invitations</CardTitle>
            <CardDescription>Invites that have not been accepted yet</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-semibold">{pendingInvites}</span>
              <Badge variant={pendingInvites > 2 ? "secondary" : "outline"} className="text-xs">
                Review weekly
              </Badge>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <UserPlus className="size-4" />
              3 invites expire this week
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Tenants monitored</CardTitle>
            <CardDescription>Breakdown by active status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-semibold">{tenantSummary.total}</span>
              <Badge variant="outline" className="text-xs">
                {tenantSummary.active} active
              </Badge>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <span className="rounded-md bg-muted py-1 text-center">
                Active: {tenantSummary.active}
              </span>
              <span className="rounded-md bg-muted py-1 text-center">
                Pending: {tenantSummary.pending}
              </span>
              <span className="rounded-md bg-muted py-1 text-center">
                Suspended: {tenantSummary.suspended}
              </span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">High severity events</CardTitle>
            <CardDescription>Past 24 hours across all tenants</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-semibold">{auditSeverity.high ?? 0}</span>
              <Badge variant="destructive" className="text-xs">
                {auditSeverity.high ? "Action required" : "All clear"}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent audit activity</CardTitle>
            <CardDescription>
              Detailed summary of the most recent security-relevant events.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event</TableHead>
                  <TableHead>Target</TableHead>
                  <TableHead>Actor</TableHead>
                  <TableHead className="text-right">When</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {auditEvents.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {event.severity === "high" ? (
                          <AlertTriangle className="size-4 text-red-500" />
                        ) : event.severity === "medium" ? (
                          <Shield className="size-4 text-amber-500" />
                        ) : (
                          <CheckCircle2 className="size-4 text-emerald-500" />
                        )}
                        <div>
                          <div className="font-medium">{event.action}</div>
                          <p className="text-xs text-muted-foreground">
                            Severity: {event.severity}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{event.target}</span>
                        {event.metadata?.tenantId && (
                          <span className="text-xs text-muted-foreground">
                            Tenant: {event.metadata.tenantId}
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{event.actor.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {event.actor.type}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-sm text-muted-foreground">
                      {formatRelativeTime(event.createdAt)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="ml-auto gap-1 text-sm">
              View full audit log
              <ArrowUpRight className="size-4" />
            </Button>
          </CardFooter>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Role coverage</CardTitle>
            <CardDescription>
              Permissions included in each high-priority role.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {roles.map((role) => {
              const permissionsSet = resolveRolePermissions(role);
              return (
                <div key={role.id} className="rounded-lg border p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-medium leading-none">{role.name}</p>
                      <p className="text-xs text-muted-foreground">{role.description}</p>
                    </div>
                    <Badge variant={role.system ? "default" : "outline"} className="text-xs">
                      {permissionsSet.size} permissions
                    </Badge>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[...permissionsSet].map((permission) => (
                      <Badge key={permission} variant="secondary" className="text-xs font-normal">
                        {permission}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recently active users</CardTitle>
            <CardDescription>Top contributors across all tenants.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentlyActiveUsers.map((user) => {
              const permissionsSet = resolveUserPermissions(user, roles);
              return (
                <div
                  key={user.id}
                  className="flex flex-wrap items-center justify-between gap-4 rounded-lg border p-3"
                >
                  <div>
                    <p className="font-medium leading-none">{user.fullName}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Last seen {formatRelativeTime(user.lastSeenAt)}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-right">
                    <Badge variant="outline" className="text-xs">
                      {user.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {permissionsSet.size} permissions
                    </span>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Operational insights</CardTitle>
            <CardDescription>Signal-driven recommendations to keep IAM healthy.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-900">
              <p className="font-medium">MFA coverage gap detected</p>
              <p className="mt-2 text-xs">
                2 of 4 recent user invitations have not enrolled in multi-factor authentication.
                Consider enforcing step-up MFA for tenant onboarding.
              </p>
            </div>
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
              <p className="font-medium">System roles aligned</p>
              <p className="mt-2 text-xs">
                All critical system roles retain full coverage for lifecycle management workflows.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-slate-900">
              <p className="font-medium">Next best action</p>
              <p className="mt-2 text-xs">
                {suspendedUsers
                  ? `${suspendedUsers} user${suspendedUsers === 1 ? " is" : "s are"} currently suspended across tenants. Review the Legacy Platforms workspace and confirm remediation of failed login attempts before reactivation.`
                  : "All tenant accounts are active. Focus on invitation follow-ups this week."}
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout
      title="Identity Operations Overview"
      description="Monitor tenant activity, critical audit events, and user lifecycle health."
      actions={
        <div className="flex items-center gap-2">
          <Button variant="outline">Download report</Button>
          <Button className="gap-2">
            <UserPlus className="size-4" />
            Invite user
          </Button>
        </div>
      }
    >
      {page}
    </AppLayout>
  );
};

export default DashboardPage;
