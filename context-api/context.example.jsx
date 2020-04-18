import React from 'react';

const DataContext = React.createContext(/*{...defaultData}*/);

const App = () => (
  <DataContext.Provider value={/*{...myData}*/}>
    <Component />
  </DataContext.Provider>
)
