import React from "react";
import getActions from "./actions";
import useData from "./useData";
import { reducers, initialState } from "./reducers";
import createCtx from "./createCtx";

const [_useDataContext, DataContextProvider] = createCtx();
export const useDataContext = _useDataContext;

export function DataProvider({ children }) {
  const state = useData(reducers, initialState, getActions);
  return <DataContextProvider value={state}>{children}</DataContextProvider>;
}
