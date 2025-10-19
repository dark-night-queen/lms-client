// code dependencies
import React from "react";

// core components
import { Skeleton } from "@/components/ui/skeleton";

// driver code
const AuthLoading = () => {
  return (
    <>
      <Skeleton className="h-12 w-50" />
      <Skeleton className="h-6 w-80 mb-8" />

      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-full" />
    </>
  );
};

export default AuthLoading;
