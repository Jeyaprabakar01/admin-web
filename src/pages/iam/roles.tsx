import { type ReactElement } from "react";
import type { NextPage } from "next";
import { ShieldPlus } from "lucide-react";

import { AppLayout } from "@/components/layout/app-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const mockRoles = [
  {
    name: "IAM Administrator",
    description: "Full platform access for global administrators.",
    permissions: 18,
  },
  {
    name: "Security Analyst",
    description: "Focused access to audit, policy, and alerting surfaces.",
    permissions: 12,
  },
  {
    name: "Tenant Owner",
    description: "Lifecycle management controls scoped to a specific tenant.",
    permissions: 9,
  },
];

const RolesPage: NextPage = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Role catalogue</CardTitle>
          <CardDescription>Seed data for IAM roles will be populated via API integration.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          {mockRoles.map((role) => (
            <div key={role.name} className="rounded-lg border p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium leading-none">{role.name}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{role.description}</p>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {role.permissions} permissions
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

RolesPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout
      title="Role & Policy Management"
      description="Define and govern reusable role definitions that power least privilege access."
      breadcrumbs={[
        { label: "Identity & Access", href: "/iam/users" },
        { label: "Roles" },
      ]}
      actions={
        <Button className="gap-2">
          <ShieldPlus className="size-4" />
          Create role
        </Button>
      }
    >
      {page}
    </AppLayout>
  );
};

export default RolesPage;
