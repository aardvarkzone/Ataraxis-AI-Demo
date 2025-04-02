"use client";

import { File } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function StudySummary() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Study Summary</CardTitle>
        <File className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          This study introduces a novel AI-based test that integrates digital
          pathology images and clinical data to predict cancer recurrence in
          breast cancer patients more accurately than existing genomic assays
          like Oncotype DX. Utilizing a vision transformer pan-cancer foundation
          model with self-supervised learning, the AI model extracts features
          from H&E-stained pathology slides. These features, combined with
          clinical data, form a robust multi-modal test. The model was trained
          and evaluated using data from 8,161 female breast cancer patients
          across 15 cohorts from seven countries. The AI test outperformed
          Oncotype DX in predicting the disease-free interval (C-index: 0.71 vs.
          0.61) and demonstrated strong performance across major molecular
          subtypes, including TNBC (C-index: 0.71), where no current diagnostic
          tools are recommended by guidelines. These findings suggest the AI
          test could significantly improve prognostic accuracy and clinical
          decision-making.
        </p>
        <div className="mt-4">
          <h3 className="text-sm font-medium mb-2">Key definitions:</h3>
          <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-2">
            <li><strong>Ataraxis AI:</strong> An AI-driven tool focused on integrating multi-modal data (like digital pathology and clinical information) to predict breast cancer recurrence</li>
            <li><strong>Oncotype DX:</strong> A genomic assay used to assess the risk of cancer recurrence and guide chemotherapy decisions</li>
            <li><strong>C-Index:</strong> Statistical measure of predictive accuracy, ranging from 0.5 (random) to 1.0 (perfect prediction)</li>
            <li><strong>ER Receptor:</strong> Protein in breast cancer cells that responds to estrogen and helps determine hormone therapy effectiveness</li>
            <li><strong>Hazard Ratio (HR):</strong> Measure comparing event risk between groups, with HR &gt; 1 indicating higher risk in treatment group</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
