export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import TypesBiens from "@/components/types-biens";
import FeaturesPlanet from "@/components/features-planet";
import PourLesPros from "@/components/pour-les-pros";
import NosEngagements from "@/components/nos-engagements";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TypesBiens />
      <FeaturesPlanet />
      <PourLesPros />
      <NosEngagements />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
