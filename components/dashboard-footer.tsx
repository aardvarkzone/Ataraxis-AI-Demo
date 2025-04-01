import { ExternalLink, Info, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DashboardFooter() {
  return (
    <footer className="border-t bg-background p-6">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © Made by Advait Arumugam. Proof of concept project based on Ataraxis
            AI research.
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href="https://arxiv.org/abs/2410.21256"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
          >
            Research Paper <ExternalLink className="h-3 w-3" />
          </a>
          <a
            href="https://www.ataraxis.ai/ataraxis-breast"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
          >
            Ataraxis AI Website <ExternalLink className="h-3 w-3" />
          </a>
          <a
            href="https://github.com/aardvarkzone/Ataraxis-AI-Demo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
          >
            GitHub <Github className="h-3 w-3" />
          </a>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 p-0 h-auto"
              >
                Info <Info className="h-3 w-3" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>About This Dashboard</DialogTitle>
                <DialogDescription>
                  This dashboard is a proof of concept developed by Advait
                  Arumugam based on the research paper "Multi-modal AI for
                  comprehensive breast cancer prognostication". It is not
                  affiliated with or endorsed by Ataraxis AI. This is an
                  independent project for demonstration purposes only and does
                  not reflect the official Ataraxis AI product or service. All
                  data shown on here is roughly based on the research paper but
                  is not exactly accurate.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </footer>
  );
}
