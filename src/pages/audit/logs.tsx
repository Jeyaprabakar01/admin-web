import { type ReactElement } from "react";
import type { NextPage } from "next";
import { Funnel, RefreshCw } from "lucide-react";

import { AppLayout } from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const AuditLogsPage: NextPage = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <CardTitle>Streaming audit log</CardTitle>
            <CardDescription>
              The audit ingestion pipeline will stream structured events for forensic analysis.
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <RefreshCw className="size-4" />
              Refresh
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Funnel className="size-4" />
              Filters
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>Actor</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Target</TableHead>
                <TableHead className="text-right">Severity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground">
                  Audit streaming service connection pending…
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

AuditLogsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout
      title="Audit Activity"
      description="Investigate critical security events across tenants and systems."
      breadcrumbs={[
        { label: "Identity & Access", href: "/iam/users" },
        { label: "Audit Logs" },
      ]}
    >
      {page}
    </AppLayout>
  );
};

export default AuditLogsPage;
