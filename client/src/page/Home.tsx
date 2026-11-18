import { lazy, Suspense } from "react";
import HeroComponent from "@/components/HeroComponent";
import RateLimitBanner from "@/components/RateLimitBanner";

const FeaturesComponents = lazy(
  () => import("@/components/FeaturesComponents")
);
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQSection = lazy(() => import("@/components/FAQSection"));

import FeatureSkeleton from "@/components/skeletons/FeatureSkeleton";
import TestimonialSkeleton from "@/components/skeletons/TestimonialSkeleton";
import FAQSkeleton from "@/components/skeletons/FAQSkeleton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-black dark:text-white selection:bg-emerald-300 selection:text-black dark:selection:bg-emerald-400 dark:selection:text-black relative overflow-x-hidden transition-colors duration-300">
      {/* Top ambient light green glow */}
      <div className="absolute top-0 inset-x-0 h-[600px] z-0 bg-[radial-gradient(ellipse_80%_100%_at_50%_-20%,rgba(74,222,128,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_100%_at_50%_-20%,rgba(74,222,128,0.18),rgba(0,0,0,0))] pointer-events-none" />
      {/* Center subtle glow */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.08),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.06),rgba(0,0,0,0))] pointer-events-none z-0" />
      
      <RateLimitBanner />
      <HeroComponent />

      <Suspense fallback={<FeatureSkeleton />}>
        <FeaturesComponents />
      </Suspense>

      <Suspense fallback={<TestimonialSkeleton />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<FAQSkeleton />}>
        <FAQSection />
      </Suspense>
    </main>
  );
}
