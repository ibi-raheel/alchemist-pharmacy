import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Features } from "@/components/home/Features";
import { Stats } from "@/components/Stats";
import { DeliveryChecker } from "@/components/DeliveryChecker";
import { BranchesStrip } from "@/components/BranchesStrip";
import { Team } from "@/components/Team";
import { CtaBand } from "@/components/CtaBand";
import { StructuredData } from "@/components/StructuredData";

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Hero />
      <Stats />
      <HowItWorks />
      <DeliveryChecker />
      <Features />
      <BranchesStrip />
      <Team />
      <CtaBand />
    </>
  );
}
