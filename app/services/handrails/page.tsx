import type { Metadata } from "next";
import { SeoServicePage } from "@/components/SeoServicePage";

export const metadata: Metadata = {
  title: "Handrail Installation & Safer Stairs Manchester NH",
  description: "Handrail installation and stair safety improvements in Manchester, NH. Interior and exterior rails, safer steps, landings, and entry modifications from Age In Place LLC.",
  alternates: { canonical: "/services/handrails" },
};

export default function HandrailsPage() {
  return <SeoServicePage
    eyebrow="Handrails and stair safety in Manchester, NH"
    title="Strong handrails and safer stairs for everyday confidence"
    intro="We improve interior and exterior stairs with sturdy handrails, safer steps, better transitions, and practical carpentry designed around how people move through the home."
    benefitsTitle="Stair and railing improvements"
    benefits={["Interior handrail installation", "Exterior handrails and railings", "Safer steps and landings", "Entry and transition improvements", "Repairs and related carpentry"]}
    detailsTitle="Good support should be where your hand naturally needs it"
    details={["Loose rails, missing handrails, uneven steps, awkward landings, and difficult transitions can turn ordinary movement through a home into a daily concern.", "We evaluate the stairway and surrounding construction, then recommend practical improvements that provide dependable support without treating every home as if it were built the same way."]}
    searchPhrase="handrail installation Manchester NH"
  />;
}
