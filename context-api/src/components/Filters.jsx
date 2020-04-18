import React from "react";
import { useDataContext } from "../contextApi";

const Filters = () => {
  const { state, updateFilters } = useDataContext();
  const { filters } = state;
  console.log("State", state);
  return (
    <div>
      <input
        type="date"
        value={filters.date}
        onChange={(ev) => {
          ev.preventDefault();
          updateFilters({ date: ev.target.value });
        }}
      />
      <input
        type="text"
        name="search"
        id="search"
        value={filters.keyword}
        onChange={(ev) => {
          ev.preventDefault();
          updateFilters({ keyword: ev.target.value });
        }}
      />
    </div>
  );
};

export default Filters;
