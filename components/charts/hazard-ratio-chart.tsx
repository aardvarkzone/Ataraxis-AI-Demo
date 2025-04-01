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
Hazard Ratio Data:
- For HR+ HER2– patients (the only subgroup with Oncotype DX data), the Ataraxis AI hazard ratio is ~3.67 
  and the Oncotype DX hazard ratio is ~2.09, as derived from the pooled analysis reported in the paper.
- For TNBC, the Ataraxis AI hazard ratio is ~3.81; Oncotype DX data is not reported (displayed as "N/A").
- For HER2+, the Ataraxis AI hazard ratio is ~2.22; Oncotype DX data is not available.
- For HR+ Premenopausal, the Ataraxis AI hazard ratio is ~2.87; Oncotype DX data is not available.
- These numbers are based on the figures and text in the paper (e.g., Figure 2D and associated results).
*/

interface HazardRatioChartProps {
  subtype: string;
  cohort: string;
}

// Our hazard ratio data for different subtypes.
const hazardRatioData = [
  {
    subtype: "HR+ HER2-",
    "Ataraxis AI": 3.67,
    "Oncotype DX": 2.09,
  },
  {
    subtype: "TNBC",
    "Ataraxis AI": 3.81,
    "Oncotype DX": 0, // Placeholder for N/A
  },
  {
    subtype: "HER2+",
    "Ataraxis AI": 2.22,
    "Oncotype DX": 0, // Placeholder for N/A
  },
  {
    subtype: "HR+ Premenopausal",
    "Ataraxis AI": 2.87,
    "Oncotype DX": 0, // Placeholder for N/A
  },
];

// Mapping for filtering based on dropdown values.
// New mapping: "hrher2" maps to "HR+ HER2-"
const subtypeMapping: Record<string, string> = {
  hrher2: "HR+ HER2-",
  tnbc: "TNBC",
  her2: "HER2+",
  "hr-pre": "HR+ Premenopausal",
};

export function HazardRatioChart({ subtype, cohort }: HazardRatioChartProps) {
  // If subtype is "all", show all rows; otherwise filter by the corresponding mapped value.
  const filteredData =
    subtype === "all"
      ? hazardRatioData
      : hazardRatioData.filter(
          (item) => item.subtype === subtypeMapping[subtype]
        );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hazard Ratio Comparison</CardTitle>
        <CardDescription>
          Hazard ratio comparison across cancer subtypes (as reported in Figure
          2D and the associated text in the paper)
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
            // Format values: if 0 then show "N/A" (meaning no data for Oncotype DX in that subtype).
            valueFormatter={(value) => (value === 0 ? "N/A" : value.toFixed(2))}
            yAxisWidth={80}
            showLegend={true}
            showXAxis={true}
            showYAxis={true}
            showGridLines={true}
            showAnimation={true}
            xAxisLabel="Cancer Subtype"
            yAxisLabel="Hazard Ratio"
          />
        </ChartWrapper>
      </CardContent>
    </Card>
  );
}
