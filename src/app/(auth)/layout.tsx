// code dependencies
import React from "react";

// custom components
import { Hero } from "./_components/hero";

// driver code
const AuthLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <main className="flex min-h-screen flex-col md:flex-row">
      <div className="w-full md:w-1/2 min-h-[30vh] md:h-screen overflow-hidden">
        <Hero />
      </div>

      <div className="w-full md:w-1/2 bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-6 md:p-30 gap-6 absolute md:relative bottom-20 md:bottom-0">
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
