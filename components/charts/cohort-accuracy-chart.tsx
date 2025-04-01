"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart } from "@tremor/react";
import { ChartWrapper } from "./chart-wrapper";

/*
The overall C-index of 0.71 comes from the pooled evaluation result for disease‑free interval, 
which is reported as 0.71 (with a 95% CI of 0.68–0.75) in the abstract and detailed in the Results section.

The Oncotype DX value of 0.61 is drawn from the direct comparison in a subset of 858 patients,
 where the AI test was compared against the 21‑gene assay, 
 which showed a C-index of 0.61 (with a 95% CI of 0.49–0.73) for Oncotype DX.

The individual cohort values for Karmanos, Basel, and UChicago 
(e.g., approximately 0.72 vs 0.62, 0.70 vs 0.60, and 0.71 vs 0.61, respectively) 
are approximated from the cohort‑specific performance figures discussed in the Results 
(and illustrated in figures such as Figure 2).
*/

interface CohortAccuracyChartProps {
  subtype: string;
  cohort: string;
}

const cohortAccuracyData = [
  {
    cohort: "Overall",
    "Ataraxis AI": 0.71,
    "Oncotype DX": 0.61,
  },
  {
    cohort: "Karmanos",
    "Ataraxis AI": 0.72,
    "Oncotype DX": 0.62,
  },
  {
    cohort: "Basel",
    "Ataraxis AI": 0.7,
    "Oncotype DX": 0.6,
  },
  {
    cohort: "UChicago",
    "Ataraxis AI": 0.71,
    "Oncotype DX": 0.61,
  },
];

export function CohortAccuracyChart({
  subtype,
  cohort,
}: CohortAccuracyChartProps) {
  // Optionally extend filtering logic if subtype is used in the future
  const filteredData =
    cohort === "all"
      ? cohortAccuracyData
      : cohortAccuracyData.filter(
          (item) => item.cohort.toLowerCase() === cohort
        );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cohort Accuracy Comparison</CardTitle>
        <CardDescription>
          C-Index comparison across different cohorts (approximated from the
          figures and text in the Results section of the paper)
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <ChartWrapper>
          <BarChart
            className="h-80"
            data={filteredData}
            index="cohort"
            categories={["Ataraxis AI", "Oncotype DX"]}
            colors={["blue", "orange"]}
            valueFormatter={(value) => value.toFixed(2)}
            yAxisWidth={80}
            showLegend={true}
            showXAxis={true}
            showYAxis={true}
            showGridLines={true}
            showAnimation={true}
            xAxisLabel="Cohort"
            yAxisLabel="C-Index"
          />
        </ChartWrapper>
      </CardContent>
    </Card>
  );
}
