import { Bot } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold">
            Ataraxis AI Breast Cancer Prognosis Dashboard
          </span>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}
