import { currentUser } from "@clerk/nextjs";

import React from "react";
import { redirect } from "next/navigation";
import Image from "next/image";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  //check if User is already signed-in
  const user = await currentUser();
  if (user) {
    return redirect("/");
  }
  return (
    <div className="flex h-screen w-full justify-center ">
      <div className="w-[600px] ld:w-full flex flex-col items-start p-6">
        <Image
          src={"/images/logo-white.png"}
          alt={"serenity-logo"}
          style={{ width: "20%", height: "auto" }}
          width={0}
          height={0}
          sizes="100vw"
        />
        {children}
      </div>
      <div className="hidden lg:flex flex-1 w-full max-h-full max-w-[4000px] overflow-hidden relative bg-cream flex-col pt-10 pl-24 gap-3">
        <h2 className="text-gravel md:text-4xl font-bold">
          Hi, Im your AI powered sales assistant, Serenity!
        </h2>
        <p className="text-iridium md:text-sm mb-10">
          Serenity is capable of capturing lead information without a form...
          {""}
          <br />
          something never done before 😉
        </p>
        <Image
          src="/images/app-ui.png"
          alt="app image"
          loading="lazy"
          sizes="30"
          className="absolute shrink-0 !w-[1600px] top-48"
          width={0}
          height={0}
        />
      </div>
    </div>
  );
};

export default AuthLayout;
