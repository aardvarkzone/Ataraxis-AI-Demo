"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Database, TrendingUp, Shuffle } from "lucide-react";
import CountUp from 'react-countup';

export function OverviewCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Patients Analyzed
          </CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            <CountUp end={8161} separator="," duration={2.5} enableScrollSpy />
          </div>
          <p className="text-xs text-muted-foreground">Across 15 cohorts</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Evaluation Cohorts
          </CardTitle>
          <Database className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            <CountUp end={5} duration={2} enableScrollSpy />
          </div>
          <p className="text-xs text-muted-foreground">
            Independent validation cohorts
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Accuracy Improvement
          </CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-500">
            +<CountUp end={30} duration={2.2} enableScrollSpy />%
          </div>
          <p className="text-xs text-muted-foreground">
            Compared to Oncotype DX
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Reclassification Rate
          </CardTitle>
          <Shuffle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            <CountUp end={77.6} decimals={1} duration={2.5} enableScrollSpy />%
          </div>
          <p className="text-xs text-muted-foreground">
            Of intermediate risk patients
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
