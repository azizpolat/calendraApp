"use client";

import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { neobrutalism } from "@clerk/themes";

const LandingPage = () => {
  return (
    <main className=" flex items-center p-10 gap-20 animate-fade-in max-md:flex-col">
      <section className="flex flex-col items-center">
        <Image src="/assets/logo.jpeg" width={300} height={300} alt="logo" />

        <h1 className="text-2xl font-black lg:text-3xl">
          Your time , perfectly planned
        </h1>
        <p className="font-extralight">
          Join millions of professionals who easily book meetings with the #1
          scheduling tool
        </p>

        <Image src="/assets/planning.svg" width={500} height={500} alt="plan" />
      </section>

      <div className="mt-3">
        <SignIn
          routing="hash"
          appearance={{
            baseTheme: neobrutalism,
          }}
        />
      </div>
    </main>
  );
};

export default LandingPage;
