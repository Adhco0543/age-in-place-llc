import { PremiumHome } from "@/components/PremiumHome";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  path: "/",
  title: "Aging in Place Contractor in Manchester, NH | Age In Place LLC",
  description:
    "Age In Place LLC provides aging-in-place remodeling, grab bar installation, accessibility modifications, ramps, safer bathrooms, home safety assessments, and skilled carpentry in Manchester and Southern New Hampshire.",
});

export default function Home() {
  return <PremiumHome />;
}
