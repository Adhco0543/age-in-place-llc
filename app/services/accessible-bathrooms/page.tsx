import type { Metadata } from "next";
import { SeoServicePage } from "@/components/SeoServicePage";

export const metadata: Metadata = {
  title: "Accessible Bathroom Remodeling Manchester NH",
  description: "Accessible bathroom remodeling in Manchester, NH including grab bars, safer showers, seating, slip-resistant flooring, and mobility-focused bathroom modifications.",
  alternates: { canonical: "/services/accessible-bathrooms" },
};

export default function AccessibleBathroomsPage() {
  return <SeoServicePage
    eyebrow="Accessible bathrooms in Manchester, NH"
    title="Accessible bathroom remodeling for safer daily routines"
    intro="Age In Place LLC improves bathrooms for safer bathing, standing, sitting, transferring, and movement while keeping the room comfortable and residential."
    benefitsTitle="Bathroom safety options"
    benefits={["Grab bar installation", "Low-threshold shower options", "Shower seating and safer bathing", "Slip-resistant flooring solutions", "Layout and accessibility improvements"]}
    detailsTitle="Make the bathroom work better for the person using it"
    details={["Bathrooms combine water, hard surfaces, tight spaces, and frequent transfers, which can make them one of the most important rooms to address when planning to remain at home.", "We look at the complete routine, including entering the room, reaching fixtures, using the toilet, stepping into or entering the shower, and moving safely back out. Recommendations are based on those real movements and the existing construction."]}
    searchPhrase="accessible bathroom remodeling Manchester NH"
  />;
}
