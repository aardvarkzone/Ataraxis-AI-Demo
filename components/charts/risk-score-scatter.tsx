"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LineChart } from "@tremor/react"; // Tremor's LineChart component
import { ChartWrapper } from "./chart-wrapper";

/*
Recurrence Probability Chart Data:
- The paper indicates that the 10-year recurrence probability increases monotonically as the AI test score increases (see Figure 1e).
- These data points are approximations for demonstration:
    • At an AI score of 0.3, recurrence probability ~10%
    • At an AI score of 0.4, ~15%
    • At an AI score of 0.5, ~25%
    • At an AI score of 0.6, ~40%
    • At an AI score of 0.7, ~55%
    • At an AI score of 0.8, ~70%
    • At an AI score of 0.9, ~85%
- This chart conceptually reflects the reported trend.
*/

interface RecurrenceProbabilityChartProps {}

const recurrenceProbabilityData = [
  { score: 0.3, probability: 0.1 },
  { score: 0.4, probability: 0.15 },
  { score: 0.5, probability: 0.25 },
  { score: 0.6, probability: 0.4 },
  { score: 0.7, probability: 0.55 },
  { score: 0.8, probability: 0.7 },
  { score: 0.9, probability: 0.85 },
];

export function RecurrenceProbabilityChart({}: RecurrenceProbabilityChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>10-Year Recurrence Probability</CardTitle>
        <CardDescription>
          Relationship between AI test score and 10-year recurrence probability
          (approximated from Figure 1e)
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <ChartWrapper>
          <LineChart
            className="h-80"
            data={recurrenceProbabilityData}
            index="score"
            categories={["probability"]}
            colors={["blue"]}
            // Convert the probability to a percentage for display.
            valueFormatter={(value) => (value * 100).toFixed(1) + "%"}
            yAxisWidth={80}
            showLegend={false}
            showXAxis={true}
            showYAxis={true}
            showGridLines={true}
            showAnimation={true}
            xAxisLabel="AI Test Score"
            yAxisLabel="10-Year Recurrence Probability"
          />
        </ChartWrapper>
      </CardContent>
    </Card>
  );
}
