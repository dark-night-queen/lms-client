// core dependencies
import React from "react";
import type { LucideIcon } from "lucide-react";

// core components
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  InputGroup as BaseInputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

// driver code
interface InputGroupProps {
  icon: LucideIcon;
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

export const InputGroup = ({
  icon: Icon,
  label,
  ...inputProps
}: InputGroupProps) => {
  return (
    <div className={`grid w-full items-center ${label && "gap-1"}`}>
      <Label htmlFor={label} className="text-xs text-muted-foreground">
        {label}
      </Label>

      <BaseInputGroup className="px-4 py-6">
        <InputGroupInput id={label} {...inputProps} />
        <InputGroupAddon>
          <Icon className="text-green-700" />
        </InputGroupAddon>
      </BaseInputGroup>
    </div>
  );
};

interface InputCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const InputCheckbox = ({ label, ...inputProps }: InputCheckboxProps) => {
  return (
    <div className="flex items-start gap-3">
      <Checkbox id={label} />
      <Label htmlFor={label} className="opacity-50">
        {label}
      </Label>
    </div>
  );
};
