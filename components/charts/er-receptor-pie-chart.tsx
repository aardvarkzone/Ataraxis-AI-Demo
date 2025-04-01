"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DonutChart } from "@tremor/react";
import { ChartWrapper } from "./chart-wrapper";

/*
Evaluation Cohort ER Receptor Status Distribution:
- Positive: 85.44%
- Negative: 11.39%
- Unknown: 3.17%
These values are taken from Table 1 of the paper for the evaluation cohorts (N=3502).
*/

const erStatusData = [
  { status: "Positive", value: 85.44 },
  { status: "Negative", value: 11.39 },
  { status: "Unknown", value: 3.17 },
];

export function ERStatusPieChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>ER Receptor Status Distribution</CardTitle>
        <CardDescription>
          Breakdown of ER receptor status in evaluation cohorts (based on Table
          1 in the paper)
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <ChartWrapper>
          <DonutChart
            className="h-80"
            data={erStatusData}
            index="status"
            category="value"
            colors={["green", "red", "gray"]}
            valueFormatter={(value) => `${value}%`}
            showLabel={true}
            label="N=3502"
          />
        </ChartWrapper>
      </CardContent>
    </Card>
  );
}
