// code dependencies
import React from "react";

// core components
import { Card, CardContent } from "@/components/ui/card";

// driver code
interface SectionCardProps extends React.PropsWithChildren {
  className?: string;
  contentClassName?: string;
}

export const SectionCard = ({
  className,
  contentClassName,
  children,
}: SectionCardProps) => {
  return (
    <Card className={`bg-tertiary-foreground/40 justify-center border-0 ${className}`}>
      <CardContent className={contentClassName}>{children}</CardContent>
    </Card>
  );
};
