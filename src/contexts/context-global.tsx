import React, { createContext, ReactElement } from "react";
import { IPeople, People } from "../data/people";
interface ContextGlobalInterface {
  people?: IPeople;
}
export const ContextGlobal = createContext<ContextGlobalInterface>({
  people: People
});

interface Props {
  children: ReactElement;
}
export function ContextGlobalProvider(props: Props) {
  const { children } = props;
  const data = People;
  return (
    <ContextGlobal.Provider value={{ people: data }}>
      {children}
    </ContextGlobal.Provider>
  );
}
