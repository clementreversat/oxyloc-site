export const metadata = {
  title: "Oxyloc - Gestion locative premium",
  description: "Gestion locative premium et moderne à Versailles et Paris",
};

import Hero from "@/components/hero-home";
import TypesBiens from "@/components/types-biens";

export default function Home() {
  return (
    <>
      <Hero />
      <TypesBiens />
    </>
  );
}
