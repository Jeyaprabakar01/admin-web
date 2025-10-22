import { type ReactElement } from "react";
import { KeyRound } from "lucide-react";

import type { NextPageWithLayout } from "@/types/page";
import { AppLayout } from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ApiKeysPage: NextPageWithLayout = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>API tokens</CardTitle>
          <CardDescription>
            Service credentials will be managed here. Provisioning flows will integrate with the IAM
            token service.
          </CardDescription>
        </CardHeader>
        <CardContent className="rounded-lg border border-dashed p-6 text-sm text-muted-foreground">
          Token inventory is currently empty. Once the token broker is connected, this view will
          surface token metadata, scopes, and rotation history.
        </CardContent>
      </Card>
    </div>
  );
};

ApiKeysPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout
      title="API Token Management"
      description="Issue, rotate, and revoke service-level credentials."
      breadcrumbs={[{ label: "Identity & Access", href: "/iam/users" }, { label: "API Tokens" }]}
      actions={
        <Button className="gap-2">
          <KeyRound className="size-4" />
          Generate token
        </Button>
      }
    >
      {page}
    </AppLayout>
  );
};

export default ApiKeysPage;
