import { createContext, useContext, useState } from "react";

const Context = createContext();

export const DashboardProvider = () => {
  const [search, setSearch] = useState("");
  return (
    <DashboardContext.Provider value={{ search, setSearch }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(Context);
