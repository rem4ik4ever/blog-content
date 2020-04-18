import React from "react";
import "./App.css";
import { DataProvider } from "./contextApi";
import Filters from "./components/Filters";
import ChildOne from "./components/ChildOne";
import ChildTwo from "./components/ChildTwo";

const App = () => {
  return (
    <div className="container">
      <DataProvider>
        <Filters />
        <ChildOne />
        <ChildTwo />
      </DataProvider>
    </div>
  );
};

export default App;
