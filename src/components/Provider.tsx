"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "@/redux-toolkit/store";
interface ProviderReduxProps {
  children: ReactNode;
}

const ProviderRedux: React.FC<ProviderReduxProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderRedux;
