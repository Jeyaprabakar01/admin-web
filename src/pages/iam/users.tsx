import { type ReactElement } from "react";
import { Plus } from "lucide-react";

import type { NextPageWithLayout } from "@/types/page";
import { AppLayout } from "@/components/layout/app-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const UsersPage: NextPageWithLayout = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <CardTitle>Directory snapshot</CardTitle>
            <CardDescription>
              Overview of the most recent user invitations and lifecycle changes.
            </CardDescription>
          </div>
          <Badge variant="outline">Real data coming soon</Badge>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Primary role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Last modified</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Loading directory…</TableCell>
                <TableCell>—</TableCell>
                <TableCell>—</TableCell>
                <TableCell className="text-right">—</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

UsersPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout
      title="User Directory"
      description="Manage identities, invitations, lifecycle states, and MFA enrollment."
      breadcrumbs={[{ label: "Identity & Access", href: "/iam/users" }, { label: "Users" }]}
      actions={
        <div className="flex items-center gap-2">
          <Button variant="outline">Bulk import</Button>
          <Button className="gap-2">
            <Plus className="size-4" />
            Invite user
          </Button>
        </div>
      }
    >
      {page}
    </AppLayout>
  );
};

export default UsersPage;
