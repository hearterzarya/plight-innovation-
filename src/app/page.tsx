import { Hero } from "@/components/sections/Hero";
import { HomeTrustStats } from "@/components/home/HomeTrustStats";
import { HomeChallengePreview } from "@/components/home/HomeChallengePreview";
import { HomeSolutionPreview } from "@/components/home/HomeSolutionPreview";
import { HomeImpactPreview } from "@/components/home/HomeImpactPreview";
import { CTASection } from "@/components/shared/CTASection";

export default function Home() {
  return (
    <>
      <Hero compact />
      <HomeTrustStats />
      <HomeChallengePreview />
      <HomeSolutionPreview />
      <HomeImpactPreview />
      <CTASection compact />
    </>
  );
}
