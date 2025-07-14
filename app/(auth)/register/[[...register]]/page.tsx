import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const RegisterPage = () => {
  return (
    <main className="flex flex-col items-center p-5 gap-10 animate-fade-in">
      <Image src="/assets/logo.jpeg" width={120} height={120} alt="logo" />

      <div className="mt-3">
        <SignUp />
      </div>
    </main>
  );
};

export default RegisterPage;
