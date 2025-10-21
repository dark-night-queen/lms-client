import React, { Suspense } from "react";
import { Hero } from "@/app/(auth)/_components/hero";
import OnboardingLoading from "./loading";

const OnboardingLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <Suspense fallback={<OnboardingLoading />}>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-30 gap-6 absolute md:relative bottom-20 md:bottom-0">
          {children}
        </div>
      </Suspense>

      <div className="w-full md:w-1/2 min-h-[30vh] md:h-screen overflow-hidden">
        <Hero />
      </div>
    </div>
  );
};

export default OnboardingLayout;
