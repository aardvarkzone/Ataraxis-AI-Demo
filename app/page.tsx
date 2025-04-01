"use client";

import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard-header";
import { OverviewCards } from "@/components/overview-cards";
import { PredictiveAccuracyChart } from "@/components/charts/predictive-accuracy-chart";
import { HazardRatioChart } from "@/components/charts/hazard-ratio-chart";
import { CohortAccuracyChart } from "@/components/charts/cohort-accuracy-chart";
import { ERStatusPieChart } from "@/components/charts/er-receptor-pie-chart";
import { DashboardFooter } from "@/components/dashboard-footer";
import { RecurrenceProbabilityChart } from "@/components/charts/risk-score-scatter";
import { FilterControls } from "@/components/filter-controls";

export default function Dashboard() {
  const [subtype, setSubtype] = useState("all");
  const [cohort, setCohort] = useState("all");

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 space-y-6 p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Comparing Ataraxis AI and Oncotype DX in Predictive Accuracy
            </p>
          </div>
          <FilterControls
            subtype={subtype}
            setSubtype={setSubtype}
            cohort={cohort}
            setCohort={setCohort}
          />
        </div>
        <OverviewCards />
        <div className="grid gap-6 md:grid-cols-2">
          <PredictiveAccuracyChart subtype={subtype} cohort={cohort} />
          <HazardRatioChart subtype={subtype} cohort={cohort} />
        </div>
        <CohortAccuracyChart subtype={subtype} cohort={cohort} />
        <div className="grid gap-6 md:grid-cols-2">
          <RecurrenceProbabilityChart />
          <ERStatusPieChart />
        </div>
      </main>
      <DashboardFooter />
    </div>
  );
}
