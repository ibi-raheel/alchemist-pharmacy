import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Features } from "@/components/home/Features";
import { Stats } from "@/components/Stats";
import { BranchesStrip } from "@/components/BranchesStrip";
import { Team } from "@/components/Team";
import { CtaBand } from "@/components/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <BranchesStrip />
      <Team />
      <CtaBand />
    </>
  );
}
