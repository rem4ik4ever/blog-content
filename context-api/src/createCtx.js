import React from "react";

export default function createCtx() {
  const context = React.createContext(undefined);
  function useCtx() {
    const ctx = React.useContext(context);
    if (!ctx) throw new Error("useCtx must be inside a ContextProvider");
    return ctx;
  }
  return [useCtx, context.Provider];
}
