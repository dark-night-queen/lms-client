// code dependencies
import React from "react";
import Link from "next/link";

// core components
import { Button } from "@/components/ui/button";

interface FooterProps {
  children?: React.ReactNode;
  href: string;
  buttonText?: string;
}

// driver code
export const Footer = ({ buttonText, href, children }: FooterProps) => {
  return (
    <div className="fixed bottom-6 md:bottom-10 w-full px-10">
      <p className="mt-4 text-center text-sm opacity-70">
        {children}{" "}
        <Button variant="ghost" className="px-0 font-bold text-green-700">
          <Link href={href}>{buttonText}</Link>
        </Button>
      </p>
    </div>
  );
};
