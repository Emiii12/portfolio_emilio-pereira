"use client";
import { createContext, useContext, useState } from "react";

interface SidebarContextProps {
  isSideBarActive: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSideBarActive, setIsSideBarActive] = useState(false);

  const toggleSidebar = () => setIsSideBarActive(!isSideBarActive);

  return (
    <SidebarContext.Provider value={{ isSideBarActive, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar debe estar dentro de un SidebarProvider");
  }
  return context;
};