import React from "react";

const defaultActions = () => [];

export default function (reducers, initialState, getActions = defaultActions) {
  const [state, dispatch] = React.useReducer(reducers, initialState);
  const actions = getActions(dispatch);
  return {
    state,
    ...actions,
  };
}
