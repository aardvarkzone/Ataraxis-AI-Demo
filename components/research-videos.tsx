import YouTube from "react-youtube";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video } from "lucide-react";

export function ResearchVideos() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Background Research</CardTitle>
        <Video className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Some background research on the topic, two lectures by{" "}
          <a
            href="https://physicians.ucdavis.edu/medicalcenter/details/741/alexander-sandy-borowsky-cancer-pathology_-_anatomic-pathology_-_molecular-pathology_and_laboratory_medicine-sacramento"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Alexander (Sandy) Borowsky, MD
          </a>{" "}
          and{" "}
          <a
            href="https://divisionofresearch.kaiserpermanente.org/researchers/arasu-vignesh/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Dr. Vignesh Arasu, MD, PhD
          </a>
        </p>

        <div className="mt-4">
          <h3 className="text-sm font-medium mb-2">Key Takeaways:</h3>
          <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-2">
            <li>
              <strong>Omics technologies:</strong> Investments in the technologies are initially outside the realm of any single hospital system... venture capital... industry investments... and their need to generate revenue drive the innovation...
            </li>
            <li>
              <strong>Blood-based testing:</strong> This testing, again developed primarily by industry could bypass pathology — which would be unfortunate.
            </li>
            <li>
              <strong>AI digital pathology image analysis:</strong> Could replace the cumbersome and slow and expensive to train carbon life forms! Ideally will be used to make us more efficient, accurate, and reproducible. This is where <strong>Ataraxis</strong> comes in.
            </li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="aspect-video">
            <YouTube
              videoId="vJkpkB_ueso"
              className="h-full w-full"
              opts={{
                height: "100%",
                width: "100%",
                playerVars: {
                  autoplay: 0,
                },
              }}
            />
          </div>
          <div className="aspect-video">
            <YouTube
              videoId="fX-apETEMVs"
              className="h-full w-full"
              opts={{
                height: "100%",
                width: "100%",
                playerVars: {
                  autoplay: 0,
                },
              }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 