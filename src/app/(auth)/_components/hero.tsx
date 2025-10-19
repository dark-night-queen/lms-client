// core dependencies
import React from "react";
import Image from "next/image";

// assets
import Leaves from "@/assets/images/leaves.jpg";

// driver code
export const Hero = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center p-50">
      <Image
        src={Leaves}
        alt="Decorative leaves"
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      {/* <div className="relative z-10 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold">Welcome to LMS</h1>
        <p className="mt-2 max-w-xs opacity-90">Sign in to continue to your dashboard</p>
      </div> */}
    </div>
  );
};