import React, { useContext, useState } from "react";

type InitialValuesProps = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const InitialValues: InitialValuesProps = {
  currentStep: 1,
  setCurrentStep: () => undefined,
};

const AuthContext = React.createContext(InitialValues);

//Auth Context Provider
export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentStep, setCurrentStep] = useState<number>(
    InitialValues.currentStep
  );
  const values = {
    currentStep,
    setCurrentStep,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

//subscribing and reading the Auth-Context
export const useAuthContext = () => {
  return useContext(AuthContext);
};
