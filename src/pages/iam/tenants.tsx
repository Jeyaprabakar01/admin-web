import { type ReactElement } from "react";
import { Building2 } from "lucide-react";

import type { NextPageWithLayout } from "@/types/page";
import { AppLayout } from "@/components/layout/app-layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TenantsPage: NextPageWithLayout = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="size-4" />
            Tenant landscape
          </CardTitle>
          <CardDescription>
            Multi-tenant management will expose provisioning, health, and usage metrics once backend
            endpoints are ready.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Badge variant="outline">Enterprise HQ · Active</Badge>
          <Badge variant="outline">North America · Pending</Badge>
          <Badge variant="outline">Legacy Platforms · Suspended</Badge>
        </CardContent>
      </Card>
    </div>
  );
};

TenantsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout
      title="Tenant Management"
      description="Monitor tenant health, compliance posture, and lifecycle events."
      breadcrumbs={[{ label: "Organization", href: "/iam/tenants" }, { label: "Tenants" }]}
      actions={<Badge variant="secondary">API integration pending</Badge>}
    >
      {page}
    </AppLayout>
  );
};

export default TenantsPage;
