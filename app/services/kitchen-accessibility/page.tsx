import type { Metadata } from "next";
import { SeoServicePage } from "@/components/SeoServicePage";

export const metadata: Metadata = {
  title: "Accessible Kitchen Remodeling Manchester NH",
  description: "Accessible kitchen remodeling and modifications in Manchester, NH including cabinetry, safer flooring, lighting, work areas, storage access, and mobility-focused layouts.",
  alternates: { canonical: "/services/kitchen-accessibility" },
};

export default function KitchenAccessibilityPage() {
  return <SeoServicePage
    eyebrow="Accessible kitchens in Manchester, NH"
    title="Kitchen accessibility improvements built around daily use"
    intro="We modify kitchens to improve reach, movement, storage access, lighting, flooring, and work areas for people who want a safer and more comfortable home."
    benefitsTitle="Kitchen accessibility options"
    benefits={["Cabinet and storage modifications", "Reach and work-area improvements", "Safer flooring and transitions", "Lighting improvements", "Mobility-focused kitchen remodeling"]}
    detailsTitle="A more accessible kitchen can still feel like your kitchen"
    details={["Accessibility does not have to mean turning a home into an institutional space. Small changes to storage, work surfaces, pathways, lighting, flooring, and cabinet arrangements can make daily tasks easier.", "For larger needs, we can consider the room as a complete remodeling project and coordinate the carpentry and finish work needed to create a practical long-term layout."]}
    searchPhrase="accessible kitchen remodeling Manchester NH"
  />;
}
