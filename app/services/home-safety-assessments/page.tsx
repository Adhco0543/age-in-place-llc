import type { Metadata } from "next";
import { SeoServicePage } from "@/components/SeoServicePage";

export const metadata: Metadata = {
  title: "Home Safety Assessment Manchester NH | Aging in Place",
  description: "Home safety and aging-in-place assessments in Manchester, NH. Identify fall risks, mobility barriers, difficult entrances, bathroom concerns, and practical home modifications.",
  alternates: { canonical: "/services/home-safety-assessments" },
};

export default function HomeSafetyAssessmentsPage() {
  return <SeoServicePage
    eyebrow="Home safety assessments in Manchester, NH"
    title="Find the home safety problems worth fixing first"
    intro="Our aging-in-place home walkthroughs focus on fall risks, mobility barriers, difficult transitions, bathrooms, entrances, stairs, and other areas that can make daily life harder or less safe."
    benefitsTitle="What we can review"
    benefits={["Interior and exterior walking paths", "Bathrooms and transfer areas", "Steps, stairs, railings, and entrances", "Doorways, thresholds, and flooring transitions", "Practical improvements prioritized by need"]}
    detailsTitle="Start with the problem before choosing the product"
    details={["A home safety assessment should not be a shopping list. We begin by listening to what is becoming difficult and observing how the home is actually used.", "From there, we can identify practical changes and help prioritize them. Sometimes the right answer is a grab bar or railing. Other times it may involve lighting, flooring, a doorway, a bathroom layout, an entrance, or a combination of improvements."]}
    searchPhrase="home safety assessment Manchester NH"
  />;
}
