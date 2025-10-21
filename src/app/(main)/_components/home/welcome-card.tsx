// code dependencies
import React from "react";
import Image from "next/image";

// assets
import Welcome from "@/assets/images/welcome.jpg";

// driver code
export const WelcomeCard = () => {
  return (
    <div className="flex flex-col gap-8 md:flex-row justify-between items-center">
      <div className="flex flex-col">
        <p className="text-sm">Hi, John Doe</p>
        <p className="text-3xl font-bold ">Good Morning</p>
        <p>Have a good day!</p>
      </div>

      <Image src={Welcome} alt="Welcome" width={200} className="rounded-2xl" />
    </div>
  );
};
