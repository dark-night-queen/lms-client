"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InputGroup } from "@/app/(auth)/_components/input";

const Onboarding = () => {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/onboarding/team");
  };

  return (
    <>
      <div className="w-full">
        <p className="mt-2 opacity-70 text-xs">Step 1 of 2</p>
        <h1 className="text-3xl md:text-4xl font-bold">
          What&apos;s the name of your company?
        </h1>
        <p className="mt-2 opacity-70">
          This will be displayed on your dashboard, invoices and receipts.
        </p>
      </div>

      <InputGroup icon={Building2} type="text" placeholder="E.g. Acme Corp" />

      <Button
        size="lg"
        className="w-full bg-green-700"
        onClick={handleContinue}
      >
        Continue
      </Button>
    </>
  );
};

export default Onboarding;
