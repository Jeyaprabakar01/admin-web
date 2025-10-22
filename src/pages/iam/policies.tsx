import { type ReactElement } from "react";
import type { NextPage } from "next";
import { FileText } from "lucide-react";

import { AppLayout } from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PoliciesPage: NextPage = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Policy workspace</CardTitle>
          <CardDescription>
            The policy builder will surface policy-as-code tooling and simulations. Integration
            hooks are not yet wired.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3 rounded-lg border border-dashed bg-muted/20 p-6 text-sm text-muted-foreground">
            <span>• Draft policies for fine-grained permissions.</span>
            <span>• Simulate access requests before publishing.</span>
            <span>• Export policy bundles for downstream services.</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

PoliciesPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout
      title="Policy Authoring"
      description="Design guardrails, simulate blast radius, and ship permission changes safely."
      breadcrumbs={[{ label: "Identity & Access", href: "/iam/users" }, { label: "Policies" }]}
      actions={
        <Button className="gap-2">
          <FileText className="size-4" />
          New policy draft
        </Button>
      }
    >
      {page}
    </AppLayout>
  );
};

export default PoliciesPage;
