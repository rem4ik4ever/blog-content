import React from "react";
import { useDataContext } from "../contextApi";

const ChildTwo = () => {
  const { state } = useDataContext();
  const { filters } = state;

  return (
    <div style={{ marginTop: "10px" }}>
      This is state value of Keyword: {filters.keyword}
    </div>
  );
};

export default ChildTwo;
