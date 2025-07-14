import PrivateNavbar from "@/components/PrivateNavbar";
import PubliceNavbar from "@/components/PubliceNavbar";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const MainLayout = async ({ children }) => {
  const user = await currentUser();

  return (
    <main className="relative">
      {user ? <PrivateNavbar /> : <PubliceNavbar />}
      <section className="pt-36">{children}</section>
    </main>
  );
};

export default MainLayout;
