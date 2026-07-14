import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Owners } from "@/components/Owners";
import {
  FAQPreview,
  FinalCTA,
  GalleryPreview,
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
      <GalleryPreview />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
