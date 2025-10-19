// code dependencies
import React from "react";

// core components
import { Skeleton } from "@/components/ui/skeleton";

// driver code
const OnboardingLoading = () => {
  return (
    <>
      <Skeleton className="h-2 w-20 self-start" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-full" />
    </>
  )
}

export default OnboardingLoading