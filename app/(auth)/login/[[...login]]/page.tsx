import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const LoginPage = () => {
  return (
    <main className="flex flex-col items-center p-5 gap-10 animate-fade-in">
      <Image src="/assets/logo.jpeg" width={120} height={120} alt="logo" />

      <div className="mt-3">
        <SignIn />
      </div>
    </main>
  );
};

export default LoginPage;
