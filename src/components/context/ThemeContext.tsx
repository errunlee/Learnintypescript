import React from "react";
import { createContext } from "react";
import { theme } from "./theme";
import { themetype } from "./theme";
export const TestContext = createContext<themetype | {}>({});

type props = {
  children: React.ReactNode;
};

export const ContextProvider = ({ children }: props) => {
  return <TestContext.Provider value={theme}>{children}</TestContext.Provider>;
};
