"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { User2, CirclePlus, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InputGroup } from "@/app/(auth)/_components/input";

const Team = () => {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/");
  };

  return (
    <>
      <div className="w-full">
        <p className="mt-2 opacity-70 text-xs">Step 2 of 2</p>
        <h1 className="text-3xl md:text-4xl font-bold">
          Who else is on your team?
        </h1>
        <p className="mt-2 opacity-70">
          Add your team members to collaborate effectively
        </p>
      </div>

      <div className="w-full">
        <InputGroup
          icon={User2}
          type="email"
          placeholder="E.g. john.doe@hotmail.com"
        />

        <div className="w-full flex flex-col md:flex-row justify-between">
          <Button variant="ghost" size="sm" className="text-green-700">
            <CirclePlus />
            Add another
          </Button>

          <Button variant="ghost" size="sm" className="text-green-700">
            <Link />
            Get a shareable link instead
          </Button>
        </div>
      </div>

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

export default Team;
