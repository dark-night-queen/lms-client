"use client";

// code dependencies
import React from "react";
import { useRouter } from "next/navigation";

// core components
import { User, MailIcon, KeyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// custom components
import { InputGroup } from "../_components/input";
import { Footer } from "../_components/footer";

// driver code
const SignUp = () => {
  const router = useRouter();

  const handleSignup = () => {
    router.push("/onboarding");
  };

  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Hello There!</h1>
        <p className="mt-2 max-w-xs opacity-70">
          Sign up to continue to your dashboard
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputGroup
          icon={User}
          label="First Name"
          type="string"
          placeholder="E.g. John"
        />
        <InputGroup
          icon={User}
          label="Last Name"
          type="string"
          placeholder="E.g. Doe"
        />
      </div>

      <InputGroup
        icon={MailIcon}
        type="email"
        label="Email"
        placeholder="E.g. john.doe@hotmail.com"
      />
      <InputGroup
        icon={KeyIcon}
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
      <InputGroup
        icon={KeyIcon}
        label="Confirm Password"
        type="password"
        placeholder="Re-enter your password"
      />

      <Button size="lg" className="w-full bg-green-700" onClick={handleSignup}>
        Sign Up
      </Button>

      <Footer buttonText="Login" href="/login">
        Already have an account?
      </Footer>
    </>
  );
};

export default SignUp;
