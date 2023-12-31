import React, { useContext, useState } from "react";

const DataContext = React.createContext();

export function useTaskHandler() {
  return useContext(DataContext);
}

export function UseData({ children }) {
  const [data, setData] = useState([]);

  const addItem = (ele) => {
    setData([...data, ele]);
  };

  return (
    <DataContext.Provider value={{ data, addItem }}>
      {children}
    </DataContext.Provider>
  );
}
