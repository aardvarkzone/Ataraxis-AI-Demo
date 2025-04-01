"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter } from "lucide-react";

interface FilterControlsProps {
  subtype: string;
  setSubtype: (value: string) => void;
  cohort: string;
  setCohort: (value: string) => void;
}

export function FilterControls({
  subtype,
  setSubtype,
  cohort,
  setCohort,
}: FilterControlsProps) {
  return (
    <div className="flex gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex gap-2">
            <Filter className="h-4 w-4" />
            <span>Cancer Subtype</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Filter by Subtype</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={subtype} onValueChange={setSubtype}>
            <DropdownMenuRadioItem value="all">
              All Subtypes
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="hrher2">
              HR+ HER2-
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="tnbc">TNBC</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="her2">HER2+</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="hr-pre">
              HR+ Premenopausal
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex gap-2">
            <Filter className="h-4 w-4" />
            <span>Cohort</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Filter by Cohort</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={cohort} onValueChange={setCohort}>
            <DropdownMenuRadioItem value="all">
              All Cohorts
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="karmanos">
              Karmanos
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="basel">Basel</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="uchicago">
              UChicago
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
