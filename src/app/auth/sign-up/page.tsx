import React from "react";

import { AuthContextProvider } from "@/context/use-auth-context"; //the auth context provider holds the state of the Steps that the user signing up is taking

const SignUpPage = () => {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
        <AuthContextProvider>{""}</AuthContextProvider>
      </div>
    </div>
  );
};

export default SignUpPage;
