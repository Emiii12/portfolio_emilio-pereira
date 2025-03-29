"use client";
import { createContext, useContext, useState } from "react";

interface AppContextProps {
  showMore: boolean;
  toggleShowMore: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore((prev) => !prev);

  return (
    <AppContext.Provider value={{ showMore, toggleShowMore }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe estar dentro de un AppProvider");
  }
  return context;
};
