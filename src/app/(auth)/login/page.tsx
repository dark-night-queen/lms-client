"use client";

// code dependencies
import React from "react";
import { useRouter } from "next/navigation";

// core components
import { MailIcon, KeyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// custom components
import { InputGroup, InputCheckbox } from "../_components/input";
import { Footer } from "../_components/footer";

// driver code
const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/");
  };

  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Hello Again!</h1>
        <p className="mt-2 max-w-xs opacity-70">
          Sign in to continue to your dashboard
        </p>
      </div>

      <InputGroup
        icon={MailIcon}
        type="email"
        label="Email"
        placeholder="E.g. john.doe@hotmail.com"
      />

      <div className="w-full flex flex-col gap-2 mb-6">
        <InputGroup
          icon={KeyIcon}
          label="Password"
          type="password"
          placeholder="Enter your password"
        />

        <div className="w-full flex items-center justify-between">
          <InputCheckbox label="Remember Me" />
          <Button variant="ghost" className="pr-0 font-bold text-green-700">
            Forgot Password?
          </Button>
        </div>
      </div>

      <Button size="lg" className="w-full bg-green-700" onClick={handleLogin}>
        Login
      </Button>

      <Footer buttonText="Sign Up" href="/signup">
        Don&apos;t have an account?
      </Footer>
    </>
  );
};

export default Login;
