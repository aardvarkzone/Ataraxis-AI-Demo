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
Predictive Accuracy Data:
- For HR+ HER2- patients (the only subgroup with Oncotype DX data), the Ataraxis AI C-index is ~0.71 
  and the Oncotype DX C-index is ~0.61, as reported in the paper's pooled analysis for disease-free interval.
- For TNBC, the Ataraxis AI C-index is ~0.71; Oncotype DX data is not reported (displayed as "N/A").
- For HER2+, the Ataraxis AI C-index is ~0.67; Oncotype DX data is not available.
- For HR+ Premenopausal patients, the Ataraxis AI C-index is ~0.655; Oncotype DX data is not available.
- These values are approximated from the paper (e.g., the abstract and Figure 2) and reflect predictive accuracy comparisons.
*/

interface PredictiveAccuracyChartProps {
  subtype: string;
  cohort: string;
}

// Updated data: Replace "Overall" with an explicit "HR+ HER2-" label.
const predictiveAccuracyData = [
  {
    subtype: "HR+ HER2-",
    "Ataraxis AI": 0.71,
    "Oncotype DX": 0.61,
  },
  {
    subtype: "TNBC",
    "Ataraxis AI": 0.71,
    "Oncotype DX": 0, // Placeholder for N/A
  },
  {
    subtype: "HER2+",
    "Ataraxis AI": 0.67,
    "Oncotype DX": 0, // Placeholder for N/A
  },
  {
    subtype: "HR+ Premenopausal",
    "Ataraxis AI": 0.655,
    "Oncotype DX": 0, // Placeholder for N/A
  },
];

// Mapping for filtering based on dropdown values from FilterControls.
// "hrher2" maps to "HR+ HER2-", "tnbc" maps to "TNBC", "her2" maps to "HER2+", and "hr-pre" maps to "HR+ Premenopausal".
const subtypeMapping: Record<string, string> = {
  hrher2: "HR+ HER2-",
  tnbc: "TNBC",
  her2: "HER2+",
  "hr-pre": "HR+ Premenopausal",
};

export function PredictiveAccuracyChart({
  subtype,
  cohort,
}: PredictiveAccuracyChartProps) {
  // If "all" is selected in the dropdown, display all subtypes;
  // otherwise filter by mapping the dropdown value to the corresponding subtype label.
  const filteredData =
    subtype === "all"
      ? predictiveAccuracyData
      : predictiveAccuracyData.filter(
          (item) => item.subtype === subtypeMapping[subtype]
        );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Predictive Accuracy Comparison</CardTitle>
        <CardDescription>
          C-Index comparison across cancer subtypes approximated from figures
          (e.g., from the abstract and Figure 2 in the paper)
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <ChartWrapper>
          <BarChart
            className="h-80"
            data={filteredData}
            index="subtype"
            categories={["Ataraxis AI", "Oncotype DX"]}
            colors={["blue", "orange"]}
            // If the value is 0, display "N/A" to indicate no data for Oncotype DX in that subgroup.
            valueFormatter={(value) => (value === 0 ? "N/A" : value.toFixed(3))}
            yAxisWidth={80}
            showLegend={true}
            showXAxis={true}
            showYAxis={true}
            showGridLines={true}
            showAnimation={true}
            xAxisLabel="Cancer Subtype"
            yAxisLabel="C-Index"
          />
        </ChartWrapper>
      </CardContent>
    </Card>
  );
}
