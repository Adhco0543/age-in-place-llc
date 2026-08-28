import type { Metadata } from "next";
import { SeoServicePage } from "@/components/SeoServicePage";

export const metadata: Metadata = {
  title: "Wheelchair Ramp Installation Manchester NH",
  description: "Wheelchair ramp and accessible entrance solutions in Manchester, NH and Southern New Hampshire from Age In Place LLC. Safer entry, railings, landings, and mobility-focused home modifications.",
  alternates: { canonical: "/services/wheelchair-ramps" },
};

export default function WheelchairRampsPage() {
  return <SeoServicePage
    eyebrow="Wheelchair ramps in Manchester, NH"
    title="Wheelchair ramp installation and safer home entrances"
    intro="We build practical access solutions for homeowners who need safer entry and exit, including ramps, railings, landings, threshold changes, and related carpentry."
    benefitsTitle="Ramp and entrance improvements"
    benefits={["Wheelchair and mobility ramp solutions", "Secure handrails and guardrails", "Safer landings and transitions", "Threshold and doorway improvements", "Construction planned around the home and site"]}
    detailsTitle="Accessible entry starts with more than the ramp itself"
    details={["A useful ramp has to work with the available space, entrance height, walking path, doors, landings, and the person using it. We look at the entire route instead of treating the ramp as an isolated piece.", "Because our work includes carpentry and remodeling, we can also address railings, steps, framing, doors, thresholds, and finish work that may be part of creating a safer entrance."]}
    searchPhrase="wheelchair ramp installation Manchester NH"
  />;
}
