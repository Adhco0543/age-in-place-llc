import { Hero } from "@/components/Hero";
import { Owners } from "@/components/Owners";
import { ProjectGalleryPreview } from "@/components/ProjectGalleryPreview";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import {
  FAQPreview,
  FinalCTA,
  Process,
  WhyChooseUs,
} from "@/components/HomeSections";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Owners />
      <ProjectGalleryPreview />
      <Testimonials />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
