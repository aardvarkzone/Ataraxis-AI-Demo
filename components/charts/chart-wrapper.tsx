import React from "react";

interface ChartWrapperProps {
  children: React.ReactNode;
  padding?: string;
}

export function ChartWrapper({
  children,
  padding = "16px 24px 32px 24px",
}: ChartWrapperProps) {
  return (
    <div className="chart-wrapper">
      <style jsx>{`
        .chart-wrapper {
          margin: 0;
          padding: ${padding};
          position: relative;
        }
        /* Make the chart container override any overflow settings */
        .chart-wrapper :global(svg) {
          overflow: visible !important;
        }
        /* Specifically target axis labels */
        .chart-wrapper :global(text) {
          overflow: visible !important;
        }
      `}</style>
      {children}
    </div>
  );
}
